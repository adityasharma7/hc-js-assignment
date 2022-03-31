// Provided the following array: [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10]
"use strict"
const array = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10];
// a.Find the sum, min, and max

function findSumMinMax(list) {
    //sum
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
        sum += list[i];

    }
    console.log("The sum of the all elements: " + sum);

    //min and max
    let min = list[0];
    let max = list[0];
    for (let j = 0; j < list.length; j++) {
        if (min > list[j]) {
            min = list[j];
        }
        if (max < list[j]) {
            max = list[j];
        }

    }
    console.log("The maximum in the list: " + max);
    console.log("The minimum in the list: " + min);
}

findSumMinMax(array);

// b.Print“ List is full of prime no”
// if every element is prime
function primeCheckList(list) {
    let flag = false;
    upperLoop:
    for (let k = 0; k < list.length; k++) {
        let number = list[k];

        if (number <= 1) {
            flag = false;
        } else {
            for (let i = 2; i < number; i++) {
                if (number % i === 0) {
                    flag = false;
                    break upperLoop;

                }
            }
            flag = true;
        }
    }
    if (flag) {
        console.log("List is full of prime no");
    } else {
        console.log("List is not full of prime no");
    }



}
primeCheckList(array);

// c.Print“ List has a prime no”
// if there is a prime no in it
function ListHasAprime(list) {
    let flag = false;
    upperLoop:
    for (let k = 0; k < list.length; k++) {
        let number = list[k];

        if (number <= 1) {
            flag = false;
        } else {
            for (let i = 2; i < number; i++) {
                if (number % i === 0) {
                    flag = false;

                }
            }
            flag = true;
            break upperLoop;
        }
    }
    if (flag) {
        console.log("List has a prime no");
    } else {
        console.log("List does not have any prime no");
    }



}
ListHasAprime(array);
// d.Remove duplicate values from the list()
// Note: Use loops
// for above problems
function list(list) {
    let ind2 = 0,
        temp = [];
    let key = 0, j = 0;
    for (let i = 1; i < list.length; i++) {
        key = list[i];
        j = i - 1;
        while (j >= 0 && list[j] > key) {
            list[j + 1] = list[j];
            j = j - 1;
        }
        list[j + 1] = key;
    }
    console.log("Before Removing duplicate values from the list we sort the list:\n" + list);
    for (let index = 0; index < list.length; index++) {
        if (list[index] !== list[index + 1]) {
            temp[ind2++] = list[index];
        }

    }
    console.log("After Removing duplicate values from the list() \n" + temp);

}
list(array);