var arr = [0, 2, 4, 6, 8, 10, 12, 14, 16];

let Double = arr.map((x) => {
  return x * 2;
});

let Half = arr.map((x) => {
  return x / 2;
});

console.log(Double);
console.log(Half);
