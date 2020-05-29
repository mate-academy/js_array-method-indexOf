'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    let reassignedIndex = fromIndex;

    if (fromIndex < 0) {
      (Math.abs(reassignedIndex) > this.length)
        ? reassignedIndex = 0
        : reassignedIndex += this.length;
    }

    for (let i = reassignedIndex; i < this.length; i++) {
      if (!Number.isNaN(searchElement)) {
        if (this[i] === searchElement) {
          return i;
        }
      } else {
        if (Number.isNaN(this[i])) {
          return i;
        }
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
