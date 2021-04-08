import { ParseModePrivate } from './context';
import { Atom, AtomType, Notations, Colspec, BBoxParam } from './atom-utils';
import {
    Variant,
    VariantStyle,
    FontSeries,
    FontShape,
    MacroDictionary,
} from '../public/core';

export type FunctionArgumentDefiniton = {
    isOptional: boolean;
    type: ParseModePrivate;
};

export type FunctionDefinition = {
    params: FunctionArgumentDefiniton[];
    mode: ParseModePrivate;
    infix: boolean;
    parse: ParseFunction;
    emit: EmitFunction;
    isFunction: boolean;
};

type EnvironmentDefinition = {
    /* If true, the 'content' of the environment is parsed in tabular mode,
        i.e. wiht '&' creating a new column and '\\' creating a new row */
    tabular: boolean;
    params: FunctionArgumentDefiniton[];
    parser: ParseEnvironmentFunction;
};

export type SymbolDefinition = {
    type: AtomType;
    value: string;
    variant: Variant;
    variantStyle: VariantStyle;
};

export const MATH_SYMBOLS = {};
// Map a character to some corresponding Latex
// This is used for some characters such as ² SUPERSCRIPT TWO.
// This is also an opportunity to specify the prefered form when
// a unicode character is encountered that maps to multiple commands,
// for example ≠ could map either to \ne or \neq
// The table will also be populated by any registered symbol
// from MATH_SYMBOLS
// prettier-ignore
export const REVERSE_MATH_SYMBOLS = {
    '<': '<',   // Also \lt
    '>': '>',   // Also \gt
    'o': 'o',    // Also \omicron
    '&': '\\&',  // Also \And
    '{': '\\{',  // Also \lbrace
    '}': '\\}',  // Also \rbrace
    '[': '\\lbrack',
    ']': '\\rbrack',
    ':': '\\colon', // Also :

    '\u00a0': '~', // Also \space
    '\u00ac': '\\neg',  // Also \lnot

    '\u00b7': '\\cdot',
    '\u00bc': '\\frac{1}{4}',
    '\u00bd': '\\frac{1}{2}',
    '\u00be': '\\frac{3}{4}',
    '\u2070': '^{0}',
    '\u2071': '^{i}', // eslint-disable-line
    '\u00b9': '^{1}',
    '\u00b2': '^{2}',
    '\u00b3': '^{3}',

    '\u2020': '\\dagger', // Also \dag
    '\u2021': '\\ddagger', // Also \ddag
    '\u2026': '\\ldots',    // Also \mathellipsis

    '\u2074': '^{4}',
    '\u2075': '^{5}',
    '\u2076': '^{6}',
    '\u2077': '^{7}',
    '\u2078': '^{8}',
    '\u2079': '^{9}',
    '\u207a': '^{+}',
    '\u207b': '^{-}',
    '\u207c': '^{=}',
    '\u207f': '^{n}', // eslint-disable-line
    '\u2080': '_{0}',
    '\u2081': '_{1}',
    '\u2082': '_{2}',
    '\u2083': '_{3}',
    '\u2084': '_{4}',
    '\u2085': '_{5}',
    '\u2086': '_{6}',
    '\u2087': '_{7}',
    '\u2088': '_{8}',
    '\u2089': '_{9}',
    '\u208a': '_{+}',
    '\u208b': '_{-}',
    '\u208c': '_{=}',
    '\u2090': '_{a}',// eslint-disable-line
    '\u2091': '_{e}',// eslint-disable-line
    '\u2092': '_{o}',// eslint-disable-line
    '\u2093': '_{x}',// eslint-disable-line

    '\u2032': '\\prime',
    '\'': '\\prime',

    '\u2190': '\\gets', // Also \leftarrow
    '\u2192': '\\to',   // Also \rightarrow

    '\u25b3': '\\triangle', // Also \bigtriangleup, \vartriangle
    '\u25bd': '\\triangledown',

    '\u220b': '\\owns', // Also \ni
    '\u2217': '\\ast',  // Also *
    '\u2223': '\\vert',  // Also |, \mvert, \lvert, \rvert
    '\u2225': '\\Vert',  // Also \parallel \shortparallel

    '\u2227': '\\land', // Also \wedge
    '\u2228': '\\lor', // Also \vee

    '\u22c5': '\\cdot', // Also \centerdot, \cdotp
    '\u22c8': '\\bowtie', // Also \Joint

    '\u2260': '\\ne',   // Also \neq
    '\u2264': '\\le',   // Also \leq
    '\u2265': '\\ge',   // Also \geq
    '\u22a5': '\\bot', // Also \perp

    '\u27f7': '\\biconditional',    // Also longleftrightarrow
    '\u27f8': '\\impliedby', // Also \Longleftarrow
    '\u27f9': '\\implies', // Also \Longrightarrow

    '\u2102': '\\C',    // Also \doubleStruckCapitalC
    '\u2115': '\\N',    // Also \doubleStruckCapitalN
    '\u2119': '\\P',    // Also \doubleStruckCapitalP
    '\u211a': '\\Q',    // Also \doubleStruckCapitalQ
    '\u211d': '\\R',    // Also \doubleStruckCapitalR
    '\u2124': '\\Z',    // Also \doubleStruckCapitalZ
};
export const FUNCTIONS = {};

