import type { KeyboardLayoutName as KeyboardLayoutId } from '../public/options';

// From https://www.w3.org/TR/uievents-code/
type Keycode =
    | 'Sleep'
    | 'WakeUp'
    | 'KeyA'
    | 'KeyB'
    | 'KeyC'
    | 'KeyD'
    | 'KeyE'
    | 'KeyF'
    | 'KeyG'
    | 'KeyH'
    | 'KeyI'
    | 'KeyJ'
    | 'KeyK'
    | 'KeyL'
    | 'KeyM'
    | 'KeyN'
    | 'KeyO'
    | 'KeyP'
    | 'KeyQ'
    | 'KeyR'
    | 'KeyS'
    | 'KeyT'
    | 'KeyU'
    | 'KeyV'
    | 'KeyW'
    | 'KeyX'
    | 'KeyY'
    | 'KeyZ'
    | 'Digit1'
    | 'Digit2'
    | 'Digit3'
    | 'Digit4'
    | 'Digit5'
    | 'Digit6'
    | 'Digit7'
    | 'Digit8'
    | 'Digit9'
    | 'Digit0'
    | 'Enter'
    | 'Escape'
    | 'Backspace'
    | 'Tab'
    | 'Space'
    | 'Minus'
    | 'Equal'
    | 'BracketLeft'
    | 'BracketRight'
    | 'Backslash'
    | 'Semicolon'
    | 'Quote'
    | 'Backquote'
    | 'Comma'
    | 'Period'
    | 'Slash'
    | 'CapsLock'
    | 'F1'
    | 'F2'
    | 'F3'
    | 'F4'
    | 'F5'
    | 'F6'
    | 'F7'
    | 'F8'
    | 'F9'
    | 'F10'
    | 'F11'
    | 'F12'
    | 'F13'
    | 'F14'
    | 'F15'
    | 'F16'
    | 'F17'
    | 'F18'
    | 'F19'
    | 'F20'
    | 'F21'
    | 'F22'
    | 'F23'
    | 'F24'
    | 'PrintScreen'
    | 'ScrollLock'
    | 'Pause'
    | 'Insert'
    | 'Home'
    | 'PageUp'
    | 'Delete'
    | 'End'
    | 'PageDown'
    | 'ArrowRight'
    | 'ArrowLeft'
    | 'ArrowDown'
    | 'ArrowUp'
    | 'NumLock'
    | 'Numpad1'
    | 'Numpad2'
    | 'Numpad3'
    | 'Numpad4'
    | 'Numpad5'
    | 'Numpad6'
    | 'Numpad7'
    | 'Numpad8'
    | 'Numpad9'
    | 'Numpad0'
    | 'NumpadDivide'
    | 'NumpadMultiply'
    | 'NumpadSubtract'
    | 'NumpadAdd'
    | 'NumpadEnter'
    | 'NumpadDecimal'
    | 'NumpadEqual'
    | 'NumpadParenLeft'
    | 'NumpadParenRight'
    | 'IntlBackslash'
    | 'ContextMenu'
    | 'Power'
    | 'Help'
    | 'Undo'
    | 'Cut'
    | 'Copy'
    | 'Paste'
    | 'AudioVolumeMute'
    | 'AudioVolumeUp'
    | 'AudioVolumeDown'
    | 'NumpadComma'
    | 'IntlRo'
    | 'KanaMode'
    | 'IntlYen'
    | 'Convert'
    | 'NonConvert'
    | 'Lang1'
    | 'Lang2'
    | 'Lang3'
    | 'Lang4'
    | 'ControlLeft'
    | 'ShiftLeft'
    | 'AltLeft'
    | 'MetaLeft'
    | 'ControlRight'
    | 'ShiftRight'
    | 'AltRight'
    | 'MetaRight'
    | 'MediaTrackNext'
    | 'MediaTrackPrevious'
    | 'MediaStop'
    | 'Eject'
    | 'MediaPlayPause'
    | 'MediaSelect'
    | 'LaunchMail'
    | 'LaunchApp2'
    | 'LaunchApp1'
    | 'BrowserSearch'
    | 'BrowserHome'
    | 'BrowserBack'
    | 'BrowserForward'
    | 'BrowserStop'
    | 'BrowserRefresh'
    | 'BrowserFavorites';

type KeyboardLayout = {
    id: KeyboardLayoutId;
    displayName: string; // Doesn't have to be unique
    locale: string;
    platform: 'windows' | 'apple' | 'linux';
    score: number;
    mapping: { [K in Keycode]?: [string, string, string, string] };
};

