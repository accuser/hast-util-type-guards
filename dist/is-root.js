import isParent from './is-parent.js';
/**
 * Type guard that checks if a value is a {@link Root} node.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link Root} node.
 * @see {@link https://github.com/syntax-tree/hast#root} for more information.
 *
 * @example
 * ```ts
 * const node = { type: 'root', children: [] };
 * isRoot(node); //=> true, node is Root
 * ```
 */
export default ((value) => isParent(value) && value.type === 'root');
