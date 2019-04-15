'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex) {
    return searchElement === undefined ? -1
      : this.slice(fromIndex).findIndex(el => Object.is(el, searchElement));
  };
}

module.exports = applyCustomIndexOf;
