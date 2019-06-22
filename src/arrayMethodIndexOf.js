'use strict';

/**
 * Implement method indexOf
 *
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
