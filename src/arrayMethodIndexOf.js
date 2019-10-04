'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex) {
    let position = fromIndex;
    if (this.length === 0) {
      return -1;
    }
    if (position === undefined) {
      position = 0;
    }
    for (let i = position; i < this.length; i++) {
      if (this[i] === searchElement) {
        return i;
      } else if (i === this.length - 1) {
        return -1;
      }
    }
  };
}

module.exports = applyCustomIndexOf;
