import { debug, convertLatexToMarkup } from '../dist/mathlive';
import { MathfieldErrorCode, ParserErrorCode } from '../src/public/core';

function getStyle(s: any, symbol, prop) {
    if (typeof s === 'string') s = toSpan(s);
    return debug.getStyle(s, symbol, prop);
}

function getType(s, symbol) {
    if (typeof s === 'string') s = toSpan(s);
    return debug.getType(s, symbol);
}

function toSpan(formula) {
    return convertLatexToMarkup(formula, {
        mathstyle: 'displaystyle',
        format: 'span',
    } as unknown); // 'span' is a secret format, so force it with 'unknown'
}

function isError(
    formula: string,
    expectedError: ParserErrorCode | MathfieldErrorCode
) {
    let errorCode;
    convertLatexToMarkup(formula, {
        mathstyle: 'displaystyle',
        format: 'span',
        onError: (err) => {
            if (!errorCode) {
                // Catch the first error only
                errorCode = err.code;
            }
        },
    } as unknown); // 'span' is a secret format, so force it with 'unknown'
    test(formula, () => expect(errorCode).toBe(expectedError));
}

function isNoError(formula: string) {
    isError(formula, undefined);
}

function spanToString(span: any): string {
    if (typeof span === 'string') span = toSpan(span);
    return debug.spanToString(span).replace(/\t/g, '  ').replace(/\n/g, '\n');
}

function hasClass(s, symbol, cls: string) {
    let span = s;
    if (typeof span === 'string') {
        span = toSpan(s);
    }

    test(s, () => expect(debug.hasClass(span, symbol, cls)).toBeTruthy());
}

function hasType(
    s: string,
    symbol: number | string | number[],
    type: string
): void {
    test(s, () => expect(getType(s, symbol)).toBe(type));
}

function notHasClass(s, symbol, cls) {
    let span = s;
    if (typeof span === 'string') {
        span = toSpan(s);
    }

    const result = !debug.hasClass(span, symbol, cls);

    test(s, () => expect(result).toBeTruthy());
}

function equalSpan(formula1: string, formula2: string) {
    const s1 = spanToString(toSpan(formula1));
    const s2 = spanToString(toSpan(formula2));
    test(formula1, () => expect(s1).toBe(s2));
}

function equalASCIIMath(latex: string, ascii: string) {
    test(latex, () => {
        expect(debug.latexToAsciiMath(latex)).toBe(ascii);
        expect(debug.asciiMathToLatex(ascii)).toBe(latex);
    });
}

////////////////////////////////////////////////////////////////////////////////
describe('BASIC PARSING', function () {
    isNoError('');
    equalSpan('%', '');
    equalSpan('% comment', '');
    equalSpan('a%b', 'a');
    equalSpan('a % b ', 'a');

    test('x', () => expect(getType('x', 0)).toBe('mord'));
    hasClass('x', 0, 'ML__mathit');

    const ordString = '1234|/@.`abcdefgzABCDEFGZ';
    // const ordString = '1234|/@.\"`abcdefgzABCDEFGZ';
    const ordSpan = toSpan(ordString);
    test('ordstring', () => expect(ordSpan).toBeTruthy());
    // @todo t.equal(ordSpan.length, 1, 'There should be a single span for all the characters');
    // @todo t.equal(ordSpan[0].body, ordString, 'The body of the span should be the same as the string');
    // @todo t.ok(hasClass(ordSpan, 0, 'mord'), "The span should be a 'mord'");

    equalSpan('a b', 'ab');
    equalSpan('a     b', 'ab');

    equalSpan('a~b', 'a\\space b');

    // equalSpan('{+}', '\\mathord{+}', 'A single item in a group is the same as the item in a "ord"');

    test('{a}b', () => expect(getType('{a}b', 1)).toBe('mord'));

    equalSpan('a%b x \\xyz', 'a');
    equalSpan('%b x \\xyz', '');

    equalSpan('a\nb', 'ab');
    equalSpan('a%b c \\xyz\nb', 'ab');

    equalSpan('a = 1 }{}{} ', 'a=1');
    equalSpan('a = 1 }}}}{{{ ', 'a=1');
});

