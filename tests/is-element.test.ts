import { describe, expect, it } from 'vitest';
import { isElement } from '../dist';

describe('isElement', () => {
	it('returns `true` for a element node', () => {
		expect(isElement({ type: 'element', tagName: 'span', children: [] })).toBe(true);
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
		{ type: 'element' },
		{ tagName: 'span' },
		{ children: [] },
		{ type: 'element', tagName: 'span' },
		{ type: 'element', children: [] },
		{ tagName: 'span', children: [] },
	]) {
		it('returns `false`', () => {
			expect(isElement(value)).toBe(false);
		});
	}
});
