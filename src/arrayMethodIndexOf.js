'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    let i = fromIndex;

    for (i; i < this.length; i++) {
      if (searchElement === this[i]) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
