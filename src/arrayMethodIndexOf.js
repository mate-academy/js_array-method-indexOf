'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    let loopStart = fromIndex;

    if (this.length === 0 || fromIndex >= this.length
      || arguments.length < 1) {
      return -1;
    }

    if (loopStart < 0) {
      loopStart = this.length + loopStart + 1;
    }

    if (loopStart < 0) {
      loopStart = 0;
    }

    for (let i = loopStart; i <= this.length; i += 1) {
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
