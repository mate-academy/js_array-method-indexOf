'use strict';

/**
 * Implement method indexOf
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    if (arguments.length === 0) {
      return -1;
    }

    let startArg = fromIndex;
    if (startArg < 0) {
      startArg += this.length;
    }
    if (startArg < 0) {
      startArg = 0;
    }
    for (let i = startArg; i < this.length; i++) {
      // console.log(this.length);
      if (Object.is(this[i], searchElement)) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
