'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    let start = fromIndex;

    if (this.length === 0 || fromIndex >= this.length
      || arguments.length < 1) {
      return -1;
    }

    if (start < 0) {
      start = this.length + start + 1;
    }

    if (start < 0) {
      start = 0;
    }

    for (let i = start; i <= this.length; i += 1) {
      if (this[i] === searchElement || (typeof searchElement === 'undefined'
      && typeof this[i] === 'undefined') || (Number.isNaN(searchElement)
      && Number.isNaN(this[i]))) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
