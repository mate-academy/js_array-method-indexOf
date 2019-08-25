'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    const startIndex = arguments.length < 2 ? 0 : fromIndex;

    for (let index = startIndex; index < this.length; index++) {
      if (this[index] === searchElement) {
        return index;
      }
    }
    return -1;
  };
}

module.exports = applyCustomIndexOf;
