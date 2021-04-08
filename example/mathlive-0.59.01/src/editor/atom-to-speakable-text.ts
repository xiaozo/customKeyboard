import { TextToSpeechOptions } from '../public/options';

import { Atom, isAtomArray } from '../core/atom';

import { atomsToMathML } from '../addons/math-ml';

// Markup
// Two common flavor of markups: SSML and 'mac'. The latter is only available
// when using the native TTS synthesizer on Mac OS.
// Use SSML in the production rules below. The markup will either be striped
// off or replaced with the 'mac' markup as necessary.
//
// SSML                                             Mac
// ----                                             ----
// <emphasis>WORD</emphasis>                        [[emph +]]WORD
// <break time="150ms"/>                            [[slc 150]]
// <say-as interpret-as="character">A</say-as>      [[char LTRL] A [[char NORM]]

// https://developer.apple.com/library/content/documentation/UserExperience/Conceptual/SpeechSynthesisProgrammingGuide/FineTuning/FineTuning.html#//apple_ref/doc/uid/TP40004365-CH5-SW3

// https://pdfs.semanticscholar.org/8887/25b82b8dbb45dd4dd69b36a65f092864adb0.pdf

// "<audio src='non_existing_file.au'>File could not be played.</audio>"

// "I am now <prosody rate='+0.06'>speaking 6% faster.</prosody>"

const PRONUNCIATION = {
    '\\alpha': 'alpha ',
    '\\mu': 'mew ',
    '\\sigma': 'sigma ',
    '\\pi': 'pie ',
    '\\imaginaryI': 'eye ',

    '\\sum': 'Summation ',
    '\\prod': 'Product ',

    a: '<phoneme alphabet="ipa" ph="eɪ">a</phoneme>',
    A: 'capital <phoneme alphabet="ipa" ph="eɪ">A</phoneme>',
    '+': 'plus ',
    '-': 'minus ',
    ';': '<break time="150ms"/> semi-colon <break time="150ms"/>',
    ',': '<break time="150ms"/> comma  <break time="150ms"/>',
    '|': '<break time="150ms"/>Vertical bar<break time="150ms"/>',
    '(': '<break time="150ms"/>Open paren. <break time="150ms"/>',
    ')': '<break time="150ms"/> Close paren. <break time="150ms"/>',
    '=': 'equals ',
    '<': 'is less than ',
    '\\lt': 'is less than ',
    '<=': 'is less than or equal to ',
    '\\le': 'is less than or equal to ',
    '\\gt': 'is greater than ',
    '>': 'is greater than ',
    '\\ge': 'is greater than or equal to ',
    '\\geq': 'is greater than or equal to ',
    '\\leq': 'is less than or equal to ',
    '!': 'factorial ',
    '\\sin': 'sine ',
    '\\cos': 'cosine ',
    '\u200b': '',
    '\u2212': 'minus ',
    ':': '<break time="150ms"/> such that <break time="200ms"/> ',
    '\\colon': '<break time="150ms"/> such that <break time="200ms"/> ',
    '\\hbar': 'etch bar ',
    '\\iff': '<break time="200ms"/>if, and only if, <break time="200ms"/>',
    '\\Longleftrightarrow':
        '<break time="200ms"/>if, and only if, <break time="200ms"/>',
    '\\land': 'and ',
    '\\lor': 'or ',
    '\\neg': 'not ',
    '\\div': 'divided by ',

    '\\forall': 'for all ',
    '\\exists': 'there exists ',
    '\\nexists': 'there does not exists ',

    '\\in': 'element of ',

    '\\N':
        'the set <break time="150ms"/><say-as interpret-as="character">n</say-as>',
    '\\C':
        'the set <break time="150ms"/><say-as interpret-as="character">c</say-as>',
    '\\Z':
        'the set <break time="150ms"/><say-as interpret-as="character">z</say-as>',
    '\\Q':
        'the set <break time="150ms"/><say-as interpret-as="character">q</say-as>',

    '\\infty': 'infinity ',

    '\\nabla': 'nabla ',

    '\\partial': 'partial derivative of ',

    '\\cdots': 'dot dot dot ',

    '\\Rightarrow': 'implies ',

    '\\lbrace': '<break time="150ms"/>open brace<break time="150ms"/>',
    '\\{': '<break time="150ms"/>open brace<break time="150ms"/>',
    '\\rbrace': '<break time="150ms"/>close brace<break time="150ms"/>',
    '\\}': '<break time="150ms"/>close brace<break time="150ms"/>',
    '\\langle': '<break time="150ms"/>left angle bracket<break time="150ms"/>',
    '\\rangle': '<break time="150ms"/>right angle bracket<break time="150ms"/>',
    '\\lfloor': '<break time="150ms"/>open floor<break time="150ms"/>',
    '\\rfloor': '<break time="150ms"/>close floor<break time="150ms"/>',
    '\\lceil': '<break time="150ms"/>open ceiling<break time="150ms"/>',
    '\\rceil': '<break time="150ms"/>close ceiling<break time="150ms"/>',
    '\\vert': '<break time="150ms"/>vertical bar<break time="150ms"/>',
    '\\mvert': '<break time="150ms"/>divides<break time="150ms"/>',
    '\\lvert': '<break time="150ms"/>left vertical bar<break time="150ms"/>',
    '\\rvert': '<break time="150ms"/>right vertical bar<break time="150ms"/>',
    // '\\lbrack':		'left bracket',
    // '\\rbrack':		'right bracket',
    '\\lbrack':
        '<break time="150ms"/> open square bracket <break time="150ms"/>',
    '\\rbrack':
        '<break time="150ms"/> close square bracket <break time="150ms"/>',

    // need to add code to detect singluar/plural. Until then spoken as plural since that is vastly more common
    // note: need to worry about intervening &InvisibleTimes;.
    // note: need to also do this when in numerator of fraction and number preceeds fraction
    // note: need to do this for <msup>
    mm: 'millimeters',
    cm: 'centimeters',
    km: 'kilometers',
    kg: 'kilograms',
};

