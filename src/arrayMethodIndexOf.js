'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    let result = -1;

    for (let i = 0; i < this.length; i++) {
      if (searchElement === this[i] && i >= fromIndex) {
        result = i;
      }
    }
    return result;
  };
}

module.exports = applyCustomIndexOf;
