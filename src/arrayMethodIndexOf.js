'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    let i = fromIndex < 0 ? this.length + fromIndex : fromIndex;
    for (i; i < this.length; i++) {
      if (this[i] === searchElement) {
        return i;
      }
      if (Number.isNaN(this[i]) && Number.isNaN(searchElement)) {
        return i;
      }
    }
    return -1;
  };
}

module.exports = applyCustomIndexOf;