function getSpokenName(latex: string): string {
    let result = '';
    if (latex.charAt(0) === '\\') {
        result = ' ' + latex.replace('\\', '') + ' ';
    }
    return result;
}

function platform(p: string): string {
    let result = 'other';
    if (navigator?.platform && navigator?.userAgent) {
        if (/^(mac)/i.test(navigator.platform)) {
            result = 'mac';
        } else if (/^(win)/i.test(navigator.platform)) {
            result = 'win';
        } else if (/(android)/i.test(navigator.userAgent)) {
            result = 'android';
        } else if (
            /(iphone)/i.test(navigator.userAgent) ||
            /(ipod)/i.test(navigator.userAgent) ||
            /(ipad)/i.test(navigator.userAgent)
        ) {
            result = 'ios';
        } else if (/\bCrOS\b/i.test(navigator.userAgent)) {
            result = 'chromeos';
        }
    }

    return result === p ? p : '!' + p;
}

function isAtomic(atoms: Atom[]): boolean {
    let count = 0;
    if (isAtomArray(atoms)) {
        for (const atom of atoms) {
            if (atom.type !== 'first') {
                count += 1;
            }
        }
    }
    return count === 1;
}

function atomicID(atoms: Atom[]): string {
    if (isAtomArray(atoms)) {
        for (const atom of atoms) {
            if (atom.type !== 'first' && atom.id) {
                return atom.id.toString();
            }
        }
    }
    return '';
}

function atomicValue(atoms: Atom[]): string {
    let result = '';
    if (isAtomArray(atoms)) {
        for (const atom of atoms) {
            if (atom.type !== 'first' && typeof atom.body === 'string') {
                result += atom.body;
            }
        }
    }
    return result;
}

