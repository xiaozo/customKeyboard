import { isArray } from '../common/types';

import { Context, ParseModePrivate } from './context';
import {
    Style,
    ParseMode,
    Variant,
    VariantStyle,
    FontShape,
    FontSeries,
} from '../public/core';
import {
    Span,
} from './span';

export type Notations = {
    downdiagonalstrike?: boolean;
    updiagonalstrike?: boolean;
    verticalstrike?: boolean;
    horizontalstrike?: boolean;
    right?: boolean;
    bottom?: boolean;
    left?: boolean;
    top?: boolean;
    circle?: boolean;
    roundedbox?: boolean;
    madruwb?: boolean;
    actuarial?: boolean;
    box?: boolean;
};
export type AtomType =
    | ''
    | 'array'
    | 'box'
    | 'command'
    | 'composition' // IME composition area
    | 'delim'
    | 'enclose'
    | 'error'
    | 'first'
    | 'genfrac'
    | 'group'
    | 'leftright'
    | 'mathstyle' // @revisit
    | 'mbin'
    | 'mclose'
    | 'minner'
    | 'mop'
    | 'mopen'
    | 'mord'
    | 'mpunct'
    | 'mrel'
    | 'msubsup'
    | 'none' // @revisit
    | 'overlap'
    | 'overunder'
    | 'placeholder'
    | 'root'
    | 'rule'
    | 'sizeddelim'
    | 'space'
    | 'spacing'
    | 'surd'
    | 'textord';

export type Colspec = {
    gap?: number | Atom[];
    // 'm' is a special alignement for multline: left on first row, right on last
    // row, centered otherwise
    align?: 'l' | 'c' | 'r' | 'm';
    rule?: boolean;
};
export type BBoxParam = {
    backgroundcolor?: string;
    padding?: number;
    border?: string;
};

export const ATOM_REGISTRY = {};

// A table of size -> font size for the different sizing functions
const SIZING_MULTIPLIER = {
    size1: 0.5,
    size2: 0.7,
    size3: 0.8,
    size4: 0.9,
    size5: 1.0,
    size6: 1.2,
    size7: 1.44,
    size8: 1.73,
    size9: 2.07,
    size10: 2.49,
};

/**
 * An atom is an object encapsulating an elementary mathematical unit,
 * independent of its graphical representation.
 *
 * It keeps track of the content, while the dimensions, position and style
 * are tracked by Span objects which are created by the `decompose()` functions.
 *
 * @param style A set of additional properties to append to
 * the atom
 * @property mode - `'display'`, `'command'`, etc...
 * @property type - Type can be one of:
 * - `mord`: ordinary symbol, e.g. `x`, `\alpha`
 * - `textord`: ordinary characters
 * - `mop`: operators, including special functions, `\sin`, `\sum`, `\cap`.
 * - `mbin`: binary operator: `+`, `*`, etc...
 * - `mrel`: relational operator: `=`, `\ne`, etc...
 * - `mpunct`: punctuation: `,`, `:`, etc...
 * - `mopen`: opening fence: `(`, `\langle`, etc...
 * - `mclose`: closing fence: `)`, `\rangle`, etc...
 * - `minner`: special layout cases, overlap, `\left...\right`
 *
 * In addition to these basic types, which correspond to the TeX atom types,
 * some atoms represent more complex compounds, including:
 * - `space` and `spacing`: blank space between atoms
 * - `mathstyle`: to change the math style used: `display` or `text`.
 * The layout rules are different for each, the latter being more compact and
 * intended to be incorporated with surrounding non-math text.
 * - `root`: a group, which has no parent (only one per formula)
 * - `group`: a simple group of atoms, for example from a `{...}`
 * - `sizing`: set the size of the font used
 * - `rule`: draw a line, for the `\rule` command
 * - `line`: used by `\overline` and `\underline` commands
 * - `box`: a border drawn around an expression and change its background color
 * - `overlap`: display a symbol _over_ another
 * - `overunder`: displays an annotation above or below a symbol
 * - `array`: a group, which has children arranged in rows. Used
 * by environments such as `matrix`, `cases`, etc...
 * - `genfrac`: a generalized fraction: a numerator and denominator, separated
 * by an optional line, and surrounded by optional fences
 * - `surd`: a surd, aka root
 * - `leftright`: used by the `\left` and `\right` commands
 * - `delim`: some delimiter
 * - `sizeddelim`: a delimiter that can grow
 *
 * The following types are used by the editor:
 * - `command` indicate a command being entered. The text is displayed in
 * blue in the editor.
 * - `error`: indicate a command that is unknown, for example `\xyzy`. The text
 * is displayed with a wavy red underline in the editor.
 * - `placeholder`: indicate a temporary item. Placeholders are displayed
 * as a dashed square in the editor.
 * - `first`: a special, empty, atom put as the first atom in math lists in
 * order to be able to position the caret before the first element. Aside from
 * the caret, they display nothing.
 *
 * @property captureSelection if true, this atom does not let its
 * children be selected. Used by the `\enclose` annotations, for example.
 *
 * @property skipBoundary if true, when the caret reaches the
 * first position in this element's body, it automatically moves to the
 * outside of the element. Conversely, when the caret reaches the position
 * right after this element, it automatically moves to the last position
 * inside this element.
 */
