import { isArray } from '../common/types';

import { Style, ParseMode } from '../public/core';
import { getCharacterMetrics, METRICS } from './font-metrics';
import { svgBodyToMarkup } from './svg-span';
import { applyStyle as applyStyleForMode } from './modes-utils';

/*
 * See https://tex.stackexchange.com/questions/81752/
 * for a thorough description of the TeXt atom type and their relevance to
 * proper kerning.
 */

const SPAN_TYPE = [
    '',
    'mord',
    'mbin',
    'mop',
    'mrel',
    'mopen',
    'mclose',
    'mpunct',
    'minner',
    'spacing',
    // 'mtable',
    'first',
    'command',
    'composition',
    'error',
    'placeholder',
    'textord', // @revisit
    'none', // @revisit. Use ''?
] as const; // The const assertion prevents widening to string[]
export type SpanType = typeof SPAN_TYPE[number];

export function isSpanType(type: string): type is SpanType {
    return ((SPAN_TYPE as unknown) as string[]).includes(type);
}

/*
 * See http://www.tug.org/TUGboat/tb30-3/tb96vieth.pdf for
 * typesetting conventions for mathematical physics (units, etc...)
 */

const INTER_ATOM_SPACING = {
    'mord+mop': 3,
    'mord+mbin': 4,
    'mord+mrel': 5,
    'mord+minner': 3,

    'mop+mord': 3,
    'mop+mop': 3,
    'mop+mbin': 5,
    'mop+minner': 3,

    'mbin+mord': 4,
    'mbin+mop': 4,
    'mbin+mopen': 4,
    'mbin+minner': 4,

    'mrel+mord': 5,
    'mrel+mop': 5,
    'mrel+mopen': 5,
    'mrel+minner': 5,

    'mclose+mop': 3,
    'mclose+mbin': 4,
    'mclose+mrel': 5,
    'mclose+minner': 3,

    'mpunct+mord': 3,
    'mpunct+mop': 3,
    'mpunct+mbin': 4,
    'mpunct+mrel': 5,
    'mpunct+mopen': 3,
    'mpunct+mpunct': 3,
    'mpunct+minner': 3,
};

const INTER_ATOM_TIGHT_SPACING = {
    'mord+mop': 3,
    'mop+mord': 3,
    'mop+mop': 3,
    'mclose+mop': 3,
    'minner+mop': 3,
};

/**
 * Return a string made up of the concatenated arguments.
 * Each arguments can be either a string, which is unchanged,
 * or a number, which is converted to a string with at most 2 fractional digits.
 *
 */
function toString(arg: (string | number)[] | string | number): string {
    if (typeof arg === 'string') {
        return arg;
    }
    if (typeof arg === 'number') {
        return Number(Math.ceil(1e2 * arg) / 1e2).toString();
    }
    if (typeof arg === 'undefined') {
        return '';
    }
    if (isArray(arg)) {
        let result = '';
        for (const elem of arg) {
            result += toString(elem);
        }
        return result;
        // } else if (arg) {
        //     result += (arg as number).toString();
    }
    console.error('Span.toStringUnexpected argument type');
    return '';
}

//----------------------------------------------------------------------------
// SPAN
//----------------------------------------------------------------------------
/**
 * A span is the most elementary element that can be rendered.
 * It is composed of an optional body of text and an optional list
 * of children (other spans). Each span can be decorated with
 * CSS classes and style attributes.
 *
 * @param content the items 'contained' by this node
 * @param classes list of classes attributes associated with this node


 * @property  type - For example, `'command'`, `'mrel'`, etc...
 * @property classes - A string of space separated CSS classes
 * associated with this element
 * @property cssId - A CSS ID assigned to this span (optional)
 * @property children - An array, potentially empty, of spans which
 * this span encloses
 * @property body - Content of this span. Can be empty.
 * @property style - A set of key/value pairs specifying CSS properties
 * associated with this element.
 * @property height - The measurement from baseline to top, in em.
 * @property depth - The measurement from baseline to bottom, in em.
 * @property width
 */
export class Span {
    type: SpanType;

    children?: Span[];
    body: string;

    classes: string;
    delim?: string; // @revisit

    caret: ParseMode;

    height?: number;
    depth?: number;
    width?: number;
    skew?: number;
    italic?: number;
    maxFontSize?: number;

    isTight?: boolean;

    cssId?: string;

    svgBody?: string;
    svgOverlay?: string;
    svgStyle?: string;

    style: { [key: string]: string };
    attributes?: { [key: string]: string }; // HTML attributes, for example 'data-atom-id'