export const ENVIRONMENTS: { [name: string]: EnvironmentDefinition } = {};

type EmitFunction = (
    name: string,
    parent: Atom,
    atom: Atom,
    emit: (parent: Atom, atoms: Atom[]) => string
) => string;

export type ParseFunctionResult = {
    type?: string;

    mode?: ParseModePrivate;
    mathstyle?:
    | 'auto'
    | 'textstyle'
    | 'displaystyle'
    | 'scriptstyle'
    | 'scriptscriptstyle';

    skipBoundary?: boolean;
    captureSelection?: boolean;

    body?: string | Atom[];
    svgBelow?: string; // type = 'overunder'

    limits?: 'limits' | 'nolimits' | 'accent' | 'overunder' | 'auto';
    accent?: string;

    latexOpen?: string; // type = 'group'
    latexClose?: string; // type = 'group'
    color?: string; // type = ''
    verbatimBackgroundcolor?: string;
    backgroundcolor?: string;
    framecolor?: string;
    verbatimFramecolor?: string;
    fontSize?:
    | 'size1'
    | 'size2'
    | 'size3'
    | 'size4'
    | 'size5'
    | 'size6'
    | 'size7'
    | 'size8'
    | 'size9'
    | 'size10';
    fontSeries?: FontSeries;
    fontShape?: FontShape;
    fontFamily?: string;
    variant?: Variant;
    variantStyle?: VariantStyle;

    cssClass?: string;
    cssId?: string;
    isFunction?: boolean;
    isSymbol?: boolean;

    size?: string; // type = 'sizeddelim'
    cls?: string; // type = 'sizeddelim'    @revisit: use cssClass?
    delim?: string;

    // type = 'genfrac'
    hasBarLine?: boolean;
    leftDelim?: string;
    rightDelim?: string;
    numer?: Atom[];
    denom?: Atom[];
    continuousFraction?: boolean;
    numerPrefix?: string;
    denomPrefix?: string;

    // type = 'enclose'
    notation?: Notations;
    borderStyle?: string;
    padding?: number | string;
    svgStrokeStyle?: string;
    strokeColor?: string;
    strokeWidth?: number;
    strokeStyle?: string;
    shadow?: string;
};

type ParseFunction = (
    name: string,
    args: (string | number | BBoxParam | Colspec[] | Atom[])[]
) => ParseFunctionResult;

export type ParseEnvironmentResult = {
    // params: FunctionArgumentDefiniton[];
    // parser: ParseFunction;
    mathstyle?:
    | 'displaystyle'
    | 'textstyle'
    | 'scriptstyle'
    | 'scriptscriptstyle';
    colFormat?: Colspec[];
    leftDelim?: string;
    rightDelim?: string;
    jot?: number; // Jot is an extra gap between lines of numbered equation.
    // It's 3pt by default in LaTeX (ltmath.dtx:181)
    arraystretch?: number;
    arraycolsep?: number;
};
type ParseEnvironmentFunction = (
    name: string,
    args: (string | number | BBoxParam | Colspec[] | Atom[])[],
    arrray: Atom[][][]
) => ParseEnvironmentResult;

