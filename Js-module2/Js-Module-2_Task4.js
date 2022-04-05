"use strict";
// 4. Provided the following  array:
//    [0, 2, 4, 6, 8, 10, 12, 14, 16]
//    Generate and print another list such that: 
// a. every element being twice of elements in the current list.
// b. every element being half of the elements in the current list.

let array = [0, 2, 4, 6, 8, 10, 12, 14, 16];

// TWICE of array's elements
const twice = array.map(x => x * 2);

// HALF of array's elements
const half = array.map(x => x / 2);

console.log(`twiced elements = [${twice}]`);
console.log(`half elements = [${half}]`);