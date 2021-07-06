'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    const items = this;
    let index = -1;

    if (fromIndex < 0) {
      fromIndex += items.length;
    }

    if (fromIndex < 0) {
      fromIndex = 0;
    }

    for (let i = fromIndex; i < items.length; i++) {
      if (items[i] === searchElement) {
        return i;
      }

      if (Number.isNaN(searchElement) && Number.isNaN(items[i])) {
        index = i;
      }
    };

    return index;
  };
}

module.exports = applyCustomIndexOf;
