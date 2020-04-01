'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    let realIndex = fromIndex;

    if (!arguments.length) {
      return -1;
    }

    if (fromIndex < 0) {
      realIndex = this.length + fromIndex;

      if (realIndex < 0) {
        realIndex = 0;
      }
    }

    for (let i = realIndex; i < this.length; i++) {
      if (Number.isNaN(searchElement) && Number.isNaN(this[i])) {
        return i;
      }

      if (searchElement === this[i]) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
