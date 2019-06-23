'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    let result = -1;
    let i = fromIndex;
    for (; i < this.length; i++) {
      if (searchElement === this[i]) {
        result = i;
      }
    }
    return result;
  };
}

module.exports = applyCustomIndexOf;
