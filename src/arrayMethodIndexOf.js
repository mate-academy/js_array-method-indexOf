'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex) {
    if (arguments.length === 0) {
      return -1;
    }

    let i;

    if (fromIndex > 0) {
      i = fromIndex;
    } else if (fromIndex < 0 && Math.abs(fromIndex) < this.length) {
      i = this.length + fromIndex;
    } else {
      i = 0;
    }

    for (i; i < this.length; i++) {
      if (Number.isNaN(searchElement)) {
        return this.findIndex(Number.isNaN);
      }

      if (this[i] === searchElement) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
