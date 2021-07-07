'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    // write code here
    const arr = this;
    let start = fromIndex;

    if (start < 0) {
      if (start * (-1) > arr.length) {
        start = 0;
      }
    }

    for (let i = start < 0 ? arr.length + start : start;
      i < arr.length; i++) {
      if (arr[i] === searchElement || (isNaN(arr[i])
       && isNaN(searchElement) && searchElement
       !== undefined && arr[i] !== undefined)) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
