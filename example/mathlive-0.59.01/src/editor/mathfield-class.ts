import type { ParseMode, Style } from '../public/core';
import type { Keybinding, KeyboardLayoutName } from '../public/options';
import type {
    Mathfield,
    OutputFormat,
    InsertOptions,
    Range,
} from '../public/mathfield';

import { Atom, makeRoot } from '../core/atom';

import { loadFonts } from '../core/fonts';
import { Stylesheet, inject as injectStylesheet } from '../common/stylesheet';

import { ModelPrivate } from './model';
import { applyStyle } from './model-styling';
import { delegateKeyboardEvents, KeyboardDelegate } from './keyboard';
import { UndoRecord, UndoManager } from './undo';
import { hidePopover, updatePopoverPosition } from './popover';
import { atomToAsciiMath } from './atom-to-ascii-math';
import { localize as l10n } from './l10n';
import { HAPTIC_FEEDBACK_DURATION, SelectorPrivate, perform } from './commands';
import { setPath, getAnchorStyle } from './model-selection-utils';
import {
    selectionIsCollapsed,
    getSelectedAtoms,
    getAnchorMode,
} from './model-selection';
import { normalizeRange, removeSuggestion } from './model-utils';
import {
    commitCommandStringBeforeInsertionPoint,
    removeCommandString,
    decorateCommandStringAroundInsertionPoint,
} from './model-command-mode';
import { selectAll } from './model-selection';
import { complete } from './autocomplete';
import { requestUpdate } from './mathfield-render';
import {
    MathfieldOptionsPrivate,
    update as updateOptions,
    getDefault as getDefaultOptions,
    get as getOptions,
} from './options';
import { insert, removeComposition, updateComposition } from './model-insert';
import { deleteChar } from './model-delete';
import { addRowAfter, addColumnAfter } from './model-array';
import { onTypedText, onKeystroke } from './mathfield-keyboard-input';
import { render } from './mathfield-render';

import './mathfield-commands';
import './mathfield-styling';

import {
    getCaretPoint,
    getSelectionBounds,
    getSharedElement,
    releaseSharedElement,
    isValidMathfield,
    on,
    off,
} from './mathfield-utils';

import { onCut, onCopy, onPaste } from './mathfield-clipboard';
import { attachButtonHandlers } from './mathfield-buttons';
import { onPointerDown, pathFromPoint } from './mathfield-pointer-input';
import {
    showVirtualKeyboard,
    hideVirtualKeyboard,
    switchKeyboardLayer,
} from './virtual-keyboard-commands';

import { normalizeKeybindings } from './keybindings';
import {
    setKeyboardLayoutLocale,
    getActiveKeyboardLayout,
} from './keyboard-layout';

import { atomToSpeakableText } from './atom-to-speakable-text';
import { atomsToMathML } from '../addons/math-ml';
import { VirtualKeyboard, updateUndoRedoButtons } from './virtual-keyboard';

// @ts-ignore
import mathfieldStylesheet from '../../css/mathfield.less';
// @ts-ignore
import coreStylesheet from '../../css/core.less';

// @ts-ignore
import popoverStylesheet from '../../css/popover.less';
// @ts-ignore
import keystrokeCaptionStylesheet from '../../css/keystroke-caption.less';
import { atomtoMathJson } from '../addons/math-json';
import { PositionIterator } from './model-iterator';

export class MathfieldPrivate implements Mathfield {
    model: ModelPrivate;
    options: Required<MathfieldOptionsPrivate>;

    private undoManager: UndoManager;

    private blurred: boolean;
    // The value of the mathfield when it is focussed.
    // If this value is different when the field is blured
    // the `onCommit` listener is triggered
    private valueOnFocus: string;
    dirty: boolean; // If true, need to be redrawn
    smartModeSuppressed: boolean;
    private resizeTimer: number; // Timer handle

    element: HTMLElement;
    /** @deprecated */
    readonly originalContent: string;

    private stylesheets: Stylesheet[] = [];

    keyboardDelegate: KeyboardDelegate;
    field: HTMLElement;
    virtualKeyboardToggle: HTMLElement;
    ariaLiveText: HTMLElement;
    accessibleNode: HTMLElement;
    popover: HTMLElement;

    keystrokeCaptionVisible: boolean;
    keystrokeCaption: HTMLElement;

    virtualKeyboardVisible: boolean;
    virtualKeyboard: VirtualKeyboard;

    keybindings: Keybinding[]; // Normalized keybindings (raw ones in config)
    keyboardLayout: KeyboardLayoutName;

    keystrokeBuffer: string;
    keystrokeBufferStates: UndoRecord[];
    keystrokeBufferResetTimer: ReturnType<typeof setTimeout>;

    suggestionIndex: number;

    mode: ParseMode;
    style: Style;

    private eventHandlingInProgress = '';

    readonly keypressSound: HTMLAudioElement; // @revisit. Is this used? The sounds are in config, no?
    readonly spacebarKeypressSound: HTMLAudioElement;
    readonly returnKeypressSound: HTMLAudioElement;
    readonly deleteKeypressSound: HTMLAudioElement;
    readonly plonkSound: HTMLAudioElement;