export const MACROS: MacroDictionary = {
    iff: '\\;\u27fa\\;', //>2,000 Note: additional spaces around the arrows
    nicefrac: '^{#1}\\!\\!/\\!_{#2}',

    // From bracket.sty, Dirac notation
    bra: '\\mathinner{\\langle{#1}|}',
    ket: '\\mathinner{|{#1}\\rangle}',
    braket: '\\mathinner{\\langle{#1}\\rangle}',
    set: '\\mathinner{\\lbrace #1 \\rbrace}',
    Bra: '\\left\\langle #1\\right|',
    Ket: '\\left|#1\\right\\rangle',
    Braket: '\\left\\langle{#1}\\right\\rangle',
    Set: '\\left\\lbrace #1 \\right\\rbrace',

    // Proof Wiki
    rd: '\\mathrm{d}',
    rD: '\\mathrm{D}',

    // From Wolfram Alpha
    doubleStruckCapitalN: '\\mathbb{N}',
    doubleStruckCapitalR: '\\mathbb{R}',
    doubleStruckCapitalQ: '\\mathbb{Q}',
    doubleStruckCapitalZ: '\\mathbb{Z}',
    doubleStruckCapitalP: '\\mathbb{P}',

    scriptCapitalE: '\\mathscr{E}',
    scriptCapitalH: '\\mathscr{H}',
    scriptCapitalL: '\\mathscr{L}',
    gothicCapitalC: '\\mathfrak{C}',
    gothicCapitalH: '\\mathfrak{H}',
    gothicCapitalI: '\\mathfrak{I}',
    gothicCapitalR: '\\mathfrak{R}',

    imaginaryI: '\\mathrm{i}', // NOTE: set in main (upright) as per ISO 80000-2:2009.
    imaginaryJ: '\\mathrm{j}', // NOTE: set in main (upright) as per ISO 80000-2:2009.

    exponentialE: '\\mathrm{e}', // NOTE: set in main (upright) as per ISO 80000-2:2009.
    differentialD: '\\mathrm{d}', // NOTE: set in main (upright) as per ISO 80000-2:2009.
    capitalDifferentialD: '\\mathrm{D}', // NOTE: set in main (upright) as per ISO 80000-2:2009.
};

export const RIGHT_DELIM = {
    '(': ')',
    '{': '}',
    '[': ']',
    '|': '|',
    '\\lbrace': '\\rbrace',
    '\\{': '\\}',
    '\\langle': '\\rangle',
    '\\lfloor': '\\rfloor',
    '\\lceil': '\\rceil',
    '\\vert': '\\vert',
    '\\lvert': '\\rvert',
    '\\Vert': '\\Vert',
    '\\lVert': '\\rVert',
    '\\lbrack': '\\rbrack',
    '\\ulcorner': '\\urcorner',
    '\\llcorner': '\\lrcorner',
    '\\lgroup': '\\rgroup',
    '\\lmoustache': '\\rmoustache',
};

// Body-text symbols
// See http://ctan.mirrors.hoobly.com/info/symbols/comprehensive/symbols-a4.pdf, p14

export const TEXT_SYMBOLS = {
    '\\#': '\u0023',
    '\\&': '\u0026',
    '\\$': '$',
    '\\%': '%',
    '\\_': '_',
    '\\euro': '\u20AC',
    '\\maltese': '\u2720',
    '\\{': '{',
    '\\}': '}',
    '\\nobreakspace': '\u00A0',
    '\\ldots': '\u2026',
    '\\textellipsis': '\u2026',
    '\\backslash': '\\',
    '`': '\u2018',
    "'": '\u2019',
    '``': '\u201c',
    "''": '\u201d',
    '\\degree': '\u00b0',
    '\\textasciicircum': '^',
    '\\textasciitilde': '~',
    '\\textasteriskcentered': '*',
    '\\textbackslash': '\\',
    '\\textbraceleft': '{',
    '\\textbraceright': '}',
    '\\textbullet': '•',
    '\\textdollar': '$',
    '\\textsterling': '£',
    '\\textdagger': '\u2020',
    '\\textdaggerdbl': '\u2021',

    '–': '\u2013', // EN DASH
    '—': '\u2014', // EM DASH
    '‘': '\u2018', // LEFT SINGLE QUOTATION MARK
    '’': '\u2019', // RIGHT SINGLE QUOTATION MARK
    '“': '\u201C', // LEFT DOUBLE QUOTATION MARK
    '”': '\u201D', // RIGHT DOUBLE QUOTATION MARK
    '"': '\u201D', // DOUBLE PRIME
    '\\ss': '\u00df', // LATIN SMALL LETTER SHARP S
    '\\ae': '\u00E6', // LATIN SMALL LETTER AE
    '\\oe': '\u0153', // LATIN SMALL LIGATURE OE
    '\\AE': '\u00c6', // LATIN CAPITAL LETTER AE
    '\\OE': '\u0152', // LATIN CAPITAL LIGATURE OE
    '\\O': '\u00d8', // LATIN CAPITAL LETTER O WITH STROKE
    '\\i': '\u0131', // LATIN SMALL LETTER DOTLESS I
    '\\j': '\u0237', // LATIN SMALL LETTER DOTLESS J
    '\\aa': '\u00e5', // LATIN SMALL LETTER A WITH RING ABOVE
    '\\AA': '\u00c5', // LATIN CAPITAL LETTER A WITH RING ABOVE
};

// export const COMMAND_MODE_CHARACTERS = /[a-zA-Z0-9!@*()-=+{}[\]\\';:?/.,~<>`|'$%#&^_" ]/;

