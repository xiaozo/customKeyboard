/**
 * This module contains metrics regarding fonts and individual symbols. The sigma
 * and xi variables, as well as the METRICS_MAP map contain data extracted from
 * TeX, TeX font metrics, and the TTF files. These data are then exposed via the
 * `metrics` variable and the getCharacterMetrics function.
 */
import METRICS_MAP from './font-metrics-data';

// This METRICS_MAP contains a mapping from font name and character code to character
// metrics, including height, depth, italic correction, and skew (kern from the
// character to the corresponding \skewchar)
// This map is generated via `make metrics`. It should not be changed manually.

interface CharacterMetrics {
    defaultMetrics: boolean;
    depth: number;
    height: number;
    italic: number;
    skew: number;
}
// const hangulRegex = /[\uAC00-\uD7AF]/;

// This regex combines
// - Hiragana: [\u3040-\u309F]
// - Katakana: [\u30A0-\u30FF]
// - CJK ideograms: [\u4E00-\u9FAF]
// - Hangul syllables: [\uAC00-\uD7AF]
// Notably missing are half width Katakana and Romaji glyphs.
const cjkRegex = /[\u3040-\u309F]|[\u30A0-\u30FF]|[\u4E00-\u9FAF]|[\uAC00-\uD7AF]/;

/*
 *
 * In TeX, there are actually three sets of dimensions, one for each of
 * textstyle, scriptstyle, and scriptscriptstyle.  These are provided in the
 * the arrays below, in that order.
 *
 * The font metrics are stored in fonts cmsy10, cmsy7, and cmsy5 respectively.
 * This was determined by running the following script:
 *``` bash
      latex -interaction=nonstopmode \
      '\documentclass{article}\usepackage{amsmath}\begin{document}' \
      '$a$ \expandafter\show\the\textfont2' \
      '\expandafter\show\the\scriptfont2' \
      '\expandafter\show\the\scriptscriptfont2' \
      '\stop'
  ```
 * The metrics themselves were retrieved using the following commands:
 * ``` bash
      tftopl cmsy10
      tftopl cmsy7
      tftopl cmsy5
    ```
 *
 * The output of each of these commands is quite lengthy.  The only part we
 * care about is the FONTDIMEN section. Each value is measured in EMs.
 * @memberof module:fontMetrics
 */
export const SIGMAS = {
    slant: [0.25, 0.25, 0.25], // sigma1
    space: [0.0, 0.0, 0.0], // sigma2
    stretch: [0.0, 0.0, 0.0], // sigma3
    shrink: [0.0, 0.0, 0.0], // sigma4
    xHeight: [0.431, 0.431, 0.431], // sigma5
    quad: [1.0, 1.171, 1.472], // sigma6
    extraSpace: [0.0, 0.0, 0.0], // sigma7
    num1: [0.677, 0.732, 0.925], // sigma8
    num2: [0.394, 0.384, 0.387], // sigma9
    num3: [0.444, 0.471, 0.504], // sigma10
    denom1: [0.686, 0.752, 1.025], // sigma11
    denom2: [0.345, 0.344, 0.532], // sigma12
    sup1: [0.413, 0.503, 0.504], // sigma13
    sup2: [0.363, 0.431, 0.404], // sigma14
    sup3: [0.289, 0.286, 0.294], // sigma15
    sub1: [0.15, 0.143, 0.2], // sigma16
    sub2: [0.247, 0.286, 0.4], // sigma17
    supDrop: [0.386, 0.353, 0.494], // sigma18
    subDrop: [0.05, 0.071, 0.1], // sigma19
    delim1: [2.39, 1.7, 1.98], // sigma20
    delim2: [1.01, 1.157, 1.42], // sigma21
    axisHeight: [0.25, 0.25, 0.25], // sigma22
};

// These font metrics are extracted from TeX by using
// \font\a=cmex10
// \showthe\fontdimenX\a
// where X is the corresponding variable number. These correspond to the font
// parameters of the extension fonts (family 3). See the TeXbook, page 433
// const xi1 = 0; // Slant per pt
// const xi2 = 0; // Interword space
// const xi3 = 0; // Interword stretch
// const xi4 = 0; // Interword shrink
// const xi5 = 0.431; // x-height
// const xi6 = 1; // Quad width
// const xi7 = 0; // Extra space
const xi8 = 0.04; // Default rule thickness, TexBook p.390
const xi9 = 0.111;
const xi10 = 0.166;
const xi11 = 0.2;
const xi12 = 0.6;
const xi13 = 0.1;
// Note: xi14: offset from baseline for superscript TexBook p. 179
// Note: xi16: offset from baseline for subscript

// This value determines how large a pt is, for metrics which are defined in
// terms of pts.
// This value is also used in katex.less; if you change it make sure the values
// match.
const ptPerEm = 10.0;

/*
 * This is just a mapping from common names to real metrics
 */
export const METRICS = {
    defaultRuleThickness: xi8,
    bigOpSpacing1: xi9,
    bigOpSpacing2: xi10,
    bigOpSpacing3: xi11,
    bigOpSpacing4: xi12,
    bigOpSpacing5: xi13,
    ptPerEm: ptPerEm,
    pxPerEm: (ptPerEm * 4.0) / 3.0, // A CSS pt is fixed at 1.333px
    doubleRuleSep: 2.0 / ptPerEm, // The space between adjacent `|` columns in an array definition. From
    // article.cls.txt:455
    arraycolsep: 5.0 / ptPerEm,
    baselineskip: 12.0 / ptPerEm,
    arrayrulewidth: 0.4 / ptPerEm,
    fboxsep: 3 / ptPerEm, // From letter.dtx:1626
    fboxrule: 0.4 / ptPerEm, // From letter.dtx:1627
};

