import { TypeGuard } from '@accuser/unist-util-type-guards';
import { Comment } from 'hast';
import isLiteral from './is-literal.js';

/**
 * Type guard that checks if a value is a {@link Comment} node.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link Comment} node.
 * @see {@link https://github.com/syntax-tree/hast#comment} for more information.
 *
 * @example
 * ```ts
 * const node = { type: 'comment', value: 'Hello, world!' };
 * isComment(node); //=> true, node is Comment
 * ```
 */
export default ((value) =>
	isLiteral(value) && value.type === 'comment') as TypeGuard<Comment>;
