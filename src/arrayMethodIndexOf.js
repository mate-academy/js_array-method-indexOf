'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    let counter = fromIndex;
    if (this.length === 0) {
      return -1;
    };
    for (counter; counter < this.length; counter++) {
      if (searchElement === this[counter]) {
        return counter;
      }
    };

    return -1;
  };
};

module.exports = applyCustomIndexOf;
