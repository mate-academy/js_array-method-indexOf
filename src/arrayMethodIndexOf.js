'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    let newFromIndex = fromIndex;

    if (newFromIndex >= this.length) {
      return -1;
    } else if (Math.abs(newFromIndex) > this.length) {
      newFromIndex = 0;
    } else if (fromIndex < 0) {
      newFromIndex = (this.length + fromIndex);
    }

    for (let i = newFromIndex; i < this.length; i++) {
      if (Number.isNaN(searchElement) === false) {
        if (this[i] === searchElement) {
          return i;
        }
      } else if (Number.isNaN(searchElement)) {
        if (Number.isNaN(this[i])) {
          return i;
        }
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
