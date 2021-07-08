'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
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
