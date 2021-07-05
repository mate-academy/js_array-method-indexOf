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
    let index = fromIndex < 0 ? 0 : fromIndex;
    for (index; index < this.length; index++) {
      if (searchElement === this[index]) {
        return index;
      }
    }
    return -1;
  };
}

module.exports = applyCustomIndexOf;
