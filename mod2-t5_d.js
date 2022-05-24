let arr = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10];

var uniqueArr = arr.reduce((acc, ele) => {
  if (!acc.includes(ele)) {
    acc.push(ele);
  }
  return acc;
}, []);
console.log(uniqueArr);
