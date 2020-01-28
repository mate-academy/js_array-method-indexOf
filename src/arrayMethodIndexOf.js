'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    if (arguments.length === 0) {
      return -1;
    }

    let index;

    if (fromIndex < -this.length) {
      index = 0;
    } else if (fromIndex < 0) {
      index = this.length + fromIndex;
    } else {
      index = fromIndex;
    }

    for (let i = index; i < this.length; i++) {
      if (this[i] === searchElement) {
        return i;
      } else if (Number.isNaN(this[i]) && Number.isNaN(searchElement)) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
