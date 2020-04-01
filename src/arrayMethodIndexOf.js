'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    // write code here
    let indexStart;

    if (fromIndex < 0) {
      indexStart = this.length + fromIndex;
    } else {
      indexStart = fromIndex;
    }

    if (indexStart + this.length < 0) {
      indexStart = 0;
    }

    if (Number.isNaN(searchElement)) {
      for (let i = indexStart; i < this.length; i++) {
        if (Number.isNaN(this[i])) {
          return i;
        }
      }
    }

    for (let i = indexStart; i < this.length; i++) {
      if (this[i] === searchElement) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
