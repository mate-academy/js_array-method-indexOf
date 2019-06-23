'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    if (searchElement === undefined) {
      return -1;
    }

    let newIndex = fromIndex;
    if (newIndex >= this.length) {
      return -1;
    };

    if (newIndex < 0) {
      newIndex = 1 + this.length + newIndex;
      if (newIndex < 0) {
        newIndex = 0;
      };
    };

    for (let i = newIndex; i < this.length; i++) {
      if (this[i] === searchElement) {
        return i;
      }
      if (isNaN(this[i]) && isNaN(searchElement)) {
        return i;
      }
    }
    return -1;
  };
}

module.exports = applyCustomIndexOf;
