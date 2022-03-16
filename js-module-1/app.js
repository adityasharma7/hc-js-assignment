const arr =  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Task 3 -
// Finds Even Elements in array -
for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0){
        console.log("Even Numbers:", arr[i]);
    }
}

// Finds Odd Elements in array -
for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 != 0){
        console.log("Odd Numbers:", arr[i]);
    }

    // Another way of using js 
    // arr[i] % 2 != 0 ? console.log("Odd Numbers:", arr[i]) : null
}

// Find Prime Numbers in array -
var check;
const primeNumbers = []

for (let j = 0; j < arr.length-1; j++){
    check = true
    let num = arr[j]; 

    for (let i = 2; i < num-1; i++){
        if (num % i === 0){
            check = false
        }
    }

    // If Prime than add to Prime Numbers list -
    if (check === true && num > 2){
        primeNumbers.push(num)
    }
}

console.log("Prime Numbers", primeNumbers);

// 4. Provided the following  array:
// [0, 2, 4, 6, 8, 10, 12, 14, 16]
// Generate and print another list such that: 
// a. every element being twice of elements in the current list.
// b. every element being half of the elements in the current list.

const numList = [0, 2, 4, 6, 8, 10, 12, 14, 16]
const halfList = []
const twiceList = []

// a.
numList.forEach((num) => twiceList.push(num*2));
console.log("Twice List = ", twiceList);

// b. 
numList.forEach((num) => halfList.push(num/2));
console.log("Half List = ", halfList);

// 5. Provided the following  array:
//   [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10]
//   a. Find the sum, min, and max
//   b. Print “List is full of prime no” if every element is prime
//   c. Print “List has a prime no” if there is a prime no in it
//   d. Remove duplicate values from the list ()
// Note: Use loops for above problems

const taskFive = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10];
let sum = 0;
let primeList = true;
let hasPrime = true;
let duplicate = 0;

// a1. Find sum
taskFive.forEach((num) => sum += num)
console.log("Sum of list task five: ", sum);

// a2. Find min -
let minNum = Math.min.apply(Math, taskFive);
console.log("Minimum (smallest) Number in array is:", minNum);

// a3. Find max -
let maxNum = Math.max.apply(Math, taskFive);
console.log("Maximum (Largest) Number in array is:", maxNum);

// b. Find if list is prime -
for (let i = 0; i < taskFive.length-1; i++){
    for (let j = 2; j < taskFive.length-1; j++){
        if (taskFive[i] % 2 === 0){
            primeList = false;
            break
        }
    }
}

taskFive === true ? console.log("List is prime") : console.log("Nope list isn't primme");

// c. Find if list has a prime number in it -
for (let i = 0; i < taskFive.length-1; i++){
    for (let j = 2; j < taskFive.length-1; j++){
        if (taskFive[i] % 2 === 0){
            hasPrime = false;
        }
    }
}

hasPrime === true ? console.log("List have a prime number") : console.log("List does'nt have a prime number");

// d. Remove Duplicates element from list -
console.log("Original List:", taskFive);

let checkDuplicate;

for (let i = 0; i < taskFive.length-1; i++){
    checkDuplicate = taskFive[i];
    for (let j = 0; j < taskFive.length; j++){
        // Check if element is same or not and 
        // i != j i.e it's not same elements of same index 
        if (checkDuplicate === taskFive[j] && i != j) {
            taskFive.splice(i, 1);
        }
    }
}

console.log("Duplicates Removed From list, Now list has these element's", taskFive);