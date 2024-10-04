import { TypeGuard } from '@accuser/unist-util-type-guards';
import { Element } from 'hast';
/**
 * Type guard that checks if a value is a {@link Element} node.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link Element} node.
 * @see {@link https://github.com/syntax-tree/hast#element} for more information.
 *
 * @example
 * ```ts
 * const node = { type: 'element', children: [], properties: {}, tagName: 'div' };
 * isElement(node); //=> true, node is Comment
 * ```
 */
declare const _default: TypeGuard<Element>;
export default _default;
