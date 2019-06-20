'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex) {
    let startSearch = 0;
    if (!isNaN(fromIndex)) {
      startSearch = fromIndex;
    }

    const length = this.length;
    for (let i = startSearch; i < length; i++) {
      if (this[i] === searchElement) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
