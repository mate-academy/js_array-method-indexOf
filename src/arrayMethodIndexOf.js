'use strict';

/**
 * Implement method indexOf
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    let from = fromIndex;
    if (arguments.length === 0) {
      return -1;
    }
    if (from < 0) {
      from = fromIndex + this.length;
    }
    if (from < 0) {
      from = 0;
    }
    for (let i = from; i < this.length; i++) {
      if (this[i] === searchElement
         || (Number.isNaN(this[i]) && Number.isNaN(searchElement))) {
        return i;
      }
    }
    return -1;
  };
}
module.exports = applyCustomIndexOf;
