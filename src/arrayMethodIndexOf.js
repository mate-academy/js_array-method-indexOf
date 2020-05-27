'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    let reassignIndex = fromIndex;

    if (reassignIndex >= this.length) {
      return -1;
    } else if (Math.abs(reassignIndex) > this.length) {
      reassignIndex = 0;
    } else if (reassignIndex < 0) {
      reassignIndex = this.length - Math.abs(reassignIndex);
    }

    for (let i = reassignIndex; i < this.length; i++) {
      if (Object.is(this[i], searchElement)) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
