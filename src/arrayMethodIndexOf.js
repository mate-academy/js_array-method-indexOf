'use strict';

/**
 * Implement method indexOf
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex) {
    if (arguments.length === 0) {
      return -1;
    }

    let i = 0;
    if (isFinite(fromIndex) && fromIndex >= 0) {
      i = fromIndex;
    } else if (isFinite(fromIndex) && fromIndex < 0) {
      i = this.length + fromIndex;
    }

    for (i; i < this.length; i++) {
      if ((!isNaN(searchElement) && searchElement === this[i])
        || (isNaN(searchElement) && Object.is(searchElement, this[i]))) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