////////////////////////////////////////////////////////////////////////////////
describe('CHARACTERS', function () {
    // ^^ command
    equalSpan('^^4ab', 'Jb');
    equalSpan('^^^^004ab', 'Jb');

    // Active character ~ (equivalent to space)
    equalSpan('a\\text{b~c}d', 'a\\text{b c}d');

    // \char command
    equalSpan('\\char"4A 0', 'J0');
    equalSpan('\\char"004A 0', 'J0');
    equalSpan("\\char'0112 0", 'J0');
    equalSpan('\\char74 0', 'J0');
    equalSpan('\\char "004A 0', 'J0');
    // \char and integers (backtick)
    equalSpan('\\char`J0', 'J0');
    equalSpan('\\char`\\J0', 'J0');
    equalSpan('\\char `\\J', 'J');
    equalSpan('\\char   `\\J', 'J');
    equalSpan('\\char +- +-  `\\J', 'J');
    equalSpan('\\char +- -  `\\J', 'J');
    equalSpan('\\char +- -- -++  `\\J', 'J');

    // \unicode, a MathJax extension
    // (MathJax also accepts optional width, height and font arguments which we don't support)
    equalSpan('\\unicode{"4A}', 'J');
    equalSpan('\\unicode{"004A}', 'J');
    equalSpan('\\unicode{x004A}', 'J');
});

// function isTextOrd(symbols) {
//     for (const symbol of symbols) {
//         hasClass('\\text{' + symbol + '}', 0, 'textord',
//             symbol + ' is allowed');
//     }
// }

////////////////////////////////////////////////////////////////////////////////
describe('EXPANSION PRIMITIVES', function () {
    equalSpan('\\obeyspaces =   =', '=\\space\\space\\space=');
    equalSpan('\\csname alpha\\endcsname', '\\alpha');
    equalSpan('\\csname alph\\char"41\\endcsname', '\\alph A');
    equalSpan('=\\sqrt\\bgroup x \\egroup=', '=\\sqrt{x}=');
    equalSpan('\\string\\alpha', '\\backslash alpha');
    equalSpan('#?', '\\placeholder{}');
});

////////////////////////////////////////////////////////////////////////////////
describe('ARGUMENTS', function () {
    equalSpan('\\frac12', '\\frac{1}{2}');
    equalSpan('\\frac  1  2', '\\frac{1}{2}');
    equalSpan('\\frac357', '\\frac{3}{5}7');
    equalSpan('\\frac3a', '\\frac{3}{a}');
    equalSpan('\\frac\\alpha\\beta', '\\frac{\\alpha}{\\beta}');
    // equalSpan('\\frac{{1}}{2}', '\\frac{1}{2}', "Group inside an argument");
    equalSpan('\\frac  {  { 1  } } { 2 }', '\\frac{{1}}{2}');
});

////////////////////////////////////////////////////////////////////////////////
describe('INFIX COMMANDS', function () {
    equalSpan('a\\over b', '\\frac{a}{b}');
    equalSpan('a\\over b c', '\\frac{a}{bc}');
    equalSpan('x{a+1\\over1-b}y', 'x{\\frac{a+1}{1-b}}y');

    equalSpan('x{a+1\\over1-b\\over2}y', 'x{a+1\\over1-b2}y');

    isError('a\\over b \\over c', 'too-many-infix-commands');
});

////////////////////////////////////////////////////////////////////////////////
describe('FUNCTIONAL ARGUMENTS', function () {
    equalSpan('\\frac1a', '\\frac{1}{a}');

    equalSpan('\\frac a b', '\\frac{a}{b}');

    equalSpan('\\frac  {a}  {b}', '\\frac{a}{b}');

    // equalSpan('\\frac', '\\frac{a}{b}',
    //     'Missing arguments');

    // equalSpan('\\frac{}{}', '\\frac{a}{b}',
    //     'Empty arguments');

    equalSpan('\\frac  {\\frac12}  {b}', '\\frac{\\frac12}{b}');
});

////////////////////////////////////////////////////////////////////////////////
// describe('PARSING MODE', function () {});

////////////////////////////////////////////////////////////////////////////////
describe('FONTS', function () {
    hasClass('\\alpha + x - 1 - \\Gamma', 'x', 'ML__mathit');
    notHasClass('\\alpha + x - 1 - \\Gamma', '1', 'ML__mathit');
    hasClass('\\alpha + x - 1 - \\Gamma', 'α', 'ML__mathit');
    notHasClass('\\alpha + x - 1 - \\Gamma', 'Γ', 'ML__mathit');

    notHasClass('\\mathfrak{\\sin}', 'sin', 'mathfrak');
});

////////////////////////////////////////////////////////////////////////////////
// describe('ERRORS', function () {});

