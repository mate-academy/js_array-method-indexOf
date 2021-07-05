'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    if (arguments.length === 0) {
      return -1;
    }

    let currentIndex = (fromIndex < 0) ? this.length + (fromIndex) : fromIndex;

    if (this.length + (fromIndex) < 0) {
      currentIndex = 0;
    }

    for (let i = currentIndex; i < this.length; i++) {
      if ((Number.isNaN(searchElement) && Number.isNaN(this[i]))
      || this[i] === searchElement) {
        return i;
      }
    }

    return -1;
  };
}
module.exports = applyCustomIndexOf;
