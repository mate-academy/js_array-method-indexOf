'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
*/

function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    const founded = {};
    let searcher = fromIndex;

    if (searcher < 0) {
      searcher = this.length + searcher;
    }

    if (searcher <= -1) {
      searcher = 0;
    };

    for (let i = searcher; i <= this.length; i++) {
      if (Object.is(searchElement, this[i])) {
        founded.answer = i; break;
      }
    };

    if (founded.answer === undefined) {
      founded.answer = -1;
    };

    return founded.answer;
  };
}

module.exports = applyCustomIndexOf;
