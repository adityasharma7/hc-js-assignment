"use strict";
let arr;
// a. every element being twice of elements in the current list.
let twiceElement = function(arr) {
    let twicearr = [];
    for (const x of arr) {
        const element = 2 * x;
        twicearr.push(element);
    }
    return twicearr;
}

//b. every element being half of the elements in the current list.
let halfElement = function(arr) {
    const halfarr = [];
    for (const x of arr) {
        const element = x / 2;
        halfarr.push(element);
    }
    return halfarr;
}
arr = [0, 2, 4, 6, 8, 10, 12, 14, 16];
console.log("twice of elemnents ", twiceElement(arr));
console.log("half of elemnents ", halfElement(arr));