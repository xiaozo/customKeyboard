/**
 * This module contains utilities to debug mathlive internal data structures.
 *
 * It is also used by the automated test suite.
 */

import { ParseMode } from '../public/core';
import { parseString } from '../core/parser';
import { atomToAsciiMath } from '../editor/atom-to-ascii-math';

export function latexToAsciiMath(
    latex: string,
    mode: ParseMode = 'math'
): string {
    const mathlist = parseString(latex, mode, null, null);

    return atomToAsciiMath(mathlist);
}



// Export the public interface for this module
export default {
    latexToAsciiMath,
};
