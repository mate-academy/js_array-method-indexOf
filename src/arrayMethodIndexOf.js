'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    let index;
    const mainArr = this;

    if (![...arguments].length) {
      return -1;
    }

    if (fromIndex === Math.abs(fromIndex)) {
      index = fromIndex;
    } else {
      index = Math.abs(fromIndex) < mainArr.length
        ? mainArr.length - Math.abs(fromIndex)
        : 0;
    }

    for (let i = index; i < mainArr.length; i++) {
      if (Object.is(mainArr[i], searchElement)) {
        return i;
      }
    }

    return -1;
  };
}

applyCustomIndexOf();

module.exports = applyCustomIndexOf;
