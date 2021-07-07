'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement = 0, fromIndex = 0) {
    for (const [index, elem] of this.entries()) {
      if (index >= fromIndex) {
        if (elem === searchElement) {
          return index;
        }
      }
    }
    return -1;
  };
}

module.exports = applyCustomIndexOf;