////////////////////////////////////////////////////////////////////////////////
describe('BINARY OPERATORS', function () {
    hasType('a+b', '+', 'mbin');
    hasType('f(a)+f(b)', '+', 'mbin');
    hasType('x^n+y^n', '+', 'mbin');
    hasType('+b', '+', 'mbin');
    hasType('(+b', '+', 'mbin');
    hasType('=+b', '+', 'mbin');
    hasType('\\sin+b', '+', 'mbin');
    hasType(', +b', '+', 'mbin');

    hasType('\\textcolor{red}{a}+b', '+', 'mbin');
    hasType('\\textcolor{red}{a=}+b', '+', 'mbin');

    hasType('a^2+b', '+', 'mbin');
    hasType('a^{2}+b', '+', 'mbin');
});

////////////////////////////////////////////////////////////////////////////////
// describe('TYPE COERCION', function () {});

////////////////////////////////////////////////////////////////////////////////
// describe('SUBSCRIPSUPERSCRIPTS AND LIMITS', function () {});

////////////////////////////////////////////////////////////////////////////////
describe('FRACTIONS', function () {
    isNoError('\\frac57');
    isNoError('\\frac {5} {7}');
    isNoError('\\frac {\\frac57} {\\frac37}');

    expect(
        toSpan(
            '\\[ 1 + \\frac{q^2}{(1-q)}+\\frac{q^6}{(1-q)(1-q^2)}+\\cdots = \\prod_{j=0}^{\\infty}\\frac{1}{(1-q^{5j+2})(1-q^{5j+3})}, \\quad\\quad \\text{for $|q|<1$}. \\]'
        )
    ).toBeTruthy();

    isNoError('\\binom{n}{k}');
    isNoError('\\dbinom{n}{k}');
    isNoError('\\tbinom{n}{k}');

    equalSpan('n \\choose k', '\\binom{n}{k}');

    // @todo: a better rest...
    isNoError('\\pdiff{f(x)}{x}');
});

// function hasSize(size) {
//     hasClass('a' + size + '{b c}d', 'a', 'rule', 'Sizing ' + size);
// }

////////////////////////////////////////////////////////////////////////////////
describe('SIZING STYLE', function () {
    isNoError('\\text{a \\tiny x y}b');
});

////////////////////////////////////////////////////////////////////////////////
describe('RULE AND DIMENSIONS', function () {
    hasClass('\\rule{1em}{2em}', 0, 'rule');
    hasClass('\\rule[1em]{1em}{2em}', 0, 'rule');
    hasClass('\\rule{1em}', 0, 'rule');
    hasClass('\\rule{-1em}{+10em}', 0, 'rule');

    hasClass('\\rule{0}{4}', 0, 'rule');
    hasClass('\\rule{1245.5667em}{2902929,292929em}', 0, 'rule');

    hasClass('\\rule{5mm}{7mm}', 0, 'rule');
    hasClass('\\rule{5cm}{7cm}', 0, 'rule');
    hasClass('\\rule{5ex}{7ex}', 0, 'rule');
    hasClass('\\rule{5em}{7em}', 0, 'rule');
    hasClass('\\rule{5bp}{7bp}', 0, 'rule');
    hasClass('\\rule{5dd}{7dd}', 0, 'rule');
    hasClass('\\rule{5pc}{7pc}', 0, 'rule');
    hasClass('\\rule{5in}{7in}', 0, 'rule');
    hasClass('\\rule{5mu}{7mu}', 0, 'rule');

    equalSpan('\\rule{10}{10pt}', '\\rule{10pt}{10pt}');
    equalSpan('\\rule{+10em}{+  10 em}', '\\rule{10em}{10em}');
    equalSpan("\\rule{'12em}{10em}", '\\rule{10em}{10em}');
    equalSpan("\\rule{'12.9999em}{10em}", '\\rule{10pt}{10em}');

    // However, TeX doesn't parse it either...  Actually, TeX doesn't even parse "a2em
    // For TeX, hex digits have to be uppercase. Interestingly, TeX cannot parse
    // '\\rule{\"A EM}{10em}' (the AE confuses it)
    equalSpan('\\rule{"A em}{10em}', '\\rule{10em}{10em}');
});