    /**
     * To create a mathfield, you would typically use {@linkcode makeMathField | MathLive.makeMathField()}
     * instead of invoking directly this constructor.
     *
     *
     * @param element - The DOM element that this mathfield is attached to.
     * Note that `element.mathfield` is this object.
     */
    constructor(
        element: HTMLElement,
        options: Partial<MathfieldOptionsPrivate>
    ) {
        // Setup default config options
        this.options = updateOptions(getDefaultOptions(), options);

        this.element = element;
        element['mathfield'] = this;

        // Save existing content
        this.originalContent = element.innerHTML;
        let elementText = this.element.textContent;
        if (elementText) {
            elementText = elementText.trim();
        }

        // Load the fonts, inject the core and mathfield stylesheets
        loadFonts(this.options.fontsDirectory, this.options.onError);
        this.stylesheets.push(injectStylesheet(element, coreStylesheet));
        this.stylesheets.push(injectStylesheet(element, mathfieldStylesheet));

        // Additional elements used for UI.
        // They are retrieved in order a bit later, so they need to be kept in sync
        // 1.0/ The field, where the math equation will be displayed
        // 1.1/ The virtual keyboard toggle
        // 2/ The popover panel which displays info in command mode
        // 3/ The keystroke caption panel (option+shift+K)
        // 4/ The virtual keyboard
        // 5.0/ The area to stick MathML for screen reading larger exprs (not used right now)
        //      The for the area is that focus would bounce their and then back triggering the
        //         screen reader to read it
        // 5.1/ The aria-live region for announcements
        let markup = '';
        if (!this.options.substituteTextArea) {
            if (/android|ipad|ipod|iphone/i.test(navigator?.userAgent)) {
                // On Android or iOS, don't use a textarea, which has the side effect of
                // bringing up the OS virtual keyboard
                markup += `<span class='ML__textarea'>
                <span class='ML__textarea__textarea'
                    tabindex="-1" role="textbox"
                    style='display:inline-block;height:1px;width:1px' >
                </span>
            </span>`;
            } else {
                markup +=
                    '<span class="ML__textarea">' +
                    '<textarea class="ML__textarea__textarea" autocapitalize="off" autocomplete="off" ' +
                    `autocorrect="off" spellcheck="false" aria-hidden="true" tabindex="${
                        element.tabIndex ?? 0
                    }">` +
                    '</textarea>' +
                    '</span>';
            }
        } else {
            if (typeof this.options.substituteTextArea === 'string') {
                markup += this.options.substituteTextArea;
            } else {
                // We don't really need this one, but we keep it here so that the
                // indexes below remain the same whether a substituteTextArea is
                // provided or not.
                markup += '<span></span>';
            }
        }
        markup +=
            '<span class="ML__fieldcontainer">' +
            '<span class="ML__fieldcontainer__field"></span>';

        // Only display the virtual keyboard toggle if the virtual keyboard mode is
        // 'manual'
        if (this.options.virtualKeyboardMode === 'manual') {
            markup += `<div part='virtual-keyboard-toggle' class="ML__virtual-keyboard-toggle" role="button" data-ML__tooltip="${l10n(
                'tooltip.toggle virtual keyboard'
            )}">`;
            // data-ML__tooltip='Toggle Virtual Keyboard'
            if (this.options.virtualKeyboardToggleGlyph) {
                markup += this.options.virtualKeyboardToggleGlyph;
            } else {
                markup += `<span style="width: 21px; margin-top: 4px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M528 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm16 336c0 8.823-7.177 16-16 16H48c-8.823 0-16-7.177-16-16V112c0-8.823 7.177-16 16-16h480c8.823 0 16 7.177 16 16v288zM168 268v-24c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12zm96 0v-24c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12zm96 0v-24c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12zm96 0v-24c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12zm-336 80v-24c0-6.627-5.373-12-12-12H84c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12zm384 0v-24c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12zM120 188v-24c0-6.627-5.373-12-12-12H84c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12zm96 0v-24c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12zm96 0v-24c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12zm96 0v-24c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12zm96 0v-24c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12zm-96 152v-8c0-6.627-5.373-12-12-12H180c-6.627 0-12 5.373-12 12v8c0 6.627 5.373 12 12 12h216c6.627 0 12-5.373 12-12z"/></svg></span>`;
            }
            markup += '</div>';
        } else {
            markup += '<span ></span>';
        }
        markup += '</span>';
        markup += `
        <div class="ML__sr-only">
            <span aria-live="assertive" aria-atomic="true"></span>
            <span></span>
        </div>
    `;

        this.element.innerHTML = this.options.createHTML(markup);

        let iChild = 0; // index of child -- used to make changes below easier
        let textarea: HTMLElement;
        if (typeof this.options.substituteTextArea === 'function') {
            textarea = this.options.substituteTextArea();
        } else {
            textarea = this.element.children[iChild++]
                .firstElementChild as HTMLElement;
        }
        this.field = this.element.children[iChild].children[0] as HTMLElement;

        // Listen to 'wheel' events to scroll (horizontally) the field when it overflows
        this.field.addEventListener(
            'wheel',
            (ev) => {
                ev.preventDefault();
                ev.stopPropagation();
                const wheelDelta =
                    typeof ev.deltaX === 'undefined' ? ev.detail : -ev.deltaX;
                if (isFinite(wheelDelta)) {
                    this.field.scroll({
                        top: 0,
                        left: this.field.scrollLeft - wheelDelta * 5,
                    });
                }
            },
            { passive: false }
        );
        this.virtualKeyboardToggle = this.element.children[iChild++]
            .children[1] as HTMLElement;
        attachButtonHandlers(this, this.virtualKeyboardToggle, {
            default: 'toggleVirtualKeyboard',
            alt: 'toggleVirtualKeyboardAlt',
            shift: 'toggleVirtualKeyboardShift',
        });
        this.ariaLiveText = this.element.children[iChild]
            .children[0] as HTMLElement;
        this.accessibleNode = this.element.children[iChild++]
            .children[1] as HTMLElement;
        // Some panels are shared amongst instances of mathfield
        // (there's a single instance in the document)
        this.popover = getSharedElement(
            'mathlive-popover-panel',
            'ML__popover'
        );
        this.stylesheets.push(injectStylesheet(null, popoverStylesheet));
        this.keystrokeCaption = getSharedElement(
            'mathlive-keystroke-caption-panel',
            'ML__keystroke-caption'
        );
        this.stylesheets.push(
            injectStylesheet(null, keystrokeCaptionStylesheet)
        );
        // The keystroke caption panel and the command bar are
        // initially hidden
        this.keystrokeCaptionVisible = false;
        this.virtualKeyboardVisible = false;
        this.keystrokeBuffer = '';
        this.keystrokeBufferStates = [];
        this.keystrokeBufferResetTimer = null;
        // This index indicates which of the suggestions available to
        // display in the popover panel
        this.suggestionIndex = 0;
        // The input mode (text, math, command)
        // While getAnchorMode() represent the mode of the current selection,
        // this.mode is the mode chosen by the user. It indicates the mode the
        // next character typed will be interpreted in.
        // It is often identical to getAnchorMode() since changing the selection
        // changes the mode, but sometimes it is not, for example when a user
        // enters a mode changing command.
        this.mode = this.options.defaultMode;
        this.smartModeSuppressed = false;
        // Current style (color, weight, italic, etc...):
        // reflects the style to be applied on next insertion.
        this.style = {};
        // Focus/blur state
        this.blurred = true;
        on(this.element, 'focus', this);
        on(this.element, 'blur', this);
        // Capture clipboard events
        // Delegate keyboard events
        this.keyboardDelegate = delegateKeyboardEvents(
            textarea as HTMLTextAreaElement,
            {
                typedText: (text: string): void => onTypedText(this, text),
                cut: () => onCut(this),
                copy: (ev) => onCopy(this, ev),
                paste: (ev) => onPaste(this, ev),
                keystroke: (keystroke, e) => onKeystroke(this, keystroke, e),
                focus: () => this.onFocus(),
                blur: () => this.onBlur(),
                compositionStart: (composition: string) =>
                    this.onCompositionStart(composition),
                compositionUpdate: (composition: string) =>
                    this.onCompositionUpdate(composition),
                compositionEnd: (composition: string) =>
                    this.onCompositionEnd(composition),
            }
        );

        // Delegate mouse and touch events
        if (window.PointerEvent) {
            // Use modern pointer events if available
            on(this.field, 'pointerdown', this);
        } else {
            on(this.field, 'touchstart:active mousedown', this);
        }

        // Request notification for when the window is resized (
        // or the device switched from portrait to landscape) to adjust
        // the UI (popover, etc...)
        on(window, 'resize', this);

        // Setup the model
        this.model = new ModelPrivate(
            {
                mode: this.options.defaultMode,
                macros: this.options.macros,
                removeExtraneousParentheses: this.options
                    .removeExtraneousParentheses,
            },
            {
                onContentDidChange: (_sender: ModelPrivate): void =>
                    this.options.onContentDidChange(this),
                onSelectionDidChange: (_sender: ModelPrivate): void =>
                    this._onSelectionDidChange(),
                onContentWillChange: (): void =>
                    this.options.onContentWillChange(this),
                onSelectionWillChange: (): void =>
                    this.options.onSelectionWillChange(this),
                onError: this.options.onError,
            },
            {
                announce: (
                    _sender: Mathfield,
                    command,
                    modelBefore,
                    atoms
                ): void =>
                    this.options.onAnnounce?.(
                        this,
                        command,
                        modelBefore,
                        atoms
                    ),
                moveOut: (_sender, direction): boolean =>
                    this.options.onMoveOutOf(this, direction),
                tabOut: (_sender, direction): boolean =>
                    this.options.onTabOutOf(this, direction),
            },
            this
        );

        // Prepare to manage undo/redo
        this.undoManager = new UndoManager(this.model);

        // Use the content of the element for the initial value of the mathfield
        insert(this.model, elementText, {
            insertionMode: 'replaceAll',
            selectionMode: 'after',
            format: 'latex',
            mode: 'math',
            suppressChangeNotifications: true,
            macros: this.options.macros,
        });

        // Now start recording potentially undoable actions
        this.undoManager.startRecording();
        this.undoManager.snapshot(this.options);

        this.model.setListeners({
            onContentDidChange: (_sender: ModelPrivate) =>
                this.options.onContentDidChange(this),
            onSelectionDidChange: (_sender: ModelPrivate) =>
                this._onSelectionDidChange(),
            onContentWillChange: () => this.options.onContentWillChange(this),
            onSelectionWillChange: () =>
                this.options.onSelectionWillChange(this),
            onError: this.options.onError,
        });
        this.model.setHooks({
            announce: (_sender: Mathfield, command, modelBefore, atoms) =>
                this.options.onAnnounce?.(this, command, modelBefore, atoms),
            moveOut: (_sender, direction) =>
                this.options.onMoveOutOf(this, direction),
            tabOut: (_sender, direction) =>
                this.options.onTabOutOf(this, direction),
        });

        if (!this.options.locale.startsWith(getActiveKeyboardLayout().locale)) {
            setKeyboardLayoutLocale(this.options.locale);
        }
        this.keybindings = normalizeKeybindings(
            this.options.keybindings,
            (e) => {
                if (typeof this.options.onError === 'function') {
                    this.options.onError({
                        code: 'invalid-keybinding',
                        arg: e.join('\n'),
                    });
                }
                console.log(e.join('\n'));
            }
        );
        requestUpdate(this);
    }

