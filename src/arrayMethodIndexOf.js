'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    if (fromIndex > this.length || this.length === 0) {
      return -1;
    } else if (fromIndex < -this.length) {
      // eslint-disable-next-line no-param-reassign
      fromIndex = 0;
    }

    if (fromIndex < 0) {
      // eslint-disable-next-line no-param-reassign
      fromIndex = this.length + fromIndex;
    }

    for (let i = fromIndex; i < this.length; i++) {
      if (Object.is(searchElement, this[i])) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
