'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex) {
    if (!arguments.length) {
      return -1;
    }

    let index;

    if (fromIndex > 0) {
      index = fromIndex;
    } else if (fromIndex < 0 && Math.abs(fromIndex) < this.length) {
      index = this.length + fromIndex;
    } else {
      index = 0;
    }

    for (index; index < this.length; index++) {
      if (Object.is(searchElement, this[index])) {
        return index;
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
