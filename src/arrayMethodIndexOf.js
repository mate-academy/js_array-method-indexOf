'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex) {
    let startIndex = fromIndex || 0;
    const endIndex = this.length;

    if (arguments.length === 0) {
      return -1;
    }

    if (fromIndex < 0) {
      startIndex = endIndex + fromIndex;
    }

    if (startIndex < 0) {
      startIndex = 0;
    }

    for (let i = startIndex; i <= endIndex; i++) {
      if (this[i] === searchElement) {
        return i;
      }

      if (Number.isNaN(searchElement) && Number.isNaN(this[i])) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
