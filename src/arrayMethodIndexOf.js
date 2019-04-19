'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    const arrayLength = this.length;
    if (arrayLength === 0 ||
      fromIndex >= this.length ||
      searchElement === undefined) {
      return -1;
    }
    for (let i = fromIndex; i < this.length; i++) {
      if (searchElement === this[i]) return i;
    }
    return -1;
  };
}

module.exports = applyCustomIndexOf;
