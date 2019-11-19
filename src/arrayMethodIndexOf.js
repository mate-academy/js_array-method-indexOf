'use strict';

/**
 * Implement method indexOf
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    // write code here
    if (arguments.length === 0) {
      return -1;
    }

    let i = fromIndex;

    if (fromIndex < 0) {
      i = this.length + fromIndex;
    }

    for (i; i < this.length; i++) {
      if (this[i] === searchElement
        || (isNaN(searchElement) && Object.is(searchElement, this[i]))) {
        return i;
      }
    }
    return -1;
  };
}

module.exports = applyCustomIndexOf;
