'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    let index;

    if (arguments.length < 1 || fromIndex > this.length) {
      return -1;
    }

    if (fromIndex <= -this.length) {
      index = 0;
    } else if (fromIndex < 0 && Math.abs(fromIndex) < this.length) {
      index = this.length + fromIndex;
    } else {
      index = fromIndex;
    }

    for (index; index < this.length; index++) {
      if ((Number.isNaN(this[index]) && Number.isNaN(searchElement))
        || this[index] === searchElement) {
        return index;
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
