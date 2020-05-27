'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    let curIndex = fromIndex >= 0 ? fromIndex : this.length + fromIndex;

    if (Math.abs(curIndex) > this.length) {
      if (curIndex > this.length) {
        return -1;
      }
      curIndex = 0;
    }

    for (curIndex; curIndex < this.length; curIndex++) {
      if (this[curIndex] === searchElement
        || (Number.isNaN(this[curIndex]) && Number.isNaN(searchElement))) {
        return curIndex;
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