    /** @deprecated */
    $setConfig(config: Partial<MathfieldOptionsPrivate>): void {
        deprecated('$setConfig');
        this.setOptions(config);
    }
    setOptions(config: Partial<MathfieldOptionsPrivate>): void {
        this.options = updateOptions(this.options, config);
        this.model.setListeners({
            onContentDidChange: (_sender: ModelPrivate) =>
                this.options.onContentDidChange(this),
            onSelectionDidChange: (_sender: ModelPrivate) =>
                this._onSelectionDidChange(),
            onContentWillChange: () => this.options.onContentWillChange(this),
            onSelectionWillChange: () =>
                this.options.onSelectionWillChange(this),
            onError: this.options.onError,
        });
        this.model.setHooks({
            announce: (_sender: Mathfield, command, modelBefore, atoms) =>
                this.options.onAnnounce?.(this, command, modelBefore, atoms),
            moveOut: (_sender, direction) =>
                this.options.onMoveOutOf(this, direction),
            tabOut: (_sender, direction) =>
                this.options.onTabOutOf(this, direction),
        });

        if (!this.options.locale.startsWith(getActiveKeyboardLayout().locale)) {
            setKeyboardLayoutLocale(this.options.locale);
        }
        this.keybindings = normalizeKeybindings(
            this.options.keybindings,
            (e) => {
                if (typeof this.options.onError === 'function') {
                    this.options.onError({
                        code: 'invalid-keybinding',
                        arg: e.join('\n'),
                    });
                }
                console.log(e.join('\n'));
            }
        );

        if (!this.options.readOnly) {
            this.onBlur();
        }
        // Changing some config options (i.e. `macros`) may
        // require the content to be reparsed and re-rendered
        const content = this.model.root.toLatex();
        insert(this.model, content, {
            insertionMode: 'replaceAll',
            selectionMode: 'after',
            format: 'latex',
            mode: 'math',
            suppressChangeNotifications: true,
            macros: this.options.macros,
        });
        requestUpdate(this);
    }

