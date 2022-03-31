"use strict"
const array = [0, 2, 4, 6, 8, 10, 12, 14, 16];
//a. every element being twice of elements in the current list.
function twiceOfEle(array) {
    const twice = [];
    for (let i = 0; i < array.length; i++) {
        twice[i] = array[i] * 2;
    }
    return twice;
}
console.log("The twice of elements in current list are: ");
console.log(twiceOfEle(array));
//b. every element being half of the elements in the current list.

function halfOfEle(array) {
    const half = [];
    for (let i = 0; i < array.length; i++) {
        half[i] = array[i] / 2;
    }
    return half;
}

console.log("The half of elements in current list are: ");
console.log(halfOfEle(array));