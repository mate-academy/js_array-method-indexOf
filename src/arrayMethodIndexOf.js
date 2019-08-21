'use strict';

/**
 * Implement method indexOf
 *
 */
const indexNormalisation = (index, length) => {
  const ind = Math.abs(index) > length - 1
    ? Math.sign(index) * length
    : index;

  return ind < 0 ? length + ind : ind;
};

function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex) {
    let i = fromIndex === undefined ? 0 : indexNormalisation(fromIndex);

    while (i < this.length) {
      if (this[i] === searchElement) {
        return i;
      }
      i++;
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
