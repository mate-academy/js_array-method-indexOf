'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex) {
    if (searchElement === undefined) {
      return -1;
    };

    if (fromIndex && this[fromIndex] !== searchElement) {
      return -1;
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === searchElement) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
