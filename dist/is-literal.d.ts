import { type TypeGuard } from '@accuser/unist-util-type-guards';
import { Literal } from 'hast';
/**
 * Type guard that checks if a value is a {@link Literal} node.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link Literal} node.
 * @see {@link https://github.com/syntax-tree/hast#literal} for more information.
 *
 * @example
 * ```ts
 * const node = { type: 'comment', value: 'Hello, world!' };
 * isLiteral(node); //=> true, node is Literal
 * ```
 */
declare const _default: TypeGuard<Literal>;
export default _default;
