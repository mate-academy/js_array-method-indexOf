'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    if (fromIndex < 0) {
      for (let i = this.length + fromIndex; i < this.length; i++) {
        if (Object.is(searchElement, this[i])
          || (isNaN(searchElement)
            && isNaN(searchElement) === isNaN(this[i]))) {
          return i;
        }
      }
    } else {
      for (let i = fromIndex; i < this.length; i++) {
        if (Object.is(searchElement, this[i])
          || (isNaN(searchElement)
            && isNaN(searchElement) === isNaN(this[i]))) {
          return i;
        }
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
