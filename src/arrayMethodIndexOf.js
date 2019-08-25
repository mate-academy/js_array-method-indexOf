'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    let result = -1;

    for (let i = fromIndex; i < this.length; i += 1) {
      if (this[i] === searchElement) {
        result = i;
      }
    }

    return result;
  };
}

module.exports = applyCustomIndexOf;
