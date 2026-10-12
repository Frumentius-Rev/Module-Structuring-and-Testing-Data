import assert from "node:assert";
import test from "node:test";

import { isProperFraction } from "../implement/2-is-proper-fraction.js";

// TODO: Write tests to cover all cases.
// What combinations of numerators and denominators should you test?

test("Basic proper fraction", () => {
  // Example: 1/2 is a proper fraction
  assert.equal(isProperFraction(1, 2), true);
});

test("Basic proper fraction 2/5", () => {
  assert.equal(isProperFraction(2, 5), true);
});

test("Basic proper fraction 3/5", () => {
  assert.equal(isProperFraction(3, 5), true);
});

test("Checks equal numerator & denominator 5/5", () => {
  assert.equal(isProperFraction(5, 5), false);
});

test("Checks numerator greater than denominator 7/5", () => {
  assert.equal(isProperFraction(7, 5), false);
});
