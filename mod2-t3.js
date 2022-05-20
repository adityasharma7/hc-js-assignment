var a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(a);
var x = a.filter((item) => item % 2 == 0);

console.log("even value");

console.log(x);

var x = a.filter((item) => item % 2 !== 0);

console.log("odd values");
console.log(x);

var x = a.filter((item) => {
  let c = 0;
  for (let i = 0; i <= item; i++) {
    if (item % i == 0) {
      c++;
    }
  }
  if (c <= 2) {
    return true;
  } else {
    return false;
  }
});

console.log("prime values");
console.log(x);

function isprime(n) {
  let count = 0;
  for (let i = 0; i <= n; i++) {
    if (n % i == 0) {
      count = count + 1;
    }
  }
  if (count <= 2) {
    return true;
  } else {
    return false;
  }
}

var y = a.filter(isprime);
console.log("second approach");
console.log(y);
