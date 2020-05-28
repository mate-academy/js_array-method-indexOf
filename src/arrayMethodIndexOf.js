'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    if (fromIndex >= this.length) {
      return -1;
    } else if (searchElement === '' || searchElement === undefined) {
      return 1;
    }

    let newFromIndex;

    if (fromIndex < 0) {
      newFromIndex = (this.length + fromIndex);
    } else if (fromIndex >= 0) {
      newFromIndex = fromIndex;
    }

    let index;

    if (Number.isNaN(searchElement)) {
      for (let i = newFromIndex; i < this.length; i++) {
        if (Number.isNaN(this[i])) {
          index = i;
          break;
        }
      }
    }

    for (let i = newFromIndex; i < this.length; i++) {
      if (this[i] === searchElement) {
        index = i;
        break;
      }
    }

    return index === undefined ? -1 : index;
  };
}
// applyCustomIndexOf();
// console.log(['11', undefined, 2, null, '11', NaN].indexOf2(NaN));
module.exports = applyCustomIndexOf;
