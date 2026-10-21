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

Inputs follow JavaScript `%` semantics:

- Non-integer values such as `1.5` return `true`.
- `NaN`, `Infinity` and `-Infinity` values return `true`, because `%` yields `NaN` for them and `NaN !== 0`.
- A divisor of `0` returns `true`, because `value % 0` is `NaN`.
- Negative values and negative divisors work as expected: `isNodd(3, -9)` and `isNodd(-3, 9)` both return `false`.

## Development

Tests use the built-in Node.js test runner. No dependencies are required.

```sh
npm test
```

## Publishing

Publish this package before `is-neven`, which declares it as a dependency (`^1.0.0`).

Only `index.js`, `package.json`, `README.md` and `LICENSE` are included in the package tarball. Verify with:

```sh
npm pack --dry-run
```

## License

[MIT](LICENSE)
