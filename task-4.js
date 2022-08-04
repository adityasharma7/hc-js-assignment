// Provided the following  array: [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10]
//  a. Find the sum, min, and max
//  b. Print “List is full of prime no” if every element is prime
//  c. Print “List has a prime no” if there is a prime no in it
//  d. Remove duplicate values from the list ()

const arr = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10]

//  a. Find the sum, min, and max
let sum = 0, min = Infinity, max = -Infinity;

arr.forEach(num => {
  sum += num;
  if(num < min)
    min = num;
  if(num > max)
    max = num
})

console.log("Sum: ", sum, "Minimum value: ", min, "Maximum value: ", max)

//  b. Print “List is full of prime no” if every element is prime
//  c. Print “List has a prime no” if there is a prime no in it

let isPrime = (num) => {
  if (num <= 1) return false;
  if (num % 2 == 0 && num > 2) return false;
  const s = Math.sqrt(num);
  for (let i = 3; i <= s; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
};

let countPrime = 0

arr.forEach(num => {
  const check = isPrime(num)
  if(check)
    countPrime++;
})

const size = arr.length
if(countPrime == size)
  console.log("List is full of primes.")
else if(countPrime > 0)
  console.log("List has a prime number.")

//  d. Remove duplicate values from the list ()
let arrWithNoDuplicates = []
arr.forEach(num => {
  if(!arrWithNoDuplicates.includes(num)) {
    arrWithNoDuplicates.push(num)
  }
})

console.log(arrWithNoDuplicates)