const DEFAULT_KEYBOARD_LAYOUT: KeyboardLayout =
    platform() === 'apple'
        ? {
              id: 'apple.en-intl',
              displayName: 'English (international)',
              platform: 'apple',
              locale: 'en',
              score: 0,
              mapping: {
                  KeyA: ['a', 'A', '??', '??'],
                  KeyB: ['b', 'B', '???', '??'],
                  KeyC: ['c', 'C', '??', '??'],
                  KeyD: ['d', 'D', '???', '??'],
                  KeyE: ['e', 'E', '??', '??'],
                  KeyF: ['f', 'F', '??', '??'],
                  KeyG: ['g', 'G', '??', '??'],
                  KeyH: ['h', 'H', '??', '??'],
                  KeyI: ['i', 'I', '??', '??'],
                  KeyJ: ['j', 'J', '???', '??'],
                  KeyK: ['k', 'K', '??', '???'],
                  KeyL: ['l', 'L', '??', '??'],
                  KeyM: ['m', 'M', '??', '??'],
                  KeyN: ['n', 'N', '??', '??'],
                  KeyO: ['o', 'O', '??', '??'],
                  KeyP: ['p', 'P', '??', '???'],
                  KeyQ: ['q', 'Q', '??', '??'],
                  KeyR: ['r', 'R', '??', '???'],
                  KeyS: ['s', 'S', '??', '??'],
                  KeyT: ['t', 'T', '???', '??'],
                  KeyU: ['u', 'U', '??', '??'],
                  KeyV: ['v', 'V', '???', '???'],
                  KeyW: ['w', 'W', '???', '???'],
                  KeyX: ['x', 'X', '???', '??'],
                  KeyY: ['y', 'Y', '??', '??'],
                  KeyZ: ['z', 'Z', '??', '??'],
                  Digit1: ['1', '!', '??', '???'],
                  Digit2: ['2', '@', '???', '???'],
                  Digit3: ['3', '#', '??', '???'],
                  Digit4: ['4', '$', '??', '???'],
                  Digit5: ['5', '%', '???', '???'],
                  Digit6: ['6', '??', '??', '???'],
                  Digit7: ['7', '&', '??', '???'],
                  Digit8: ['8', '*', '???', '??'],
                  Digit9: ['9', '(', '??', '??'],
                  Digit0: ['0', ')', '??', '???'],
                  Space: [' ', ' ', ' ', ' '],
                  Minus: ['-', '_', '???', '???'],
                  Equal: ['=', '+', '???', '??'],
                  BracketLeft: ['[', '{', '???', '???'],
                  BracketRight: [']', '}', '???', '???'],
                  Backslash: ['\\', '|', '??', '??'],
                  Semicolon: [';', ':', '???', '??'],
                  Quote: ["'", '"', '??', '??'],
                  Backquote: ['`', '??', '`', '`'],
                  Comma: [',', '<', '???', '??'],
                  Period: ['.', '>', '???', '??'],
                  Slash: ['/', '?', '??', '??'],
                  NumpadDivide: ['/', '/', '/', '/'],
                  NumpadMultiply: ['*', '*', '*', '*'],
                  NumpadSubtract: ['-', '-', '-', '-'],
                  NumpadAdd: ['+', '+', '+', '+'],
                  Numpad1: ['1', '1', '1', '1'],
                  Numpad2: ['2', '2', '2', '2'],
                  Numpad3: ['3', '3', '3', '3'],
                  Numpad4: ['4', '4', '4', '4'],
                  Numpad5: ['5', '5', '5', '5'],
                  Numpad6: ['6', '6', '6', '6'],
                  Numpad7: ['7', '7', '7', '7'],
                  Numpad8: ['8', '8', '8', '8'],
                  Numpad9: ['9', '9', '9', '9'],
                  Numpad0: ['0', '0', '0', '0'],
                  NumpadDecimal: ['.', '.', '.', '.'],
                  IntlBackslash: ['??', '??', '??', '??'],
                  NumpadEqual: ['=', '=', '=', '='],
                  AudioVolumeUp: ['', '=', '', '='],
              },
          }
        : platform() === 'windows'
        ? {
              id: 'windows.en-intl',
              displayName: 'English (international)',
              platform: 'windows',
              locale: 'en',
              score: 0,
              mapping: {
                  KeyA: ['a', 'A', '??', '??'],
                  KeyB: ['b', 'B', '', ''],
                  KeyC: ['c', 'C', '??', '??'],
                  KeyD: ['d', 'D', '??', '??'],
                  KeyE: ['e', 'E', '??', '??'],
                  KeyF: ['f', 'F', '', ''],
                  KeyG: ['g', 'G', '', ''],
                  KeyH: ['h', 'H', '', ''],
                  KeyI: ['i', 'I', '??', '??'],
                  KeyJ: ['j', 'J', '', ''],
                  KeyK: ['k', 'K', '', ''],
                  KeyL: ['l', 'L', '??', '??'],
                  KeyM: ['m', 'M', '??', ''],
                  KeyN: ['n', 'N', '??', '??'],
                  KeyO: ['o', 'O', '??', '??'],
                  KeyP: ['p', 'P', '??', '??'],
                  KeyQ: ['q', 'Q', '??', '??'],
                  KeyR: ['r', 'R', '??', ''],
                  KeyS: ['s', 'S', '??', '??'],
                  KeyT: ['t', 'T', '??', '??'],
                  KeyU: ['u', 'U', '??', '??'],
                  KeyV: ['v', 'V', '', ''],
                  KeyW: ['w', 'W', '??', '??'],
                  KeyX: ['x', 'X', '', ''],
                  KeyY: ['y', 'Y', '??', '??'],
                  KeyZ: ['z', 'Z', '??', '??'],
                  Digit1: ['1', '!', '??', '??'],
                  Digit2: ['2', '@', '??', ''],
                  Digit3: ['3', '#', '??', ''],
                  Digit4: ['4', '$', '??', '??'],
                  Digit5: ['5', '%', '???', ''],
                  Digit6: ['6', '^', '??', ''],
                  Digit7: ['7', '&', '??', ''],
                  Digit8: ['8', '*', '??', ''],
                  Digit9: ['9', '(', '???', ''],
                  Digit0: ['0', ')', '???', ''],
                  Space: [' ', ' ', '', ''],
                  Minus: ['-', '_', '??', ''],
                  Equal: ['=', '+', '??', '??'],
                  BracketLeft: ['[', '{', '??', ''],
                  BracketRight: [']', '}', '??', ''],
                  Backslash: ['\\', '|', '??', '??'],
                  Semicolon: [';', ':', '??', '??'],
                  Quote: ["'", '"', '??', '??'],
                  Backquote: ['`', '~', '', ''],
                  Comma: [',', '<', '??', '??'],
                  Period: ['.', '>', '', ''],
                  Slash: ['/', '?', '??', ''],
                  NumpadDivide: ['/', '/', '', ''],
                  NumpadMultiply: ['*', '*', '', ''],
                  NumpadSubtract: ['-', '-', '', ''],
                  NumpadAdd: ['+', '+', '', ''],
                  IntlBackslash: ['\\', '|', '', ''],
              },
          }
        : {
              id: 'linux.en',
              displayName: 'English',
              platform: 'linux',
              locale: 'en',
              score: 0,
              mapping: {
                  KeyA: ['a', 'A', 'a', 'A'],
                  KeyB: ['b', 'B', 'b', 'B'],
                  KeyC: ['c', 'C', 'c', 'C'],
                  KeyD: ['d', 'D', 'd', 'D'],
                  KeyE: ['e', 'E', 'e', 'E'],
                  KeyF: ['f', 'F', 'f', 'F'],
                  KeyG: ['g', 'G', 'g', 'G'],
                  KeyH: ['h', 'H', 'h', 'H'],
                  KeyI: ['i', 'I', 'i', 'I'],
                  KeyJ: ['j', 'J', 'j', 'J'],
                  KeyK: ['k', 'K', 'k', 'K'],
                  KeyL: ['l', 'L', 'l', 'L'],
                  KeyM: ['m', 'M', 'm', 'M'],
                  KeyN: ['n', 'N', 'n', 'N'],
                  KeyO: ['o', 'O', 'o', 'O'],
                  KeyP: ['p', 'P', 'p', 'P'],
                  KeyQ: ['q', 'Q', 'q', 'Q'],
                  KeyR: ['r', 'R', 'r', 'R'],
                  KeyS: ['s', 'S', 's', 'S'],
                  KeyT: ['t', 'T', 't', 'T'],
                  KeyU: ['u', 'U', 'u', 'U'],
                  KeyV: ['v', 'V', 'v', 'V'],
                  KeyW: ['w', 'W', 'w', 'W'],
                  KeyX: ['x', 'X', 'x', 'X'],
                  KeyY: ['y', 'Y', 'y', 'Y'],
                  KeyZ: ['z', 'Z', 'z', 'Z'],
                  Digit1: ['1', '!', '1', '!'],
                  Digit2: ['2', '@', '2', '@'],
                  Digit3: ['3', '#', '3', '#'],
                  Digit4: ['4', '$', '4', '$'],
                  Digit5: ['5', '%', '5', '%'],
                  Digit6: ['6', '^', '6', '^'],
                  Digit7: ['7', '&', '7', '&'],
                  Digit8: ['8', '*', '8', '*'],
                  Digit9: ['9', '(', '9', '('],
                  Digit0: ['0', ')', '0', ')'],
                  Space: [' ', ' ', ' ', ' '],
                  Minus: ['-', '_', '-', '_'],
                  Equal: ['=', '+', '=', '+'],
                  BracketLeft: ['[', '{', '[', '{'],
                  BracketRight: [']', '}', ']', '}'],
                  Backslash: ['\\', '|', '\\', '|'],
                  Semicolon: [';', ':', ';', ':'],
                  Quote: ["'", '"', "'", '"'],
                  Backquote: ['`', '~', '`', '~'],
                  Comma: [',', '<', ',', '<'],
                  Period: ['.', '>', '.', '>'],
                  Slash: ['/', '?', '/', '?'],
                  NumpadDivide: ['/', '/', '/', '/'],
                  NumpadMultiply: ['*', '*', '*', '*'],
                  NumpadSubtract: ['-', '-', '-', '-'],
                  NumpadAdd: ['+', '+', '+', '+'],
                  Numpad1: ['1', '1', '1', '1'],
                  Numpad2: ['2', '2', '2', '2'],
                  Numpad3: ['3', '3', '3', '3'],
                  Numpad4: ['4', '4', '4', '4'],
                  Numpad5: ['5', '5', '5', '5'],
                  Numpad6: ['6', '6', '6', '6'],
                  Numpad7: ['7', '7', '7', '7'],
                  Numpad8: ['8', '8', '8', '8'],
                  Numpad9: ['9', '9', '9', '9'],
                  Numpad0: ['0', '0', '0', '0'],
                  NumpadDecimal: ['', '.', '', '.'],
                  IntlBackslash: ['<', '>', '|', '??'],
                  NumpadEqual: ['=', '=', '=', '='],
                  NumpadComma: ['.', '.', '.', '.'],
                  NumpadParenLeft: ['(', '(', '(', '('],
                  NumpadParenRight: [')', ')', ')', ')'],
              },
          };

