'use strict';

/**
 * Implement method indexOf
 *
 */

function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex) {
    let i = 0;
    let checker = 0;
    if (this.length === 0) {
      return -1;
    }
    if (fromIndex) {
      i = fromIndex;
    }
    for (i; i < this.length; i++) {
      if (searchElement === this[i]) {
        return i;
      } else {
        checker = -1;
      }
    };
    return checker;
  };
}

module.exports = applyCustomIndexOf;