    /** @deprecated */
    getConfig<K extends keyof MathfieldOptionsPrivate>(
        keys: K[]
    ): Pick<MathfieldOptionsPrivate, K>;
    /** @deprecated */
    getConfig<K extends keyof MathfieldOptionsPrivate>(
        key: K
    ): MathfieldOptionsPrivate[K];
    /** @deprecated */
    getConfig(): MathfieldOptionsPrivate;
    /** @deprecated */
    getConfig(
        keys?: keyof MathfieldOptionsPrivate | (keyof MathfieldOptionsPrivate)[]
    ): any | Partial<MathfieldOptionsPrivate> {
        deprecated('$getConfig');
        return getOptions(this.options, keys);
    }

    getOptions<K extends keyof MathfieldOptionsPrivate>(
        keys: K[]
    ): Pick<MathfieldOptionsPrivate, K>;
    getOptions(): MathfieldOptionsPrivate;
    getOptions(
        keys?: keyof MathfieldOptionsPrivate | (keyof MathfieldOptionsPrivate)[]
    ): any | Partial<MathfieldOptionsPrivate> {
        return getOptions(this.options, keys);
    }
    getOption<K extends keyof MathfieldOptionsPrivate>(
        key: K
    ): MathfieldOptionsPrivate[K] {
        return getOptions(this.options, key);
    }