////////////////////////////////////////////////////////////////////////////////
describe('DECORATIONS', function () {
    expect(getStyle('\\bbox{1+x}', 0, 'border')).toBe(undefined);

    expect(
        getStyle('\\bbox[border:solid 1px red]{1+x}', [0, 0], 'border')
    ).toBe('solid 1px red');

    // t.equal(getStyle('\\bbox[4em]{1+x}', 0, 'padding-left'),'4em',
    //     '\\bbox with margin');

    expect(getStyle('\\bbox[yellow]{1+x}', [0, 0], 'background-color')).toBe(
        '#fff200'
    );

    expect(
        getStyle(
            '\\bbox[ yellow , border: 1px solid red, 4 em ]{1+x}',
            [0, 0],
            'border'
        )
    ).toBe('1px solid red');
    expect(
        getStyle(
            '\\bbox[ yellow , border: 1px solid red, 4 em ]{1+x}',
            [0, 0],
            'background-color'
        )
    ).toBe('#fff200');
    // t.equal(getStyle('\\bbox[ yellow , border: 1px solid red, 4 em ]{1+x}', 0,
    //     'margin-left'),'4em',
    //     '\\bbox with border, margin and background');

    hasClass('\\rlap{x}o', 0, 'rlap');
    // hasClass('\\rlap{x}o', [0, 0, 0], 'ML__text', 'The argument of \\rlap is in text mode');
    hasClass('\\mathrlap{x}o', [0, 0, 0], 'ML__mathit');

    hasClass('\\llap{x}o', 0, 'llap');
    // hasClass('\\llap{x}o', [0, 0, 0], 'ML__text', 'The argument of \\llap is in text mode');
    hasClass('\\mathllap{x}o', [0, 0, 0], 'ML__mathit');
});

////////////////////////////////////////////////////////////////////////////////
describe('OVER/UNDERLINE', function () {
    isNoError('a\\overline{x}b');
    isNoError(
        '\\overline{xyz}\\overline{1+\\frac34}\\underline{abc}\\underline{\\frac57}'
    );
    isNoError('\\underline{\\frac14}');
});

////////////////////////////////////////////////////////////////////////////////
describe('SPACING AND KERN', function () {
    isNoError('a\\hskip 3em b');
    isNoError('a\\kern 3em b');
    isNoError('a\\hspace{3em} b');
    equalSpan('a\\hskip 3em b', 'a\\hspace{3em} b');
});

function testDelimiter(openDel, closeDel) {
    // Regular sized delimiters
    test(openDel + ' ' + closeDel, () => {
        expect(
            getType('\\left' + openDel + ' x + 1' + '\\right' + closeDel, 0)
        ).toBe('mopen');
        expect(
            getType('\\left' + openDel + ' x + 1' + '\\right' + closeDel, 4)
        ).toBe('mclose');
        // t.notEqual(getType("\\left" + openDel + " x + 1" + "\\right" + closeDel, [0,0]),
        //     'nulldelimiter', "Open delimiter " + openDel + (msg ? ' ' + msg : ''));
        // t.notEqual(getType(("\\left" + openDel + " x + 1" + "\\right" + closeDel, [0,4]),
        //     'nulldelimiter', "Close delimiter " + closeDel + (msg ? ' ' + msg : ''));

        // Delimiters with large expression
        expect(
            getType(
                '\\left' +
                    openDel +
                    ' x \\frac{\\frac34}{\\frac57}' +
                    '\\right' +
                    closeDel,
                0
            )
        ).toBe('mopen');
        expect(
            getType(
                '\\left' +
                    openDel +
                    ' x \\frac{\\frac34}{\\frac57}' +
                    '\\right' +
                    closeDel,
                3
            )
        ).toBe('mclose');
        // t.notEqual(getType("\\left" + openDel + " x \\frac{\\frac34}{\\frac57}" + "\\right" + closeDel, [0,0]),
        //     'nulldelimiter', "Large open delimiter " + openDel + (msg ? ' ' + msg : ''));
        // t.notEqual(getType("\\left" + openDel + " x \\frac{\\frac34}{\\frac57}" + "\\right" + closeDel, [0,3]),
        //     'nulldelimiter', "Large close delimiter " + closeDel + (msg ? ' ' + msg : ''));
    });
}

