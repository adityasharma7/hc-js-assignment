// 1 Implement code to deep clone an object using JSON methods

const obj = {
  1: "one",
  2: "two",
  3: "three",
  4: "four"
};

const deepClonedObject = JSON.parse(JSON.stringify(obj));

// 2 Implement regular expression for name with letters

const reForName = new RegExp("^[a-zA-Z ]+$").test("Ketuman Vishwakarma");

// 3 Implement code for sum using recursion

let sum = 0;
const arr = [1, 2, 4, 5, 6];
const sumRecurr = (arr, index) => {
  if (index === arr.length) return sum;
  else sum += arr[index];
  return sumRecurr(arr, index + 1);
};

console.log(sumRecurr(arr, 0));
