'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    // if (fromIndex < 0)  {
    //   fromIndex = this.length + fromIndex;
    // }

    // if (fromIndex < 0) {
    //   return -1;
    // }

    for (let i = fromIndex; i < this.length; i++) {
      if (this[i] === searchElement) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
