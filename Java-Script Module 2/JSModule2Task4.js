// Provided the following  array:
// [0, 2, 4, 6, 8, 10, 12, 14, 16]
"use strict"
const list = [0, 2, 4, 6, 8, 10, 12, 14, 16];
// Generate and print another list such that: 
// a. every element being twice of elements in the current list.
let current1 = list.map((ele) => {
    return ele * 2;
});
console.log("every element being twice of elements in the current list.");
console.log(current1);
// b. every element being half of the elements in the current list.
let current2 = list.map((ele) => {
    return ele / 2;
});
console.log("every element being half of elements in the current list.");
console.log(current2);