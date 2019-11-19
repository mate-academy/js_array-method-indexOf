'use strict';

/**
 * Implement method indexOf
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    if (arguments.length === 0) {
      return -1;
    }

    const search = fromIndex >= 0 ? fromIndex : this.length + fromIndex;

    for (let i = search; i < this.length; i++) {
      if (searchElement === this[i]
        || (isNaN(searchElement)
          && Object.is(searchElement, this[i]))) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
