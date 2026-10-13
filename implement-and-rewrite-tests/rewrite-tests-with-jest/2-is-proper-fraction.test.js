import { isProperFraction } from "../implement/2-is-proper-fraction.js";

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.
test(`should return true for proper fractions`, () => {
  expect(isProperFraction(1, 2)).toEqual(true);
  expect(isProperFraction(2, 5)).toEqual(true);
});

test(`should return false when numerator is not smaller`, () => {
  expect(isProperFraction(5, 5)).toEqual(false);
  expect(isProperFraction(7, 5)).toEqual(false);
});

// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

test(`should return true when numerator is zero`, () => {
  expect(isProperFraction(0, 5)).toEqual(true);
});
