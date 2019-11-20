'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    if (searchElement === undefined) {
      return -1;
    }

    if (fromIndex >= this.length) {
      return -1;
    }

    let startIndex = fromIndex;
    if (startIndex < 0) {
      startIndex = 0;
    }

    for (let i = startIndex; i < this.length; i++) {
      if (Object.is(searchElement, this[i])) {
        return i;
      }
    }
    return -1;
  };
}

module.exports = applyCustomIndexOf;
