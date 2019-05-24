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
    const fromIndexInt = (typeof fromIndex === 'undefined') ? 0 : fromIndex;
    for (let i = fromIndexInt; i < this.length; i++) {
      if (this[i] === searchElement) {
        return i;
      }
    }
    return -1;
  };
}

module.exports = applyCustomIndexOf;
