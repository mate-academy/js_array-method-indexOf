'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    const length = this.length;
    let index = fromIndex;

    if (index < 0) {
      if ((index * -1) > length) {
        index = 0;
      } else {
        index = length + index;
      }
    }

    for (let i = index; i < length; i++) {
      if (Number.isNaN(searchElement)) {
        if (Number.isNaN(this[i])) {
          return i;
        }
      }

      if (this[i] === searchElement) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
