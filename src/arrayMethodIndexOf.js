'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    if (arguments === undefined) {
      return false
    }
    if (arguments.length === 0) {
      return -1;
    }
    if (fromIndex < 0) {
      fromIndex = fromIndex + this.length;
    }
    for (let i = fromIndex; i < this.length; i++) {
      if (this[i] === searchElement) {
        return i;
      }
    }
    return -1;
  };
}

module.exports = applyCustomIndexOf;
