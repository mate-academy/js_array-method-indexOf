'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex) {
    const items = this;
    let indexFrom = fromIndex;

    if (!indexFrom) {
      indexFrom = 0;
    }

    if (indexFrom < 0) {
      indexFrom = items.length - Math.abs(fromIndex);

      if (indexFrom < 0) {
        indexFrom = 0;
      }
    }

    for (let i = indexFrom; i < items.length; i++) {
      const argsIsNaN = Number.isNaN(items[i]) && Number.isNaN(searchElement);

      if (items[i] === searchElement || argsIsNaN) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
