'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    let startFind = fromIndex;

    if (this.length === 0) {
      return -1;
    }

    if (fromIndex < 0) {
      startFind += this.length;
    }

    if (startFind < 0) {
      startFind = 0;
    }

    for (let i = startFind; i < this.length; i++) {
      if (this[i] === searchElement) {
        return i;
      }

      if (Object.is(searchElement, this[i])) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
