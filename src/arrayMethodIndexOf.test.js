'use strict';

const applyCustomIndexOf = require('./arrayMethodIndexOf');
const source = ['11', '22', '33', '', 44];
applyCustomIndexOf();

test('indexOf2 is added to [].__proto__', () => {
  expect([].indexOf2)
    .toBeInstanceOf(Function);
});

test(`indexOf2 doesn't call default indexOf`, () => {
  expect([].indexOf2.toString().includes('.indexOf('))
    .toBe(false);
});

test(`without valueToFind`, () => {
  expect(source.indexOf2())
    .toBe(-1);
});

test(`indexOf2('11') = 0`, () => {
  expect(source.indexOf2('11'))
    .toBe(0);
});

test(`indexOf2(11) = -1`, () => {
  expect(source.indexOf2(11))
    .toBe(-1);
});

test(`indexOf2('1') = -1`, () => {
  expect(source.indexOf2('1'))
    .toBe(-1);
});

test(`indexOf2('11', 1) = -1 fromIndex 1`, () => {
  expect(source.indexOf2('11', 1))
    .toBe(-1);
});

test(`indexOf2('') = 3`, () => {
  expect(source.indexOf2(''))
    .toBe(3);
});

test(`[].indexOf2() = -1`, () => {
  expect([].indexOf2())
    .toBe(-1);
});