////////////////////////////////////////////////////////////////////////////////
describe('LEFT/RIGHT', function () {
    // equalSpan('\\left(a\\right)', '\\left{(}a\\right{)}',
    //     '\\left\\right with unbraced arguments');

    hasType('\\left(a\\right)', 0, 'mopen');
    hasType('\\left(a\\right)', 2, 'mclose');

    hasType('\\left(\\frac12\\right)', 0, 'mopen');

    hasClass('\\left.\\frac12\\right.', 0, 'nulldelimiter');
    hasClass('\\left.\\frac12\\right.', 2, 'nulldelimiter');

    testDelimiter('[', ']');

    testDelimiter('\\lfloor', '\\rfloor');

    isError('\\left a\\frac12\\right0', 'unexpected-delimiter');

    hasType('\\left\\ulcorner\\frac12\\right\\urcorner', 0, 'mopen');

    hasType('\\left\\uparrow\\frac12\\right\\Downarrow', 0, 'mopen');

    hasType('\\left\\uparrow\\frac{\\frac34}{2}\\right\\vert', 0, 'mopen');

    hasType(
        '\\left\\uparrow\\frac{\\frac{\\frac57}{\\frac95}}{2}\\right\\vert',
        0,
        'mopen'
    );

    hasType('{\\left\\uparrow x\\right\\vert}', [0, 0], 'mopen');

    hasType('\\left\\lfloor\\frac{\\frac34}{2}\\right\\rfloor', 0, 'mopen');

    hasType('\\left\\lfloor x\\right\\rfloor', 0, 'mopen');

    hasType('\\left\\langle\\frac{\\frac34}{2}\\right\\rangle', 0, 'mopen');

    hasType('\\left<\\frac{\\frac34}{2}\\right>', 0, 'mopen');

    isError('\\left x\\frac{\\frac34}{2}\\right x', 'unexpected-delimiter');

    // All the stacking delimiters
    testDelimiter('\\vert', '\\vert');
    testDelimiter('\\lvert', '\\rvert');
    testDelimiter('\\Vert', '\\Vert');
    testDelimiter('\\lVert', '\\rVert');
    testDelimiter('\\|', '|');
    testDelimiter('\\uparrow', '\\downarrow');
    testDelimiter('\\Downarrow', '\\Uparrow');
    testDelimiter('\\Updownarrow', '\\updownarrow');
    testDelimiter('\\lbrack', '\\rbrack');
    testDelimiter('\\lfloor', '\\rfloor');
    testDelimiter('\\lceil', '\\rceil');
    testDelimiter('(', ')');
    testDelimiter('\\{', '\\}');
    testDelimiter('\\lbrace', '\\rbrace');
    testDelimiter('\\lgroup', '\\rgroup');
    testDelimiter('\\lmoustache', '\\rmoustache');
    testDelimiter('\\surd', '\\surd');

    // Middle
    hasClass('\\left(a\\middle|b\\right)', 2, 'style-wrap');
    hasClass('\\left(a\\middle xb\\right)', 2, 'nulldelimiter');
});

////////////////////////////////////////////////////////////////////////////////
function testSizingDelimiter(openCmd, closeCmd, midCmd, ordCmd) {
    // Regular sized delimiters

    hasType(
        openCmd +
            '\\lbrack x' +
            midCmd +
            '\\vert y ' +
            ordCmd +
            '\\Vert z' +
            closeCmd +
            '\\rbrack',
        0,
        'mopen'
    );

    hasType(openCmd + '\\lbrack x' + closeCmd + '\\rbrack', 2, 'mclose');

    hasType(
        openCmd +
            '< x' +
            midCmd +
            '\\vert y ' +
            ordCmd +
            '\\Vert z' +
            closeCmd +
            '>',
        0,
        'mopen'
    );

    hasType(openCmd + '< x' + closeCmd + '>', 2, 'mclose');
}

describe('SIZED DELIMITERS', function () {
    testSizingDelimiter('\\bigl', '\\bigr', '\\bigm', '\\big');
    testSizingDelimiter('\\Bigl', '\\Bigr', '\\Bigm', '\\Big');
    testSizingDelimiter('\\biggl', '\\biggr', '\\biggm', '\\bigg');
    testSizingDelimiter('\\Biggl', '\\Biggr', '\\Biggm', '\\Bigg');
});

////////////////////////////////////////////////////////////////////////////////
describe('ENVIRONMENTS', function () {
    // t.ok(toSpan('\\begin'), '\\begin with no argumenno \\end');
    // t.ok(toSpan('\\begin{a}'), '\\begin with argumenno \\end');
    // t.ok(toSpan('\\begin{a}\\end'), '\\begin with argumen\\end with no argument');
    // t.ok(toSpan('\\begin{a}\\end{x}'), '\\begin with argumen\\end with mismatched argument');

    equalSpan('\\begin{array}a\\end{xyz}', '\\begin{array}a\\end{array}');
    equalSpan('\\begin{array}a', '\\begin{array}a\\end{array}');

    // A legal environment name consist only of letters and "*"
    isError('\\begin{\\alpha}\\end{\\alpha}', 'unknown-environment');
    isError('\\begin{1732}\\end{1732}', 'unknown-environment');
    isError('\\begin{.}\\end{.}', 'unknown-environment');
    isError('\\begin{(}\\end{(}', 'unknown-environment');
});

