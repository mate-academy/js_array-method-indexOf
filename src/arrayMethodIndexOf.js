/* eslint-disable no-unreachable */
'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    let startIndex = fromIndex;

    if (fromIndex < (-this.length)) {
      startIndex = 0;
    } else if (fromIndex < 0 && fromIndex >= (-this.length)) {
      startIndex = this.length + fromIndex;
    }

    if (this.length === 0) {
      return -1;
    }

    for (let i = startIndex; i < this.length; i++) {
      if (Object.is(this[i], searchElement)) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
