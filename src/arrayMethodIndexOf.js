'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    for (let i = 0; i < this.length; i++) {
      if (i >= fromIndex && this[i] === searchElement) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
