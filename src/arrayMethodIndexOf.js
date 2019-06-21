'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    const elem = searchElement;
    let elemRules = false;

    if (searchElement !== elem) {
      elemRules = true;
    }

    if (fromIndex < 0) {
      for (let i = this.length + fromIndex; i >= 0; i--) {
        if (searchElement === this[i] || elemRules) {
          return i;
        }
      }
    } else {
      for (let i = fromIndex; i < this.length; i++) {
        if (searchElement === this[i] || elemRules) {
          return i;
        }
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
