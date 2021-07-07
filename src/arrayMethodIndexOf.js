'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    let frIndex = fromIndex;

    if (arguments.length === 0) {
      return -1;
    }

    if (this.length + frIndex < 0) {
      frIndex = 0;
    } else if (frIndex < 0) {
      frIndex = this.length + fromIndex;
    }

    for (let i = frIndex; i < this.length; i++) {
      if (searchElement + '' === 'NaN' && this[i] + '' === 'NaN') {
        return i;
      }

      if (this[i] === searchElement) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