function atomToSpeakableFragment(
    mode: 'text' | 'math',
    atom: Atom | Atom[],
    options: TextToSpeechOptions
): string {
    function letter(c: string): string {
        let result = '';
        if (!options.textToSpeechMarkup) {
            if (/[a-z]/.test(c)) {
                result += " '" + c.toUpperCase() + "'";
            } else if (/[A-Z]/.test(c)) {
                result += " 'capital " + c.toUpperCase() + "'";
            } else {
                result += c;
            }
        } else {
            if (/[a-z]/.test(c)) {
                result +=
                    ' <say-as interpret-as="character">' + c + '</say-as>';
            } else if (/[A-Z]/.test(c)) {
                result += String('capital ' + c.toLowerCase());
            } else {
                result += c;
            }
        }
        return result;
    }

    function emph(s: string): string {
        return '<emphasis>' + s + '</emphasis>';
    }

    if (!atom) return '';

    let result = '';

    if (isAtomArray(atom)) {
        let isInDigitRun = false; // need to group sequence of digits
        let isInTextRun = false; // need to group text
        for (let i = 0; i < atom.length; i++) {
            if (atom[i].mode !== 'text') {
                isInTextRun = false;
            }
            if (
                i < atom.length - 2 &&
                atom[i].type === 'mopen' &&
                atom[i + 2].type === 'mclose' &&
                atom[i + 1].type === 'mord'
            ) {
                result += ' of ';
                result += emph(
                    atomToSpeakableFragment(mode, atom[i + 1], options)
                );
                i += 2;
            } else if (atom[i].mode === 'text') {
                if (isInTextRun) {
                    result += atom[i].body ? atom[i].body : ' ';
                } else {
                    isInTextRun = true;
                    result += atomToSpeakableFragment('text', atom[i], options);
                }
                // '.' and ',' should only be allowed if prev/next entry is a digit
                // However, if that isn't the case, this still works because 'toSpeakableFragment' is called in either case.
                // Note: the first char in a digit/text run potentially needs to have a 'mark', hence the call to 'toSpeakableFragment'
            } else if (
                atom[i].type === 'mord' &&
                /[0123456789,.]/.test(atom[i].body as string)
            ) {
                if (isInDigitRun) {
                    result += atom[i].body;
                } else {
                    isInDigitRun = true;
                    result += atomToSpeakableFragment(mode, atom[i], options);
                }
            } else {
                isInDigitRun = false;
                result += atomToSpeakableFragment(mode, atom[i], options);
            }
        }
    } else if (atom.mode === 'text') {
        if (atom.id && mode === 'math') {
            result += '<mark name="' + atom.id.toString() + '"/>';
        }
        result += atom.body as string;
    } else {
        if (atom.id && mode === 'math') {
            result += '<mark name="' + atom.id.toString() + '"/>';
        }
        let numer = '';
        let denom = '';
        let body = '';
        let supsubHandled = false;
        switch (atom.type) {
            case 'group':
            case 'root':
                result += atomToSpeakableFragment(
                    'math',
                    atom.body as Atom[],
                    options
                );
                break;

            case 'genfrac':
                numer = atomToSpeakableFragment('math', atom.numer, options);
                denom = atomToSpeakableFragment('math', atom.denom, options);
                if (isAtomic(atom.numer) && isAtomic(atom.denom)) {
                    const COMMON_FRACTIONS = {
                        '1/2': ' half ',
                        '1/3': ' one third ',
                        '2/3': ' two third',
                        '1/4': ' one quarter ',
                        '3/4': ' three quarter ',
                        '1/5': ' one fifth ',
                        '2/5': ' two fifths ',
                        '3/5': ' three fifths ',
                        '4/5': ' four fifths ',
                        '1/6': ' one sixth ',
                        '5/6': ' five sixths ',
                        '1/8': ' one eight ',
                        '3/8': ' three eights ',
                        '5/8': ' five eights ',
                        '7/8': ' seven eights ',
                        '1/9': ' one ninth ',
                        '2/9': ' two ninths ',
                        '4/9': ' four ninths ',
                        '5/9': ' five ninths ',
                        '7/9': ' seven ninths ',
                        '8/9': ' eight ninths ',
                        // '1/10':     ' one tenth ',
                        // '1/12':     ' one twelfth ',
                        // 'x/2':     ' <say-as interpret-as="character">X</say-as> over 2',
                    };
                    const commonFraction =
                        COMMON_FRACTIONS[
                            atomicValue(atom.numer) +
                                '/' +
                                atomicValue(atom.denom)
                        ];
                    if (commonFraction) {
                        result = commonFraction;
                    } else {
                        result += numer + ' over ' + denom;
                    }
                } else {
                    result +=
                        ' the fraction <break time="150ms"/>' +
                        numer +
                        ', over <break time="150ms"/>' +
                        denom +
                        '.<break time="150ms"/> End fraction.<break time="150ms"/>';
                }

                break;
            case 'surd':
                body = atomToSpeakableFragment(
                    'math',
                    atom.body as Atom[],
                    options
                );

                if (!atom.index) {
                    if (isAtomic(atom.body as Atom[])) {
                        result += ' the square root of ' + body + ' , ';
                    } else {
                        result +=
                            ' the square root of <break time="200ms"/>' +
                            body +
                            '. <break time="200ms"/> End square root';
                    }
                } else {
                    let index = atomToSpeakableFragment(
                        'math',
                        atom.index,
                        options
                    );
                    index = index.trim();
                    const index2 = index.replace(/<mark([^/]*)\/>/g, '');
                    if (index2 === '3') {
                        result +=
                            ' the cube root of <break time="200ms"/>' +
                            body +
                            '. <break time="200ms"/> End cube root';
                    } else if (index2 === 'n') {
                        result +=
                            ' the nth root of <break time="200ms"/>' +
                            body +
                            '. <break time="200ms"/> End root';
                    } else {
                        result +=
                            ' the root with index: <break time="200ms"/>' +
                            index +
                            ', of <break time="200ms"/>' +
                            body +
                            '. <break time="200ms"/> End root';
                    }
                }
                break;
            case 'leftright':
                result += PRONUNCIATION[atom.leftDelim] || atom.leftDelim;
                result += atomToSpeakableFragment(
                    'math',
                    atom.body as Atom[],
                    options
                );
                result += PRONUNCIATION[atom.rightDelim] || atom.rightDelim;
                break;
            case 'rule':
                // @todo
                break;
            case 'overunder':
                // @todo
                break;
            case 'overlap':
                // @todo
                break;
            case 'placeholder':
                result += 'placeholder ' + atom.body;
                break;
            case 'delim':
            case 'sizeddelim':
            case 'mord':
            case 'minner':
            case 'mbin':
            case 'mrel':
            case 'mpunct':
            case 'mopen':
            case 'mclose':
            case 'textord': {
                const command = atom.symbol;
                if (
                    command === '\\mathbin' ||
                    command === '\\mathrel' ||
                    command === '\\mathopen' ||
                    command === '\\mathclose' ||
                    command === '\\mathpunct' ||
                    command === '\\mathord' ||
                    command === '\\mathinner'
                ) {
                    result = atomToSpeakableFragment(
                        mode,
                        atom.body as Atom[],
                        options
                    );
                    break;
                }

                let atomValue = atom.body as string;
                let latexValue = atom.symbol;
                if (atom.type === 'delim' || atom.type === 'sizeddelim') {
                    atomValue = latexValue = atom.delim;
                }
                if (mode === 'text') {
                    result += atomValue;
                } else {
                    if (atom.type === 'mbin') {
                        result += '<break time="150ms"/>';
                    }

                    if (atomValue) {
                        const value =
                            PRONUNCIATION[atomValue] ||
                            (latexValue
                                ? PRONUNCIATION[latexValue.trim()]
                                : '');
                        if (value) {
                            result += ' ' + value;
                        } else {
                            const spokenName = latexValue
                                ? getSpokenName(latexValue.trim())
                                : '';

                            result += spokenName
                                ? spokenName
                                : letter(atomValue);
                        }
                    } else {
                        result += atomToSpeakableFragment(
                            'math',
                            atom.body as Atom[],
                            options
                        );
                    }
                    if (atom.type === 'mbin') {
                        result += '<break time="150ms"/>';
                    }
                }
                break;
            }
            case 'mop':
                // @todo
                if (atom.body !== '\u200b') {
                    // Not ZERO-WIDTH
                    const trimLatex = atom.symbol;
                    if (trimLatex === '\\sum') {
                        if (atom.superscript && atom.subscript) {
                            let sup = atomToSpeakableFragment(
                                'math',
                                atom.superscript,
                                options
                            );
                            sup = sup.trim();
                            let sub = atomToSpeakableFragment(
                                'math',
                                atom.subscript,
                                options
                            );
                            sub = sub.trim();
                            result +=
                                ' the summation from <break time="200ms"/>' +
                                sub +
                                '<break time="200ms"/> to  <break time="200ms"/>' +
                                sup +
                                '<break time="200ms"/> of <break time="150ms"/>';
                            supsubHandled = true;
                        } else if (atom.subscript) {
                            let sub = atomToSpeakableFragment(
                                'math',
                                atom.subscript,
                                options
                            );
                            sub = sub.trim();
                            result +=
                                ' the summation from <break time="200ms"/>' +
                                sub +
                                '<break time="200ms"/> of <break time="150ms"/>';
                            supsubHandled = true;
                        } else {
                            result += ' the summation of';
                        }
                    } else if (trimLatex === '\\prod') {
                        if (atom.superscript && atom.subscript) {
                            let sup = atomToSpeakableFragment(
                                'math',
                                atom.superscript,
                                options
                            );
                            sup = sup.trim();
                            let sub = atomToSpeakableFragment(
                                'math',
                                atom.subscript,
                                options
                            );
                            sub = sub.trim();
                            result +=
                                ' the product from <break time="200ms"/>' +
                                sub +
                                '<break time="200ms"/> to <break time="200ms"/>' +
                                sup +
                                '<break time="200ms"/> of <break time="150ms"/>';
                            supsubHandled = true;
                        } else if (atom.subscript) {
                            let sub = atomToSpeakableFragment(
                                'math',
                                atom.subscript,
                                options
                            );
                            sub = sub.trim();
                            result +=
                                ' the product from <break time="200ms"/>' +
                                sub +
                                '<break time="200ms"/> of <break time="150ms"/>';
                            supsubHandled = true;
                        } else {
                            result += ' the product  of ';
                        }
                    } else if (trimLatex === '\\int') {
                        if (atom.superscript && atom.subscript) {
                            let sup = atomToSpeakableFragment(
                                'math',
                                atom.superscript,
                                options
                            );
                            sup = sup.trim();
                            let sub = atomToSpeakableFragment(
                                'math',
                                atom.subscript,
                                options
                            );
                            sub = sub.trim();
                            result +=
                                ' the integral from <break time="200ms"/>' +
                                emph(sub) +
                                '<break time="200ms"/> to <break time="200ms"/>' +
                                emph(sup) +
                                ' <break time="200ms"/> of ';
                            supsubHandled = true;
                        } else {
                            result += ' the integral of <break time="200ms"/> ';
                        }
                    } else if (typeof atom.body === 'string') {
                        const value =
                            PRONUNCIATION[atom.body] ||
                            PRONUNCIATION[atom.symbol];
                        if (value) {
                            result += value;
                        } else {
                            result += ' ' + atom.body;
                        }
                    } else if (atom.symbol) {
                        if (atom.symbol[0] === '\\') {
                            result += ' ' + atom.symbol.substr(1);
                        } else {
                            result += ' ' + atom.symbol;
                        }
                    }
                }
                break;

            case 'enclose':
                body = atomToSpeakableFragment(
                    'math',
                    atom.body as Atom[],
                    options
                );

                if (isAtomic(atom.body as Atom[])) {
                    result += ' crossed out ' + body + ' , ';
                } else {
                    result += ' crossed out ' + body + '. End cross out';
                }
                break;

            case 'space':
            case 'spacing':
            case 'mathstyle':
                // @todo
                break;
        }
        if (!supsubHandled && atom.superscript) {
            let sup = atomToSpeakableFragment(mode, atom.superscript, options);
            sup = sup.trim();
            const sup2 = sup.replace(/<[^>]*>/g, '');
            if (isAtomic(atom.superscript)) {
                if (mode === 'math') {
                    const id = atomicID(atom.superscript);
                    if (id) {
                        result += '<mark name="' + id + '"/>';
                    }
                }
                if (sup2 === '\u2032') {
                    result += ' prime ';
                } else if (sup2 === '2') {
                    result += ' squared ';
                } else if (sup2 === '3') {
                    result += ' cubed ';
                } else if (isNaN(parseInt(sup2))) {
                    result += ' to the ' + sup + '; ';
                } else {
                    result +=
                        ' to the <say-as interpret-as="ordinal">' +
                        sup2 +
                        '</say-as> power; ';
                }
            } else {
                if (isNaN(parseInt(sup2))) {
                    result += ' raised to the ' + sup + '; ';
                } else {
                    result +=
                        ' raised to the <say-as interpret-as="ordinal">' +
                        sup2 +
                        '</say-as> power; ';
                }
            }
        }
        if (!supsubHandled && atom.subscript) {
            let sub = atomToSpeakableFragment('math', atom.subscript, options);
            sub = sub.trim();
            if (isAtomic(atom.subscript)) {
                result += ' sub ' + sub;
            } else {
                result += ' subscript ' + sub + '. End subscript. ';
            }
        }
    }

    return result;
}

