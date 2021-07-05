'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex) {
    const thisArrLength = this.length;
    let start = 0;

    if (arguments.length === 0) {
      return -1;
    }

    if (fromIndex && typeof fromIndex === 'number') {
      if (fromIndex >= 0) {
        start = fromIndex;
      } else {
        start = thisArrLength + fromIndex - 1;
      }

      if (start > thisArrLength || start < 0) {
        return -1;
      }
    }

    for (let i = start; i < thisArrLength; i++) {
      if (String(searchElement) === 'NaN') {
        if (String(this[i]) === 'NaN') {
          return i;
        };
      };

      if (this[i] === searchElement) {
        return i;
      };
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
