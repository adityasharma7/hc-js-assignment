// Provided the following  array:[0, 2, 4, 6, 8, 10, 12, 14, 16]
// Generate and print another list such that: 
//  a. every element being twice of elements in the current list.
//  b. every element being half of the elements in the current list.

const arr = [0, 2, 4, 6, 8, 10, 12, 14, 16]
const twice = []
const half = []

arr.forEach(num => {
  twice.push(num*2)
  half.push(num/2)
})

console.log("Twice of every element: ", twice)
console.log("Half of every element: ", half)
