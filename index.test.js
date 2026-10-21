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

test('returns true for NaN and Infinity values', () => {
  assert.equal(isNodd(3, NaN), true);
  assert.equal(isNodd(3, Infinity), true);
  assert.equal(isNodd(3, -Infinity), true);
});

test('returns true for a divisor of zero, because % yields NaN', () => {
  assert.equal(isNodd(0, 5), true);
  assert.equal(isNodd(0, 0), true);
});

test('always returns a boolean', () => {
  assert.equal(typeof isNodd(3, 3), 'boolean');
  assert.equal(typeof isNodd(3, 4), 'boolean');
});