/* prettier-ignore */
const BASE_LAYOUT_MAPPING = {
    enter: '[Enter]',
    escape: '[Escape]',
    backspace: '[Backspace]',
    tab: '[Tab]',
    space: '[Space]',
    pausebreak: '[Pause]',
    insert: '[Insert]',
    home: '[Home]',
    pageup: '[PageUp]',
    delete: '[Delete]',
    end: '[End]',
    pagedown: '[PageDown]',
    right: '[ArrowRight]',
    left: '[ArrowLeft]',
    down: '[ArrowDown]',
    up: '[ArrowUp]',
    numpad0: '[Numpad0]',
    numpad1: '[Numpad1]',
    numpad2: '[Numpad2]',
    numpad3: '[Numpad3]',
    numpad4: '[Numpad4]',
    numpad5: '[Numpad5]',
    numpad6: '[Numpad6]',
    numpad7: '[Numpad7]',
    numpad8: '[Numpad8]',
    numpad9: '[Numpad9]',
    'numpad_divide': '[NumpadDivide]',
    'numpad_multiply': '[NumpadMultiply]',
    'numpad_subtract': '[NumpadSubtract]',
    'numpad_add': '[NumpadAdd]',
    'numpad_decimal': '[NumpadDecimal]',
    'numpad_separator': '[NumpadComma]',
    capslock: '[Capslock]',
    f1: '[F1]',
    f2: '[F2]',
    f3: '[F3]',
    f4: '[F4]',
    f5: '[F5]',
    f6: '[F6]',
    f7: '[F7]',
    f8: '[F8]',
    f9: '[F9]',
    f10: '[F10]',
    f11: '[F11]',
    f12: '[F12]',
    f13: '[F13]',
    f14: '[F14]',
    f15: '[F15]',
    f16: '[F16]',
    f17: '[F17]',
    f18: '[F18]',
    f19: '[F19]',
};

const gKeyboardLayouts: KeyboardLayout[] = [];

let gKeyboardLayout: KeyboardLayout;

export function platform(): 'apple' | 'windows' | 'linux' {
    let result: 'apple' | 'windows' | 'linux' = 'linux';
    if (navigator?.platform && navigator?.userAgent) {
        if (/^(mac)/i.test(navigator.platform)) {
            result = 'apple';
        } else if (/^(win)/i.test(navigator.platform)) {
            result = 'windows';
        } else if (/(android)/i.test(navigator.userAgent)) {
            result = 'linux';
        } else if (
            /(iphone)/i.test(navigator.userAgent) ||
            /(ipod)/i.test(navigator.userAgent) ||
            /(ipad)/i.test(navigator.userAgent)
        ) {
            result = 'apple';
        } else if (/\bCrOS\b/i.test(navigator.userAgent)) {
            result = 'linux';
        }
    }

    return result;
}