    constructor(
        content: string | Span | Span[],
        classes = '',
        type: SpanType = ''
    ) {
        // CLASSES
        this.classes = classes;
        // CONTENT
        if (isArray(content)) {
            // Check if isArray first, since an array is also an object
            // Flatten it (i.e. [[a1, a2], b1, b2] -> [a1, a2, b1, b2]
            this.children = [].concat(...content);
        } else if (typeof content === 'string') {
            this.body = content;
        } else if (content && typeof content === 'object') {
            this.children = [content];
        }
        this.type = type;

        // STYLE
        // CSS style, as an array of key value pairs.
        // Use this.setStyle() to modify it.
        this.style = null;

        // Calculate the dimensions of this span based on its children
        this.updateDimensions();
    }
    /**
     * Update the dimensions of this node based on its children:
     * - height: distance from bottom to top
     * - depth: distance from bottom to baseline
     * - maxFontSize: a size multiplier (typically set with commands such as \huge)
     */
    updateDimensions(): void {
        let height = 0.0;
        let depth = 0.0;
        let maxFontSize = 1.0;
        if (this.children) {
            this.children.forEach((x) => {
                if (x.height > height) height = x.height;
                if (x.depth > depth) depth = x.depth;
                if (x.maxFontSize > maxFontSize) maxFontSize = x.maxFontSize;
            });
        } else if (typeof this.body === 'string') {
            height = METRICS.baselineskip;
            depth = 0;
        }
        this.height = height;
        this.depth = depth;
        this.maxFontSize = maxFontSize;
    }

    selected(isSelected: boolean): void {
        if (isSelected && !/ML__selected/.test(this.classes)) {
            if (this.classes.length > 0) this.classes += ' ';
            this.classes += 'ML__selected';
        }
        if (!isSelected && /ML__selected/.test(this.classes)) {
            this.classes = this.classes.replace('ML__selected', '');
        }
        if (this.children) {
            this.children.forEach((x) => x.selected(isSelected));
        }
    }

    applyStyle(style: Style): void {
        if (!style) return;

        //
        // 1. Apply color
        //
        if (style.color) {
            if (style.color !== 'none') {
                this.setStyle('color', style.color);
            } else {
                this.setStyle('color', '');
            }
        }
        if (style.backgroundColor) {
            if (style.backgroundColor !== 'none') {
                this.setStyle('background-color', style.backgroundColor);
            } else {
                this.setStyle('background-color', '');
            }
        }

        //
        // 2. Add any custom style classes
        //

        if (style.cssClass) {
            this.classes += ' ' + style.cssClass;
        }

        // If the body is null (for example for a line), we're done.
        if (!this.body) return;

        //
        // 3. Determine the font family (i.e. 'ams', 'mathcal', etc...)
        // and apply styling by adding appropriate classes to the atom
        //

        console.assert(typeof this.body === 'string');

        const fontName = applyStyleForMode(this, style);

        //
        // 5. Get the metrics information
        //
        if (this.body && fontName) {
            this.maxFontSize =
                {
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
                }[style.fontSize] || 1.0;
            this.height = 0.0;
            this.depth = 0.0;
            this.skew = 0.0;
            this.italic = 0.0;
            for (let i = 0; i < this.body.length; i++) {
                const metrics = getCharacterMetrics(
                    this.body.charAt(i),
                    fontName
                );
                // If we were able to get metrics info for this character, store it.
                if (metrics) {
                    this.height = Math.max(this.height, metrics.height);
                    this.depth = Math.max(this.depth, metrics.depth);
                    this.skew = metrics.skew;
                    this.italic = metrics.italic;
                }
            }
        }
    }

    /**
     * Set the value of a CSS property associated with this span.
     * For example, setStyle('border-right', 5.6, 'em');
     *
     * @param prop the CSS property to set
     * @param value a series of strings and numbers that will be concatenated.
     */
    setStyle(prop: string, ...value: (string | number)[]): void {
        const v = toString(value);
        if (v.length > 0) {
            if (!this.style) this.style = {};
            this.style[prop] = v;
        }
    }

    setTop(top: number): void {
        if (top && top !== 0) {
            if (!this.style) this.style = {};
            this.style['top'] = toString(top) + 'em';
            this.height -= top;
            this.depth += top;
        }
    }

    setLeft(left: number): void {
        if (left && left !== 0) {
            if (!this.style) this.style = {};
            this.style['margin-left'] = toString(left) + 'em';
        }
    }
    setRight(right: number): void {
        if (right && right !== 0) {
            if (!this.style) this.style = {};
            this.style['margin-right'] = toString(right) + 'em';
        }
    }
    setWidth(width: number): void {
        if (width && width !== 0) {
            if (!this.style) this.style = {};
            this.style['width'] = toString(width) + 'em';
        }
    }

