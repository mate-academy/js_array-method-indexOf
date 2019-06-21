'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex) {
    // write code here
    const length = this.length;
    let startIndex = fromIndex;
    if (fromIndex < 0) {
      startIndex = fromIndex + length;
      if (fromIndex < 0) {
        startIndex = 0;
      }
    } else if (fromIndex === undefined) {
      startIndex = 0;
    }
    if (length < 1) {
      return -1;
    }
    for (let i = startIndex; i < length; i++) {
      if (searchElement === null) {
        return -1;
      }
      if (this[i] === searchElement) {
        return i;
      }
      continue;
    }
    return -1;
  };
}

module.exports = applyCustomIndexOf;
