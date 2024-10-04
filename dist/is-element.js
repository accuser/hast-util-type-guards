import isParent from './is-parent.js';
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
export default ((value) => isParent(value) && value.type === 'element' && 'tagName' in value && typeof value.tagName === 'string');