// Word boundaries for Cyrillic, Polish, French, German, Italian
// and Spanish. We use \p{L} (Unicode property escapes: "Letter")
// but Firefox doesn't support it
// (https://bugzilla.mozilla.org/show_bug.cgi?id=1361876). Booo...
// See also https://stackoverflow.com/questions/26133593/using-regex-to-match-international-unicode-alphanumeric-characters-in-javascript
// export const LETTER =
//     typeof navigator !== 'undefined' &&
//     /firefox|edge|Trident/i.test(navigator.userAgent)
//         ? /[a-zA-ZаАбБвВгГдДеЕёЁжЖзЗиИйЙкКлЛмМнНоОпПрРсСтТуУфФхХцЦчЧшШщЩъЪыЫьЬэЭюЮяĄąĆćĘęŁłŃńÓóŚśŹźŻżàâäôéèëêïîçùûüÿæœÀÂÄÔÉÈËÊÏÎŸÇÙÛÜÆŒäöüßÄÖÜẞàèéìíîòóùúÀÈÉÌÍÎÒÓÙÚáéíñóúüÁÉÍÑÓÚÜ]/
//         : new RegExp('\\p{Letter}', 'u');

// export const LETTER_AND_DIGITS =
//     typeof navigator !== 'undefined' &&
//     /firefox|edge|Trident/i.test(navigator.userAgent)
//         ? /[0-9a-zA-ZаАбБвВгГдДеЕёЁжЖзЗиИйЙкКлЛмМнНоОпПрРсСтТуУфФхХцЦчЧшШщЩъЪыЫьЬэЭюЮяĄąĆćĘęŁłŃńÓóŚśŹźŻżàâäôéèëêïîçùûüÿæœÀÂÄÔÉÈËÊÏÎŸÇÙÛÜÆŒäöüßÄÖÜẞàèéìíîòóùúÀÈÉÌÍÎÒÓÙÚáéíñóúüÁÉÍÑÓÚÜ]/
//         : new RegExp('[0-9\\p{Letter}]', 'u');

/**
 * @param symbol    The LaTeX command for this symbol, for
 * example `\alpha` or `+`
 */
export function defineSymbol(
    symbol: string,
    value: string,
    type: AtomType = 'mord',
    variant: Variant | '' = ''
): void {
    MATH_SYMBOLS[symbol] = {
        type,
        variant,
        value,
    };
    if (!REVERSE_MATH_SYMBOLS[value] && !variant) {
        REVERSE_MATH_SYMBOLS[value] = symbol;
    }
    // We accept all math symbols in text mode as well
    // which is a bit more permissive than TeX
    TEXT_SYMBOLS[symbol] = value;
}

/**
 * Define a set of single-character symbols as 'mord' symbols.
 * @param string a string of single character symbols
 */
export function defineSymbols(string: string): void {
    for (let i = 0; i < string.length; i++) {
        const ch = string.charAt(i);
        defineSymbol(ch, ch);
    }
}

/**
 * Define a set of single-character symbols as a range of Unicode codepoints
 * @param from First Unicode codepoint
 * @param to Last Unicode codepoint
 */
export function defineSymbolRange(from: number, to: number): void {
    for (let i = from; i <= to; i++) {
        const ch = String.fromCodePoint(i);
        defineSymbol(ch, ch);
    }
}

/**
 * Given a character, return a LaTeX expression matching its Unicode codepoint.
 * If there is a matching symbol (e.g. \alpha) it is returned.
 */
export function charToLatex(parseMode: ParseModePrivate, s: string): string {
    if (parseMode === 'math') {
        return REVERSE_MATH_SYMBOLS[s] || s;
    }
    if (parseMode === 'text') {
        let textSymbol = Object.keys(TEXT_SYMBOLS).find(
            (x) => TEXT_SYMBOLS[x] === s
        );
        if (!textSymbol) {
            const hex = s.codePointAt(0).toString(16);
            textSymbol = '^'.repeat(hex.length) + hex;
        }
        return textSymbol;
    }
    return s;
}

/* Some symbols in the MATHEMATICAL ALPHANUMERICAL SYMBOLS block had
   been previously defined in other blocks. Remap them */
