'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    let counter = fromIndex;
    if (this.length === 0) {
      return -1;
    };
    for (counter; counter < this.length; counter++) {
      if (searchElement === this[counter]) {
        return counter;
      }
    };

    return -1;
  };
};

module.exports = applyCustomIndexOf;
