'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    const elementNumber = -1;

    for (let i = fromIndex; i < this.length; i++) {
      if (searchElement === this[i]) {
        return i;
      }
    }
    return elementNumber;
  };
}

module.exports = applyCustomIndexOf;