const MATH_LETTER_EXCEPTIONS = {
    0x1d455: 0x0210e,
    0x1d49d: 0x0212c,
    0x1d4a0: 0x02130,
    0x1d4a1: 0x02131,
    0x1d4a3: 0x0210b,
    0x1d4a4: 0x02110,
    0x1d4a7: 0x02112,
    0x1d4a8: 0x02133,
    0x1d4ad: 0x0211b,
    0x1d4ba: 0x0212f,
    0x1d4bc: 0x0210a,
    0x1d4c4: 0x02134,
    0x1d506: 0x0212d,
    0x1d50b: 0x0210c,
    0x1d50c: 0x02111,
    0x1d515: 0x0211c,
    0x1d51d: 0x02128,
    0x1d53a: 0x02102,
    0x1d53f: 0x0210d,
    0x1d545: 0x02115,
    0x1d547: 0x02119,
    0x1d548: 0x0211a,
    0x1d549: 0x0211d,
    0x1d551: 0x02124,
};

// const MATH_UNICODE_BLOCKS = [
//     { start: 0x1d400, len: 26, offset: 65, style: 'bold' },
//     { start: 0x1d41a, len: 26, offset: 97, style: 'bold' },
//     { start: 0x1d434, len: 26, offset: 65, style: 'italic' },
//     { start: 0x1d44e, len: 26, offset: 97, style: 'italic' },
//     { start: 0x1d468, len: 26, offset: 65, style: 'bolditalic' },
//     { start: 0x1d482, len: 26, offset: 97, style: 'bolditalic' },

//     { start: 0x1d49c, len: 26, offset: 65, variant: 'script' },
//     { start: 0x1d4b6, len: 26, offset: 97, variant: 'script' },
//     { start: 0x1d4d0, len: 26, offset: 65, variant: 'script', style: 'bold' },
//     { start: 0x1d4ea, len: 26, offset: 97, variant: 'script', style: 'bold' },

//     { start: 0x1d504, len: 26, offset: 65, variant: 'fraktur' },
//     { start: 0x1d51e, len: 26, offset: 97, variant: 'fraktur' },
//     { start: 0x1d56c, len: 26, offset: 65, variant: 'fraktur', style: 'bold' },
//     { start: 0x1d586, len: 26, offset: 97, variant: 'fraktur', style: 'bold' },

//     { start: 0x1d538, len: 26, offset: 65, variant: 'double-struck' },
//     { start: 0x1d552, len: 26, offset: 97, variant: 'double-struck' },

//     { start: 0x1d5a0, len: 26, offset: 65, variant: 'sans-serif' },
//     { start: 0x1d5ba, len: 26, offset: 97, variant: 'sans-serif' },
//     {
//         start: 0x1d5d4,
//         len: 26,
//         offset: 65,
//         variant: 'sans-serif',
//         style: 'bold',
//     },
//     {
//         start: 0x1d5ee,
//         len: 26,
//         offset: 97,
//         variant: 'sans-serif',
//         style: 'bold',
//     },
//     {
//         start: 0x1d608,
//         len: 26,
//         offset: 65,
//         variant: 'sans-serif',
//         style: 'italic',
//     },
//     {
//         start: 0x1d622,
//         len: 26,
//         offset: 97,
//         variant: 'sans-serif',
//         style: 'italic',
//     },
//     {
//         start: 0x1d63c,
//         len: 26,
//         offset: 65,
//         variant: 'sans-serif',
//         style: 'bolditalic',
//     },
//     {
//         start: 0x1d656,
//         len: 26,
//         offset: 97,
//         variant: 'sans-serif',
//         style: 'bolditalic',
//     },

//     { start: 0x1d670, len: 26, offset: 65, variant: 'monospace' },
//     { start: 0x1d68a, len: 26, offset: 97, variant: 'monospace' },

//     { start: 0x1d6a8, len: 25, offset: 0x391, style: 'bold' },
//     { start: 0x1d6c2, len: 25, offset: 0x3b1, style: 'bold' },
//     { start: 0x1d6e2, len: 25, offset: 0x391, style: 'italic' },
//     { start: 0x1d6fc, len: 25, offset: 0x3b1, style: 'italic' },
//     { start: 0x1d71c, len: 25, offset: 0x391, style: 'bolditalic' },
//     { start: 0x1d736, len: 25, offset: 0x3b1, style: 'bolditalic' },
//     {
//         start: 0x1d756,
//         len: 25,
//         offset: 0x391,
//         variant: 'sans-serif',
//         style: 'bold',
//     },
//     {
//         start: 0x1d770,
//         len: 25,
//         offset: 0x3b1,
//         variant: 'sans-serif',
//         style: 'bold',
//     },
//     {
//         start: 0x1d790,
//         len: 25,
//         offset: 0x391,
//         variant: 'sans-serif',
//         style: 'bolditalic',
//     },
//     {
//         start: 0x1d7aa,
//         len: 25,
//         offset: 0x3b1,
//         variant: 'sans-serif',
//         style: 'bolditalic',
//     },

