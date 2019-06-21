'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    // write code here
    let currentIndex = fromIndex;
    if (fromIndex < 0) {
      currentIndex = this.length + fromIndex;
    };

    for (currentIndex; currentIndex < this.length; currentIndex++) {
      if (this[currentIndex] === searchElement) {
        return currentIndex;
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
