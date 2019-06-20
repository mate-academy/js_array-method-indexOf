'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex) {
    let indexFrom = 0;
    if (!isNaN(fromIndex)) {
      indexFrom = fromIndex;
    }

    const length = this.length;
    for (let i = indexFrom; i < length; i++) {
      if (this[i] === searchElement) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
