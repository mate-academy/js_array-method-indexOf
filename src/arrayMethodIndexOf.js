'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    if (this.length === 0
      || arguments.length === 0
      || fromIndex >= this.length) {
      return -1;
    }

    let start;

    if (fromIndex < 0) {
      start = this.length - 1 + fromIndex;
    } else {
      start = fromIndex;
    }

    if (start < 0) {
      start = 0;
    }

    for (let i = start; i < this.length; i++) {
      if (Object.is(this[i], searchElement)) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