    /*
     * handleEvent is a function invoked when an event is registered with an
     * object instead ( see `addEventListener()` in `on()`)
     * The name is defined by `addEventListener()` and cannot be changed.
     * This pattern is used to be able to release bound event handlers,
     * (event handlers that need access to `this`) as the bind() function
     * would create a new function that would have to be kept track off
     * to be able to properly remove the event handler later.
     */
    handleEvent(evt: Event): void {
        switch (evt.type) {
            case 'focus':
                if (!this.eventHandlingInProgress) {
                    this.eventHandlingInProgress = 'focus';
                    this.onFocus();
                    this.eventHandlingInProgress = '';
                }
                break;
            case 'blur':
                if (!this.eventHandlingInProgress) {
                    this.eventHandlingInProgress = 'blur';
                    this.onBlur();
                    this.eventHandlingInProgress = '';
                }
                break;
            case 'touchstart':
            case 'mousedown':
                // iOS <=13 Safari and Firefox on Android
                onPointerDown(this, evt as PointerEvent);
                break;
            case 'pointerdown':
                onPointerDown(this, evt as PointerEvent);
                break;
            case 'resize': {
                if (this.resizeTimer) {
                    window.cancelAnimationFrame(this.resizeTimer);
                }
                this.resizeTimer = window.requestAnimationFrame(
                    () => isValidMathfield(this) && this.onResize()
                );
                break;
            }
            default:
                console.warn('Unexpected event type', evt.type);
        }
    }
    /** @deprecated */
    $revertToOriginalContent(): void {
        deprecated('$revertToOriginalContent');
        this.dispose();
        this.element.innerHTML = this.options.createHTML(this.originalContent);
    }
    dispose(): void {
        this.element.innerHTML = '$$' + this.getValue() + '$$';
        delete this.element['mathfield'];
        delete this.accessibleNode;
        delete this.ariaLiveText;
        delete this.field;
        delete this.keyboardDelegate;
        this.virtualKeyboardToggle.remove();
        delete this.virtualKeyboardToggle;
        releaseSharedElement(this.popover);
        delete this.popover;
        releaseSharedElement(this.keystrokeCaption);
        delete this.keystrokeCaption;
        if (this.virtualKeyboard) {
            this.virtualKeyboard.dispose();
            delete this.virtualKeyboard;
        }
        off(this.element, 'pointerdown', this);
        off(this.element, 'touchstart:active mousedown', this);
        off(this.element, 'focus', this);
        off(this.element, 'blur', this);
        off(window, 'resize', this);
        delete this.element;
        this.stylesheets.forEach((x) => x.release());
    }

    resetKeystrokeBuffer(options?: { defer: boolean }): void {
        options = options ?? { defer: false };
        if (options.defer) {
            if (this.options.inlineShortcutTimeout) {
                // Set a timer to reset the shortcut buffer
                this.keystrokeBufferResetTimer = setTimeout(() => {
                    this.resetKeystrokeBuffer();
                }, this.options.inlineShortcutTimeout);
            }
            return;
        }
        this.keystrokeBuffer = '';
        this.keystrokeBufferStates = [];
        clearTimeout(this.keystrokeBufferResetTimer);
    }

    private _onSelectionDidChange(): void {
        // Every atom before the new caret position is now committed
        commitCommandStringBeforeInsertionPoint(this.model);
        // Keep the content of the textarea in sync wiht the selection.
        // This will allow cut/copy to work.
        const result = selectionIsCollapsed(this.model)
            ? ''
            : makeRoot('math', getSelectedAtoms(this.model)).toLatex(false);

        this.keyboardDelegate.setValue(result);

        // Update the mode
        {
            const previousMode = this.mode;
            this.mode = getAnchorMode(this.model) || this.options.defaultMode;
            if (
                this.mode !== previousMode &&
                typeof this.options.onModeChange === 'function'
            ) {
                this.options.onModeChange(this, this.mode);
            }
            if (previousMode === 'command' && this.mode !== 'command') {
                hidePopover(this);
                removeCommandString(this.model);
            }
        }
        // Defer the updating of the popover position: we'll need the tree to be
        // re-rendered first to get an updated caret position
        updatePopoverPosition(this, { deferred: true });

        // Invoke client listeners, if provided.
        if (typeof this.options.onSelectionDidChange === 'function') {
            this.options.onSelectionDidChange(this);
        }
    }

    private onFocus(): void {
        if (this.options.readOnly) return;
        if (this.blurred) {
            this.blurred = false;
            this.keyboardDelegate.focus();
            if (this.options.virtualKeyboardMode === 'onfocus') {
                showVirtualKeyboard(this);
            }
            updatePopoverPosition(this);
            if (this.options.onFocus) {
                this.options.onFocus(this);
            }
            // Save the current value.
            // It will be compared in `onBlur()` to see if the
            // `onCommit` listener needs to be invoked. This
            // mimic the `<input>` and `<textarea>` behavior
            this.valueOnFocus = this.getValue();
            requestUpdate(this);
        }
    }
    private onBlur(): void {
        if (!this.blurred) {
            this.blurred = true;
            this.ariaLiveText.textContent = '';
            if (/onfocus|manual/.test(this.options.virtualKeyboardMode)) {
                hideVirtualKeyboard(this);
            }
            complete(this, { discard: true });
            requestUpdate(this);
            if (typeof this.options.onBlur === 'function') {
                this.options.onBlur(this);
            }
            if (
                typeof this.options.onCommit === 'function' &&
                this.getValue() !== this.valueOnFocus
            ) {
                this.options.onCommit(this);
            }
        }
    }
    private onCompositionStart(_composition: string): void {
        // Clear the selection if there is one
        deleteChar(this.model);
        requestAnimationFrame(() => {
            render(this); // Recalculate the position of the caret
            // Synchronize the location and style of textarea
            // so that the IME candidate window can align with the composition
            const caretPoint = getCaretPoint(this.field);
            if (!caretPoint) return;
            this.keyboardDelegate.moveTo(caretPoint.x, caretPoint.y);
        });
    }
    private onCompositionUpdate(composition: string): void {
        updateComposition(this.model, composition);
        requestUpdate(this);
    }
    private onCompositionEnd(composition: string): void {
        removeComposition(this.model);
        onTypedText(this, composition, {
            simulateKeystroke: true,
        });
    }
    private onResize(): void {
        this.element.classList.remove(
            'ML__isNarrowWidth',
            'ML__isWideWidth',
            'ML__isExtendedWidth'
        );
        if (window.innerWidth >= 1024) {
            this.element.classList.add('ML__isExtendedWidth');
        } else if (window.innerWidth >= 768) {
            this.element.classList.add('ML__isWideWidth');
        } else {
            this.element.classList.add('ML__isNarrowWidth');
        }
        updatePopoverPosition(this);
    }

