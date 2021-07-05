'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
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
