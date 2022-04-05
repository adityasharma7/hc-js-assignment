"use strict";

//Filter out even numbers
let evenElement = function(arr) {
    let evenarr = [];
    for (let x = 0; x < arr.length; x++) {
        const element = arr[x];
        arr[x] % 2 === 0 ? evenarr.push(element) : ""; // arr[x] % 2 == 0 ? evenarr.push(element) : oddarr.push(element);
    }
    return evenarr; //WE CAN ALSO return [evenarr, oddarr];
}

//Filter out odd numbers
let oddElement = function(arr) {
    let oddarr = [];
    for (let x = 0; x < arr.length; x++) {
        const element = arr[x];
        arr[x] % 2 !== 0 ? oddarr.push(element) : "";
    }
    return oddarr;
}

//Filter out prime numbers
let primeElement = function(arr) {
    let primearr = [];

    for (let x of arr) {
        let isprime = true;
        const element = x;
        for (let y = 2; y < element; y++) {
            if (element % y === 0) {
                isprime = false
                break;
            }
        }
        arr[x] >= 2 && isprime === true ? primearr.push(element) : ""; //push prime numbers in prime array
    }
    return primearr;
}

var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("even elements", evenElement(array));
console.log("odd elements", oddElement(array));
console.log("prime elements", primeElement(array));