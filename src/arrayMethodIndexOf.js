'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex) {
    let result = -1;
    let index = fromIndex;

    if (arguments.length === 0) {
      return result;
    }

    if (index < 0) {
      index += this.length;

      if (index < 0) {
        index = 0;
      }
    }

    for (let i = index || 0; i < this.length; i++) {
      if ((searchElement === this[i]) || (Number.isNaN(searchElement)
        && Number.isNaN(this[i]))) {
        result = i;

        return result;
      }
    }

    return result;
  };
}

module.exports = applyCustomIndexOf;
