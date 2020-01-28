'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    if (!this.length || arguments.length < 1) {
      return -1;
    }

    let indexFrom = fromIndex;

    if (indexFrom < 0) {
      indexFrom = this.length - Math.abs(indexFrom);

      if (indexFrom < 0) {
        indexFrom = 0;
      }
    }

    for (let i = indexFrom; i < this.length; i++) {
      if (this[i] === searchElement
        || (Number.isNaN(this[i])
        && Number.isNaN(searchElement))) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