export function register(layout: KeyboardLayout): void {
    if (layout.platform === platform()) {
        gKeyboardLayouts.push(layout);
    }
}

/** Given the current estimated keyboard layout,
 *  return the unmodified key for the event.
 * For example, on AZERTY option+shift+'A' = '??' -> 'a'
 * (event though the code is KeyQ)
 */
// export function getUnmodifiedKey(evt: KeyboardEvent): string {
//     if (!evt.shiftKey && !evt.altKey) {
//         return evt.key;
//     }
//     // @todo: iterate over the entries for the current layout,
//     // with the alt+shift modifiers set accordingly
//     // and find the (first) entry that matches
//     const layout = gKeyboardLayouts[0] ?? DEFAULT_KEYBOARD_LAYOUT;
//     const index =
//         evt.shiftKey && evt.altKey ? 3 : evt.altKey ? 2 : evt.shiftKey ? 1 : 0;

//     for (const [key, value] of Object.entries(layout.mapping)) {
//         if (key === evt.code && value[index] === evt.key) {
//             return value[0];
//         }
//     }

//     // We did not find a perfect match...
//     // Look for an entry even if the keycode doesn't match...
//     for (const [, value] of Object.entries(layout.mapping)) {
//         if (value[index] === evt.key) {
//             return value[0];
//         }
//     }

//     // Really? Nothing matched?! Just return the key...
//     return evt.key;
// }

export function getCodeForKey(k: string): string {
    const layout = getActiveKeyboardLayout() ?? DEFAULT_KEYBOARD_LAYOUT;

    for (const [key, value] of Object.entries(layout.mapping)) {
        if (value[0] === k) return '[' + key + ']';
        if (value[1] === k) return 'shift+[' + key + ']';
        if (value[2] === k) return 'alt+[' + key + ']';
        if (value[3] === k) return 'shift+alt+[' + key + ']';
    }

    return BASE_LAYOUT_MAPPING[k] ?? '';
}

export function normalizeKeyboardEvent(evt: KeyboardEvent): KeyboardEvent {
    if (!evt.code) {
        // For virtual keyboards (iOS, Android) and Microsoft Edge (!)
        // the `evt.code`, which represents the physical key pressed, is set
        // to undefined. In that case, map the virtual key ("q") to a
        // pseudo-hardware key ("KeyQ")
        const mapping = Object.entries(getActiveKeyboardLayout().mapping);
        let altKey = false;
        let shiftKey = false;
        let code: string;
        for (let index = 0; index < 4; index++) {
            for (const [key, value] of mapping) {
                if (value[index] === evt.key) {
                    code = key;
                    if (index === 3) {
                        altKey = true;
                        shiftKey = true;
                    } else if (index === 2) {
                        altKey = true;
                    } else if (index === 1) {
                        shiftKey = true;
                    }
                    break;
                }
            }
            if (code) break;
        }
        return new KeyboardEvent(evt.type, { ...evt, altKey, shiftKey, code });
    }
    return new KeyboardEvent(evt.type, evt);
}

// Given this keyboard event, and the `code`, `key` and modifiers
// in it, increase the score of layouts that do match it.
// Calling repeatedly this function will improve the accuracy of the
// keyboard layout estimate.
export function validateKeyboardLayout(evt: KeyboardEvent): void {
    const index =
        evt.shiftKey && evt.altKey ? 3 : evt.altKey ? 2 : evt.shiftKey ? 1 : 0;

    if (evt.key === 'Unidentified') return;

    // Dead keys do not have enough info to validate the keyboard
    // (we dont' know what char they could produce, only the physical key associated with them )
    if (evt.key === 'Dead') return;

    const layouts = gKeyboardLayouts.filter(
        (layout) => layout.mapping[evt.code]?.[index] === evt.key
    );
    if (layouts.length === 0) return;

    // Increase the score of the layouts that have a mapping compatible with this keyboard event.
    layouts.forEach((x) => {
        x.score += 1;
    });
    gKeyboardLayouts.sort((a, b) => b.score - a.score);
}

export function setKeyboardLayoutLocale(locale: string): void {
    gKeyboardLayout = gKeyboardLayouts.find((x) => locale.startsWith(x.locale));
}

export function setKeyboardLayout(
    name: KeyboardLayoutId | 'auto'
): KeyboardLayout {
    // If name is 'auto', the layout is not found, and set to undefined
    gKeyboardLayout = gKeyboardLayouts.find((x) => x.id === name);
    return gKeyboardLayout;
}

export function getActiveKeyboardLayout(): KeyboardLayout {
    return gKeyboardLayout ?? gKeyboardLayouts[0];
}

export function getKeyboardLayouts(): KeyboardLayout[] {
    return gKeyboardLayouts;
}

register(DEFAULT_KEYBOARD_LAYOUT);

