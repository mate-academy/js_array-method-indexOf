'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    let innerFromIndex = fromIndex;

    if (arguments.length === 0) {
      return 1;
    } else if (!this.length) {
      return -1;
    }

    if (innerFromIndex < 0 && innerFromIndex > (-this.length)) {
      innerFromIndex = this.length + innerFromIndex;
    } else if (innerFromIndex < (-this.length)) {
      innerFromIndex = 0;
    }

    for (let i = innerFromIndex; i < this.length; i++) {
      if (Object.is(this[i], searchElement)) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;

// applyCustomIndexOf();

// const source = ['11', undefined, NaN, null, '11', 44];

// console.log(source.indexOf2(undefined, -5));
