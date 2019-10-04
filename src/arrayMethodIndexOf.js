'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    let index = fromIndex;

    for (index; index < this.length; index++) {
      if (this[index] === searchElement) {
        return index;
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
