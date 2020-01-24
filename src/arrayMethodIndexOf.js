'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex) {
    if (this.length === 0) {
      return -1;
    }

    if (arguments.length < 1) {
      return -1;
    }

    let findValue = searchElement;
    let indexFrom = fromIndex || 0;

    if (searchElement === null) {
      findValue = null;
    }

    if (searchElement === undefined) {
      findValue = undefined;
    }

    if (Math.sign(indexFrom) < 0) {
      indexFrom = this.length - Math.abs(indexFrom);

      if (Math.sign(indexFrom) < 0) {
        indexFrom = 0;
      }
    }

    for (let i = indexFrom; i < this.length; i++) {
      if (Number.isNaN(this[i]) && Number.isNaN(findValue)) {
        return i;
      }

      if (this[i] === findValue) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
