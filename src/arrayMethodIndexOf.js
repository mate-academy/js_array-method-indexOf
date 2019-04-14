'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    if (fromIndex >= this.length) {
      return -1;
    }
    let index = 0;
    fromIndex < 0 ? index = 0 : index = fromIndex;
    for (index; index < this.length; index++) {
      if (typeof searchElement === typeof this[index]) {
        if (searchElement === this[index]) {
          return index;
        } else if (isNaN(searchElement) && isNaN(this[index])) {
          return index;
        } else {
          continue;
        }
      } else {
        continue;
      }
    }
    return -1;
  };
}

module.exports = applyCustomIndexOf;
