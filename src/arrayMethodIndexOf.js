'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex) {
    if (this.length === 0) {
      return -1;
    }
    let fromIndexInt = fromIndex;
    if (typeof fromIndex === 'undefined') {
      fromIndexInt = 0;
    }
    let i = fromIndexInt;
    while (true) {
      if (this[i] === searchElement) {
        return i;
      }
      i++;
      if (i >= this.length) {
        break;
      }
    }
    return -1;
  };
}

module.exports = applyCustomIndexOf;
