'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    let searchStartIndex = fromIndex;

    if (searchStartIndex >= this.length) {
      return -1;
    }

    if (searchStartIndex < 0) {
      searchStartIndex = searchStartIndex + this.length;
    }

    if (searchStartIndex < 0) {
      searchStartIndex = 0;
    }

    for (let index = searchStartIndex; index < this.length; index++) {
      if (Object.is(searchElement, this[index])) {
        return index;
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
