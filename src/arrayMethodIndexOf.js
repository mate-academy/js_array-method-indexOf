'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    if (!arguments.length || fromIndex > this.length) {
      return -1;
    }

    let searchFrom = fromIndex;

    if (searchFrom < 0) {
      searchFrom = this.length + fromIndex;
    }

    if (searchFrom < 0) {
      searchFrom = 0;
    }

    for (let index = searchFrom; index < this.length; index++) {
      if (
        searchElement === this[index]
        || (Number.isNaN(searchElement) && Number.isNaN(this[index]))
      ) {
        return index;
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
