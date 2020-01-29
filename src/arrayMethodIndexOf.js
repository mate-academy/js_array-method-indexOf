'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    // write code here
    if (arguments.length === 0 || fromIndex >= this.length) {
      return -1;
    }

    let searchFrom = fromIndex;

    if (fromIndex < 0) {
      searchFrom = this.length - 1 + fromIndex;
    }

    if (searchFrom < 0) {
      searchFrom = 0;
    }

    for (let i = searchFrom; i < this.length; i++) {
      if (Object.is(this[i], searchElement)) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
