'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    if (!arguments.length) {
      return -1;
    }

    let beginingIndex = fromIndex;

    if (fromIndex >= this.length) {
      return -1;
    } else if (fromIndex < 0) {
      beginingIndex = this.length + fromIndex < 0 ? 0 : this.length + fromIndex;
    } else {
      beginingIndex = fromIndex;
    }

    while (beginingIndex < this.length) {
      if (searchElement === this[beginingIndex]
          || (isNaN(searchElement) && Number.isNaN(this[beginingIndex])
          )
      ) {
        return beginingIndex;
      }

      beginingIndex += 1;
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