////////////////////////////////////////////////////////////////////////////////
describe('SURDS', function () {
    isNoError('\\sqrt5');

    isNoError('\\sqrt{}');
    // isError('\\sqrt', 'missing-argument');

    isNoError(
        'ax^2+bx+c = a \\left( x - \\frac{-b + \\sqrt {b^2-4ac}}{2a} \\right) \\left( x - \\frac{-b - \\sqrt {b^2-4ac}}{2a} \\right)'
    );

    isNoError('\\sqrt[3]{5}');
    isNoError('\\sqrt[3]5');
});

////////////////////////////////////////////////////////////////////////////////
describe('ACCENTS', function () {
    hasClass('\\vec)', 0, 'accent');
    hasClass('\\vec{x+1})', 0, 'accent');

    hasClass('\\acute{x+1})', 0, 'accent');
    hasClass('\\grave{x+1})', 0, 'accent');
    hasClass('\\dot{x+1})', 0, 'accent');
    hasClass('\\ddot{x+1})', 0, 'accent');
    hasClass('\\tilde{x+1})', 0, 'accent');
    hasClass('\\bar{x+1})', 0, 'accent');
    hasClass('\\breve{x+1})', 0, 'accent');
    hasClass('\\check{x+1})', 0, 'accent');
    hasClass('\\hat{x+1})', 0, 'accent');
    hasClass('\\vec{x+1})', 0, 'accent');
});

////////////////////////////////////////////////////////////////////////////////
// describe('PHANTOM', function () {});

