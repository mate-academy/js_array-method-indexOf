'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */

function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    if (Number.isNaN(searchElement)) {
      for (let i = 0; i < this.length; i++) {
        if (Number.isNaN(this[i])) {
          return i;
        }
      }
    }

    let startIndex;

    if (this.length + fromIndex < 0 || arguments.length === 1) {
      startIndex = 0;
    } else if (fromIndex < 0) {
      startIndex = this.length + fromIndex;
    } else if (fromIndex > 0) {
      startIndex = fromIndex;
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
