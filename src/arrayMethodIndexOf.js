'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    if (arguments.length === 0) {
      return -1;
    }
    let start = fromIndex;
    if (start < 0) {
      start += this.length;
    }
    if (start < 0) {
      start = 0;
    }
    for (let i = start; i < this.length; i++) {
      if (Object.is(this[i], searchElement)) {
        return i;
      }
    }
    return -1;
  };
}

module.exports = applyCustomIndexOf;
