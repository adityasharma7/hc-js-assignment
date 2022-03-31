// Provided the following array: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Filter out odd, even, and prime numbers and print them
// 4. Provided the following array:
'use strict'
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function odd(x) {
    if (x % 2 != 0) {
        return x
    }
}
let result = array.filter(odd)

console.log(`${result} are odd numbers`);



function even(y) {
    if (y % 2 == 0) {
        return y
    }
}
let result1 = array.filter(even)

console.log(`${result1} are even numbers `);

function prime(a) {
    if (a <= 1) {

        return false
    } else {
        for (let i = 2; i < a; i++) {
            if (a % i == 0) {
                return false;
            }

        }
        return true;
    }

}
let result3 = array.filter(prime)
console.log(result3)