    /**
     * Generate the HTML markup to represent this span.
     *
     * @param hskip - Space (in mu, 1/18em) to leave on the left side
     * of the span. Implemented as a Unicode character if possible, a margin-left otherwise.
     * This is used to adjust the inter-spacing between spans of different types,
     * e.g. 'bin' and 'rel', according to the TeX rules (TexBook p.170)
     *
     * @param hscale - If a value is provided, the margins are scaled by
     * this factor.
     *
     * @return HTML markup
     */

    toMarkup(hskip = 1.0, hscale = 1.0): string {
        let result = '';
        let body = this.body || '';

        //
        // 1. Calculate the spacing between atoms, based on their type
        // (`mord`, `mbin`, `mrel`, etc...)
        //
        if (this.children) {
            let previousType = 'none';
            for (let i = 0; i < this.children.length; i++) {
                const child = this.children[i];
                let spacing = 0;
                const type = getEffectiveType(this.children, i);
                const combinedType = previousType + '+' + type;
                if (child.isTight) {
                    spacing = INTER_ATOM_TIGHT_SPACING[combinedType] ?? 0;
                } else {
                    spacing = INTER_ATOM_SPACING[combinedType] ?? 0;
                }
                body += child.toMarkup(spacing, hscale);
                previousType = type;
            }
        }

        // Collapse 'empty' spans
        if (
            (body === '\u200b' || (!body && !this.svgBody)) &&
            (!this.classes || this.classes === 'ML__selected') &&
            !this.cssId &&
            !this.style &&
            !this.svgOverlay
        ) {
            result = '';
        } else {
            // Note: We can't omit the tag, even if it has no class and no style,
            // as some layouts (vlist) depends on the presence of the tag to function
            result = '<span';

            if (this.cssId) {
                result += ' id="' + this.cssId + '" ';
            }

            if (this.attributes) {
                result +=
                    ' ' +
                    Object.keys(this.attributes)
                        .map(
                            (attribute) =>
                                `${attribute}="${this.attributes[attribute]}"`
                        )
                        .join(' ');
            }

            const classes = this.classes.split(' ');

            // Add the type (mbin, mrel, etc...) if specified
            classes.push(
                {
                    command: 'ML__command',
                    placeholder: 'ML__placeholder',
                    error: 'ML__error',
                }[this.type] ?? ''
            );
            if (this.caret && this.type === 'command') {
                classes.push('ML__command-caret');
            }

            // Remove duplicate and empty classes
            let classList = '';
            if (classes.length > 1) {
                classList = classes
                    .filter((x, e, a) => {
                        return x.length > 0 && a.indexOf(x) === e;
                    })
                    .join(' ');
            } else {
                classList = classes[0];
            }

            if (classList.length > 0) {
                result += ` class="${classList}"`;
            }

            // If a `hskip` value was provided, add it to the margin-left
            if (hskip) {
                if (this.style?.['margin-left']) {
                    // There was already a margin, add to it
                    this.style['margin-left'] =
                        toString(
                            parseFloat(this.style['margin-left']) + hskip / 18
                        ) + 'em';
                } else {
                    if (!this.style) this.style = {};
                    this.style['margin-left'] = toString(hskip / 18) + 'em';
                }
            }

            if (this.style) {
                let styleString = '';
                const isSelected = /ML__selected/.test(this.classes);
                for (const style in this.style) {
                    if (
                        Object.prototype.hasOwnProperty.call(this.style, style)
                    ) {
                        // Render the style property, except the background
                        // of selected spans
                        if (style !== 'background-color' || !isSelected) {
                            styleString +=
                                style + ':' + this.style[style] + ';';
                        }
                    }
                }

                if (styleString.length > 0) {
                    result += ' style="' + styleString + '"';
                }
            }
            result += '>';

            // If there is some SVG markup associated with this span,
            // include it now
            if (this.svgBody) {
                result += svgBodyToMarkup(this.svgBody);
            } else if (this.svgOverlay) {
                result += '<span style="';
                result += 'display: inline-block;';
                result += 'height:' + (this.height + this.depth) + 'em;';
                result += 'vertical-align:' + this.depth + 'em;';
                result += '">';
                result += body;
                result += '</span>';
                result += '<svg ';
                result += 'style="position:absolute;';
                result += 'overflow:overlay;';
                result += 'height:' + (this.height + this.depth) + 'em;';
                if (this.style?.padding) {
                    result += 'top:' + this.style.padding + ';';
                    result += 'left:' + this.style.padding + ';';
                    result +=
                        'width:calc(100% - 2 * ' + this.style.padding + ' );';
                } else {
                    result += 'top:0;';
                    result += 'left:0;';
                    result += 'width:100%;';
                }
                result += 'z-index:2;';
                result += '"';
                if (this.svgStyle) {
                    result += ' style="' + this.svgStyle + '"';
                }
                result += '>';
                result += this.svgOverlay;
                result += '</svg>';
            } else {
                result += body;
            }

            result = result + '</span>';
        }

        if (this.caret && this.type !== 'command') {
            if (this.caret === 'text') {
                result = result + '<span class="ML__text-caret"></span>';
            } else {
                result = result + '<span class="ML__caret"></span>';
            }
        }

        return result;
    }

