'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex) {
    if (fromIndex >= this.length) {
      return -1;
    }

    let index = fromIndex;

    if (fromIndex < 0) {
      index = this.length + (index);
    }

    if (fromIndex === undefined || (-fromIndex) >= this.length) {
      index = 0;
    }

    for (let i = index; i < this.length; i++) {
      if (Object.is(this[i], searchElement)) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
