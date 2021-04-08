import { register } from './commands';
import type { ModelPrivate } from './model-class';
import { getAnchor, getAnchorStyle } from './model-selection-utils';
import {
    move,
    leap,
    skip,
    jumpToMathFieldBoundary,
    collapseSelectionForward,
    selectGroup,
    extend,
    setSelectionExtent,
    setSelectionOffset,
    selectAll,
    moveAfterParent,
} from './model-selection';
import { deleteChar } from './model-delete';
import { Atom } from '../core/atom';

/**
 * Switch the cursor to the superscript and select it. If there is no subscript
 * yet, create one.
 */
export function moveToSuperscript(model: ModelPrivate): boolean {
    collapseSelectionForward(model);
    if (!getAnchor(model).superscript) {
        if (getAnchor(model).subscript) {
            getAnchor(model).superscript = [
                new Atom(model.parent().mode, 'first'),
            ];
        } else {
            const sibling = model.sibling(1);
            if (sibling?.superscript) {
                model.path[model.path.length - 1].offset += 1;
            } else if (sibling?.subscript) {
                model.path[model.path.length - 1].offset += 1;
                getAnchor(model).superscript = [
                    new Atom(model.parent().mode, 'first'),
                ];
            } else {
                if (getAnchor(model).limits !== 'limits') {
                    model
                        .siblings()
                        .splice(
                            model.anchorOffset() + 1,
                            0,
                            new Atom(
                                model.parent().mode,
                                'msubsup',
                                '\u200b',
                                getAnchorStyle(model)
                            )
                        );
                    model.path[model.path.length - 1].offset += 1;
                }
                getAnchor(model).superscript = [
                    new Atom(model.parent().mode, 'first'),
                ];
            }
        }
    }
    model.path.push({ relation: 'superscript', offset: 0 });
    selectGroup(model);
    return true;
}

/**
 * Switch the cursor to the subscript and select it. If there is no subscript
 * yet, create one.
 */
export function moveToSubscript(model: ModelPrivate): boolean {
    collapseSelectionForward(model);
    if (!getAnchor(model).subscript) {
        if (getAnchor(model).superscript) {
            getAnchor(model).subscript = [
                new Atom(model.parent().mode, 'first'),
            ];
        } else {
            const sibling = model.sibling(1);
            if (sibling?.subscript) {
                model.path[model.path.length - 1].offset += 1;
            } else if (sibling?.superscript) {
                model.path[model.path.length - 1].offset += 1;
                getAnchor(model).subscript = [
                    new Atom(model.parent().mode, 'first'),
                ];
            } else {
                if (getAnchor(model).limits !== 'limits') {
                    model
                        .siblings()
                        .splice(
                            model.anchorOffset() + 1,
                            0,
                            new Atom(
                                model.parent().mode,
                                'msubsup',
                                '\u200b',
                                getAnchorStyle(model)
                            )
                        );
                    model.path[model.path.length - 1].offset += 1;
                }
                getAnchor(model).subscript = [
                    new Atom(model.parent().mode, 'first'),
                ];
            }
        }
    }
    model.path.push({ relation: 'subscript', offset: 0 });
    selectGroup(model);
    return true;
}

/**
 * If cursor is currently in:
 * - superscript: move to subscript, creating it if necessary
 * - subscript: move to superscript, creating it if necessary
 * - numerator: move to denominator
 * - denominator: move to numerator
 * - otherwise: move to superscript
 */
register(
    {
        moveToOpposite: (model: ModelPrivate): boolean => {
            const OPPOSITE_RELATIONS = {
                superscript: 'subscript',
                subscript: 'superscript',
                denom: 'numer',
                numer: 'denom',
            };
            const oppositeRelation = OPPOSITE_RELATIONS[model.relation()];
            if (!oppositeRelation) {
                moveToSuperscript(model);
            }

            if (!model.parent()[oppositeRelation]) {
                // Don't have children of the opposite relation yet
                // Add them
                model.parent()[oppositeRelation] = [
                    new Atom(model.parent().mode, 'first'),
                ];
            }

            setSelectionOffset(model, 0, 'end', oppositeRelation);
            return true;
        },
        moveBeforeParent: (model: ModelPrivate): boolean => {
            if (model.path.length > 1) {
                model.path.pop();
                setSelectionOffset(model, model.anchorOffset() - 1);
                return true;
            }
            model.announce('plonk');
            return false;
        },
        moveAfterParent: (model: ModelPrivate): boolean =>
            moveAfterParent(model),

        moveToNextPlaceholder: (model: ModelPrivate): boolean =>
            leap(model, +1),
        moveToPreviousPlaceholder: (model: ModelPrivate): boolean =>
            leap(model, -1),
        moveToNextChar: (model: ModelPrivate): boolean =>
            move(model, 'forward'),
        moveToPreviousChar: (model: ModelPrivate): boolean =>
            move(model, 'backward'),
        moveUp: (model: ModelPrivate): boolean => move(model, 'upward'),
        moveDown: (model: ModelPrivate): boolean => move(model, 'downward'),
        moveToNextWord: (model: ModelPrivate): boolean => skip(model, +1),
        moveToPreviousWord: (model: ModelPrivate): boolean => skip(model, -1),
        moveToGroupStart: (model: ModelPrivate): boolean =>
            setSelectionOffset(model, 0),
        moveToGroupEnd: (model: ModelPrivate): boolean =>
            setSelectionOffset(model, -1),
        moveToMathFieldStart: (model: ModelPrivate): boolean =>
            jumpToMathFieldBoundary(model, -1),
        moveToMathFieldEnd: (model: ModelPrivate): boolean =>
            jumpToMathFieldBoundary(model, +1),
        moveToSuperscript: (model: ModelPrivate): boolean =>
            moveToSuperscript(model),
        moveToSubscript: (model: ModelPrivate): boolean =>
            moveToSubscript(model),
    },
    { target: 'model', category: 'selection-anchor' }
);

