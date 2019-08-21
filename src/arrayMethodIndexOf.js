'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex) {
    const indexFrom = (fromIndex === undefined) ? 0 : fromIndex;

    for (let i = indexFrom; i < this.length; i++) {
      if (this[i] === searchElement) {
        return i;
      }
    }
    return -1;
  };
}

module.exports = applyCustomIndexOf;
