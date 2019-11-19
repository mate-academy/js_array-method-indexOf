'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    let index = fromIndex;
    if (arguments.length === 0) {
      return -1;
    }
    if (fromIndex < 0 && fromIndex + this.length < 0) {
      index = 0;
    }
    for (let i = index; i < this.length; i++) {
      if (this[i] === searchElement) {
        return i;
      }
    }
    return -1;
  };
}

module.exports = applyCustomIndexOf;
