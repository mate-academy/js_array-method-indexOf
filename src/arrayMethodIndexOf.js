'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    const indFrom = fromIndex;
    for (let i = indFrom; i < this.length; i++) {
      if (searchElement === this[i]) {
        return i;
      }
    }
    return -1;
  };
}

module.exports = applyCustomIndexOf;
