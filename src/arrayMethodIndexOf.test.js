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

test(`should return -1 when the search element is not specified`, () => {
  expect(source.indexOf2())
    .toBe(-1);
});

test(`should return elements index when it is present`, () => {
  expect(source.indexOf2('11'))
    .toBe(0);
});

test(`should return -1 when element of a different type is present`, () => {
  expect(source.indexOf2(11))
    .toBe(-1);
});

test(`should return -1 when only substring of the element is present`, () => {
  expect(source.indexOf2('1'))
    .toBe(-1);
});

test(`should return -1
  when element is present before frontIndex position`, () => {
  expect(source.indexOf2('11', 1))
    .toBe(-1);
});

test(`should return position of empty string when it is present`, () => {
  expect(source.indexOf2(''))
    .toBe(3);
});

test(`should return -1 when called for empty array`, () => {
  expect([].indexOf2())
    .toBe(-1);
});

test(`should return element when it's on a fromIndex position`, () => {
  expect(source.indexOf2(44, 4))
    .toBe(4);
});
