'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    if (arguments.length === 0) {
      return -1;
    }

    let i = fromIndex;

    if (i < 0) {
      i += this.length;
    }

    if (i > this.length) {
      return -1;
    }

    for (; i < this.length; i++) {
      if (Object.is(this[i], searchElement)) {
        return i;
      }
    }
    return -1;
  };
}

module.exports = applyCustomIndexOf;
