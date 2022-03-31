// Provided the following array: [0, 2, 4, 6, 8, 10, 12, 14, 16]
// Generate and print another list such that:
//     a.every element being twice of elements in the current list.
'use strict '
let array = [0,
    2, 4, 6, 8, 10, 12, 14, 16
]

function double(x) {
    return x * 2;
}

const result = array.map(double);
console.log(`${result} doubled value`);

// b.every element being half of the elements in the current list.

const result1 = array.map((y) => y / 2);
console.log(`${
    result1
} half value`);