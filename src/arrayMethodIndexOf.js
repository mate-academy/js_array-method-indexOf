'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex) {
    let i = arguments.length < 2 ? 0 : fromIndex;

    for (i; i < this.length; i++) {
      if (this[i] === searchElement) {
        return i;
      }
    }
    return -1;
  };
}

module.exports = applyCustomIndexOf;