//     { start: 0x1d7ce, len: 10, offset: 48, variant: '', style: 'bold' },
//     { start: 0x1d7d8, len: 10, offset: 48, variant: 'double-struck' },
//     { start: 0x1d7e3, len: 10, offset: 48, variant: 'sans-serif' },
//     {
//         start: 0x1d7ec,
//         len: 10,
//         offset: 48,
//         variant: 'sans-serif',
//         style: 'bold',
//     },
//     { start: 0x1d7f6, len: 10, offset: 48, variant: 'monospace' },
// ];

function unicodeToMathVariant(
    codepoint: number
): { char: string; variant?: string; style?: string } {
    if (
        (codepoint < 0x1d400 || codepoint > 0x1d7ff) &&
        (codepoint < 0x2100 || codepoint > 0x214f)
    ) {
        return { char: String.fromCodePoint(codepoint) };
    }

    // Handle the 'gap' letters by converting them back into their logical range
    for (const c in MATH_LETTER_EXCEPTIONS) {
        if (Object.prototype.hasOwnProperty.call(MATH_LETTER_EXCEPTIONS, c)) {
            if (MATH_LETTER_EXCEPTIONS[c] === codepoint) {
                codepoint = c.codePointAt(0) ?? 0;
                break;
            }
        }
    }

    // for (let i = 0; i < MATH_UNICODE_BLOCKS.length; i++) {
    //     if (
    //         codepoint >= MATH_UNICODE_BLOCKS[i].start &&
    //         codepoint <
    //         MATH_UNICODE_BLOCKS[i].start + MATH_UNICODE_BLOCKS[i].len
    //     ) {
    //         return {
    //             char: String.fromCodePoint(
    //                 codepoint -
    //                 MATH_UNICODE_BLOCKS[i].start +
    //                 MATH_UNICODE_BLOCKS[i].offset
    //             ),
    //             variant: MATH_UNICODE_BLOCKS[i].variant,
    //             style: MATH_UNICODE_BLOCKS[i].style,
    //         };
    //     }
    // }

    return { char: String.fromCodePoint(codepoint) };
}

/**
 * Given a character and variant ('double-struck', 'fraktur', etc...)
 * return the corresponding unicode character (a string)
 */
// export function mathVariantToUnicode(
//     char: string,
//     variant: string,
//     style: string
// ): string {
//     if (!/[A-Za-z0-9]/.test(char)) return char;
//     if (!variant && !style) return char;

//     const codepoint = char.codePointAt(0);

//     // for (let i = 0; i < MATH_UNICODE_BLOCKS.length; i++) {
//     //     if (!variant || MATH_UNICODE_BLOCKS[i].variant === variant) {
//     //         if (!style || MATH_UNICODE_BLOCKS[i].style === style) {
//     //             if (
//     //                 codepoint >= MATH_UNICODE_BLOCKS[i].offset &&
//     //                 codepoint <
//     //                 MATH_UNICODE_BLOCKS[i].offset +
//     //                 MATH_UNICODE_BLOCKS[i].len
//     //             ) {
//     //                 const result =
//     //                     MATH_UNICODE_BLOCKS[i].start +
//     //                     codepoint -
//     //                     MATH_UNICODE_BLOCKS[i].offset;
//     //                 return String.fromCodePoint(
//     //                     MATH_LETTER_EXCEPTIONS[result] || result
//     //                 );
//     //             }
//     //         }
//     //     }
//     // }

//     return char;
// }

export function unicodeCharToLatex(
    parseMode: ParseModePrivate,
    char: string
): string {
    if (parseMode === 'text') {
        return charToLatex(parseMode, char) || char;
    }

    let result: string;
    // Codepoint shortcuts have priority over variants
    // That is, "\N" vs "\mathbb{N}"
    // if (CODEPOINT_SHORTCUTS[cp]) return CODEPOINT_SHORTCUTS[cp];
    result = charToLatex(parseMode, char);
    if (result) return result;

    const cp = char.codePointAt(0);
    const v = unicodeToMathVariant(cp);
    if (!v.style && !v.variant) return '';

    result = v.char;
    if (v.variant) {
        result = '\\' + v.variant + '{' + result + '}';
    }
    if (v.style === 'bold') {
        result = '\\mathbf{' + result + '}';
    } else if (v.style === 'italic') {
        result = '\\mathit{' + result + '}';
    } else if (v.style === 'bolditalic') {
        result = '\\mathbfit{' + result + '}';
    }
    return '\\mathord{' + result + '}';
}

