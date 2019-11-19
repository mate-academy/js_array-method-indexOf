'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    if (fromIndex >= this.length || searchElement === undefined) {
      return -1;
    }

    if (fromIndex >= 0) {
      for (let i = fromIndex; i < this.length; i++) {
        if (typeof (this[i]) !== typeof (searchElement)) {
          return -1;
        }
        if (this[i] === searchElement) {
          return i;
        }
      }
    } else {
      for (let i = this.length + fromIndex; i < this.length; i++) {
        if (typeof (this[i]) !== typeof (searchElement)) {
          return -1;
        }
        if (this[i] === searchElement) {
          return i;
        }
      }
    }
  };
}

module.exports = applyCustomIndexOf;
