'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex) {
    // write code here
    let i = fromIndex;

    if (fromIndex >= this.length) {
      return -1;
    }

    if (fromIndex < 0) {
    i = Math.max(this.length - Math.abs(i), 0);
    }

    for (i; i < this.length; i++) {
      if ( Object.is(this[i],searchElement)) {
        return i;
      }
    }
    return -1;
  };
}

module.exports = applyCustomIndexOf;
