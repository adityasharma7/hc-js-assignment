// Provided the following  array:
//     [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//    Filter out odd, even, and prime numbers and print them
"use strict"
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//odd
let odd = array.filter(function(element) {
    return !((element % 2) === 0);
});
console.log("Odd numbers: ");
console.log(odd);

//even 
let even = array.filter(function(element) {
    return element % 2 === 0;
});
console.log("Even numbers: ");
console.log(even);

//prime
let prime = array.filter(function(number) {
    if (number > 1) {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return number;
    }
});
console.log("Prime numbers: ");
console.log(prime);