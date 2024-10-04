import { isText } from '@accuser/hast-util-type-guards';
import { describe, expect, it } from 'vitest';

describe('isText', () => {
	it('returns `true` for a text node', () => {
		expect(isText({ type: 'text', value: 'Hello, World!' })).toBe(true);
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
		{ type: 'text' },
		{ value: 'Hello, World!' },
	]) {
		it('returns `false`', () => {
			expect(isText(value)).toBe(false);
		});
	}
});