    /** @deprecated */
    $perform(command: SelectorPrivate | [SelectorPrivate, ...any[]]): boolean {
        deprecated('$perform');
        return this.executeCommand(command);
    }

    executeCommand(
        command: SelectorPrivate | [SelectorPrivate, ...any[]]
    ): boolean {
        return perform(this, command);
    }

    private atomToString(root: Atom, format: OutputFormat): string {
        format = format || 'latex';
        let result = '';
        if (format === 'latex' || format === 'latex-expanded') {
            result = root.toLatex(format === 'latex-expanded');
        } else if (format === 'mathML') {
            result = atomsToMathML(root, this.options);
        } else if (format === 'spoken') {
            result = atomToSpeakableText(root, this.options);
        } else if (format === 'spoken-text') {
            const saveTextToSpeechMarkup = this.options.textToSpeechMarkup;
            this.options.textToSpeechMarkup = '';
            result = atomToSpeakableText(root, this.options);
            this.options.textToSpeechMarkup = saveTextToSpeechMarkup;
        } else if (
            format === 'spoken-ssml' ||
            format === 'spoken-ssml-withHighlighting'
        ) {
            const saveTextToSpeechMarkup = this.options.textToSpeechMarkup;
            // const savedAtomIdsSettings = this.config.atomIdsSettings;    // @revisit
            this.options.textToSpeechMarkup = 'ssml';
            // if (format === 'spoken-ssml-withHighlighting') {     // @revisit
            //     this.config.atomIdsSettings = { seed: 'random' };
            // }
            result = atomToSpeakableText(root, this.options);
            this.options.textToSpeechMarkup = saveTextToSpeechMarkup;
            // this.config.atomIdsSettings = savedAtomIdsSettings;      // @revisit
        } else if (format === 'json') {
            console.log('deprecated format. Use MathJSON');
            const json = atomtoMathJson(root);
            result = JSON.stringify(json);
        } else if (format === 'json-2') {
            console.log('deprecated format. Use MathJSON');
            const json = atomtoMathJson(root);
            // const json = parseLatex(root.toLatex(true), {
            //     form: 'canonical',
            // });
            result = JSON.stringify(json, null, 2);
        } else if (format === 'ASCIIMath') {
            result = atomToAsciiMath(root);
        } else {
            console.warn('Unknown format :', format);
        }
        return result;
    }
    get lastPosition(): number {
        return this.model.lastPosition;
    }
    get selection(): Range[] {
        return this.model.selection;
    }
    set selection(value: Range[]) {
        this.model.selection = value;
    }

    /** @deprecated */
    $text(format: OutputFormat): string {
        return this.atomToString(this.model.root, format);
    }

    getValue(): string;
    getValue(format: OutputFormat): string;
    getValue(start: number, end?: number, format?: OutputFormat): string;
    getValue(range: Range, format?: OutputFormat): string;
    getValue(ranges: Range[], format?: OutputFormat): string;
    getValue(
        arg1?: number | OutputFormat | Range | Range[],
        arg2?: number | OutputFormat,
        arg3?: OutputFormat
    ): string {
        if (typeof arg1 === 'undefined') {
            return this.atomToString(this.model.root, 'latex');
        }
        let format: OutputFormat;
        if (typeof arg1 === 'string') {
            // Output format only
            format = arg1;
            return this.atomToString(this.model.root, format);
        }
        let ranges: Range[];
        if (
            typeof arg1 === 'number' &&
            (typeof arg2 === 'number' || typeof arg2 === 'undefined')
        ) {
            ranges = [
                {
                    start: arg1,
                    end: arg2 ?? -1,
                },
            ];
            format = arg3 ?? 'latex';
        } else if (Array.isArray(arg1)) {
            ranges = arg1;
            format = arg2 as OutputFormat;
        } else {
            ranges = [arg1 as Range];
            format = arg2 as OutputFormat;
        }
        const iter = new PositionIterator(this.model.root);
        const result = ranges
            .map((range): string => {
                let res = '';
                range = normalizeRange(iter, range);
                if (!range.collapsed) {
                    const depth = iter.at(range.start).depth;
                    for (let i = range.start + 1; i <= range.end; i++) {
                        if (iter.at(i).depth === depth) {
                            res += this.atomToString(iter.at(i).atom, format);
                        }
                    }
                }
                return res;
            })
            .join('');

        return result;
    }

