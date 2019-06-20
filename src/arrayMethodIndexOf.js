'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    let result = -1;

    for (let i = 0; i < this.length; i++) {
      if (searchElement === this[i] && i >= fromIndex) {
        result = i;
      }
    }
    return result;
  };
}

module.exports = applyCustomIndexOf;
