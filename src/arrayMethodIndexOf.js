'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    let resultIndex = -1;
    let startingIndex = 0;

    if (fromIndex > this.length) {
      return -1;
    } else if (Math.abs(fromIndex) > this.length && fromIndex < 0) {
      startingIndex = 0;
    } else if (fromIndex < 0) {
      startingIndex = this.length - Math.abs(fromIndex);
    } else {
      startingIndex = fromIndex;
    }

    for (let i = startingIndex; i < this.length; i++) {
      if (Object.is(this[i], searchElement)) {
        resultIndex = i;
        break;
      }
    }

    return resultIndex;
  };
}

module.exports = applyCustomIndexOf;
