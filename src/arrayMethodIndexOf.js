'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex) {
    let index = fromIndex;

    if (index === undefined) {
      index = 0;
    }

    for (index; index < this.length; index++) {
      if (this[index] === searchElement) {
        return index;
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
