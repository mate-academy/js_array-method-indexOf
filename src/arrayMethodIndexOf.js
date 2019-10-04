'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex) {
    return this.findIndex((item, index) => {
      if (fromIndex) {
        return index >= fromIndex && item === searchElement;
      } else {
        return item === searchElement;
      }
    });
  };
}

module.exports = applyCustomIndexOf;
