'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  Array.prototype.indexOf2 = function(searchElement, fromIndex = 0) {
    for (let i = fromIndex; i < this.length; i++) {
      if (i >= fromIndex && this[i] === searchElement) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
