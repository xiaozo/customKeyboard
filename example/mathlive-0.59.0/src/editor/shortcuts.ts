import type { InlineShortcutDefinition } from '../public/options';
import { LETTER } from '../core/definitions';
import type { Atom } from '../core/atom';

import { MathfieldOptionsPrivate } from './options';
import { INLINE_SHORTCUTS } from './shortcuts-definitions';

export { InlineShortcutDefinition };
export { INLINE_SHORTCUTS } from './shortcuts-definitions';

/**
 * Return an array of potential shortcuts
 */
export function getInlineShortcutsStartingWith(
    s: string,
    config: MathfieldOptionsPrivate
): string[] {
    const result = [];

    const skipDefaultShortcuts = config.overrideDefaultInlineShortcuts;

    for (let i = 0; i <= s.length - 1; i++) {
        const s2 = s.substring(i);
        if (!skipDefaultShortcuts) {
            Object.keys(INLINE_SHORTCUTS).forEach((key) => {
                if (key.startsWith(s2) && !result.includes(key)) {
                    result.push(key);
                }
            });
        }

        const customInlineShortcuts = config?.inlineShortcuts
            ? config.inlineShortcuts
            : null;
        if (customInlineShortcuts) {
            Object.keys(customInlineShortcuts).forEach((key) => {
                if (key.startsWith(s2)) {
                    result.push(key);
                }
            });
        }
    }
    return result;
}

/**
 *
 * @param siblings atoms preceding this potential shortcut
 */
function validateShortcut(
    siblings: Atom[],
    shortcut: InlineShortcutDefinition
): string {
    if (!shortcut) return '';

    // If it's a simple shortcut (no conditional), it's always valid
    if (typeof shortcut === 'string') return shortcut;

    // If we have no context, we assume all the shortcuts are valid
    if (!siblings) return shortcut.value;

    let nothing = false;
    let letter = false;
    let digit = false;
    let isFunction = false;
    let frac = false;
    let surd = false;
    let binop = false;
    let relop = false;
    let punct = false;
    let array = false;
    let openfence = false;
    let closefence = false;
    let text = false;
    let space = false;
    let sibling = siblings[siblings.length - 1];
    let index = siblings.length - 1;
    while (sibling && /msubsup|placeholder/.test(sibling.type)) {
        index -= 1;
        sibling = siblings[index];
    }
    nothing = !sibling || sibling.type === 'first'; // start of a group
    if (sibling) {
        if (
            typeof shortcut.mode !== 'undefined' &&
            sibling.mode !== shortcut.mode
        ) {
            return '';
        }
        text = sibling.mode === 'text';
        letter =
            !text &&
            sibling.type === 'mord' &&
            LETTER.test(sibling.body as string);
        digit =
            !text &&
            sibling.type === 'mord' &&
            /[0-9]+$/.test(sibling.body as string);
        isFunction = !text && sibling.isFunction;
        frac = sibling.type === 'genfrac';
        surd = sibling.type === 'surd';
        binop = sibling.type === 'mbin';
        relop = sibling.type === 'mrel';
        punct = sibling.type === 'mpunct' || sibling.type === 'minner';
        array = Boolean(sibling.array);
        openfence = sibling.type === 'mopen';
        closefence = sibling.type === 'mclose' || sibling.type === 'leftright';
        space = sibling.type === 'space';
    }

    if (typeof shortcut.after !== 'undefined') {
        // If this is a conditional shortcut, consider the conditions now
        if (
            (/nothing/.test(shortcut.after) && nothing) ||
            (/letter/.test(shortcut.after) && letter) ||
            (/digit/.test(shortcut.after) && digit) ||
            (/function/.test(shortcut.after) && isFunction) ||
            (/frac/.test(shortcut.after) && frac) ||
            (/surd/.test(shortcut.after) && surd) ||
            (/binop/.test(shortcut.after) && binop) ||
            (/relop/.test(shortcut.after) && relop) ||
            (/punct/.test(shortcut.after) && punct) ||
            (/array/.test(shortcut.after) && array) ||
            (/openfence/.test(shortcut.after) && openfence) ||
            (/closefence/.test(shortcut.after) && closefence) ||
            (/text/.test(shortcut.after) && text) ||
            (/space/.test(shortcut.after) && space)
        ) {
            return shortcut.value;
        }
        return '';
    }

    return shortcut.value;
}

/**
 *
 * @param context - atoms preceding the candidate, potentially used
 * to reduce which shortcuts are applicable. If 'null', no restrictions are
 * applied.
 * @param s - candidate inline shortcuts (e.g. `'pi'`)
 * @return A replacement string matching the shortcut (e.g. `'\pi'`)
 */
export function getInlineShortcut(
    context: Atom[],
    s: string,
    shortcuts?: { [key: string]: InlineShortcutDefinition }
): string {
    return validateShortcut(context, shortcuts?.[s] ?? INLINE_SHORTCUTS[s]);
}
