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

    if (fromIndex >= this.length) {
      return -1;
    }

    for (let i = fromIndex; i < this.length; i++) {
      if (searchElement === this[i]) {
        return i;
      }
      if (isNaN(searchElement) && isNaN(this[i]) === isNaN(searchElement)) {
        return i;
      }
    }
    return -1;
  };
}

module.exports = applyCustomIndexOf;