/**
 * @param  atoms The atoms to represent as speakable text.
 */
export function atomToSpeakableText(
    atoms: Atom | Atom[],
    speechOptions: TextToSpeechOptions
): string {
    const options = {
        ...speechOptions,
        textToSpeechRulesOptions: { ...speechOptions.textToSpeechRulesOptions },
    };

    if (window['sre'] && options.textToSpeechRules === 'sre') {
        const mathML = atomsToMathML(atoms, options);
        if (mathML) {
            if (options.textToSpeechMarkup) {
                options.textToSpeechRulesOptions =
                    options.textToSpeechRulesOptions ?? {};
                options.textToSpeechRulesOptions.markup =
                    options.textToSpeechMarkup;
                if (options.textToSpeechRulesOptions.markup === 'ssml') {
                    options.textToSpeechRulesOptions.markup = 'ssml_step';
                }
                options.textToSpeechRulesOptions.rate =
                    options.speechEngineRate;
            }
            if (options.textToSpeechRulesOptions) {
                window['sre'].System.getInstance().setupEngine(
                    options.textToSpeechRulesOptions
                );
            }
            return window['sre'].System.getInstance().toSpeech(mathML);
        }
        return '';
    }

    let result = atomToSpeakableFragment('math', atoms, options);

    if (options.textToSpeechMarkup === 'ssml') {
        let prosody = '';
        if (options.speechEngineRate) {
            prosody = '<prosody rate="' + options.speechEngineRate + '">';
        }
        result =
            `<?xml version="1.0"?><speak version="1.1" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="en-US">` +
            '<amazon:auto-breaths>' +
            prosody +
            '<p><s>' +
            result +
            '</s></p>' +
            (prosody ? '</prosody>' : '') +
            '</amazon:auto-breaths>' +
            '</speak>';
    } else if (
        options.textToSpeechMarkup === 'mac' &&
        platform('mac') === 'mac'
    ) {
        // Convert SSML to Mac markup
        result = result
            .replace(/<mark([^/]*)\/>/g, '')
            .replace(/<emphasis>/g, '[[emph+]]')
            .replace(/<\/emphasis>/g, '')
            .replace(/<break time="([0-9]*)ms"\/>/g, '[[slc $1]]')
            .replace(/<say-as[^>]*>/g, '')
            .replace(/<\/say-as>/g, '');
    } else {
        // If no markup was requested, or 'mac' markup, but we're not on a mac,
        // remove any that we may have
        // Strip out the SSML markup
        result = result.replace(/<[^>]*>/g, '').replace(/\s{2,}/g, ' ');
    }
    return result;
}
