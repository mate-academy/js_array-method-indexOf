'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex) {
    // write code here
    let withIndex = fromIndex;

    if (fromIndex < 0) {
      withIndex = fromIndex + this.length;
    }

    if (fromIndex === undefined
      || fromIndex === null
      || Number.isNaN(fromIndex)
      || (searchElement === undefined && withIndex < 0)) {
      withIndex = 0;
    } else if (fromIndex < 0) {
      withIndex = fromIndex + this.length;
    }

    if (this.length === 0 || withIndex >= this.length) {
      return -1;
    }

    for (let i = withIndex; i < this.length; i++) {
      if (Number.isNaN(this[i])
        && Number.isNaN(searchElement)) {
        return i;
      } else if (this[i] === searchElement) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
