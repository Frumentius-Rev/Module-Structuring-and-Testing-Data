import { getAngleType } from "../implement/1-get-angle-type.js";

// TODO: Write tests in Jest syntax to cover all cases/outcomes,
// including boundary and invalid cases.

test("90 degrees is a right angle", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

test("obtuse angle", () => {
  expect(getAngleType(120)).toEqual("Obtuse angle");
});

test("180 degrees is a straight angle", () => {
  expect(getAngleType(180)).toEqual("Straight angle");
});

test("Reflex angle", () => {
  expect(getAngleType(270)).toEqual("Reflex angle");
});

test("Invalid angle", () => {
  expect(getAngleType(0)).toEqual("Invalid angle");
  expect(getAngleType(360)).toEqual("Invalid angle");
  expect(getAngleType(-10)).toEqual("Invalid angle");
});

// Case 1: Acute angles
test(`should return "Acute angle" when (0 < angle < 90)`, () => {
  // Test various acute angles, including boundary cases
  expect(getAngleType(1)).toEqual("Acute angle");
  expect(getAngleType(45)).toEqual("Acute angle");
  expect(getAngleType(89)).toEqual("Acute angle");
});

// Case 2: Right angle
// Case 3: Obtuse angles
// Case 4: Straight angle
// Case 5: Reflex angles
// Case 6: Invalid angles
