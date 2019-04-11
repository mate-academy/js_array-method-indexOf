'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElem, fromIndex = 0) {
    if (fromIndex >= this.length) {
      return -1;
    }
    for (let i = fromIndex; i < this.length; i++) {
      // Using isEqualValues cos 'Object.is' looks like a Cheat ;)
      if (isEqualValues(this[i], searchElem)) {
        return i;
      }
    }
    return -1;
  };
}
const isEqualValues = (val1, val2) => {
  // checking is number for pass verification NaN === NaN
  if (typeof val1 === 'number' && typeof val2 === 'number') {
    return val1.toStirng() === val2.toString();
  } else {
    return val1 === val2;
  };
};
module.exports = applyCustomIndexOf;
