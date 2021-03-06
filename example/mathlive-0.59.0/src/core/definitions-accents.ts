import { defineFunction, parseArgAsString } from './definitions-utils';
import type { Atom } from './atom';

const ACCENTS = {
    acute: '\u02ca',
    grave: '\u02cb',
    dot: '\u02d9',
    ddot: '\u00a8',
    mathring: '\u02da',
    tilde: '\u007e',
    bar: '\u02c9',
    breve: '\u02d8',
    check: '\u02c7',
    hat: '\u005e',
    vec: '\u20d7',
};
defineFunction(Object.keys(ACCENTS), '{body:auto}', null, function (
    name,
    args
) {
    return {
        type: 'accent',
        accent: ACCENTS[name.slice(1)],
        limits: 'accent', // This will suppress the regular
        // supsub attachment and will delegate
        // it to the decomposeAccent
        // (any non-null value would do)
        skipBoundary: true,
        body: args[0] as Atom[],
    };
});

defineFunction(
    ['widehat', 'widecheck', 'widetilde'],
    '{body:auto}',
    null,
    (name, args) => {
        const baseString = parseArgAsString(args[0] as Atom[]);
        const accent =
            name.slice(1) +
            (baseString.length > 5
                ? '4'
                : ['1', '1', '2', '2', '3', '3'][baseString.length]);
        return {
            type: 'accent',
            svgAccent: accent,
            limits: 'accent', // This will suppress the regular
            // supsub attachment and will delegate
            // it to the decomposeAccent
            // (any non-null value would do)
            skipBoundary: true,
            body: args[0] as Atom[],
        };
    }
);

defineFunction(
    'utilde',
    '{body:auto}',
    null,
    (_name, args) => {
        const baseString = parseArgAsString(args[0] as Atom[]);
        const accent =
            'widetilde' +
            (baseString.length > 5
                ? '4'
                : ['1', '1', '2', '2', '3', '3'][baseString.length]);

        return {
            type: 'overunder',

            body: args[0] as Atom[],
            svgBelow: accent,

            skipBoundary: true,
        };
    },
    (_name, _parent, atom, emit) =>
        `\\utilde{${emit(atom, atom.body as Atom[])}}`
);

/*
 * From plain.tex
 *
 */

defineFunction('^', '{:string}', {}, (_name, args) => {
    return {
        type: 'mord',
        limits: 'nolimits',
        isSymbol: true,
        isFunction: false,
        body: args[0]
            ? {
                  a: '??',
                  e: '??',
                  i: '??',
                  o: '??',
                  u: '??',
                  A: '??',
                  E: '??',
                  I: '??',
                  O: '??',
                  U: '??',
              }[args[0] as string] || '^'
            : '^',
    };
});

defineFunction('`', '{:string}', {}, (_name, args) => {
    return {
        type: 'mord',
        limits: 'nolimits',
        isSymbol: true,
        isFunction: false,
        body: args[0]
            ? {
                  a: '??',
                  e: '??',
                  i: '??',
                  o: '??',
                  u: '??',
                  A: '??',
                  E: '??',
                  I: '??',
                  O: '??',
                  U: '??',
              }[args[0] as string] || '`'
            : '`',
    };
});

defineFunction("'", '{:string}', {}, function (name, args) {
    return {
        type: 'mord',
        limits: 'nolimits',
        isSymbol: true,
        isFunction: false,
        body: args[0]
            ? {
                  a: '??',
                  e: '??',
                  i: '??',
                  o: '??',
                  u: '??',
                  A: '??',
                  E: '??',
                  I: '??',
                  O: '??',
                  U: '??',
              }[args[0] as string] || '\u005e'
            : '\u005e',
    };
});

defineFunction('~', '{:string}', {}, (_name, args) => {
    return {
        type: 'mord',
        limits: 'nolimits',
        isSymbol: true,
        isFunction: false,
        body: args[0]
            ? { n: '??', N: '??', a: '??', o: '??', A: '??', O: '??' }[
                  args[0] as string
              ] || '\u00B4'
            : '\u00B4',
    };
});

defineFunction('c', '{:string}', {}, (_name, args) => {
    return {
        type: 'mord',
        limits: 'nolimits',
        isSymbol: true,
        isFunction: false,
        body: args[0] ? { c: '??', C: '??' }[args[0] as string] || '' : '',
    };
});
