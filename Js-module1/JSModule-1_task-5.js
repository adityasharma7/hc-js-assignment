"use strict";
const array = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10];

//a. Find the sum, min, and max
//sum
const sumOfElement = function(array) {
    let sum = 0;
    for (let x of array) {
        sum += x;
    }
    return sum;
}

//min & max
const minMaxElement = function(array) {

    let min = array[0];
    let max = array[0];

    for (let x of array) {
        min > x ? min = x : ""
        max < x ? max = x : ""
    }
    console.log("min element =", min, ", max element =", max);
}
console.log("Sum Of Element = ", sumOfElement(array));
minMaxElement(array);

//   b. Print “List is full of prime no” if every element is prime
const isarrprime = function(arr) {
    for (let x = 0; x < arr.length; x++) {
        let isprime = true;
        const element = arr[x];
        for (let y = 2; y < element; y++) {
            if (element % y === 0) {
                isprime = false
                return false
            }
        }
    }
    if (isprime) {
        return true;
    }
}
isarrprime(array) ? console.log("List is full of prime no") : console.log("List is not full of prime no")

//   c. Print “List has a prime no” if there is a prime no in it
let hasaprime = function(arr) {
    for (let x = 0; x < arr.length; x++) {
        let isprime = true;
        const element = arr[x];
        for (let y = 2; y < element; y++) {
            if (element % y === 0) {
                isprime = false;
                break;
            }
        }

        if (isprime) return true;

    }
}
hasaprime(array) ? console.log("List has a prime no") : console.log("List does not a prime no")

// d. Remove duplicate values from the list ()
let removedup = function(arr) {
    for (let x = 0; x < array.length; x++) {
        for (let y = x + 1; y < arr.length; y++) {
            if (arr[x] === arr[y]) {
                array.splice(y, 1);
            }
        }
    }
    return arr;
}
console.log("removed all duplicate element", removedup(array));