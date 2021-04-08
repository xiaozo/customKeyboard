import type { Releasable } from './releasable';
import { hashCode } from './hash-code';

export type Stylesheet = Releasable;

export function inject(element: HTMLElement, css: string): Releasable {
    if (!css) return null;

    let root = element?.getRootNode() ?? document?.head;

    if (!root) return null;
    if (root === document) root = document.head;

    const id = hashCode(css).toString(36);
    const el = (root as HTMLElement).querySelector(`style[data-id="${id}"]`);
    if (el) {
        const refCount = parseFloat(el.getAttribute('data-refcount') ?? '0');
        el.setAttribute('data-refcount', Number(refCount + 1).toString());
    } else {
        // Make a new node holding the stylesheet
        const styleNode = document.createElement('style');
        // styleNode.setAttribute('media', 'screen')
        // styleNode.setAttribute('media', 'only screen and (max-width : 1024px)')
        styleNode.type = 'text/css';
        styleNode.dataset.id = id;
        styleNode.dataset.refcount = '1';
        styleNode.appendChild(document.createTextNode(css));
        root.appendChild(styleNode);
    }

    return {
        release: (): void => {
            const el = document.head.querySelector(`style[data-id="${id}"]`);
            if (el) {
                const refCount = parseFloat(
                    el.getAttribute('data-refcount') ?? '0'
                );
                if (refCount === 1) {
                    el.remove();
                } else {
                    el.setAttribute(
                        'data-refcount',
                        Number(refCount - 1).toString()
                    );
                }
            }
        },
    };
}
