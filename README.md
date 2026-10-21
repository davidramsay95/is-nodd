# is-nodd

Returns `true` if the input number is "n-odd": not divisible by the given divisor.

The inverse of [`is-neven`](https://github.com/davidramsay95/is-neven), which depends on this package. The generalised form of [`is-throdd`](https://github.com/davidramsay95/is-throdd).

## Install

```sh
npm install is-nodd
```

## Usage

This package is ESM only.

```js
import isNodd from 'is-nodd';

isNodd(3, 4); // true
isNodd(5, 12); // true
isNodd(3, 6); // false
isNodd(5, 25); // false
isNodd(3, 0); // false
```

## Behavior

`isNodd(divisor, value)` returns `value % divisor !== 0`. Zero is divisible by any non-zero divisor, so `isNodd(3, 0)` returns `false`.

Inputs are validated with [`is-safe-number`](https://github.com/davidramsay95/is-safe-number). A `TypeError` is thrown if:

- `value` is not a primitive number, is `NaN`, `Infinity` or `-Infinity`, or is outside the safe integer range.
- `divisor` fails the same checks, or is `0`.

Otherwise the result follows JavaScript `%` semantics:

- Non-integer values such as `1.5` return `true`.
- Negative values and negative divisors work as expected: `isNodd(3, -9)` and `isNodd(-3, 9)` both return `false`.

## Development

Tests use the built-in Node.js test runner.

`is-safe-number` must be resolvable from `node_modules`. Once it is published, `npm install` is enough. Until then, link the local sibling checkout without modifying `package.json`:

```sh
npm install --no-save --no-package-lock ../is-safe-number
npm test
```

```sh
npm test
```

## Publishing

Publish `is-safe-number` first, then this package, then `is-neven`. Each declares the previous one as a dependency (`^1.0.0`), so installing fails until it exists on the registry.

Only `index.js`, `package.json`, `README.md` and `LICENSE` are included in the package tarball. Verify with:

```sh
npm pack --dry-run
```

## License

[MIT](LICENSE)
