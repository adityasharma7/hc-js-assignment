var arr = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10];

let sum = arr.reduce((acc, a) => {
  return acc + a;
});

console.log(sum);

let min = arr.reduce((acc, a) => {
  return acc < a ? acc : a;
});

console.log(min);

let max = arr.reduce((acc, a) => {
  return acc > a ? acc : a;
});

console.log(max);
