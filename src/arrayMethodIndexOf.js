'use strict';
/* eslint-disable */
/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
*/

// function applyCustomIndexOf() {
//   [].__proto__.indexOf2 = function(searchElement, fromIndex) {

//     let founded = '';

//     for(const i in this) {
//       if(i >= fromIndex) {
//         if(searchElement === this[i]) {
//           founded = i;
//           break;
//         }
//       }
//     }

//     if((founded) === '') {return -1}
//     return founded;

//   };
// }

module.exports = applyCustomIndexOf;





function iF (thisIs, searchElement, fromIndex = 0) {
    let founded = '';

    for(const i in thisIs) {
      if(i >= fromIndex) {
        if(searchElement === thisIs[i]) {
          founded = i;
          break;
        }
      }
    }
    console.log('=== ', founded);

    if((founded) === '') {return -1}
    return founded;
  }

const  a = [ '11', undefined, NaN, null, '11', 44 ];
console.log("if", iF(a, NaN, 0))

console.log("i", a.indexOf(NaN, 0));
