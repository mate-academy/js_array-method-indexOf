'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    let startIndex = fromIndex;
    const items = this;

    if (startIndex < 0) {
      startIndex += items.length;
    }

    if (startIndex < 0) {
      startIndex = 0;
    }

    if (startIndex >= items.length) {
      return -1;
    }

    for (let i = startIndex; i < items.length; i++) {
      if (Object.is(items[i], searchElement)) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
