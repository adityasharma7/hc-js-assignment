// Provided the following  array: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Filter out odd, even, and prime numbers and print them

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evens = arr.filter((n) => {
  return n % 2 == 0;
});

const odds = arr.filter((n) => {
  return n % 2;
});

const primes = arr.filter((n) => {
  if (n <= 1) return false;
  if (n % 2 == 0 && n > 2) return false;
  const s = Math.sqrt(n);
  for (let i = 3; i <= s; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
  true;
});

console.log("Evens are: ", evens);
console.log("Odds are: ", odds);
console.log("Primes are: ", primes);
