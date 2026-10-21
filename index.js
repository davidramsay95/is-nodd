import isSafeNumber, { isSafeDivisor } from 'is-safe-number';

const isNodd = (divisor, value) => {
  if (!isSafeDivisor(divisor)) {
    throw new TypeError('is-nodd: divisor must be a safe, non-zero number');
  }

  if (!isSafeNumber(value)) {
    throw new TypeError('is-nodd: value must be a safe number');
  }

  return value % divisor !== 0;
};

export default isNodd;
