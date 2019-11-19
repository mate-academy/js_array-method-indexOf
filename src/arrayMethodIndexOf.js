'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    if (this.length === 0) {
      return -1;
    }
    if (arguments.length === 0) {
      return -1;
    }
    let step = fromIndex;
    if (step < 0) {
      step = this.length + (fromIndex);
    }
    for (let i = step; i < this.length; i = i + 1) {
      if ((isNaN(this[i]) && (isNaN(searchElement)))
        && (typeof (this[i]) !== 'undefined')) {
        return i;
      }
      if (this[i] === searchElement) {
        return i;
      }
    }
    return -1;
  };
}

module.exports = applyCustomIndexOf;
