'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(token, index = 0) {
    if (index < 0) {
      index = index + this.length;
      for (index; index >= 0; index--) {
        if (this[index] === token) return index;
      }
      return -1;
    }
    for (index; index < this.length; index++) {
      if (this[index] === token) return index;
    }
    return -1;
  };
}
module.exports = applyCustomIndexOf;
