//4.Provided the following  array: [0, 2, 4, 6, 8, 10, 12, 14, 16] Generate and print another list such that: 
//a. every element being twice of elements in the current list.
//b. every element being half of the elements in the current list.


var array = [0, 2, 4, 6, 8, 10, 12, 14, 16];
//using array.map method to return a new array  
//twice of array elements 
const twice = array.map(x => x * 2);
// half of array elements
const half = array.map(x => x / 2);
//print twice and half of array 
console.log(`twiced elements = [${twice}]`);
console.log(`half elements = [${half}]`);