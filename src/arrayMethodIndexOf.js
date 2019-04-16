'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex) {
    // return searchElement === undefined ? -1
    //   : this.slice(fromIndex).findIndex(el => Object.is(el, searchElement));
    if (searchElement === undefined) {
      return -1;
    } else {
      let arr = this.slice(fromIndex);
      for (let i = 0; i < arr.length; i++) {
        if (Object.is(arr[i], searchElement)) {
          return i;
        }
      }
      return -1;
    }
  };
}

module.exports = applyCustomIndexOf;
