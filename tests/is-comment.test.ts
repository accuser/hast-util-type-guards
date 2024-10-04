import { isComment } from '@accuser/hast-util-type-guards';
import { describe, expect, it } from 'vitest';

describe('isComment', () => {
	it('returns `true` for a comment node', () => {
		expect(isComment({ type: 'comment', value: 'Hello, World!' })).toBe(true);
	});

	for (const value of [
		null,
		undefined,
		true,
		false,
		'text',
		42,
		[],
		{},
		{ type: 'comment' },
		{ value: 'Hello, World!' },
	]) {
		it('returns `false`', () => {
			expect(isComment(value)).toBe(false);
		});
	}
});
