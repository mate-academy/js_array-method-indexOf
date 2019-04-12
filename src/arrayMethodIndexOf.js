'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(elem, index = 0) {
    for (let i = index; i < this.length; i++) {
      if (this[i] === elem) {
        return i;
      }
    }
    return -1;
  };
}

module.exports = applyCustomIndexOf;
