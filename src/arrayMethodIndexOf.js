'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    let from = fromIndex;
    if (this.length === 0
      || fromIndex === this.length
      || arguments.length === 0) {
      return -1;
    }
    if (from < 0) {
      from = this.length + fromIndex;
    }
    if (from < 0) {
      from = 0;
    }
    for (let i = from; i < this.length; i++) {
      if (searchElement === this[i]) {
        return i;
      }
      if ((isNaN(searchElement) && typeof this[i] === 'number') === true) {
        return i;
      }
    }
    return -1;
  };
}

module.exports = applyCustomIndexOf;
