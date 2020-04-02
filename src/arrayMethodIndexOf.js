'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    let index = fromIndex;

    if (fromIndex < 0) {
      index = this.length + fromIndex;
    }

    if (this.length + fromIndex < 0) {
      index = 0;
    }

    if (fromIndex >= this.length) {
      return -1;
    }

    for (let i = index; i < this.length; i++) {
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
