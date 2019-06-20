'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    for (let index = fromIndex; index < this.length; index++) {
      if (this[index] === searchElement) {
        return index;
      }
    }
    return -1;
  };
}

module.exports = applyCustomIndexOf;
