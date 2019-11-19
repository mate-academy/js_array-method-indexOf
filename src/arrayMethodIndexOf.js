'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    if ((this.length === 0) || (searchElement === undefined)) {
      return -1;
    }

    if (fromIndex >= 0) {
      for (let i = fromIndex; i < this.length; i++) {
        if (this[i] === searchElement) {
          return i;
        }
      }
    } else {
      for (let i = this.length + fromIndex; i < this.length; i++) {
        if (this[i] === searchElement) {
          return i;
        }
      }
    }
    return -1;
  };
}

module.exports = applyCustomIndexOf;
