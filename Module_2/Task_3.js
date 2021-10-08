var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 17, 23];

function isEven(x) {
  return x % 2 == 0;
}

function isOdd(x) {
  return x % 2;
}

function isPrime(x) {
  for (let i = 2; i < x; i++) if (x % i === 0) return false;
  return x > 1;
}

let even = arr.filter(isEven);

let odd = arr.filter(isOdd);

let prime = arr.filter(isPrime);

console.log(even);
console.log(odd);
console.log(prime);
