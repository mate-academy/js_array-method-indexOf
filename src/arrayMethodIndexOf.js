'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex) {
    let fromIndexNew = fromIndex;

    if (this.length === 0 || arguments.length === 0) {
      return -1;
    }

    if (fromIndexNew < 0) {
      fromIndexNew = this.length + fromIndexNew;
    }

    for (let i = fromIndexNew || 0; i < this.length; i++) {
      if (
        this[i] === searchElement
        || (Number.isNaN(this[i]) && Number.isNaN(searchElement))
        || (typeof searchElement === 'undefined'
        && typeof this[i] === 'undefined')
      ) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
