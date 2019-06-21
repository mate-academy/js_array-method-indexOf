'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    let i;
    for (i = fromIndex; i < this.length; i++) {
      if (this[i] === searchElement) {
        return i;
      } else if (searchElement === null) {
        return -1;
      };
    };
    return -1;
  };
};

module.exports = applyCustomIndexOf;
