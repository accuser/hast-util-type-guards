import type { TypeGuard } from '@accuser/unist-util-type-guards';
import { Root } from 'hast';
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
declare const _default: TypeGuard<Root>;
export default _default;
