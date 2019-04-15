'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    if (fromIndex >= this.length) {
      return -1;
    }
    let index = fromIndex < 0 ? 0 : fromIndex;
    for (index; index < this.length; index++) {
      if (searchElement === this[index]) {
        return index;
      }
    }
    return -1;
  };
}

module.exports = applyCustomIndexOf;
