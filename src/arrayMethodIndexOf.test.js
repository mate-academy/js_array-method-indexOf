'use strict';

const applyCustomIndexOf = require('./arrayMethodIndexOf');
const source = ['11', undefined, NaN, null, '11', 44];

applyCustomIndexOf();

test('indexOf2 is added to [].__proto__', () => {
  expect([].indexOf2)
    .toBeInstanceOf(Function);
});

test(`indexOf2 doesn't call default indexOf`, () => {
  expect([].indexOf2.toString().includes('.indexOf('))
    .toBe(false);
});

test(`should works when the search element is not specified`, () => {
  expect(source.indexOf2())
    .toBe(1);
});

test(`should return elements index when it is present`, () => {
  expect(source.indexOf2('11'))
    .toBe(0);
});

test(`should not compare elements with ==`, () => {
  expect(source.indexOf2(11))
    .toBe(-1);
});

test(`should not compare strings partly`, () => {
  expect(source.indexOf2('1'))
    .toBe(-1);
});

test(`should return first found index after frontIndex`, () => {
  expect(source.indexOf2('11', 1))
    .toBe(4);
});

test(`should start search from fromIndex`, () => {
  expect(source.indexOf2('11', 4))
    .toBe(4);
});

test(`should return -1 if does not exist after frontIndex`, () => {
  expect(source.indexOf2('11', 5))
    .toBe(-1);
});

test(`should return -1 for too large frontIndex`, () => {
  expect(source.indexOf2('11', 999))
    .toBe(-1);
});

test(`should accept negative frontIndex`, () => {
  expect(source.indexOf2('11', -3))
    .toBe(4);
});

test(`should search from start for big negative frontIndex`, () => {
  expect(source.indexOf2('11', -999))
    .toBe(0);
});

test(`should search from start for big negative frontIndex`, () => {
  expect(source.indexOf2(undefined, -999))
    .toBe(1);
});

test(`should work correctly for null`, () => {
  expect(source.indexOf2(null))
    .toBe(3);
});

test(`should work correctly for NaN`, () => {
  expect(source.indexOf2(NaN))
    .toBe(2);
});

test(`should work correctly for undefined`, () => {
  expect(source.indexOf2(undefined))
    .toBe(1);
});

test(`should return -1 when called for empty array`, () => {
  expect([].indexOf2('11'))
    .toBe(-1);
});
