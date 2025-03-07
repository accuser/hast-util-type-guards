import { TypeGuard } from '@accuser/unist-util-type-guards';
import { Doctype } from 'hast';
/**
 * Type guard that checks if a value is a {@link Doctype} node.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link Doctype} node.
 * @see {@link https://github.com/syntax-tree/hast#doctype} for more information.
 *
 * @example
 * ```ts
 * const node = { type: 'doctype' };
 * isDoctype(node); //=> true, node is Doctype
 * ```
 */
declare const _default: TypeGuard<Doctype>;
export default _default;
