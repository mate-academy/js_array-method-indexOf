'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    if (fromIndex < 0) {
      // eslint-disable-next-line no-cond-assign,no-param-reassign
      fromIndex = fromIndex + [].length;
      if (fromIndex < 0) {
        // eslint-disable-next-line no-param-reassign
        fromIndex = 0;
      }
    }

    for (let i = fromIndex; i < this.length; i++) {
      if (this[i] === searchElement && fromIndex >= 0) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
