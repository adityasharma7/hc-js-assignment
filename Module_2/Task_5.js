var arr = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10];

const mySet = new Set(arr);

var myAns = [];
mySet.forEach(function (x) {
  myAns.push(x);
});

console.log(myAns);
