'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(token, index = 0) {
    if (index < 0) {
      for (let i = index + this.length; i >= 0; i--) {
        if (this[i] === token) return i;
      }
      return -1;
    }
    for (let i = index; i < this.length; i++) {
      if (this[i] === token) return i;
    }
    return -1;
  };
}
module.exports = applyCustomIndexOf;
