'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex) {
    let i = fromIndex === undefined ? 0 : fromIndex;

    while (i < this.length) {
      if (this[i] === searchElement) {
        return i;
      }
      i++;
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
