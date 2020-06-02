'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex) {
    let position = fromIndex;

    if (-position >= this.length || position === undefined) {
      position = 0;
    } else if (position >= this.length) {
      return -1;
    } else if (position < 0) {
      position = this.length + position;
    }

    for (let i = position; i < this.length; i++) {
      if ((searchElement !== undefined && isNaN(searchElement))
      && (this[i] !== undefined && isNaN(this[i]))) {
        return (i === undefined) ? -1 : i;
      }

      if ((this[i] === searchElement)) {
        return (i === undefined) ? -1 : i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
