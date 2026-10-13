import { getCardValue } from "../implement/3-get-card-value.js";

test("Should return 2 for a number card", () => {
  expect(getCardValue("2♥")).toEqual(2);
});

test("Number card (2-10)", () => {
  expect(getCardValue("7♦")).toEqual(7);
  expect(getCardValue("4♣")).toEqual(4);
});

test("Face Cards (J, Q, K)", () => {
  expect(getCardValue("J♣")).toEqual(10);
  expect(getCardValue("Q♦")).toEqual(10);
  expect(getCardValue("K♥")).toEqual(10);
});

// Case 1: Ace (A)
test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A♠")).toEqual(11);
});

test("Invalid cards throw an error", () => {
  expect(() => getCardValue("2x")).toThrow();
  expect(() => getCardValue(invalid)).toThrow();
});

// Suggestion: Group the remaining test data into these categories:
//   Number Cards (2-10)
//   Face Cards (J, Q, K)
//   Invalid Cards

// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror
