// Provided the following  array: [0, 2, 4, 6, 8, 10, 12, 14, 16]
// Generate and print another list such that: 
//  a. every element being twice of elements in the current list.
//  b. every element being half of the elements in the current list.

const arr = [0, 2, 4, 6, 8, 10, 12, 14, 16]

const twices = arr.map((n) => {
  return n*2;
})

const halves = arr.map((n) => {
  return n/2;
})