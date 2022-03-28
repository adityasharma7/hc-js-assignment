let array = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10];

// a
let sum = array.reduce((total, num) => total + num);
let min = Math.min(...array);
let max = Math.max(...array);

console.log(sum);
console.log(min);
console.log(max);

// b. Print “List is full of prime no” if every element is prime c. Print “List has a prime no” if there is a prime no in it
let count = 0;

for(let num of array) {
    for(let i = 2; i < num; i++) {
        if(num % 2 === 0) continue;
    }
    count++;
}

if(count === array.length) console.log("List is full of prime no");
else console.log("List has prime no");

// d. Remove duplicate values from the list.

let uniqueElementsd = [];

array.forEach((num) => {
    if(!uniqueElementsd.includes(num)) {
        uniqueElementsd.push(num);
    }
})

console.log(uniqueElementsd);

// e. Remove duplicate values from the list without using loop or any of the above methods

let uniqueElementse = [...new Set(array)];
console.log(uniqueElementse);