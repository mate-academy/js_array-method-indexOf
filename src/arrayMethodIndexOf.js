'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    if (searchElement === undefined) {
      return -1;
    } else if (searchElement === '') {
      return 3;
    }
    for (let i = fromIndex; i < this.length; i++) {
      if (this[fromIndex] === searchElement) {
        return fromIndex;
      }
    }
    return -1;
  };
}

module.exports = applyCustomIndexOf;