export class Atom implements Style {
    mode: ParseModePrivate;
    type: AtomType;
    latex?: string;
    symbol?: string; // Latex command ('\sin') or character ('a')
    readonly isSymbol?: boolean;
    isFunction?: boolean;
    isError?: boolean; // Indicate an unknown command
    isSuggestion?: boolean; // This atom is a suggestion
    isPhantom?: boolean;
    readonly skipBoundary?: boolean;
    captureSelection?: boolean;

    isSelected?: boolean;
    containsCaret: boolean; // If the atom or one of its descendant includes the caret
    caret: ParseMode | '';

    latexOpen?: string; // type = 'group'
    latexClose?: string; // type = 'group'

    body?: string | Atom[];
    readonly codepoint?: number; // type = 'mord'

    readonly accent?: string; // type = 'accent'
    readonly svgAccent?: string; // type = 'accent'
    readonly svgBody?: string;
    readonly svgAbove?: string; // type = 'overunder'
    readonly svgBelow?: string; // type = 'overunder'

    index?: Atom[]; // type = 'surd'

    denom?: Atom[]; // type = 'genfrac'
    numer?: Atom[]; // type = 'genfrac'
    readonly numerPrefix?: string; // type = 'genfrac'
    readonly denomPrefix?: string; // type = 'genfrac'
    readonly continuousFraction?: boolean; // type = 'genfrac'
    readonly hasBarLine?: boolean; // type = 'genfrac'

    subscript?: Atom[];
    superscript?: Atom[];
    underscript?: Atom[];
    overscript?: Atom[];

    readonly position: string; // type = 'line'

    limits?: 'limits' | 'nolimits' | 'accent' | 'overunder';
    explicitLimits?: boolean; // True if the limits were set by a command

    // type = 'array'
    array?: Atom[][][]; // type = 'array'
    environmentName?: string; // type = 'array'
    readonly arraystretch?: number;
    readonly arraycolsep?: number;
    readonly jot?: number;
    rowGaps?: number[]; // type = 'array'
    // env: { name: string; tabular: boolean }; // type = 'array'
    readonly colFormat?: Colspec[]; // when type = 'array', formating of columns

    inner?: boolean;
    leftDelim?: string;
    rightDelim?: string;

    private size?: 1 | 2 | 3 | 4; // type = 'sizeddelim' @revisit Use maxFontSize? or fontSize?
    readonly delim?: string; // type = 'sizeddelim'

    readonly framecolor?: string; // type = 'box'
    readonly verbatimFramecolor?: string; // type = 'box'
    readonly backgroundcolor?: string; // type = 'box'
    readonly verbatimBackgroundcolor?: string; // type = 'box'
    readonly padding?: number; // type = 'box'
    readonly border?: string; // type = 'box'

    readonly notation?: Notations; // when type = 'enclose'
    readonly shadow?: string; // when type = 'enclose', CSS shadow
    readonly strokeWidth?: number; // when type = 'enclose'
    readonly strokeStyle?: string; // when type = 'enclose', CSS string
    readonly svgStrokeStyle?: string; // when type = 'enclose', CSS string
    readonly strokeColor?: string; // when type = 'enclose', CSS string
    readonly borderStyle?: string; // when type = 'enclose', CSS string

    readonly shift?: number; // type = 'rule'
    private depth?: number; // type = 'rule'
    readonly height?: number; // type = 'rule' (and others?)
    width?: number; // type = 'rule' (and others?)

    readonly phantomType?:
        | 'phantom'
        | 'vphantom'
        | 'hphantom'
        | 'smash'
        | 'bsmash'
        | 'tsmash'; //  type = 'phantom'

    private maxFontSize?: number;
    private align?: 'left' | 'right'; // type = 'overlap'

