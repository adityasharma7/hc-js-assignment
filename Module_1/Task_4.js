const twice = (arr) => {
  var twicEle = new Array();
  for (let i = 0; i < arr.length; i++) {
    twicEle.push(arr[i] * 2);
  }
  return twicEle;
};

const half = (arr) => {
  var halfEle = new Array();
  for (let i = 0; i < arr.length; i++) {
    halfEle.push(arr[i] / 2);
  }
  return halfEle;
};

var arr = [0, 2, 4, 6, 8, 10, 12, 14, 16];

const Twice = twice(arr);
console.log("Twice Array :- ");
for (let i = 0; i < Twice.length; i++) {
  console.log(Twice[i]);
}

const Half = half(arr);
console.log("Half Array :- ");
for (let i = 0; i < Half.length; i++) {
  console.log(Half[i]);
}
