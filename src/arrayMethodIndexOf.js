'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    if (fromIndex >= this.length) {
      return -1;
    }

    let i = 0;

    if (fromIndex < 0) {
      if (this.length + fromIndex < 0) {
        i = 0;
      } else {
        i = this.length + fromIndex;
      }
    } else {
      i = fromIndex;
    }

    for (i; i < this.length; i++) {
      if (Object.is(searchElement, this[i])) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
