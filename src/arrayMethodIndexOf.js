'use strict';

function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    const startIndex = fromIndex < 0 ? this.length + fromIndex : fromIndex;

    for (let i = startIndex < 0 ? 0 : startIndex; i < this.length; i++) {
      if (Object.is(searchElement, this[i])) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
