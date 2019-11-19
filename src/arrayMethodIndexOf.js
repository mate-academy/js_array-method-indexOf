'use strict';

/**
 * Implement method indexOf
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    let num = frontIndex;
    if (arguments.length === 0) {
      return -1;
    }
    if (fromIndex < 0) {
      num = fromIndex + this.length;
    }
    for (let i = num; i < this.length; i++) {
      if (this[i] === searchElement) {
        return i;
      }
    }
    return -1;
  };
}

module.exports = applyCustomIndexOf;
