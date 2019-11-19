'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    if (this.length === 0 || fromIndex === this.length) {
      return -1;
    }
    if (fromIndex < 0 && (fromIndex + this.length) > 0) {
      // eslint-disable-next-line no-param-reassign
      fromIndex = this.length + fromIndex;
    } else if (fromIndex < 0 && (fromIndex + this.length) < 0) {
      // eslint-disable-next-line no-param-reassign
      fromIndex = 0;
    }
    for (let i = fromIndex; i < this.length; i++) {
      if (searchElement === this[i]) {
        return i;
      }
    }
    return -1;
  };
}

module.exports = applyCustomIndexOf;
