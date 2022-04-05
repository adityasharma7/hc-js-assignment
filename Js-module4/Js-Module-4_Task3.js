"use strict";
// 3. Implement code for sum using recursion
const array = [10, 20, 30, 40];

function sum(arr) {

    if (array.length === 0) return 0;
    return add(arr, 0);

    function add(arr, curr) {
        if (curr === arr.length - 1) return arr[curr];
        return arr[curr] + add(arr, curr + 1);
    }
};

const sumarr = sum(array);

console.log(sumarr);