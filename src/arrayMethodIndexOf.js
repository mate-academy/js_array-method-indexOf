'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    let indexStart = 0;

    if (-1 * fromIndex < this.length && fromIndex) {
      indexStart = fromIndex + (fromIndex < 0 && this.length);
    }

    for (let i = indexStart; i < this.length; i++) {
      if (Object.is(searchElement, this[i])) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
