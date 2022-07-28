let arr = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10];
// let ab = [1, 2, 3, 5, 7];
let a = arr.every((item) => {
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
// console.log(a);
if (a === true) {
  console.log("list is full of prime");
} else {
  console.log("list is full of composite num");
}
