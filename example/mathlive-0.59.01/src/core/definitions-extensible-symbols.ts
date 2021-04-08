import { defineFunction } from './definitions-utils';
import type { Atom } from './atom';

// Extensible (horitontally stretchy) symbols

defineFunction(
    [
        'overrightarrow',
        'overleftarrow',
        'Overrightarrow',
        'overleftharpoon',
        'overrightharpoon',
        'overleftrightarrow',
        'overbrace',
        'overlinesegment',
        'overgroup',
    ],
    '{:auto}',
    null,
    (name, args) => {
        return {
            type: 'overunder',
            // The body is the argument of the command
            body: args[0] as Atom[],

            // Set the "svgAbove" to the name of a SVG object (which is the same
            // as the command name)
            svgAbove: name.slice(1),

            skipBoundary: true,

            limits: 'overunder',
        };
    },
    (name, _parent, atom, emit) => `${name}{${emit(atom, atom.body as Atom[])}}`
);

defineFunction(
    [
        'underrightarrow',
        'underleftarrow',
        'underleftrightarrow',
        'underbrace',
        'underlinesegment',
        'undergroup',
    ],
    '{:auto}',
    null,
    (name, args) => {
        return {
            type: 'overunder',

            body: args[0] as Atom[],
            // Set the "svgBelow" to the name of a SVG object (which is the same
            // as the command name)
            svgBelow: name.slice(1),

            skipBoundary: true,
            limits: 'overunder',
        };
    },
    (name, _parent, atom, emit) => `${name}{${emit(atom, atom.body as Atom[])}}`
);
defineFunction(
    [
        'xrightarrow',
        'xleftarrow',
        'xRightarrow',
        'xLeftarrow',
        'xleftharpoonup',
        'xleftharpoondown',
        'xrightharpoonup',
        'xrightharpoondown',
        'xlongequal',
        'xtwoheadleftarrow',
        'xtwoheadrightarrow',
        'xleftrightarrow',
        'xLeftrightarrow',
        'xrightleftharpoons',
        'xleftrightharpoons',
        'xhookleftarrow',
        'xhookrightarrow',
        'xmapsto',
        'xtofrom',
        'xrightleftarrows', // From mhchem.sty package
        'xrightequilibrium', // From mhchem.sty package
        'xleftequilibrium', // From mhchem.sty package
    ],
    '[:auto]{:auto}',
    null,
    (name, args) => {
        // The overscript is optional, i.e. `\xtofrom` is valid
        let overscript: Atom[] | null = args[1] as Atom[];
        if (overscript?.length === 0) {
            overscript = null;
        }
        return {
            type: 'overunder',

            // Set the spacing type
            mathtype: 'mrel',

            // Set the "svgBody" to the name of a SVG object (which is the same
            // as the command name)
            svgBody: name.slice(1),
            overscript: overscript,
            underscript: args[0],
        };
    },
    (name, _parent, atom, emit) =>
        name +
        (typeof atom.underscript !== 'undefined'
            ? `[${emit(atom, atom.underscript)}]`
            : '') +
        `{${emit(atom, atom.overscript)}}`
);