register({
    id: 'apple.french',
    locale: 'fr',
    displayName: 'French',
    platform: 'apple',
    score: 0,
    mapping: {
        KeyA: ['q', 'Q', '???', '??'],
        KeyB: ['b', 'B', '??', '???'],
        KeyC: ['c', 'C', '??', '??'],
        KeyD: ['d', 'D', '???', '???'],
        KeyE: ['e', 'E', '??', '??'],
        KeyF: ['f', 'F', '??', '??'],
        KeyG: ['g', 'G', '???', '???'],
        KeyH: ['h', 'H', '??', '??'],
        KeyI: ['i', 'I', '??', '??'],
        KeyJ: ['j', 'J', '??', '??'],
        KeyK: ['k', 'K', '??', '??'],
        KeyL: ['l', 'L', '??', '|'],
        KeyM: [',', '?', '???', '??'],
        KeyN: ['n', 'N', '~', '??'],
        KeyO: ['o', 'O', '??', '??'],
        KeyP: ['p', 'P', '??', '???'],
        KeyQ: ['a', 'A', '??', '??'],
        KeyR: ['r', 'R', '??', '???'],
        KeyS: ['s', 'S', '??', '???'],
        KeyT: ['t', 'T', '???', '???'],
        KeyU: ['u', 'U', '??', '??'],
        KeyV: ['v', 'V', '???', '???'],
        KeyW: ['z', 'Z', '??', '??'],
        KeyX: ['x', 'X', '???', '???'],
        KeyY: ['y', 'Y', '??', '??'],
        KeyZ: ['w', 'W', '???', '???'],
        Digit1: ['&', '1', '???', '??'],
        Digit2: ['??', '2', '??', '???'],
        Digit3: ['"', '3', '???', '???'],
        Digit4: ["'", '4', '???', '???'],
        Digit5: ['(', '5', '{', '['],
        Digit6: ['??', '6', '??', '??'],
        Digit7: ['??', '7', '??', '??'],
        Digit8: ['!', '8', '??', '??'],
        Digit9: ['??', '9', '??', '??'],
        Digit0: ['??', '0', '??', '??'],
        Space: [' ', ' ', ' ', ' '],
        Minus: [')', '??', '}', ']'],
        Equal: ['-', '_', '???', '???'],
        BracketLeft: ['^', '??', '??', '??'],
        BracketRight: ['$', '*', '???', '??'],
        Backslash: ['`', '??', '@', '#'],
        Semicolon: ['m', 'M', '??', '??'],
        Quote: ['??', '%', '??', '???'],
        Backquote: ['<', '>', '???', '???'],
        Comma: [';', '.', '???', '???'],
        Period: [':', '/', '??', '\\'],
        Slash: ['=', '+', '???', '??'],
        NumpadDivide: ['/', '/', '/', '/'],
        NumpadMultiply: ['*', '*', '*', '*'],
        NumpadSubtract: ['-', '-', '-', '-'],
        NumpadAdd: ['+', '+', '+', '+'],
        NumpadDecimal: [',', '.', ',', '.'],
        IntlBackslash: ['@', '#', '???', '??'],
        NumpadEqual: ['=', '=', '=', '='],
    },
});

register({
    id: 'apple.spanish',
    locale: 'es',
    displayName: 'Spanish ISO',
    platform: 'apple',
    score: 0,
    mapping: {
        KeyA: ['a', 'A', '??', '??'],
        KeyB: ['b', 'B', '??', ''],
        KeyC: ['c', 'C', '??', ' '],
        KeyD: ['d', 'D', '???', '???'],
        KeyE: ['e', 'E', '???', '???'],
        KeyF: ['f', 'F', '??', '???'],
        KeyG: ['g', 'G', '???', '???'],
        KeyH: ['h', 'H', '???', ' '],
        KeyI: ['i', 'I', ' ', ' '],
        KeyJ: ['j', 'J', '??', '??'],
        KeyK: ['k', 'K', '??', '??'],
        KeyL: ['l', 'L', ' ', '??'],
        KeyM: ['m', 'M', '??', '??'],
        KeyN: ['n', 'N', ' ', '??'],
        KeyO: ['o', 'O', '??', '??'],
        KeyP: ['p', 'P', '??', '???'],
        KeyQ: ['q', 'Q', '??', '??'],
        KeyR: ['r', 'R', '??', ' '],
        KeyS: ['s', 'S', '???', ' '],
        KeyT: ['t', 'T', '???', '???'],
        KeyU: ['u', 'U', ' ', ' '],
        KeyV: ['v', 'V', '???', '???'],
        KeyW: ['w', 'W', '??', '??'],
        KeyX: ['x', 'X', '???', '???'],
        KeyY: ['y', 'Y', '??', ' '],
        KeyZ: ['z', 'Z', '??', '???'],
        Digit1: ['1', '!', '|', '??'],
        Digit2: ['2', '"', '@', '??'],
        Digit3: ['3', '??', '#', '???'],
        Digit4: ['4', '$', '??', '??'],
        Digit5: ['5', '%', '???', '???'],
        Digit6: ['6', '&', '??', ' '],
        Digit7: ['7', '/', '??', '???'],
        Digit8: ['8', '(', '???', '???'],
        Digit9: ['9', ')', '???', '???'],
        Digit0: ['0', '=', '???', '???'],
        Space: [' ', ' ', ' ', ' '],
        Minus: ["'", '?', '??', '??'],
        Equal: ['??', '??', '???', '??'],
        BracketLeft: ['`', '^', '[', '??'],
        BracketRight: ['+', '*', ']', '??'],
        Backslash: ['??', '??', '}', '??'],
        Semicolon: ['??', '??', '~', '??'],
        Quote: ['??', '??', '{', '??'],
        Backquote: ['<', '>', '???', '???'],
        Comma: [',', ';', '???', ''],
        Period: ['.', ':', '???', '???'],
        Slash: ['-', '_', '???', '???'],
        NumpadDivide: ['/', '/', '/', '/'],
        NumpadMultiply: ['*', '*', '*', '*'],
        NumpadSubtract: ['-', '-', '-', '-'],
        NumpadAdd: ['+', '+', '+', '+'],
        Numpad1: ['1', '1', '1', '1'],
        Numpad2: ['2', '2', '2', '2'],
        Numpad3: ['3', '3', '3', '3'],
        Numpad4: ['4', '4', '4', '4'],
        Numpad5: ['5', '5', '5', '5'],
        Numpad6: ['6', '6', '6', '6'],
        Numpad7: ['7', '7', '7', '7'],
        Numpad8: ['8', '8', '8', '8'],
        Numpad9: ['9', '9', '9', '9'],
        Numpad0: ['0', '0', '0', '0'],
        NumpadDecimal: [',', ',', ',', ','],
        IntlBackslash: ['??', '??', '\\', '??'],
    },
});

