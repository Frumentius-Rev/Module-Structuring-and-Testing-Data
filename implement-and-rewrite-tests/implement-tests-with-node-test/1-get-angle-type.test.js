import assert from "node:assert";
import test from "node:test";

import { getAngleType } from "../implement/1-get-angle-type.js";

test("Classifies acute angles", () => {
  assert.equal(getAngleType(45), "Acute angle");
});

test("Classifies right angles", () => {
  const right = getAngleType(90);
  assert.equal(right, "Right angle");
});
test("Classifies obtuse angles", () => {
  assert.equal(getAngleType(120), "Obtuse angle");
});

test("Classifies straight angles", () => {
  assert.equal(getAngleType(180), "Straight angle");
});

test("Classifies reflex angles", () => {
  assert.equal(getAngleType(270), "Reflex angle");
});

test("Invalid angles", () => {
  assert.equal(getAngleType(0), "Invalid angle");
  assert.equal(getAngleType(369), "Invalid angle");
  assert.equal(getAngleType(-10), "Invalid angle");
});
