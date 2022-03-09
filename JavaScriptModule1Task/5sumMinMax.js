let array = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10];

// a. Find the sum, min, and max
let sum = 0;
for(let num of nums) {
    sum += num;
}
console.log(sum);

let min = array[0];
for(let num of nums) {
    min = num < min ? num : min;
}
console.log(min);

let max = array[0];
for(let num of nums) {
    max = num > max ? num : max;
}
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

let uniqueElementsd = [...array];

uniqueElementsd.sort((a,b) => a - b);

for(let i = 1; i < uniqueElementsd.length; i++) {
    if(uniqueElementsd[i] === uniqueElementsd[i - 1]) {
        uniqueElementsd.shift();
        i--;
    }
}

console.log(uniqueElementsd);

