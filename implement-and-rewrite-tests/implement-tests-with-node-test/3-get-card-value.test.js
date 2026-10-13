import assert from "node:assert";
import test from "node:test";

import { getCardValue } from "../implement/3-get-card-value.js";

test("Ace returns 11", () => {
  assert.equal(getCardValue("A♠"), 11);
});

test("Face cards returns 10", () => {
  assert.equal(getCardValue("J♣"), 10);
  assert.equal(getCardValue("Q♦"), 10);
  assert.equal(getCardValue("K♥"), 10);
});

test("Number cards return their numerical value", () => {
  assert.equal(getCardValue("2♥"), 2);
  assert.equal(getCardValue("10♥"), 10);
});

test("Valid single-digit card", () => {
  assert.equal(getCardValue("9♠"), 9);
});

test("Arbitrary non-card string", () => {
  assert.throws(
    () => getCardValue("invalid"),
    /Expected a number followed by a suit, but got "invalid"/,
    "Expected clear error"
  );
});

test("Invalid suit throws an error", () => {
  assert.throws(
    () => getCardValue("9X"),
    /Expected a number followed by a suit, but got "9X"/
  );
});
