'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex) {
    let index;
    let position = (fromIndex === undefined) ? 0 : fromIndex;

    position = (position < this.length) ? position : this.length;
    position = (-position > this.length) ? 0 : position;

    if (searchElement !== undefined && isNaN(searchElement)) {
      for (let i = position; i < this.length; i++) {
        if (this[i] !== undefined && isNaN(this[i])) {
          index = i;
          break;
        }
      }

      return (index === undefined) ? -1 : index;
    }

    if (position >= 0) {
      for (let i = position; i < this.length; i++) {
        if ((this[i] === searchElement)) {
          index = i;
          break;
        }
      }

      return (index === undefined) ? -1 : index;
    } else {
      for (let i = this.length - 1; i >= (this.length + position); i--) {
        if ((this[i] === searchElement)) {
          index = i;
          break;
        }
      }

      return (index === undefined) ? -1 : index;
    }
  };
}

module.exports = applyCustomIndexOf;
