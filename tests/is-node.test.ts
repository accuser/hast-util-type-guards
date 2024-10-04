import { isNode } from '@accuser/hast-util-type-guards';
import { describe, expect, it } from 'vitest';

describe('isNode', () => {
	it('returns `true` for a node node', () => {
		expect(isNode({ type: 'leaf' })).toBe(true);
	});

	for (const value of [null, undefined, true, false, 'leaf', 42, [], {}]) {
		it('returns `false`', () => {
			expect(isNode(value)).toBe(false);
		});
	}
});
