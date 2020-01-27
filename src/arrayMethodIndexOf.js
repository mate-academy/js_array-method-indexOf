'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex) {
    if (!this.length) {
      return -1;
    }

    if (arguments.length < 1) {
      return -1;
    }

    let indexFrom = fromIndex || 0;

    if (Math.sign(indexFrom) < 0) {
      indexFrom = this.length - Math.abs(indexFrom);

      if (Math.sign(indexFrom) < 0) {
        indexFrom = 0;
      }
    }

    for (let i = indexFrom; i < this.length; i++) {
      if (Number.isNaN(this[i]) && Number.isNaN(searchElement)) {
        return i;
      }

      if (this[i] === searchElement) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
