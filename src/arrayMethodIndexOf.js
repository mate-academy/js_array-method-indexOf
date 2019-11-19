'use strict';

/**
 * Implement method indexOf
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    if (this.length === 0 || arguments.length === 0) {
      return -1;
    }

    let start;

    if (fromIndex < 0) {
      start = this.length - 1 + fromIndex;
    } else {
      start = fromIndex;
    }

    if (fromIndex >= this.length) {
      return -1;
    }

    for (let i = start; i < this.length; i++) {
      if (this[i] === searchElement) {
        return i;
      }

      if (isNaN(this[i]) && isNaN(searchElement) && this[i] !== undefined) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