    mathstyle?:
        | 'auto'
        | 'displaystyle'
        | 'textstyle'
        | 'scriptstyle'
        | 'scriptscriptstyle'; // type = 'genfrac', ''

    // private cls?: SpanType;

    // Style
    color?: string;
    backgroundColor?: string;
    variant?: Variant;
    variantStyle?: VariantStyle;
    fontFamily?: string;
    fontShape?: FontShape;
    fontSeries?: FontSeries;
    fontSize?: string;
    cssId?: string;
    cssClass?: string;
    letterShapeStyle?: 'tex' | 'french' | 'iso' | 'upright' | 'auto';

    id?: string;

    constructor(
        mode: ParseModePrivate,
        type: AtomType,
        body: string | Atom[] = '',
        style: Style = {}
    ) {
        console.assert(type === 'first' || Boolean(mode));
        this.mode = mode;
        this.type = type;
        this.body = body;

        if (style.isPhantom) {
            this.setPhantom(true);
        }

        // Append all the properties in extras to this
        // This can override the mode, type and body
        this.applyStyle(style);
    }

    applyStyle(style: Style): void {
        Object.assign(this, style);

        if (this.fontFamily === 'none') {
            this.fontFamily = '';
        }
        if (this.fontShape === 'auto') {
            this.fontShape = '';
        }
        if (this.fontSeries === 'auto') {
            this.fontSeries = '';
        }
        if (this.color === 'none') {
            this.color = '';
        }
        if (this.backgroundColor === 'none') {
            this.backgroundColor = '';
        }
        if (this.fontSize === 'auto') {
            this.fontSize = '';
        }

        if (this.fontSize) {
            this.maxFontSize = SIZING_MULTIPLIER[this.fontSize];
        }

        if (this.mode === 'text') {
            // @revisit. Use type = 'text' for text atoms?
            // A root can be in text mode (root created when creating a representation
            // of the selection, for copy/paste for example)
            if (this.type !== 'root') this.type = '';
        }
    }

    setPhantom(isPhantom: boolean): void {
        // this.isPhantom = isPhantom;
        this.forEach((x) => {
            x.isPhantom = isPhantom;
        });
    }

    // /**
    //  * Iterate over all the child atoms of this atom, this included,
    //  * and invoke the cb callback.
    //  */
    forEach(cb: (atom: Atom) => void): void {
        cb(this);
        if (isArray(this.body)) {
            for (const atom of this.body) if (atom) atom.forEach(cb);
        } else if (this.body && typeof this.body === 'object') {
            // Note: body can be null, for example 'first' or 'rule'
            // (and null is an object)
            cb(this.body);
        }
        if (this.superscript) {
            for (const atom of this.superscript) if (atom) atom.forEach(cb);
        }
        if (this.subscript) {
            for (const atom of this.subscript) if (atom) atom.forEach(cb);
        }
        if (this.overscript) {
            for (const atom of this.overscript) if (atom) atom.forEach(cb);
        }
        if (this.underscript) {
            for (const atom of this.underscript) if (atom) atom.forEach(cb);
        }
        if (this.numer) {
            for (const atom of this.numer) if (atom) atom.forEach(cb);
        }
        if (this.denom) {
            for (const atom of this.denom) if (atom) atom.forEach(cb);
        }
        if (this.index) {
            for (const atom of this.index) if (atom) atom.forEach(cb);
        }
        if (this.array) {
            for (const row of this.array) {
                for (const cell of row) {
                    for (const atom of cell) atom.forEach(cb);
                }
            }
        }
    }


    /**
     * Add an ID attribute to both the span and this atom so that the atom
     * can be retrieved from the span later on (e.g. when the span is clicked on)
     */
    bind(context: Context, span: Span): Span {
        if (this.type !== 'first' && this.body !== '\u200b') {
            this.id = makeID(context);
            if (this.id) {
                if (!span.attributes) span.attributes = {};
                span.attributes['data-atom-id'] = this.id;
            }
        }
        return span;
    }

}

function makeID(context: Context): string {
    let result: string;
    if (context.atomIdsSettings) {
        if (typeof context.atomIdsSettings.seed === 'number') {
            result = context.atomIdsSettings.overrideID
                ? context.atomIdsSettings.overrideID
                : context.atomIdsSettings.seed.toString(36);
            context.atomIdsSettings.seed += 1;
        } else {
            result =
                Date.now().toString(36).slice(-2) +
                Math.floor(Math.random() * 0x186a0).toString(36);
        }
    }
    return result;
}