export function unicodeStringToLatex(
    parseMode: ParseModePrivate,
    s: string
): string {
    let result = '';
    let needSpace = false;
    for (const c of s) {
        if (needSpace) {
            if (parseMode === 'text') {
                result += '{}';
            } else {
                result += ' ';
            }
        }
        needSpace = false;
        const latex = unicodeCharToLatex(parseMode, c);
        if (latex) {
            result += latex;
            needSpace = /\\[a-zA-Z0-9]+\*?$/.test(latex);
        } else {
            result += c;
        }
    }
    return result;
}

/**
 * Gets the value of a symbol in math mode
 */
export function getValue(symbol: string): string {
    return MATH_SYMBOLS[symbol]?.value ?? symbol;
}

export function emit(
    symbol: string,
    parent: Atom,
    atom: Atom,
    emitFn: (parent: Atom, atoms: Atom[]) => string
): string {
    console.assert(Boolean(atom));
    console.assert(Boolean(symbol), 'Missing command for ', atom.body);

    if (FUNCTIONS[symbol]?.emit) {
        return FUNCTIONS[symbol].emit(symbol, parent, atom, emitFn);
    }

    if (MATH_SYMBOLS[symbol] || TEXT_SYMBOLS[symbol]) {
        return symbol;
    }

    if (atom.body && FUNCTIONS[symbol]?.params?.length === 1) {
        return symbol + '{' + emitFn(atom, atom.body as Atom[]) + '}';
    }

    // No custom emit function provided, return an escaped version of the symbol
    const hex = symbol.codePointAt(0).toString(16);
    return '^'.repeat(hex.length) + hex;
}

export function getEnvironmentDefinition(name: string): EnvironmentDefinition {
    return ENVIRONMENTS[name] ?? null;
}

/**
 * @param symbol    A command (e.g. '\alpha') or a character (e.g. 'a')
 * @param parseMode One of 'math' or 'text'
 * @param macros A macros dictionary
 * @return {object} An info structure about the symbol, or null
 */
