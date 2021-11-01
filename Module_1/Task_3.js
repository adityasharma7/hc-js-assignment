const primeNumber = (num) => {
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
};

const segregateEvenOdd = (arr) => {
  var n = arr.length;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) even.push(arr[i]);
    else if (arr[i] % 2 != 0) odd.push(arr[i]);
    if (primeNumber(arr[i])) prime.push(arr[i]);
  }
};
var odd = new Array();
var even = new Array();
var prime = new Array();

var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 17, 23];

segregateEvenOdd(arr);

console.log("Odd Numbers :- ");
for (i = 0; i < odd.length; i++) {
  if (odd[i] == 0) continue;
  else console.log(odd[i]);
}
console.log("Even Numbers :- ");
for (i = 0; i < even.length; i++) {
  if (even[i] == 0) continue;
  else console.log(even[i]);
}

console.log("Prime Numbers :- ");
for (i = 0; i < prime.length; i++) {
  console.log(prime[i]);
}
