// Provided the following  array: [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10]
//   a. Find the sum, min, and max
//   b. Print “List is full of prime no” if every element is prime
//   c. Print “List has a prime no” if there is a prime no in it
//   d. Remove duplicate values from the list.

const arr = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10];

//   a. Find the sum, min, and max

let sum = 0,
  min = Number.MAX_VALUE,
  max = Number.MIN_VALUE;

sum = arr.reduce((prev, curr) => prev + curr, 0);
min = arr.reduce((prev, curr) => Math.min(prev, curr), min);
max = arr.reduce((prev, curr) => Math.max(prev, curr), max);

//   b. Print “List is full of prime no” if every element is prime
//   c. Print “List has a prime no” if there is a prime no in it

const countPrimes = arr.filter((n) => {
  if (n <= 1) return false;
  if (n % 2 == 0 && n > 2) return false;
  const s = Math.sqrt(n);
  for (let i = 3; i <= s; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
  true;
});

countPrimes.length === arr.length
  ? console.log("List is full of prime numbers")
  : countPrimes.length != 0
  ? console.log("List has some prime numbers")
  : console.log("List has prime number in it");


//   d. Remove duplicate values from the list.

const removeDuplicates = Array.from(new Set(arr))
console.log(removeDuplicates)