'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    if (searchElement === undefined) {
      return -1;
    }

    for (let i = fromIndex; i < this.length; i++) {
      if (typeof searchElement !== typeof this[i]) {
        return -1;
      }

      if (this[i].toString() === searchElement) {
        return i;
      }

      if (this[fromIndex] === searchElement) {
        return fromIndex;
      }
    }
  };
}

module.exports = applyCustomIndexOf;