    setValue(value: string, options?: InsertOptions): void {
        if (value === this.getValue()) return;
        options = options ?? { mode: 'math' };
        insert(this.model, value, {
            insertionMode: 'replaceAll',
            selectionMode: 'after',
            format: 'latex',
            mode: 'math',
            suppressChangeNotifications: options.suppressChangeNotifications,
            macros: this.options.macros,
        });
        this.undoManager.snapshot(this.options);
        requestUpdate(this);
    }

    find(latex: string): Range[] {
        const result = [];
        const iter = new PositionIterator(this.model.root);
        const lastPosition = iter.lastPosition;

        for (let i = 0; i < lastPosition; i++) {
            const depth = iter.at(i).depth;
            // @todo: adjust for depth, use the smallest depth of start and end
            // and adjust start/end to be at the same depth
            // if parent of start and end is not the same,
            // look at common ancestor, if start's parent is common ancestor,
            // use start, otherwise start =  position of common ancestor.
            // if end's parent is common ancestor, use end, otherwise use position
            // of common ancestor + 1.
            // And maybe that "adjustment" need to be in getValue()? but then
            // the range result might include duplicates
            for (let j = i; j < lastPosition; j++) {
                let value = '';
                for (let k = i + 1; k <= j; k++) {
                    if (iter.at(k).depth === depth) {
                        value += this.atomToString(iter.at(k).atom, 'latex');
                        console.log(
                            `value(${
                                i + 1
                            }, ${j}) = "${value}" = '${this.getValue(i, j)}'`
                        );
                    }
                }
                if (value === latex) {
                    result.push(normalizeRange(iter, { start: i, end: j }));
                }
            }
        }
        return result;
    }

    /** @deprecated */
    $selectedText(format: OutputFormat): string {
        deprecated('$selectedText');
        const atoms = getSelectedAtoms(this.model);
        if (!atoms) {
            return '';
        }
        return this.atomToString(makeRoot('math', atoms), format);
    }

    /** @deprecated */
    $selectionIsCollapsed(): boolean {
        deprecated('$selectionIsCollapsed');
        return selectionIsCollapsed(this.model);
    }
    /** @deprecated */
    $selectionDepth(): number {
        deprecated('$selectionDepth');
        return this.model.path.length;
    }

    /**
     * Checks if the selection starts at the beginning of the selection group.
     *
     * @deprecated
     */
    $selectionAtStart(): boolean {
        deprecated('$selectionAtStart');
        return false;
    }
    /** @deprecated */
    $selectionAtEnd(): boolean {
        deprecated('$selectionAtEnd');
        return false;
    }

    /** @deprecated */
    $latex(text?: string, options?: InsertOptions): string {
        deprecated('$latex');
        if (typeof text === 'string') {
            const oldValue = this.model.root.toLatex();
            if (text !== oldValue) {
                options = options ?? { mode: 'math' };
                insert(this.model, text, {
                    insertionMode: 'replaceAll',
                    selectionMode: 'after',
                    format: 'latex',
                    mode: 'math',
                    suppressChangeNotifications:
                        options.suppressChangeNotifications,
                    macros: this.options.macros,
                });
                this.undoManager.snapshot(this.options);
                requestUpdate(this);
            }
            return text;
        }
        // Return the content as LaTeX
        return this.model.root.toLatex();
    }
    /** @deprecated */
    $el(): HTMLElement {
        deprecated('$el');
        return this.element;
    }
    scrollIntoView(): void {
        // If a render is pending, do it now to make sure we have correct layout
        // and caret position
        if (this.dirty) {
            render(this);
        }
        let caretPoint: number = getCaretPoint(this.field)?.x;
        const fieldBounds = this.field.getBoundingClientRect();
        if (typeof caretPoint === 'undefined') {
            const selectionBounds = getSelectionBounds(this.field);
            if (selectionBounds !== null) {
                caretPoint =
                    selectionBounds.right +
                    fieldBounds.left -
                    this.field.scrollLeft;
            }
        }
        if (typeof caretPoint !== 'undefined') {
            const x = caretPoint - window.scrollX;
            if (x < fieldBounds.left) {
                this.field.scroll({
                    top: 0,
                    left: x - fieldBounds.left + this.field.scrollLeft - 20,
                    behavior: 'smooth',
                });
            } else if (x > fieldBounds.right) {
                this.field.scroll({
                    top: 0,
                    left: x - fieldBounds.right + this.field.scrollLeft + 20,
                    behavior: 'smooth',
                });
            }
        }
    }
    /** @deprecated */
    $insert(s: string, options?: InsertOptions): boolean {
        deprecated('$insert');
        return this.insert(s, options);
    }
    insert(s: string, options?: InsertOptions): boolean {
        if (typeof s === 'string' && s.length > 0) {
            options = options ?? { mode: 'math' };
            if (options.focus) {
                this.focus();
            }
            if (options.feedback) {
                if (this.options.keypressVibration && navigator?.vibrate) {
                    navigator.vibrate(HAPTIC_FEEDBACK_DURATION);
                }
                if (this.keypressSound) {
                    this.keypressSound.load();
                    this.keypressSound.play();
                }
            }
            if (s === '\\\\') {
                // This string is interpreted as an "insert row after" command
                addRowAfter(this.model);
            } else if (s === '&') {
                addColumnAfter(this.model);
            } else {
                const savedStyle = this.style;
                insert(this.model, s, {
                    mode: this.mode,
                    style: getAnchorStyle(this.model),
                    ...options,
                });
                if (options.resetStyle) {
                    this.style = savedStyle;
                }
            }
            this.undoManager.snapshot(this.options);
            requestUpdate(this);
            return true;
        }
        return false;
    }
    switchMode(mode: ParseMode, prefix = '', suffix = ''): void {
        if (this.mode === mode) return;
        this.resetKeystrokeBuffer();
        // Suppress (temporarily) smart mode if switching to/from text or math
        // This prevents switching to/from command mode from supressing smart mode.
        this.smartModeSuppressed =
            /text|math/.test(this.mode) && /text|math/.test(mode);
        if (prefix) {
            this.insert(prefix, {
                format: 'latex',
                mode: { math: 'text', text: 'math' }[mode],
            });
        }
        // Remove any error indicator on the current command sequence (if there is one)
        decorateCommandStringAroundInsertionPoint(this.model, false);
        if (mode === 'command') {
            removeSuggestion(this.model);
            hidePopover(this);
            this.suggestionIndex = 0;
            // Switch to the command mode keyboard layer
            if (this.virtualKeyboardVisible) {
                switchKeyboardLayer(this, 'lower-command');
            }
            insert(this.model, '\u001b', { mode: 'math' });
        } else {
            this.mode = mode;
        }
        if (suffix) {
            this.insert(suffix, {
                format: 'latex',
                mode: mode,
            });
        }
        // Notify of mode change
        if (typeof this.options.onModeChange === 'function') {
            this.options.onModeChange(this, this.mode);
        }
        requestUpdate(this);
    }

