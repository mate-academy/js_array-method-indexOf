'use strict';
/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    if (this.length < 1) {
      return -1;
    };
    for (let i = fromIndex; i < this.length; i++) {
      if (this[i] === searchElement) {
        return i;
      };
      if (searchElement === null) {
        return -1;
      };
      continue;
    };
    return -1;
  };
};
module.exports = applyCustomIndexOf;