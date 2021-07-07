'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    let startIndex = fromIndex;
    const countedIndex = this.length + startIndex;

    if (searchElement === undefined) {
      return 1;
    }

    if (startIndex >= this.length) {
      return -1;
    } else if ((startIndex < 0) && (countedIndex > 0)) {
      startIndex = countedIndex;
    } else if (countedIndex < 0) {
      startIndex = 0;
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
