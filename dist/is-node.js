import { isNode } from '@accuser/unist-util-type-guards';
/**
 * Type guard that checks if a value is a {@link Node} node.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link Node} node.
 * @see {@link https://github.com/syntax-tree/hast#node} for more information.
 *
 * @example
 * ```ts
 * const node = { type: 'comment', value: 'Hello, world!' };
 * isNode(node); //=> true, node is Node
 * ```
 */
export default isNode;
