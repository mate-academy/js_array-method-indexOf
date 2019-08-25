'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    let resultIndexOf = -1;

    for (let i = 0; i < this.length; i++) {
      if (i >= fromIndex && this[i] === searchElement) {
        resultIndexOf = i;
      }
    }

    return resultIndexOf;
  };
}

module.exports = applyCustomIndexOf;
