import { formatAs12HourClock } from "./timeConverter.js";
import assert from "node:assert";
import test from "node:test";

test("correctly convert time after 12:00", function () {
  assert.equal(formatAs12HourClock("23:00"), "11:00 pm");
});

test("can correctly convert morning time", function () {
  assert.equal(formatAs12HourClock("08:00"), "8:00 am");
});

test("can correctly convert midnight", () =>
  assert.equal(formatAs12HourClock("00:00"), "12:00 am"));

test("converts noon 12:00", () =>
  assert.equal(formatAs12HourClock("12:00"), "12:00 pm"));

test("converts 13:00", () =>
  assert.equal(formatAs12HourClock("13:00"), "1:00 pm"));

test("converts 12:59", () =>
  assert.equal(formatAs12HourClock("12:59"), "12:59 pm"));

test("converts 23:59 at night", () =>
  assert.equal(formatAs12HourClock("23:59"), "11:59 pm"));

test("converts 00:59 after midnight", () =>
  assert.equal(formatAs12HourClock("00:59"), "12:59 am"));

test("converts 11:59 before noon", () =>
  assert.equal(formatAs12HourClock("11:59"), "11:59 am"));
