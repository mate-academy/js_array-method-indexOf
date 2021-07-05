'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    const arr = this;
    let ind = fromIndex;

    if (ind < 0) {
      ind += arr.length;
    }

    if (ind < 0) {
      ind = 0;
    }

    for (let i = ind; i < arr.length; i++) {
      if (Object.is(arr[i], searchElement)) {
        return i;
      }
    };

    return -1;
  };
}

module.exports = applyCustomIndexOf;
