'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    let from = fromIndex;
    if (this.length === 0 || fromIndex === this.length) {
      return -1;
    }
    if (fromIndex < 0 && (fromIndex + this.length) > 0) {
      from = this.length + fromIndex;
    } else if (fromIndex < 0 && (fromIndex + this.length) < 0) {
      from = 0;
    }
    for (let i = from; i < this.length; i++) {
      if (searchElement === this[i]) {
        return i;
      }
    }
    return -1;
  };
}

module.exports = applyCustomIndexOf;
