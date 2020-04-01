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

    if ((Math.abs(fromIndex) >= this.length && fromIndex < 0)
      || fromIndex === undefined) {
      withIndex = 0;
    } else if (fromIndex >= this.length) {
      return -1;
    } else if (Math.abs(fromIndex) < this.length && fromIndex < 0) {
      withIndex = this.length - Math.abs(fromIndex) - 1;
    }

    if (this.length === 0) {
      return -1;
    }

    for (let i = withIndex; i < this.length; i++) {
      if (typeof this[i] === 'number'
        && isNaN(this[i])
        && typeof searchElement === 'number'
        && isNaN(searchElement)) {
        return i;
      } else if (this[i] === searchElement) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
