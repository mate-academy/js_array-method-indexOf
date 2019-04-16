'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElem, fromIndex = 0) {
    const isEqualValues = (val1, val2) =>
      Number.isNaN(val1) ? Number.isNaN(val1) : val1 === val2;

    if (fromIndex >= this.length) {
      return -1;
    }

    for (let i = fromIndex; i < this.length; i++) {
      if (isEqualValues(this[i], searchElem)) {
        return i;
      }
    }
    return -1;
  };
}

module.exports = applyCustomIndexOf;
