'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex) {
    let fromIndexNew = fromIndex;

    if (this.length === 0 || arguments.length === 0) {
      return -1;
    }

    if (fromIndexNew < 0) {
      fromIndexNew = this.length + fromIndexNew;
    }

    for (let i = fromIndexNew || 0; i < this.length; i++) {
      if (
        this[i] === searchElement
        || (Number.isNaN(this[i]) && Number.isNaN(searchElement))
        || (typeof searchElement === 'undefined'
        && typeof this[i] === 'undefined')
      ) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
