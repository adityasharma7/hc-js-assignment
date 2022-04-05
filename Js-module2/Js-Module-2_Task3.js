"use strict";
// 3.Provided the following  array:
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Filter out odd, even, and prime numbers and print them

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter out the odd elements from the given array
const evenarr = array.filter(x => x % 2 === 0);

// Filter out the even elements from the given array
const oddarr = array.filter(x => x % 2 !== 0);

console.log(`even array = [${evenarr}]`);
console.log(`odd array = [${oddarr}]`);