// Provided the following  array: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Filter out odd, even, and prime numbers and print them

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primes = [];
const evens = [];
const odds = [];

var isPrime = (num) => {
  if (num <= 1) return false;
  if (num % 2 == 0 && num > 2) return false;
  const s = Math.sqrt(num);
  for (let i = 3; i <= s; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
};

var isEven = (num) => {
  if (num % 2 == 0) return true;
  else return false;
};

arr.forEach((num) => {
  if (isPrime(num)) primes.push(num);
  if (isEven(num)) evens.push(num);
  else odds.push(num);
});

console.log("Primes: ", primes);
console.log("Evens: ", evens);
console.log("Odds: ", odds);