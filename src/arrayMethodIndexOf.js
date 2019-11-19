'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    let result = -1;
    let index = fromIndex;
    if (index < 0) {
      index = this.length + index;
    }
    for (let i = index; i < this.length; i++) {
      if (this[i] === searchElement) {
        result = i;
      }
    }
    return result;
  };
}

module.exports = applyCustomIndexOf;
