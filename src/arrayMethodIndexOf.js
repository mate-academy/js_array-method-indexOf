'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex) {
    let currentIndex = fromIndex || 0;
    let foundIndex = -1;

    while (foundIndex < 0 && currentIndex < this.length) {
      if (this[currentIndex] === searchElement) {
        foundIndex = currentIndex;
      }
      currentIndex++;
    }

    return foundIndex;
  };
}

module.exports = applyCustomIndexOf;
