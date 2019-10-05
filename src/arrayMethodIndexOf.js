'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    let startFrom = fromIndex;

    for (let i = startFrom; i < this.length; i++) {
      if (searchElement === this[i]) {
        return i;
      }
    }
    return -1;
  };
}

module.exports = applyCustomIndexOf;
