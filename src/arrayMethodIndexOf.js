'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex) {
    let searchIndex = fromIndex;

    if (fromIndex >= this.length) {
      return -1;
    } else if (fromIndex <= -this.length || !fromIndex) {
      searchIndex = 0;
    } else if (fromIndex > -this.length && fromIndex < 0) {
      searchIndex = this.length + fromIndex;
    }

    for (let i = searchIndex; i < this.length; i++) {
      if (this[i] === searchElement
        || ('' + this[i] === 'NaN' && '' + searchElement === 'NaN')) {
        return i;
      }
      continue;
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
