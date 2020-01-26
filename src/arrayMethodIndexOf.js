'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    let startIndex = fromIndex;

    if (arguments.length === 0 || startIndex >= this.length) {
      return -1;
    }

    if (startIndex <= -this.length) {
      startIndex = 0;
    }

    if (startIndex >= 0) {
      for (let i = startIndex; i < this.length; i++) {
        if (this[i] === searchElement) {
          return i;
        }
      }
    }

    if (startIndex < 0) {
      for (let i = this.length + startIndex; i < this.length; i++) {
        if (this[i] === searchElement) {
          return i;
        }
      }
    }

    if (Number.isNaN(searchElement)) {
      for (let i = startIndex; i < this.length; i++) {
        if (Number.isNaN(this[i])) {
          return i;
        }
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
