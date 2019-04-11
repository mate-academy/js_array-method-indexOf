'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(item, position = 0) {
    if (position < 0) {
      for (let j = position + this.length; j >= 0; j--) {
        if (this[j] === item) {
          return j;
        }
      }
    }

    for (let i = position; i < this.length; i++) {
      if (this[i] === item) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
