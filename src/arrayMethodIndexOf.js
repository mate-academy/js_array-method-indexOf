'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    if (arguments.length === 0) {
      return -1;
    }

    let validFromIndex = fromIndex;

    if (fromIndex < 0 && fromIndex < -this.length) {
      validFromIndex = 0;
    } else if (fromIndex < 0) {
      validFromIndex = this.length + fromIndex;
    }

    for (let i = 0 + validFromIndex; i < this.length; i++) {
      if (this[i] === searchElement
        || (isNaN(this[i]) && isNaN(searchElement) && this[i] !== undefined)) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
