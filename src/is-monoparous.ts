import { isMonoparous, type TypeGuard } from '@accuser/unist-util-type-guards';
import { Parent } from 'hast';

/**
 * Type guard that checks if a value is a {@link Parent} node with a single child element.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link Parent} node with a single child element.
 * @see {@link https://github.com/syntax-tree/hast#parent} for more information.
 *
 * @example
 * ```ts
 * const node = { type: 'element', tagName: 'span', children: [{ type: 'text', value: 'Hello, World!' }] };
 * isMonoparous(node); //=> true, node is Parent
 * ```
 */
export default isMonoparous as TypeGuard<Parent>;