    /**
     * Can this span be coalesced with 'span'?
     * This is used to 'coalesce' (i.e. group together) a series of spans that are
     * identical except for their value, and to avoid generating redundant spans.
     * That is: '12' ->
     *      "<span class='mord mathrm'>12</span>"
     * rather than:
     *      "<span class='mord mathrm'>1</span><span class='mord mathrm'>2</span>"
     */
    tryCoalesceWith(span: Span): boolean {
        // Don't coalesce if the tag or type are different
        if (this.type !== span.type) return false;

        // Don't coalesce consecutive errors, placeholders or commands
        if (
            this.type === 'error' ||
            this.type === 'placeholder' ||
            this.type === 'command'
        ) {
            return false;
        }

        // Don't coalesce if some of the content is SVG
        if (this.svgBody || !this.body) return false;
        if (span.svgBody || !span.body) return false;

        // If this span or the candidate span have children, we can't
        // coalesce them, but we'll try to coalesce their children
        const hasChildren = this.children && this.children.length > 0;
        const spanHasChildren = span.children && span.children.length > 0;
        if (hasChildren || spanHasChildren) return false;

        // If they have a different number of styles, can't coalesce
        const thisStyleCount = this.style ? this.style.length : 0;
        const spanStyleCount = span.style ? span.style.length : 0;
        if (thisStyleCount !== spanStyleCount) return false;

        // For the purpose of our comparison,
        // any 'empty' classes (whitespace)
        const classes = this.classes.trim().replace(/\s+/g, ' ').split(' ');
        const spanClasses = span.classes.trim().replace(/\s+/g, ' ').split(' ');

        // If they have a different number of classes, can't coalesce
        if (classes.length !== spanClasses.length) return false;

        // OK, let's do the more expensive comparison now.
        // If they have different classes, can't coalesce
        classes.sort();
        spanClasses.sort();
        for (let i = 0; i < classes.length; i++) {
            // Don't coalesce vertical separators
            // (used in column formating with {l||r} for example
            if (classes[i] === 'vertical-separator') return false;
            if (classes[i] !== spanClasses[i]) return false;
        }

        // If the styles are different, can't coalesce
        if (this.style && span.style) {
            for (const style in this.style) {
                if (
                    Object.prototype.hasOwnProperty.call(this.style, style) &&
                    Object.prototype.hasOwnProperty.call(span.style, style)
                ) {
                    if (this.style[style] !== span.style[style]) return false;
                }
            }
        }

        // OK, the attributes of those spans are compatible.
        // Merge span into this
        this.body += span.body;
        this.height = Math.max(this.height, span.height);
        this.depth = Math.max(this.depth, span.depth);
        this.maxFontSize = Math.max(this.maxFontSize, span.maxFontSize);
        // The italic correction for the coalesced spans is the
        // italic correction of the last span.
        this.italic = span.italic;
        return true;
    }
}

function getEffectiveType(xs: Span[], i: number): string {
    if (i < 0 || i >= xs.length) return 'none';

    const prevType = xs[i - 1]?.type ?? 'none';
    const nextType = xs[i + 1]?.type ?? 'none';

    let result = xs[i].type ?? 'none';

    if (result === 'first') return 'none';
    if (result === 'textord') return 'mord';
    if (result === 'mbin') {
        // If a `mbin` span, i.e. "+" is after or before spans
        // of a certain type, consider it to be a `mord` instead.
        // This is to handle proper spacing of, e.g. "-4" vs "1-4"
        if (
            /first|none|mrel|mpunct|mopen|mbin|mop/.test(prevType) ||
            /none|mrel|mpunct|mclose/.test(nextType)
        ) {
            result = 'mord';
        }
    }

    return result;
}