// These are very rough approximations.  We default to Times New Roman which
// should have Latin-1 and Cyrillic characters, but may not depending on the
// operating system.  The metrics do not account for extra height from the
// accents.  In the case of Cyrillic characters which have both ascenders and
// descenders we prefer approximations with ascenders, primarily to prevent
// the fraction bar or root line from intersecting the glyph.
// TODO(kevinb) allow union of multiple glyph metrics for better accuracy.
const extraCharacterMap = {
    '\u00a0': '\u0020', // NON-BREAKING SPACE is like space
    '\u200b': '\u0020', // ZERO WIDTH SPACE is like space
    // Latin-1
    ??: 'A',
    ??: 'C',
    ??: 'D',
    ??: 'o',
    ??: 'a',
    ??: 'c',
    ??: 'd',
    ??: 'o',

    // Cyrillic
    ??: 'A',
    ??: 'B',
    ??: 'B',
    ??: 'F',
    ??: 'A',
    ??: 'E',
    ??: 'K',
    ??: '3',
    ??: 'N',
    ??: 'N',
    ??: 'K',
    ??: 'N',
    ??: 'M',
    ??: 'H',
    ??: 'O',
    ??: 'N',
    ??: 'P',
    ??: 'C',
    ??: 'T',
    ??: 'y',
    ??: 'O',
    ??: 'X',
    ??: 'U',
    ??: 'h',
    ??: 'W',
    ??: 'W',
    ??: 'B',
    ??: 'X',
    ??: 'B',
    ??: '3',
    ??: 'X',
    ??: 'R',
    ??: 'a',
    ??: 'b',
    ??: 'a',
    ??: 'r',
    ??: 'y',
    ??: 'e',
    ??: 'm',
    ??: 'e',
    ??: 'n',
    ??: 'n',
    ??: 'n',
    ??: 'n',
    ??: 'm',
    ??: 'n',
    ??: 'o',
    ??: 'n',
    ??: 'p',
    ??: 'c',
    ??: 'o',
    ??: 'y',
    ??: 'b',
    ??: 'x',
    ??: 'n',
    ??: 'n',
    ??: 'w',
    ??: 'w',
    ??: 'a',
    ??: 'm',
    ??: 'a',
    ??: 'e',
    ??: 'm',
    ??: 'r',
};

/**
 * This function is a convenience function for looking up information in the
 * METRICS_MAP table. It takes a character as a string, and a font name.
 *
 * Note: the `width` property may be undefined if fontMetricsData.js wasn't
 * built using `Make extended_metrics`.
 * @param fontName e.g. 'Main-Regular', 'Typewriter-Regular', etc...
 */
export function getCharacterMetrics(
    character: string,
    fontName: string
): CharacterMetrics {
    // console.assert(character.length === 1);
    console.assert(METRICS_MAP[fontName], 'Unknown font "' + fontName + '"');

    let ch = character.charCodeAt(0);

    if (character[0] in extraCharacterMap) {
        ch = extraCharacterMap[character[0]].charCodeAt(0);
    } else if (cjkRegex.test(character[0])) {
        ch = 77; // 'M'.charCodeAt(0);
        return {
            defaultMetrics: true,
            depth: 0.2,
            height: 0.9,
            italic: 0,
            skew: 0,
        };
    }
    const metrics = METRICS_MAP[fontName][ch];

    if (!metrics) {
        // console.warn(
        //     'No metrics for ' +
        //     '"' + character + '" (U+' + ('000000' + ch.toString(16)).substr(-6) + ')' +
        //     ' in font "' + fontName + '"');
        // Assume default values.
        // depth + height should be less than 1.0 em
        if (ch === 11034) {
            // Placeholder character
            return {
                defaultMetrics: true,
                depth: 0,
                height: 1.0,
                italic: 0,
                skew: 0,
            };
        }
        return {
            defaultMetrics: true,
            depth: 0.2,
            height: 0.7,
            italic: 0,
            skew: 0,
        };
    }

    return {
        defaultMetrics: false,
        depth: metrics[0],
        height: metrics[1],
        italic: metrics[2],
        skew: metrics[3],
    };
}

/**
 *
 * @param value If value is a string, it may be suffixed
 * with a unit, which will override the `unit` paramter
 */
export function convertDimenToEm(
    value: number | string,
    unit: string,
    precision = NaN
): number {
    if (typeof value === 'string') {
        const m = value.match(/([-+]?[0-9.]*)\s*([a-zA-Z]+)/);
        if (!m) {
            value = parseFloat(value);
        } else {
            value = parseFloat(m[1]);
            unit = m[2].toLowerCase();
        }
    }

    // If the units are missing, TeX assumes 'pt'
    const f =
        {
            pt: 1.0,
            mm: 7227 / 2540,
            cm: 7227 / 254,
            ex: 35271 / 8192,
            px: 3.0 / 4.0,
            em: METRICS.ptPerEm,
            bp: 803 / 800,
            dd: 1238 / 1157,
            pc: 12.0,
            in: 72.27,
            mu: 10 / 18,
        }[unit] || 1.0;

    if (isFinite(precision)) {
        const factor = Math.pow(10, precision);
        return Math.round((value / METRICS.ptPerEm) * f * factor) / factor;
    }

    return (value / METRICS.ptPerEm) * f;
}

export function convertDimenToPx(value: string | number, unit: string): number {
    return convertDimenToEm(value, unit) * (4.0 / 3.0) * METRICS.ptPerEm;
}
