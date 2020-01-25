'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex) {
    if (arguments.length === 0) {
      return -1;
    }

    let beginingIndex;

    if (fromIndex === undefined) {
      beginingIndex = 0;
    } else if (fromIndex < 0) {
      beginingIndex = this.length + fromIndex < 0 ? 0 : this.length + fromIndex;
    } else {
      beginingIndex = fromIndex;
    }

    for (; beginingIndex < this.length; ++beginingIndex) {
      if (searchElement === this[beginingIndex]
          || (isNaN(searchElement)
              && isNaN(this[beginingIndex])
              && this[beginingIndex] !== undefined
          )
      ) {
        return beginingIndex;
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
