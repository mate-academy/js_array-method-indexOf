'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex) {
    let fromIndexCopy = fromIndex;
    if (fromIndexCopy === undefined) {
      fromIndexCopy = 0;
    }
    for (let i = 0; i < this.length; i++) {
      if ((this[i] === searchElement) && (i >= fromIndexCopy)) {
        return i;
      }
    }
    return -1;
  };
}

module.exports = applyCustomIndexOf;
