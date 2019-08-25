'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex) {
    if (searchElement === undefined || this.length === 0) {
      return -1;
    }

    let result = -1;
    let i = 0;

    if (fromIndex !== undefined) {
      i = fromIndex > 0 ? fromIndex : this.length + fromIndex;
    }

    for (i; i < this.length; i++) {
      if (this[i] === searchElement) {
        result = i;
        break;
      }
    }

    return result;
  };
}

module.exports = applyCustomIndexOf;
