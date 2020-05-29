'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    if (this.length === 0 || fromIndex > this.length - 1) {
      return -1;
    }

    let i = 0;

    if (fromIndex < 0 && (this.length + fromIndex) > 0) {
      i = this.length + fromIndex;
    } else if ((this.length + fromIndex) < 0) {
      i = 0;
    } else {
      i = fromIndex;
    }

    for (i; i < this.length; i++) {
      if (this[i] === searchElement
        || (Number.isNaN(this[i]) && Number.isNaN(searchElement))) {
        return i;
      } else if (i === this.length - 1) {
        return -1;
      }
    }
  };
}

module.exports = applyCustomIndexOf;
