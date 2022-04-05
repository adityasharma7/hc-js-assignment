"use strict";
// 5. Provided the following  array: [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10]

const array = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10];

// a. Find the sum, min, and max
//sum
const sumOfArray = array.reduce((sum, element) => sum + element, 0);

//min
const minOfArray = array.reduce((min, element) => {
    if (min > element) min = element;
    return min;
}, /*here it take initially first value of array that is "array[0]=10" */ );

//max
const maxOfArray = array.reduce((max, element) => {
    if (max < element) max = element;
    return max;
}, );

console.log("sum of array =", sumOfArray);
console.log("min element of array =", minOfArray);
console.log("max element of array =", maxOfArray);


// b. Print “List is full of prime no” if every element is prime
function checkfullprime(element) {
    if (element > 1) {
        for (let x = 2; x < element; x++)
            if (element % 2 === 0) return false;
    } else return false;
    return true;
}
array.every(checkfullprime) ? console.log("Array is full of Prime Element") : console.log("Array is not full of Prime Element");


// c. Print “List has a prime no” if there is a prime no in it
function hasprime(element) {
    if (element > 1) {
        for (let x = 2; x < element; x++)
            if (element % 2 === 0) return false;
    } else return false;

    return true;
}
array.some(hasprime) ? console.log("Array has a Prime Element") : console.log("Array has not a Prime Element");


// d. Remove duplicate values from the list.
const output = array.reduce((acc, element) => {
    !acc.includes(element) ? acc.push(element) : '';
    return acc;
}, [])
console.log(`duplicate removed array = [${output}]`);


// e. Remove duplicate values from the list without using loop or any of the above methods (map(), filter(), reduce(), some() and every())
const unique = Array.from(new Set(array)); //can also use sprade operator [...new Set(array)];
console.log(`duplicate removed array = [${unique}]`);