////////////////////////////////////////////////////////////////////////////////
describe('COLORS', function () {
    // formula.insertText("\\sin x \\textcolor{#f00}{red} \\backgroundcolor{yellow}{x + \\frac1{\\frac34}} \\textcolor{m1}{\\blacktriangle}\\textcolor{m2}{\\blacktriangle}\\textcolor{m3}{\\blacktriangle}\\textcolor{m4}{\\blacktriangle}\\textcolor{m5}{\\blacktriangle}\\textcolor{m6}{\\blacktriangle}\\textcolor{m7}{\\blacktriangle}\\textcolor{m8}{\\blacktriangle}\\textcolor{m9}{\\blacktriangle}");
    // formula.insertText("\\textcolor{aquamarine}{\\blacksquare}");
    // formula.insertText("\\textcolor{rgb(240, 10, 200)}{\\blacksquare}");
    // formula.insertText("\\textcolor{#33d}{\\blacksquare}");
    // formula.insertText("\\textcolor{#3130da}{\\blacksquare}");
    // formula.insertText("a+\\backgroundcolor{#f00}{\\frac1{\\frac{a+1}{b+c}}}");
    // formula.insertText("a+\\backgroundcolor{#f00}{\\frac{\\frac{\\frac{1}{2}}{c}}{\\frac{a+1}{b+c}}}");
    // formula.insertText("a+\\backgroundcolor{#f00}{\\frac{\\frac{\\frac{1}{2}}{c}}{a}");

    expect(getStyle('\\textcolor{white}{x}', 0, 'color')).toBe('#ffffff');

    expect(getStyle('\\textcolor{aquamarine}{x}', 0, 'color')).toBe('#00b5be');
    expect(getStyle('\\textcolor{AquaMarine}{x}', 0, 'color')).toBe('#00b5be');
    expect(getStyle('\\textcolor{M5}{x}', 0, 'color')).toBe('#993d90');

    equalSpan('\\textcolor{#fff}{x}', '\\textcolor{white}{x}');
    equalSpan('\\textcolor{#ffffff}{x}', '\\textcolor{white}{x}');
    equalSpan('\\textcolor{#fCFcfC}{x}', '\\textcolor{#fcfcfc}{x}');
    equalSpan('\\textcolor{rgb(255, 255, 255)}{x}', '\\textcolor{white}{x}');

    equalSpan('\\textcolor{rgb(255,255,255)}{x}', '\\textcolor{white}{x}');
    equalSpan(
        '\\textcolor{  rgb  (  255  ,  255  ,  255  ) }{x}',
        '\\textcolor{white}{x}'
    );

    equalSpan('\\textcolor{rgb(3.5, 0, 0)}{x}', '\\textcolor{white}{x}');
    equalSpan('\\textcolor{rgb(3, 5, 7}{x}', '\\textcolor{white}{x}');
    equalSpan(
        '\\textcolor{rgb(125.5, 0.556, -12.5)}{x}',
        '\\textcolor{white}{x}'
    );
    equalSpan('\\textcolor{rgb(xxy)}{x}', '\\textcolor{white}{x}');
    equalSpan('\\textcolor{rgb(3, 5)}{x}', '\\textcolor{white}{x}');
    equalSpan('\\textcolor{rgb(3, 5, 7, 11)}{x}', '\\textcolor{white}{x}');

    equalSpan('\\textcolor{#111!50}{x}', '\\textcolor{#888888}{x}');
    equalSpan('\\textcolor{#111!50!#fff}{x}', '\\textcolor{#888888}{x}');

    equalSpan('\\textcolor{#111!50!#000}{x}', '\\textcolor{#090909}{x}');

    equalSpan('\\textcolor{#f00!80!#00f}{x}', '\\textcolor{#cc0033}{x}');

    equalSpan('\\textcolor{-green!40!yellow}{x}', '\\textcolor{#662bdf}{x}');

    // formula.insertText("a+\\backgroundcolor{#f00}{\\frac1{\\frac{a+1}{b+c}}}");
    // formula.insertText("a+\\backgroundcolor{#f00}{\\frac{\\frac{\\frac{1}{2}}{c}}{\\frac{a+1}{b+c}}}");
    // formula.insertText("a+\\backgroundcolor{#f00}{\\frac{\\frac{\\frac{1}{2}}{c}}{a}");

    // a{b\\color c}d}
    let f = 'a{b\\color{#f00} c}d';
    test(f, () => {
        expect(getStyle(f, 'a', 'color')).toEqual(null);
        expect(getStyle(f, 'b', 'color')).toEqual(null);
        expect(getStyle(f, 'c', 'color')).toEqual('#ff0000');
        expect(getStyle(f, 'd', 'color')).toEqual(null);
    });
    f = 'a\\left(b\\color{#f00} c\\right)d';
    test(f, () => {
        expect(getStyle(f, 'a', 'color')).toEqual(null);
        expect(getStyle(f, 'b', 'color')).toEqual(null);
        expect(getStyle(f, 'c', 'color')).toEqual('#ff0000');
        expect(getStyle(f, 'd', 'color')).toEqual(null);
    });
    // expect(
    //     getStyle(f, 'a', 'color') === null &&
    //         getStyle(f, 'b', 'color') === null &&
    //         getStyle(f, 'c', 'color') === '#ff0000' &&
    //         getStyle(f, 'd', 'color') === null
    // ).toBeTruthy();

    isNoError(
        '{\\color{apricot}\\blacksquare}{\\color{aquamarine}\\blacksquare}{\\color{bittersweet}\\blacksquare}{\\color{black}\\blacksquare}{\\color{blue}\\blacksquare}{\\color{blueGreen}\\blacksquare}{\\color{blueviolet}\\blacksquare}{\\color{brickred}\\blacksquare}{\\color{brown}\\blacksquare}{\\color{burntorange}\\blacksquare}{\\color{cadetblue}\\blacksquare}{\\color{carnationpink}\\blacksquare}{\\color{cerulean}\\blacksquare}{\\color{cornflowerblue}\\blacksquare}{\\color{cyan}\\blacksquare}{\\color{dandelion}\\blacksquare}{\\color{darkorchid}\\blacksquare}{\\color{emerald}\\blacksquare}{\\color{forestgreen}\\blacksquare}{\\color{fuchsia}\\blacksquare}{\\color{goldenrod}\\blacksquare}{\\color{gray}\\blacksquare}{\\color{green}\\blacksquare}{\\color{greenyellow}\\blacksquare}{\\color{junglegreen}\\blacksquare}{\\color{lavender}\\blacksquare}{\\color{limegreen}\\blacksquare}{\\color{magenta}\\blacksquare}{\\color{mahogany}\\blacksquare}{\\color{maroon}\\blacksquare}{\\color{melon}\\blacksquare}{\\color{midnightblue}\\blacksquare}{\\color{mulberry}\\blacksquare}{\\color{navyblue}\\blacksquare}{\\color{olivegreen}\\blacksquare}{\\color{orange}\\blacksquare}{\\color{orangered}\\blacksquare}{\\color{orchid}\\blacksquare}{\\color{peach}\\blacksquare}{\\color{periwinkle}\\blacksquare}{\\color{pinegreen}\\blacksquare}{\\color{plum}\\blacksquare}{\\color{processblue}\\blacksquare}{\\color{purple}\\blacksquare}{\\color{rawsienna}\\blacksquare}{\\color{red}\\blacksquare}{\\color{redorange}\\blacksquare}{\\color{redviolet}\\blacksquare}{\\color{rhodamine}\\blacksquare}{\\color{royalblue}\\blacksquare}{\\color{royalpurple}\\blacksquare}{\\color{rubinered}\\blacksquare}{\\color{salmon}\\blacksquare}{\\color{seagreen}\\blacksquare}{\\color{sepia}\\blacksquare}{\\color{skyblue}\\blacksquare}{\\color{springgreen}\\blacksquare}{\\color{tan}\\blacksquare}{\\color{tealblue}\\blacksquare}{\\color{thistle}\\blacksquare}{\\color{turquoise}\\blacksquare}{\\color{violet}\\blacksquare}{\\color{violetred}\\blacksquare}{\\color{white}\\blacksquare}{\\color{wildstrawberry}\\blacksquare}{\\color{yellow}\\blacksquare}{\\color{yellowgreen}\\blacksquare}{\\color{yelloworange}\\blacksquare}'
    );
});

