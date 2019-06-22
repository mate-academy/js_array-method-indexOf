'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    let i = fromIndex < 0 ? this.length + fromIndex : fromIndex;
    for (i; i < this.length; i++) {
      if (this[i] === searchElement) {
        return i;
      }
      if (Number.isNaN(this[i]) && Number.isNaN(searchElement)) {
        return i;
      }
    }
    return -1;
  };
}

module.exports = applyCustomIndexOf;