register(
    {
        selectGroup: (model: ModelPrivate): boolean => selectGroup(model),

        selectAll: (model: ModelPrivate): boolean => selectAll(model),
        extendToNextChar: (model: ModelPrivate): boolean => extend(model, +1),
        extendToPreviousChar: (model: ModelPrivate): boolean =>
            extend(model, -1),
        extendToNextWord: (model: ModelPrivate): boolean =>
            skip(model, +1, { extend: true }),
        extendToPreviousWord: (model: ModelPrivate): boolean =>
            skip(model, -1, { extend: true }),
        extendUp: (model: ModelPrivate): boolean =>
            move(model, 'upward', { extend: true }),
        extendDown: (model: ModelPrivate): boolean =>
            move(model, 'downward', { extend: true }),
        /**
         * Extend the selection until the next boundary is reached. A boundary
         * is defined by an atom of a different type (mbin, mord, etc...)
         * than the current focus. For example, in "1234+x=y", if the focus is between
         * "1" and "2", invoking `extendToNextBoundary_` would extend the selection
         * to "234".
         */
        extendToNextBoundary: (model: ModelPrivate): boolean =>
            skip(model, +1, { extend: true }),

        /**
         * Extend the selection until the previous boundary is reached. A boundary
         * is defined by an atom of a different type (mbin, mord, etc...)
         * than the current focus. For example, in "1+23456", if the focus is between
         * "5" and "6", invoking `extendToPreviousBoundary` would extend the selection
         * to "2345".
         */
        extendToPreviousBoundary: (model: ModelPrivate): boolean =>
            skip(model, -1, { extend: true }),
        extendToGroupStart: (model: ModelPrivate): boolean => {
            setSelectionExtent(model, -model.anchorOffset());
            return true;
        },
        extendToGroupEnd: (model: ModelPrivate): boolean => {
            setSelectionExtent(
                model,
                model.siblings().length - model.anchorOffset()
            );
            return true;
        },
        extendToMathFieldStart: (model: ModelPrivate): boolean =>
            jumpToMathFieldBoundary(model, -1, { extend: true }),
        extendToMathFieldEnd: (model: ModelPrivate): boolean =>
            jumpToMathFieldBoundary(model, +1, { extend: true }),
    },
    { target: 'model', category: 'selection-extend' }
);

register(
    {
        deleteAll: (model: ModelPrivate): boolean => {
            selectAll(model);
            return deleteChar(model);
        },
        deleteNextChar: (model: ModelPrivate): boolean => deleteChar(model, +1),
        deletePreviousChar: (model: ModelPrivate): boolean =>
            deleteChar(model, -1),
        deleteNextWord: (model: ModelPrivate): boolean => {
            skip(model, +1, { extend: true });
            return deleteChar(model);
        },
        deletePreviousWord: (model: ModelPrivate): boolean => {
            skip(model, -1, { extend: true });
            return deleteChar(model);
        },
        deleteToGroupStart: (model: ModelPrivate): boolean => {
            setSelectionExtent(model, -model.anchorOffset());
            return deleteChar(model);
        },
        deleteToGroupEnd: (model: ModelPrivate): boolean => {
            jumpToMathFieldBoundary(model, -1, { extend: true });
            return deleteChar(model);
        },
        deleteToMathFieldStart: (model: ModelPrivate): boolean => {
            jumpToMathFieldBoundary(model, -1, { extend: true });
            return deleteChar(model);
        },
        deleteToMathFieldEnd: (model: ModelPrivate): boolean => {
            jumpToMathFieldBoundary(model, +1, { extend: true });
            return deleteChar(model);
        },
    },
    { target: 'model', category: 'delete' }
);
