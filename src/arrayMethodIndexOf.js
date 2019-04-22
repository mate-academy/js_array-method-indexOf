'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    const arrayLength = this.length;
    if (
      arrayLength === 0
      || fromIndex >= arrayLength// eslint-disable-line
      || searchElement === undefined // eslint-disable-line
    ) {
      return -1;
    }
    for (let i = fromIndex; i < arrayLength; i++) {
      if (searchElement === this[i]) return i;
    }
    return -1;
  };
}

module.exports = applyCustomIndexOf;
