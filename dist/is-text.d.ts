import type { TypeGuard } from '@accuser/unist-util-type-guards';
import { Text } from 'hast';
/**
 * Type guard that checks if a value is a {@link Text} node.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link Text} node.
 * @see {@link https://github.com/syntax-tree/hast#text} for more information.
 *
 * @example
 * ```ts
 * const node = { type: 'text', value: 'Hello, World!' };
 * isText(node); //=> true, node is Text
 * ```
 */
declare const _default: TypeGuard<Text>;
export default _default;
