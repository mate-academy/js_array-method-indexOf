'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex) {
    let index = fromIndex;
    const thisLength = this.length;

    if (arguments.length === 0) {
      return -1;
    }

    if (fromIndex === undefined
      || fromIndex === null
      || Number.isNaN(fromIndex)) {
      index = 0;
    };

    if (fromIndex < 0) {
      index = thisLength + fromIndex;
    };

    if (fromIndex < 0 && -fromIndex > thisLength) {
      index = 0;
    };

    for (let i = index; i < thisLength; i++) {
      if (this[i] === searchElement) {
        return i;
      };

      if (Number.isNaN(searchElement) && Number.isNaN(this[i])) {
        return i;
      };
    };

    return -1;
  };
}

module.exports = applyCustomIndexOf;
