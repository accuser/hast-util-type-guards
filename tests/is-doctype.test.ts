import { isDoctype } from '@accuser/hast-util-type-guards';
import { describe, expect, it } from 'vitest';

describe('isComment', () => {
	it('returns `true` for a doctype node', () => {
		expect(isDoctype({ type: 'doctype' })).toBe(true);
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
	]) {
		it('returns `false`', () => {
			expect(isDoctype(value)).toBe(false);
		});
	}
});
