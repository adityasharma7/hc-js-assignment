"use strict"
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Method for odd 
function oddfilter(list) {
    const odd = [];
    for (let index = 0; index < list.length; index++) {
        if (!(list[index] % 2 === 0)) {
            odd[index] = list[index];
            console.log(odd[index]);
        }

    }

}


//Method for even 
function evenfilter(list) {
    const even = [];
    for (let index2 = 0; index2 < list.length; index2++) {
        if (list[index2] % 2 === 0) {
            even[index2] = list[index2];
            console.log(even[index2]);
        }

    }

}


//Method for prime 

function primefilter(number) {
    if (number <= 1) {
        return false;
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    }

}

//Print all 
console.log("Odd array elements: ");
oddfilter(array)

console.log("Even array elements: ");
evenfilter(array)

console.log("Prime array elements: ");
for (let i = 0; i < array.length; i++) {
    let prime = primefilter(array[i]);
    if (prime) {
        console.log(array[i])
    }
}