'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    let searchFrom = fromIndex;

    if (this.length <= fromIndex || arguments.length === 0) {
      return -1;
    }

    if (fromIndex < 0) {
      searchFrom = (this.length + fromIndex);
    }

    if (searchFrom < 0) {
      searchFrom = 0;
    }

    for (let i = searchFrom; i < this.length; i++) {
      if (this[i] === searchElement
        || (Number.isNaN(this[i]) && Number.isNaN(searchElement))) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
