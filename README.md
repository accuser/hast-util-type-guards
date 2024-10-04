# TypeScript Type Guards for Hast Nodes

This package provides TypeScript type guards for [Hast](https://github.com/syntax-tree/hast) nodes.

## Installation

```sh
npm install @accuser/hast-util-type-guards
```

## Usage

```ts
import { isText } from '@accuser/hast-util-type-guards';

const value = {
  type: 'text',
  value: 'Hello, world!'
};

isNode(value); // true, value is Node
isLiteral(value); // true, value is Literal
isText(value); // true, value is Text
```

## API

This package exports the identifiers:

- [`isComment`](api-iscomment)
- [`isDoctype`](api-isdoctype)
- [`isElement`](api-iselement)
- [`isLiteral`](api-isliteral)
- [`isNode`](api-isnode)
- [`isParent`](api-isparent)
- [`isRoot`](api-isroot)
- [`isText`](api-istext)

There is no default export.

### `isComment(value: unknown): value is Comment`

Test if the given value is a valid [`Comment`](https://github.com/syntax-tree/hast/#comment) node.

###### Parameters

* `value` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `value` is a valid [`Comment`](https://github.com/syntax-tree/hast/#comment) node.

### `isDoctype(value: unknown): value is Doctype`

Test if the given value is a valid [`Doctype`](https://github.com/syntax-tree/hast/#doctype) node.

###### Parameters

* `value` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `value` is a valid [`Doctype`](https://github.com/syntax-tree/hast/#doctype) node.

### `isElement(value: unknown): value is Element`

Test if the given value is a valid [`Element`](https://github.com/syntax-tree/hast/#element) node.

###### Parameters

* `value` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `value` is a valid [`Element`](https://github.com/syntax-tree/hast/#element) node.

### `isLiteral(value: unknown): value is Literal`

Test is a given value is a valid [`Literal`](https://github.com/syntax-tree/hast/#literal) node.

###### Parameters

* `value` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `value` is a valid Unist literal value.

### `isNode(value: unknown): value is Node`

Test if a given value is a valid [`Node`](https://github.com/syntax-tree/hast/#node).

###### Parameters

* `value` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `value` is a valid [`Node`](https://github.com/syntax-tree/hast/#node).

### `isParent(value: unknown): value is Parent`

Test is a given value is a valid [`Parent`](https://github.com/syntax-tree/hast/#parent) node.

###### Parameters

* `value` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `value` is a valid [`Parent`](https://github.com/syntax-tree/hast/#parent) node.

### `isRoot(value: unknown): value is Root`

Test if a given value is a valid [`Root`](https://github.com/syntax-tree/hast/#root) node.

###### Parameters

* `value` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `value` is a valid [`Root`](https://github.com/syntax-tree/hast/#root) node.

### `isText(value: unknown): value is Text`

Test if a given value is a valid [`Text`](https://github.com/syntax-tree/hast/#text) node.

###### Parameters

* `value` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `value` is a valid [`Text`](https://github.com/syntax-tree/hast/#text) node.

## Tests

```sh
npm test
```

## License

[MIT](https://raw.githubusercontent.com/accuser/unist-util-type-guards/main/LICENSE)

[api-iscomment]: #isliteralvalue-unknown-value-is-comment
[api-isdoctype]: #isliteralvalue-unknown-value-is-doctype
[api-iselement]: #iselementvalue-unknown-value-is-element
[api-isliteral]: #isliteralvalue-unknown-value-is-literal
[api-isnode]: #isnodevalue-unknown-value-is-node
[api-isparent]: #isparentvalue-unknown-value-is-parent
[api-isroot]: #isrootvalue-unknown-value-is-root
[api-istext]: #istextvalue-unknown-value-is-text