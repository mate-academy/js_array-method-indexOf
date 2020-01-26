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

    if (searchElement === undefined) {
      for (let i = 0; i < this.length; i++) {
        if (this[i] === undefined) {
          return i;
        }
      }
    }

    if (Math.abs(fromIndex) > this.length && fromIndex < 0) {
      for (let i = 0; i < this.length; i++) {
        if (this[i] === searchElement) {
          return i;
        }
      }
    }

    if (isNaN(searchElement)) {
      for (let i = 0; i < this.length; i++) {
        if (Number.isNaN(this[i])) {
          return i;
        }
      }
    }

    if (fromIndex < 0) {
      const negIndex = this.length + fromIndex;

      for (let i = this.length - 1; i > negIndex - 1; i--) {
        if (this[i] === searchElement) {
          return i;
        }
      }

      return -1;
    }

    if (fromIndex !== undefined) {
      for (let i = fromIndex; i < this.length; i++) {
        if (this[i] === searchElement) {
          return i;
        }
      }

      return -1;
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === searchElement) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
