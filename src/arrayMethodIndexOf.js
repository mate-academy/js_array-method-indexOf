'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    let searchFrom;

    if (arguments.length === 0) {
      return -1;
    }

    if (fromIndex < 0 && (this.length + fromIndex) < 0) {
      searchFrom = 0;
    } else if (fromIndex < 0) {
      searchFrom = this.length + fromIndex;
    } else {
      searchFrom = fromIndex;
    }

    for (let i = searchFrom; i < this.length; i++) {
      if ((this[i] === searchElement)
        || (Number.isNaN(searchElement) && Number.isNaN(this[i]))) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
