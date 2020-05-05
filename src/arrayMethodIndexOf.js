'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    // write code here
    let index = fromIndex;

    if (index < 0) {
      index += this.length;

      if (index < 0) {
        index = 0;
      }
    }

    for (let i = index; i < this.length; i++) {
      if ((searchElement === undefined && this[i] === undefined)
        || (Number.isNaN(searchElement) && Number.isNaN(this[i]))
        || searchElement === this[i]) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
