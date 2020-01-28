'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    let startIndex = fromIndex;

    if (startIndex > this.length || arguments.length === 0) {
      return -1;
    }

    if (startIndex + this.length < 0) {
      startIndex = 0;
    }

    if (Math.sign(startIndex) === -1) {
      startIndex = this.length + startIndex;
    }

    if (Number.isNaN(searchElement)) {
      for (let i = startIndex; i < this.length; i++) {
        if (Number.isNaN(this[i])) {
          return i;
        }
      }
    }

    for (let i = startIndex; i < this.length; i++) {
      if (this[i] === searchElement) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
