'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    // write code here
    let currentIndex = fromIndex;
    if (fromIndex < 0) {
      currentIndex = this.length + fromIndex;
    };

    for (currentIndex; currentIndex < this.length; currentIndex++) {
      if (this[currentIndex] === searchElement) {
        return currentIndex;
      }
    }

    return -1;
  };
}

/* applyCustomIndexOf()
  *
  * function showIndexOf() {
  * const valueToFind = +document
  *   .querySelector('input[name = "value-to-find"]').value;
  * const startPosition = +document
  *   .querySelector('input[name = "start-position"]').value;
  *
  * document.getElementsByTagName('p')[0].innerHTML = `
  *   Postion of element is:
  *   ${[0, '1', 2, 4, 3, '', undefined, NaN, 6]
  *   .indexOf2(valueToFind, startPosition)}
  * `;
  *
  * }
 */

module.exports = applyCustomIndexOf;
