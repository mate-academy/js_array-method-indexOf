'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(value, fromIndex = 0) {
    if (value === undefined || this.length === 0) return -1;
    for (let index = fromIndex; index < this.length; index++) {
      if (this[index] === value || (isNaN(value) && isNaN(this[index]))) {
        return index;
      }
    }
    return -1;
  };
}

module.exports = applyCustomIndexOf;
