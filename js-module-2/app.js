// Task3 - Filter out odd, even, and prime numbers and print them
const task3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log("Task: 3");

// Using Filter
const oddFilter = task3.filter(value => {
    if (value % 2 != 0 && value > 0){
        return value
    }
})

const evenFilter = task3.filter(value => {
    if (value % 2 === 0 && value > 0){
        return value
    }
})

// Checks If num is prime or not -
const ifPrime = value => {
    for(let i = 2; i < value; i++){
        if (value % i === 0) {
            return false;
        }
    }
    return value > 1
}
const primeFilter = task3.filter(ifPrime);

console.log("Odd by Filter", oddFilter);
console.log("Even by Filter", evenFilter);
console.log("Prime by Filter", primeFilter);

// 4. Provided the following  array:
//     [0, 2, 4, 6, 8, 10, 12, 14, 16]
// Generate and print another list such that: 
//  a. every element being twice of elements in the current list.
//  b. every element being half of the elements in the current list.

const task4 = [0, 2, 4, 6, 8, 10, 12, 14, 16]
console.log("Task 4 list:", task4);


// task a - twice
const twiceNum = task4.map(value => {
    value = value * 2;
    return value
})

console.log("twice of each number: ", twiceNum);

// Task b - Half of every element
const halfNum = task4.map(value => value/2)
console.log("Half Num:", halfNum);

// 5. Provided the following  array:
//     [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10]
//   a. Find the sum, min, and max
//   b. Print “List is full of prime no” if every element is prime
//   c. Print “List has a prime no” if there is a prime no in it
//   d. Remove duplicate values from the list.

// Note: Use map(), filter(), reduce(), some() and every() methods for above problems

//  e. Remove duplicate values from the list without using loop or any of 
// the above methods (map(), filter(), reduce(), some() and every())


const task5 = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10]
console.log("Task 5 list:", task5);

// a1. Find Sum -
const sumTask = task5.reduce((current, next) => { return current + next })
console.log("Task 5 Sum:", sumTask);

// a2. Find Min -
const TaskMin = task5.reduce((prev, current) => { return prev < current ? prev : current})
console.log(TaskMin);

// a3. Find Max -
const Taskmax = task5.reduce((prev, current) => { return prev > current ? prev : current })
console.log(Taskmax);

// Resuable Function -
function onePrime(num){
    let value = true

    for(let i = 2; i < num; i++){
        if (num % i === 0) {
            return false;
        }
    }
    return num ? true : false
}

// b. List Full of prime -
const primeList = task5.every(onePrime);
console.log("List have all prime numbers: ", primeList);

// c. List has a prime number -
const hasPrime = task5.some(onePrime);
console.log("List has a prime number: ", hasPrime);

// d. Remove Duplicates -
const duplicates = task5.filter((item, index) => {
    return task5.indexOf(item) == index;
})

console.log("Removed Duplicates", duplicates);

// e. Remove Duplicates without loops or any above method -
const dupsSet = new Set(task5);
console.log("Rmoved Duplicates using set object:", dupsSet);
