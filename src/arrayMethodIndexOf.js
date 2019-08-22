'use strict';

/**
 * Implement method indexOf
 *
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
