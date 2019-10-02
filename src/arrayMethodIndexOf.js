'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex) {
    if (fromIndex) {
      for (let i = fromIndex; i < this.length; i++) {
        if (searchElement === this[i]) {
          return i;
        }
      }
    } else {
      for (let i = 0; i < this.length; i++) {
        if (searchElement === this[i]) {
          return i;
        }
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
