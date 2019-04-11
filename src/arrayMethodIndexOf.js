'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(elem, index) {
    let array = this;
    for (let i = index === undefined ? 0 : index; i < array.length; i++) {
      if (array[i] === elem) {
        return i;
      }
    }
    return -1;
  };
}

module.exports = applyCustomIndexOf;