register({
    id: 'windows.spanish',
    locale: 'es',
    displayName: 'Spanish',
    platform: 'windows',
    score: 0,
    mapping: {
        KeyA: ['a', 'A', '', ''],
        KeyB: ['b', 'B', '', ''],
        KeyC: ['c', 'C', '', ''],
        KeyD: ['d', 'D', '', ''],
        KeyE: ['e', 'E', '???', ''],
        KeyF: ['f', 'F', '', ''],
        KeyG: ['g', 'G', '', ''],
        KeyH: ['h', 'H', '', ''],
        KeyI: ['i', 'I', '', ''],
        KeyJ: ['j', 'J', '', ''],
        KeyK: ['k', 'K', '', ''],
        KeyL: ['l', 'L', '', ''],
        KeyM: ['m', 'M', '', ''],
        KeyN: ['n', 'N', '', ''],
        KeyO: ['o', 'O', '', ''],
        KeyP: ['p', 'P', '', ''],
        KeyQ: ['q', 'Q', '', ''],
        KeyR: ['r', 'R', '', ''],
        KeyS: ['s', 'S', '', ''],
        KeyT: ['t', 'T', '', ''],
        KeyU: ['u', 'U', '', ''],
        KeyV: ['v', 'V', '', ''],
        KeyW: ['w', 'W', '', ''],
        KeyX: ['x', 'X', '', ''],
        KeyY: ['y', 'Y', '', ''],
        KeyZ: ['z', 'Z', '', ''],
        Digit1: ['1', '!', '|', ''],
        Digit2: ['2', '"', '@', ''],
        Digit3: ['3', '??', '#', ''],
        Digit4: ['4', '$', '~', ''],
        Digit5: ['5', '%', '???', ''],
        Digit6: ['6', '&', '??', ''],
        Digit7: ['7', '/', '', ''],
        Digit8: ['8', '(', '', ''],
        Digit9: ['9', ')', '', ''],
        Digit0: ['0', '=', '', ''],
        Space: [' ', ' ', '', ''],
        Minus: ["'", '?', '', ''],
        Equal: ['??', '??', '', ''],
        BracketLeft: ['`', '^', '[', ''],
        BracketRight: ['+', '*', ']', ''],
        Backslash: ['??', '??', '}', ''],
        Semicolon: ['??', '??', '', ''],
        Quote: ['??', '??', '{', ''],
        Backquote: ['??', '??', '\\', ''],
        Comma: [',', ';', '', ''],
        Period: ['.', ':', '', ''],
        Slash: ['-', '_', '', ''],
        NumpadDivide: ['/', '/', '', ''],
        NumpadMultiply: ['*', '*', '', ''],
        NumpadSubtract: ['-', '-', '', ''],
        NumpadAdd: ['+', '+', '', ''],
        IntlBackslash: ['<', '>', '', ''],
    },
});

register({
    id: 'linux.spanish',
    locale: 'es',
    displayName: 'Spanish',
    platform: 'linux',
    score: 0,
    mapping: {
        KeyA: ['a', 'A', '??', '??'],
        KeyB: ['b', 'B', '???', '???'],
        KeyC: ['c', 'C', '??', '??'],
        KeyD: ['d', 'D', '??', '??'],
        KeyE: ['e', 'E', '???', '??'],
        KeyF: ['f', 'F', '??', '??'],
        KeyG: ['g', 'G', '??', '??'],
        KeyH: ['h', 'H', '??', '??'],
        KeyI: ['i', 'I', '???', '??'],
        KeyJ: ['j', 'J', '??', '??'],
        KeyK: ['k', 'K', '??', '&'],
        KeyL: ['l', 'L', '??', '??'],
        KeyM: ['m', 'M', '??', '??'],
        KeyN: ['n', 'N', 'n', 'N'],
        KeyO: ['o', 'O', '??', '??'],
        KeyP: ['p', 'P', '??', '??'],
        KeyQ: ['q', 'Q', '@', '??'],
        KeyR: ['r', 'R', '??', '??'],
        KeyS: ['s', 'S', '??', '??'],
        KeyT: ['t', 'T', '??', '??'],
        KeyU: ['u', 'U', '???', '???'],
        KeyV: ['v', 'V', '???', '???'],
        KeyW: ['w', 'W', '??', '??'],
        KeyX: ['x', 'X', '??', '>'],
        KeyY: ['y', 'Y', '???', '??'],
        KeyZ: ['z', 'Z', '??', '<'],
        Digit1: ['1', '!', '|', '??'],
        Digit2: ['2', '"', '@', '???'],
        Digit3: ['3', '??', '#', '??'],
        Digit4: ['4', '$', '~', '$'],
        Digit5: ['5', '%', '??', '???'],
        Digit6: ['6', '&', '??', '???'],
        Digit7: ['7', '/', '{', '???'],
        Digit8: ['8', '(', '[', '???'],
        Digit9: ['9', ')', ']', '??'],
        Digit0: ['0', '=', '}', '??'],
        Enter: ['\r', '\r', '\r', '\r'],
        Escape: ['\u001b', '\u001b', '\u001b', '\u001b'],
        Backspace: ['\b', '\b', '\b', '\b'],
        Tab: ['\t', '', '\t', ''],
        Space: [' ', ' ', ' ', ' '],
        Minus: ["'", '?', '\\', '??'],
        Equal: ['??', '??', '??', '~'],
        BracketLeft: ['??', '??', '[', '??'],
        BracketRight: ['+', '*', ']', '??'],
        Backslash: ['??', '??', '}', '??'],
        Semicolon: ['??', '??', '~', '??'],
        Quote: ['??', '??', '{', '{'],
        Backquote: ['??', '??', '\\', '\\'],
        Comma: [',', ';', '???', '??'],
        Period: ['.', ':', '??', '??'],
        Slash: ['-', '_', '??', '??'],
        NumpadDivide: ['/', '/', '/', '/'],
        NumpadMultiply: ['*', '*', '*', '*'],
        NumpadSubtract: ['-', '-', '-', '-'],
        NumpadAdd: ['+', '+', '+', '+'],
        NumpadEnter: ['\r', '\r', '\r', '\r'],
        Numpad1: ['', '1', '', '1'],
        Numpad2: ['', '2', '', '2'],
        Numpad3: ['', '3', '', '3'],
        Numpad4: ['', '4', '', '4'],
        Numpad5: ['', '5', '', '5'],
        Numpad6: ['', '6', '', '6'],
        Numpad7: ['', '7', '', '7'],
        Numpad8: ['', '8', '', '8'],
        Numpad9: ['', '9', '', '9'],
        Numpad0: ['', '0', '', '0'],
        NumpadDecimal: ['', '.', '', '.'],
        IntlBackslash: ['<', '>', '|', '??'],
        NumpadEqual: ['=', '=', '=', '='],
        NumpadComma: ['.', '.', '.', '.'],
        NumpadParenLeft: ['(', '(', '(', '('],
        NumpadParenRight: [')', ')', ')', ')'],
    },
});