    /** @deprecated */
    $hasFocus(): boolean {
        deprecated('$hasFocus');
        return this.hasFocus();
    }
    hasFocus(): boolean {
        return document.hasFocus() && this.keyboardDelegate.hasFocus();
    }
    focus(): void {
        if (!this.hasFocus()) {
            this.keyboardDelegate.focus();
            this.model.announce('line');
        }
    }
    blur(): void {
        if (this.hasFocus()) {
            this.keyboardDelegate.blur();
        }
    }
    /** @deprecated */
    $focus(): void {
        deprecated('$focus');
        return this.focus();
    }
    /** @deprecated */
    $blur(): void {
        deprecated('$blur');
        return this.blur();
    }
    /** @deprecated */
    $select(): void {
        selectAll(this.model);
    }
    select(): void {
        selectAll(this.model);
    }
    /** @deprecated */
    $clearSelection(): void {
        deprecated('$clearSelection');
        deleteChar(this.model);
    }

    applyStyle(style: Style): void {
        applyStyle(this.model, style);
    }

    /** @deprecated */
    $applyStyle(style: Style): void {
        applyStyle(this.model, style);
    }

    /** @deprecated */
    $keystroke(keys: string, evt?: KeyboardEvent): boolean {
        deprecated('$keystroke');
        return onKeystroke(this, keys, evt);
    }
    /** @deprecated */
    $typedText(text: string): void {
        deprecated('$typedText');
        onTypedText(this, text);
    }

    getCaretPoint(): { x: number; y: number } | null {
        const caretPosition = getCaretPoint(this.field);
        return caretPosition
            ? { x: caretPosition.x, y: caretPosition.y }
            : null;
    }
    setCaretPoint(x: number, y: number): boolean {
        const oldPath = this.model.clone();
        const anchor = pathFromPoint(this, x, y, { bias: 0 });
        const result = setPath(this.model, anchor, 0);
        this.model.announce('move', oldPath);
        requestUpdate(this);
        return result;
    }

    canUndo(): boolean {
        return this.undoManager.canUndo();
    }
    canRedo(): boolean {
        return this.undoManager.canRedo();
    }
    popUndoStack(): void {
        this.undoManager.pop();
    }
    snapshot(): void {
        this.undoManager.snapshot({
            ...this.options,
            onUndoStateDidChange: (mf, reason): void => {
                updateUndoRedoButtons(this);
                this.options.onUndoStateDidChange(mf, reason);
            },
        });
    }
    snapshotAndCoalesce(): void {
        this.undoManager.snapshotAndCoalesce({
            ...this.options,
            onUndoStateDidChange: (mf, reason): void => {
                updateUndoRedoButtons(this);
                this.options.onUndoStateDidChange(mf, reason);
            },
        });
    }
    getUndoRecord(): UndoRecord {
        return this.undoManager.save();
    }
    restoreToUndoRecord(s: UndoRecord): void {
        this.undoManager.restore(s, {
            ...this.options,
            suppressChangeNotifications: true,
        });
    }
    undo(): void {
        return this.undoManager.undo({
            ...this.options,
            onUndoStateDidChange: (mf, reason): void => {
                updateUndoRedoButtons(this);
                this.options.onUndoStateDidChange(mf, reason);
            },
        });
    }
    redo(): void {
        return this.undoManager.redo({
            ...this.options,
            onUndoStateDidChange: (mf, reason): void => {
                updateUndoRedoButtons(this);
                this.options.onUndoStateDidChange(mf, reason);
            },
        });
    }
}

function deprecated(method: string) {
    console.warn(`Method "${method}" is deprecated`);
}
