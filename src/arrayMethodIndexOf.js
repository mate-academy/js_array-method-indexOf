'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    let startIndex = fromIndex;

    if (-startIndex > this.length) {
      startIndex = 0;
    } else if (startIndex < 0) {
      startIndex += this.length;
    }

    for (let i = startIndex; i < this.length; i++) {
      if (searchElement === this[i]) {
        return i;
      } else if (Number.isNaN(searchElement) && Number.isNaN(this[i])) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