export function getInfo(
    symbol: string,
    parseMode: ParseModePrivate,
    macros?: MacroDictionary
): FunctionDefinition & SymbolDefinition {
    if (!symbol || symbol.length === 0) return null;

    let info = null;

    if (symbol.charAt(0) === '\\') {
        // This could be a function or a symbol
        info = FUNCTIONS[symbol];
        if (info) {
            // We've got a match
            return info;
        }

        // It wasn't a function, maybe it's a symbol?
        if (parseMode === 'math') {
            info = MATH_SYMBOLS[symbol];
        } else if (TEXT_SYMBOLS[symbol]) {
            info = { value: TEXT_SYMBOLS[symbol] };
        }

        if (!info) {
            // Maybe it's a macro
            const command = symbol.slice(1);
            if (macros?.[command]) {
                let def = macros[command];
                if (typeof def === 'object') {
                    def = def.def;
                }
                let argCount = 0;
                // Let's see if there are arguments in the definition.
                if (/(^|[^\\])#1/.test(def)) argCount = 1;
                if (/(^|[^\\])#2/.test(def)) argCount = 2;
                if (/(^|[^\\])#3/.test(def)) argCount = 3;
                if (/(^|[^\\])#4/.test(def)) argCount = 4;
                if (/(^|[^\\])#5/.test(def)) argCount = 5;
                if (/(^|[^\\])#6/.test(def)) argCount = 6;
                if (/(^|[^\\])#7/.test(def)) argCount = 7;
                if (/(^|[^\\])#8/.test(def)) argCount = 8;
                if (/(^|[^\\])#9/.test(def)) argCount = 9;
                info = {
                    type: 'group',
                    mode: 'math',
                    params: [],
                    infix: false,
                };
                while (argCount >= 1) {
                    info.params.push({
                        isOptional: false,
                        type: 'math',
                    });
                    argCount -= 1;
                }
            }
        }
    } else {
        if (parseMode === 'math') {
            info = MATH_SYMBOLS[symbol];
        } else if (TEXT_SYMBOLS[symbol]) {
            info = { value: TEXT_SYMBOLS[symbol] };
        } else if (parseMode === 'text') {
            info = { value: symbol };
        }
    }

    // Special case `f`, `g` and `h` are recognized as functions.
    if (
        info &&
        info.type === 'mord' &&
        (info.value === 'f' || info.value === 'g' || info.value === 'h')
    ) {
        info.isFunction = true;
    }

    return info;
}

/**
 * Return an array of suggestion for completing string 's'.
 * For example, for 'si', it could return ['sin', 'sinh', 'sim', 'simeq', 'sigma']
 * Infix operators are excluded, since they are deprecated commands.
 */
export function suggest(s: string): { match: string; frequency: number }[] {
    if (s.length <= 1) return [];
    const result = [];

    // Iterate over items in the dictionary
    for (const p in FUNCTIONS) {
        if (Object.prototype.hasOwnProperty.call(FUNCTIONS, p)) {
            if (p.startsWith(s) && !FUNCTIONS[p].infix) {
                result.push({ match: p, frequency: FUNCTIONS[p].frequency });
            }
        }
    }

    for (const p in MATH_SYMBOLS) {
        if (Object.prototype.hasOwnProperty.call(MATH_SYMBOLS, p)) {
            if (p.startsWith(s)) {
                result.push({ match: p, frequency: MATH_SYMBOLS[p].frequency });
            }
        }
    }

    result.sort((a, b) => {
        if (a.frequency === b.frequency) {
            return a.match.length - b.match.length;
        }
        return (b.frequency || 0) - (a.frequency || 0);
    });

    return result;
}

/**
 * An argument template has the following syntax:
 *
 * <placeholder>:<type>
 *
 * where
 * - <placeholder> is a string whose value is displayed when the argument
 *   is missing
 * - <type> is one of 'string', 'color', 'dimen', 'auto', 'text', 'math'
 *
 */
function parseParamTemplateArgument(argTemplate: string): ParseModePrivate {
    let type: ParseModePrivate = 'auto';

    // Parse the type (:type)
    const r = argTemplate.match(/:([^=]+)/);
    if (r) type = r[1].trim() as ParseModePrivate;

    return type;
}

function parseParamTemplate(
    paramTemplate: string
): FunctionArgumentDefiniton[] {
    if (!paramTemplate) return [];

    let result = [];
    let params = paramTemplate.split(']');
    if (params[0].charAt(0) === '[') {
        // We found at least one optional parameter.
        result.push({
            isOptional: true,
            type: parseParamTemplateArgument(params[0].slice(1)),
        });
        // Parse the rest
        for (let i = 1; i <= params.length; i++) {
            result = result.concat(parseParamTemplate(params[i]));
        }
    } else {
        params = paramTemplate.split('}');
        if (params[0].charAt(0) === '{') {
            // We found a required parameter
            result.push({
                isOptional: false,
                type: parseParamTemplateArgument(params[0].slice(1)),
            });
            // Parse the rest
            for (let i = 1; i <= params.length; i++) {
                result = result.concat(parseParamTemplate(params[i]));
            }
        }
    }

    return result;
}

/**
 * If possible, i.e. if they are all simple atoms, return a string made up of
 * their body
 */
export function parseArgAsString(atoms: Atom[]): string {
    let result = '';
    let success = true;
    atoms.forEach((atom) => {
        if (typeof atom.body === 'string') {
            result += atom.body;
        } else {
            success = false;
        }
    });
    return success ? result : '';
}

/**
 * Define one or more environments to be used with
 *         \begin{<env-name>}...\end{<env-name>}.
 *
 * @param params The number and type of required and optional parameters.
 */
export function defineEnvironment(
    names: string | string[],
    params: string,
    parser: ParseEnvironmentFunction,
    isTabular = false
): void {
    if (typeof names === 'string') {
        names = [names];
    }
    const parsedParams = parseParamTemplate(params);

    // Set default values of functions
    const data: EnvironmentDefinition = {
        tabular: isTabular,
        // Params: the parameters for this function, an array of
        // {optional, type}
        params: parsedParams,

        // Callback to parse the arguments
        parser: parser,
    };
    for (const name of names) {
        ENVIRONMENTS[name] = data;
    }
}

/**
 * Like defineEnvironment, but for a tabular environment, i.e.
 * one whose content is in tabular mode, where '&' indicata a new column
 * and '\\' indicate a new row.
 */
export function defineTabularEnvironment(
    names: string | string[],
    params: string,
    parser: ParseEnvironmentFunction
): void {
    defineEnvironment(names, params, parser, true);
}

/**
 * Define one of more functions.
 *
 * @param names
 * @param params The number and type of required and optional parameters.
 * For example: '{}' defines a single mandatory parameter
 * '[string]{auto}' defines two params, one optional, one required
 */
export function defineFunction(
    names: string | string[],
    params: string,
    options: { mode?: ParseModePrivate; infix?: boolean },
    parseFunction?: ParseFunction,
    emitFunction?: EmitFunction
): void {
    if (typeof names === 'string') {
        names = [names];
    }

    if (!options) options = {};

    // Set default values of functions
    const data = {
        // The parameters for this function, an array of
        // {optional, type}
        params: parseParamTemplate(params),

        mode: options.mode,
        infix: Boolean(options.infix),
        parse: parseFunction,
        emit: emitFunction,
    };
    names.forEach((name) => {
        FUNCTIONS['\\' + name] = data;
    });
}