register({
    id: 'linux.french',
    locale: 'fr',
    displayName: 'French',
    platform: 'apple',
    score: 0,
    mapping: {
        KeyA: ['q', 'Q', '@', '??'],
        KeyB: ['b', 'B', '???', '???'],
        KeyC: ['c', 'C', '??', '??'],
        KeyD: ['d', 'D', '??', '??'],
        KeyE: ['e', 'E', '???', '??'],
        KeyF: ['f', 'F', '??', '??'],
        KeyG: ['g', 'G', '??', '??'],
        KeyH: ['h', 'H', '??', '??'],
        KeyI: ['i', 'I', '???', '??'],
        KeyJ: ['j', 'J', '??', '??'],
        KeyK: ['k', 'K', '??', '&'],
        KeyL: ['l', 'L', '??', '??'],
        KeyM: [',', '?', '??', '??'],
        KeyN: ['n', 'N', 'n', 'N'],
        KeyO: ['o', 'O', '??', '??'],
        KeyP: ['p', 'P', '??', '??'],
        KeyQ: ['a', 'A', '??', '??'],
        KeyR: ['r', 'R', '??', '??'],
        KeyS: ['s', 'S', '??', '??'],
        KeyT: ['t', 'T', '??', '??'],
        KeyU: ['u', 'U', '???', '???'],
        KeyV: ['v', 'V', '???', '???'],
        KeyW: ['z', 'Z', '??', '<'],
        KeyX: ['x', 'X', '??', '>'],
        KeyY: ['y', 'Y', '???', '??'],
        KeyZ: ['w', 'W', '??', '??'],
        Digit1: ['&', '1', '??', '??'],
        Digit2: ['??', '2', '~', '???'],
        Digit3: ['"', '3', '#', '??'],
        Digit4: ["'", '4', '{', '$'],
        Digit5: ['(', '5', '[', '???'],
        Digit6: ['-', '6', '|', '???'],
        Digit7: ['??', '7', '`', '???'],
        Digit8: ['_', '8', '\\', '???'],
        Digit9: ['??', '9', '^', '??'],
        Digit0: ['??', '0', '@', '??'],
        Enter: ['\r', '\r', '\r', '\r'],
        Escape: ['\u001b', '\u001b', '\u001b', '\u001b'],
        Backspace: ['\b', '\b', '\b', '\b'],
        Tab: ['\t', '', '\t', ''],
        Space: [' ', ' ', ' ', ' '],
        Minus: [')', '??', ']', '??'],
        Equal: ['=', '+', '}', '??'],
        BracketLeft: ['??', '??', '??', '??'],
        BracketRight: ['$', '??', '??', '??'],
        Backslash: ['*', '??', '??', '??'],
        Semicolon: ['m', 'M', '??', '??'],
        Quote: ['??', '%', '??', '??'],
        Backquote: ['??', '~', '??', '??'],
        Comma: [';', '.', '???', '??'],
        Period: [':', '/', '??', '??'],
        Slash: ['!', '??', '??', '??'],
        NumpadMultiply: ['*', '*', '*', '*'],
        NumpadSubtract: ['-', '-', '-', '-'],
        NumpadAdd: ['+', '+', '+', '+'],
        NumpadDecimal: ['', '.', '', '.'],
        IntlBackslash: ['<', '>', '|', '??'],
    },
});

register({
    id: 'windows.french',
    locale: 'fr',
    displayName: 'French',
    platform: 'windows',
    score: 0,
    mapping: {
        KeyA: ['q', 'Q', '', ''],
        KeyB: ['b', 'B', '', ''],
        KeyC: ['c', 'C', '', ''],
        KeyD: ['d', 'D', '', ''],
        KeyE: ['e', 'E', '???', ''],
        KeyF: ['f', 'F', '', ''],
        KeyG: ['g', 'G', '', ''],
        KeyH: ['h', 'H', '', ''],
        KeyI: ['i', 'I', '', ''],
        KeyJ: ['j', 'J', '', ''],
        KeyK: ['k', 'K', '', ''],
        KeyL: ['l', 'L', '', ''],
        KeyM: [',', '?', '', ''],
        KeyN: ['n', 'N', '', ''],
        KeyO: ['o', 'O', '', ''],
        KeyP: ['p', 'P', '', ''],
        KeyQ: ['a', 'A', '', ''],
        KeyR: ['r', 'R', '', ''],
        KeyS: ['s', 'S', '', ''],
        KeyT: ['t', 'T', '', ''],
        KeyU: ['u', 'U', '', ''],
        KeyV: ['v', 'V', '', ''],
        KeyW: ['z', 'Z', '', ''],
        KeyX: ['x', 'X', '', ''],
        KeyY: ['y', 'Y', '', ''],
        KeyZ: ['w', 'W', '', ''],
        Digit1: ['&', '1', '', ''],
        Digit2: ['??', '2', '~', ''],
        Digit3: ['"', '3', '#', ''],
        Digit4: ["'", '4', '{', ''],
        Digit5: ['(', '5', '[', ''],
        Digit6: ['-', '6', '|', ''],
        Digit7: ['??', '7', '`', ''],
        Digit8: ['_', '8', '\\', ''],
        Digit9: ['??', '9', '^', ''],
        Digit0: ['??', '0', '@', ''],
        Space: [' ', ' ', '', ''],
        Minus: [')', '??', ']', ''],
        Equal: ['=', '+', '}', ''],
        BracketLeft: ['^', '??', '', ''],
        BracketRight: ['$', '??', '??', ''],
        Backslash: ['*', '??', '', ''],
        Semicolon: ['m', 'M', '', ''],
        Quote: ['??', '%', '', ''],
        Backquote: ['??', '', '', ''],
        Comma: [';', '.', '', ''],
        Period: [':', '/', '', ''],
        Slash: ['!', '??', '', ''],
        NumpadDivide: ['/', '/', '', ''],
        NumpadMultiply: ['*', '*', '', ''],
        NumpadSubtract: ['-', '-', '', ''],
        NumpadAdd: ['+', '+', '', ''],
        IntlBackslash: ['<', '>', '', ''],
    },
});