////////////////////////////////////////////////////////////////////////////////
describe('ASCII MATH', function () {
    equalASCIIMath('123', '123');
    equalASCIIMath('-123.456', '-123.456');
    equalASCIIMath('-123.456e9', '-123.456e9');
    equalASCIIMath('x', 'x');
    equalASCIIMath('-x', '-x');

    equalASCIIMath('npq', 'npq');
    equalASCIIMath('2npq', '2npq');

    expect(debug.latexToAsciiMath('(x)')).toBe('(x)');
    expect(debug.asciiMathToLatex('(x)')).toBe('\\left(x\\right)');

    expect(debug.latexToAsciiMath('(x + 1)')).toBe('(x+1)');
    expect(debug.asciiMathToLatex('(x + 1)')).toBe('\\left(x +1\\right)');

    equalASCIIMath('f\\mleft(x\\mright)=\\sin x', 'f(x)=sin x');

    equalASCIIMath('x^{2}', 'x^2');
    equalASCIIMath('x^{234}', 'x^234');
    equalASCIIMath('x^{-234.56}', 'x^-234.56');
    equalASCIIMath('x^{-234.56}+1', 'x^-234.56+1');
    equalASCIIMath('x^{n}+1', 'x^n+1');
    equalASCIIMath('x^{npq}+1', 'x^(npq)+1');
    equalASCIIMath('x^{n+2}', 'x^(n+2)');

    equalASCIIMath('x_{2}', 'x_2');
    equalASCIIMath('x_{234}', 'x_234');
    equalASCIIMath('x_{-234.56}', 'x_-234.56');
    equalASCIIMath('x_{-234.56}+1', 'x_-234.56+1');
    equalASCIIMath('x_{n}+1', 'x_n+1');
    equalASCIIMath('x_{npq}+1', 'x_(npq)+1');
    equalASCIIMath('x_{n+2}', 'x_(n+2)');

    equalASCIIMath('x_{n+2}^{m+3}', 'x_(n+2)^(m+3)');

    equalASCIIMath('\\frac{1}{2}', '(1)/(2)');
    equalASCIIMath('\\frac{x+1}{x-1}', '(x+1)/(x-1)');

    equalASCIIMath('\\sqrt{2}', 'sqrt(2)');
    equalASCIIMath('\\sqrt{x+1}', 'sqrt(x+1)');

    equalASCIIMath('\\alpha +1', 'alpha+1');
    equalASCIIMath('\\Gamma +1', 'Gamma+1');
    equalASCIIMath('\\frac{\\pi }{2\\pi }', '(pi)/(2pi)');

    equalASCIIMath('\\text{if }x>0', '"if "x>0');
    equalASCIIMath(
        '\\text{if }x>0\\text{ then }f\\mleft(x\\mright)=x^{2}',
        '"if "x>0" then "f(x)=x^2'
    );
});

// \cos(|x| + |y|)

// \cos (|\frac {x}{5}|+|\frac {y}{5}|)

// -----------------------------------------------------------
// Resolved:

// \left(x^2+3y^2\right)e^{-x^2-y^2}
// \left(x^2+3y^2\right)\cdot  e^{-x^2-y^2}

// \sin(\pi*x/5)-\tan(x*2)
// \sin \pi  \cdot  \frac {x}{5}-\tan 2x
