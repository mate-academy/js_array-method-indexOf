'use strict';
/* eslint-disable */
/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
*/

function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {

    let founded = [];
    (fromIndex < 0) ? (fromIndex = this.length + fromIndex) : fromIndex;
    if(fromIndex < 0) {fromIndex = 0};

    for(let i = fromIndex; i <= this.length; i++) {
      if(searchElement === this[i]) {founded[0] = i; break};
    }    



    if (founded[0] === undefined) {founded[0] = -1}
    return founded[0];

  };
}

module.exports = applyCustomIndexOf;



/*

function iF (thisIs, searchElement, fromIndex = 0) {
    let founded = [];
    (fromIndex < 0) ? (fromIndex = thisIs.length + fromIndex) : fromIndex;
    if(fromIndex < 0) {fromIndex = 0};
    console.log("iF -> thisIs.length", thisIs.length)
    console.log("iF -> fromIndex", fromIndex)

    for(let i = fromIndex; i <= thisIs.length; i++) {
      if(searchElement === thisIs[i]) {founded = i; break};
    }

    console.log("iF -> founded", founded)
    if (founded === []) {founded[0] = -1}
    return founded;
  }

const  a = [ '11', undefined, NaN, null, '11', 44 ];
console.log("if", iF(a, undefined, -999))

console.log("i", a.indexOf(undefined, -999));

// */