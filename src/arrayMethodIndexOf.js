'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex) {
    let fromIndexNew = fromIndex;

    if (this.length === 0 || typeof searchElement === 'undefined') {
      return -1;
    }

    if (fromIndexNew < 0) {
      fromIndexNew = this.length + fromIndexNew;
    }

    for (let i = fromIndexNew || 0; i < this.length; i++) {
      if (
        this[i] === searchElement || (isNaN(this[i]) && isNaN(searchElement))
      ) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
