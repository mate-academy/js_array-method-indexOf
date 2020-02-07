'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(valueToFind, from = 0) {
    if (arguments.length === 0) {
      return -1;
    }

    let fromIndex = from;

    if (fromIndex >= this.length) {
      return -1;
    }

    if (fromIndex <= (-1) * this.length) {
      fromIndex = 0;
    }

    if (fromIndex >= 0) {
      for (let i = fromIndex; i < this.length; i++) {
        if (((typeof valueToFind === 'number'
        && isNaN(valueToFind))
        && (typeof this[i] === 'number' && isNaN(this[i])))
        || (this[i] === valueToFind)) {
          return i;
        }

        if (this[i] === valueToFind) {
          return i;
        }
      }

      return -1;
    }

    if (fromIndex < 0) {
      fromIndex = this.length + fromIndex;

      for (let i = fromIndex; i < this.length; i++) {
        if (((typeof valueToFind === 'number'
        && isNaN(valueToFind))
        && (typeof this[i] === 'number' && isNaN(this[i])))
        || (this[i] === valueToFind)) {
          return i;
        }
      }

      return -1;
    }
  };
}

module.exports = applyCustomIndexOf;
