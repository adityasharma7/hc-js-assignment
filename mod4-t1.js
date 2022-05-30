// deep clone using json method

var fackJson = [
  { id: 1, Fname: "rohan", lname: "singh" },
  { id: 1, Fname: "raj", lname: "king" },
  { id: 1, Fname: "cat", lname: "due" },
];

const obj = JSON.parse(JSON.stringify(fackJson));

obj[1].Fname = "rajiv";

console.log(obj);
// // swallow cloning
// const x = [...fackJson];
// x[0].lname = "kumar";
// console.log(x);
// // swallow cloning
// var y = Object.assign({}, fackJson);
// y[2].id = 4;
// console.log(y);
console.log(fackJson);