register({
    id: 'windows.german',
    locale: 'de',
    displayName: 'German',
    platform: 'windows',
    score: 0,
    mapping: {
        KeyA: ['a', 'A', '', ''],
        KeyB: ['b', 'B', '', ''],
        KeyC: ['c', 'C', '', ''],
        KeyD: ['d', 'D', '', ''],
        KeyE: ['e', 'E', '???', ''],
        KeyF: ['f', 'F', '', ''],
        KeyG: ['g', 'G', '', ''],
        KeyH: ['h', 'H', '', ''],
        KeyI: ['i', 'I', '', ''],
        KeyJ: ['j', 'J', '', ''],
        KeyK: ['k', 'K', '', ''],
        KeyL: ['l', 'L', '', ''],
        KeyM: ['m', 'M', '??', ''],
        KeyN: ['n', 'N', '', ''],
        KeyO: ['o', 'O', '', ''],
        KeyP: ['p', 'P', '', ''],
        KeyQ: ['q', 'Q', '@', ''],
        KeyR: ['r', 'R', '', ''],
        KeyS: ['s', 'S', '', ''],
        KeyT: ['t', 'T', '', ''],
        KeyU: ['u', 'U', '', ''],
        KeyV: ['v', 'V', '', ''],
        KeyW: ['w', 'W', '', ''],
        KeyX: ['x', 'X', '', ''],
        KeyY: ['z', 'Z', '', ''],
        KeyZ: ['y', 'Y', '', ''],
        Digit1: ['1', '!', '', ''],
        Digit2: ['2', '"', '??', ''],
        Digit3: ['3', '??', '??', ''],
        Digit4: ['4', '$', '', ''],
        Digit5: ['5', '%', '', ''],
        Digit6: ['6', '&', '', ''],
        Digit7: ['7', '/', '{', ''],
        Digit8: ['8', '(', '[', ''],
        Digit9: ['9', ')', ']', ''],
        Digit0: ['0', '=', '}', ''],
        Space: [' ', ' ', '', ''],
        Minus: ['??', '?', '\\', '???'],
        Equal: ['??', '`', '', ''],
        BracketLeft: ['??', '??', '', ''],
        BracketRight: ['+', '*', '~', ''],
        Backslash: ['#', "'", '', ''],
        Semicolon: ['??', '??', '', ''],
        Quote: ['??', '??', '', ''],
        Backquote: ['^', '??', '', ''],
        Comma: [',', ';', '', ''],
        Period: ['.', ':', '', ''],
        Slash: ['-', '_', '', ''],
        NumpadDivide: ['/', '/', '', ''],
        NumpadMultiply: ['*', '*', '', ''],
        NumpadSubtract: ['-', '-', '', ''],
        NumpadAdd: ['+', '+', '', ''],
        IntlBackslash: ['<', '>', '|', ''],
    },
});

register({
    id: 'apple.german',
    locale: 'de',
    displayName: 'German',
    platform: 'apple',
    score: 0,
    mapping: {
        KeyA: ['a', 'A', '??', '??'],
        KeyB: ['b', 'B', '???', '???'],
        KeyC: ['c', 'C', '??', '??'],
        KeyD: ['d', 'D', '???', '???'],
        KeyE: ['e', 'E', '???', '???'],
        KeyF: ['f', 'F', '??', '??'],
        KeyG: ['g', 'G', '??', '??'],
        KeyH: ['h', 'H', '??', '??'],
        KeyI: ['i', 'I', '???', '??'],
        KeyJ: ['j', 'J', '??', '??'],
        KeyK: ['k', 'K', '???', '??'],
        KeyL: ['l', 'L', '@', '???'],
        KeyM: ['m', 'M', '??', '??'],
        KeyN: ['n', 'N', '~', '???'],
        KeyO: ['o', 'O', '??', '??'],
        KeyP: ['p', 'P', '??', '???'],
        KeyQ: ['q', 'Q', '??', '??'],
        KeyR: ['r', 'R', '??', '??'],
        KeyS: ['s', 'S', '???', '??'],
        KeyT: ['t', 'T', '???', '??'],
        KeyU: ['u', 'U', '??', '??'],
        KeyV: ['v', 'V', '???', '???'],
        KeyW: ['w', 'W', '???', '???'],
        KeyX: ['x', 'X', '???', '??'],
        KeyY: ['z', 'Z', '??', '??'],
        KeyZ: ['y', 'Y', '??', '???'],
        Digit1: ['1', '!', '??', '??'],
        Digit2: ['2', '"', '???', '???'],
        Digit3: ['3', '??', '??', '#'],
        Digit4: ['4', '$', '??', '??'],
        Digit5: ['5', '%', '[', '???'],
        Digit6: ['6', '&', ']', '^'],
        Digit7: ['7', '/', '|', '\\'],
        Digit8: ['8', '(', '{', '??'],
        Digit9: ['9', ')', '}', '??'],
        Digit0: ['0', '=', '???', '??'],
        Space: [' ', ' ', ' ', ' '],
        Minus: ['??', '?', '??', '??'],
        Equal: ['??', '`', "'", '??'],
        BracketLeft: ['??', '??', '???', '??'],
        BracketRight: ['+', '*', '??', '???'],
        Backslash: ['#', "'", '???', '???'],
        Semicolon: ['??', '??', '??', '??'],
        Quote: ['??', '??', '??', '??'],
        Backquote: ['<', '>', '???', '???'],
        Comma: [',', ';', '???', '??'],
        Period: ['.', ':', '???', '??'],
        Slash: ['-', '_', '???', '???'],
        NumpadDivide: ['/', '/', '/', '/'],
        NumpadMultiply: ['*', '*', '*', '*'],
        NumpadSubtract: ['-', '-', '-', '-'],
        NumpadAdd: ['+', '+', '+', '+'],
        NumpadDecimal: [',', ',', '.', '.'],
        IntlBackslash: ['^', '??', '???', '???'],
        NumpadEqual: ['=', '=', '=', '='],
    },
});
