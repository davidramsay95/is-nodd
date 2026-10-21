import { test } from 'node:test';
import assert from 'node:assert/strict';
import isNodd from './index.js';

test('exports a function', () => {
  assert.equal(typeof isNodd, 'function');
});

test('returns true when the value is not divisible by the divisor', () => {
  assert.equal(isNodd(3, 1), true);
  assert.equal(isNodd(3, 4), true);
  assert.equal(isNodd(5, 12), true);
  assert.equal(isNodd(2, 7), true);
});

test('returns false when the value is divisible by the divisor', () => {
  assert.equal(isNodd(3, 3), false);
  assert.equal(isNodd(3, 999), false);
  assert.equal(isNodd(5, 25), false);
  assert.equal(isNodd(2, 8), false);
});

test('returns false for zero, which is divisible by any non-zero divisor', () => {
  assert.equal(isNodd(3, 0), false);
  assert.equal(isNodd(7, 0), false);
});

test('every value is divisible by 1', () => {
  assert.equal(isNodd(1, 0), false);
  assert.equal(isNodd(1, 17), false);
  assert.equal(isNodd(1, -17), false);
});

test('handles negative values', () => {
  assert.equal(isNodd(3, -1), true);
  assert.equal(isNodd(3, -4), true);
  assert.equal(isNodd(3, -3), false);
  assert.equal(isNodd(3, -9), false);
});

test('handles negative divisors', () => {
  assert.equal(isNodd(-3, 9), false);
  assert.equal(isNodd(-3, 10), true);
});

test('returns true for non-integer values', () => {
  assert.equal(isNodd(3, 1.5), true);
  assert.equal(isNodd(3, 3.5), true);
});

test('throws a TypeError for NaN and Infinity values', () => {
  assert.throws(() => isNodd(3, NaN), TypeError);
  assert.throws(() => isNodd(3, Infinity), TypeError);
  assert.throws(() => isNodd(3, -Infinity), TypeError);
});

test('throws a TypeError for values beyond the safe integer range', () => {
  assert.throws(() => isNodd(3, Number.MAX_SAFE_INTEGER + 1), TypeError);
  assert.throws(() => isNodd(3, Number.MIN_SAFE_INTEGER - 1), TypeError);
});

test('throws a TypeError for a divisor of zero', () => {
  assert.throws(() => isNodd(0, 5), TypeError);
  assert.throws(() => isNodd(0, 0), TypeError);
  assert.throws(() => isNodd(-0, 5), TypeError);
});

test('throws a TypeError for an unsafe divisor', () => {
  assert.throws(() => isNodd(NaN, 5), TypeError);
  assert.throws(() => isNodd(Infinity, 5), TypeError);
  assert.throws(() => isNodd(Number.MAX_SAFE_INTEGER + 1, 5), TypeError);
});

test('throws a TypeError for non-number inputs', () => {
  assert.throws(() => isNodd('3', 6), TypeError);
  assert.throws(() => isNodd(3, '6'), TypeError);
  assert.throws(() => isNodd(null, 6), TypeError);
  assert.throws(() => isNodd(3, undefined), TypeError);
  assert.throws(() => isNodd(), TypeError);
});

test('always returns a boolean', () => {
  assert.equal(typeof isNodd(3, 3), 'boolean');
  assert.equal(typeof isNodd(3, 4), 'boolean');
});
