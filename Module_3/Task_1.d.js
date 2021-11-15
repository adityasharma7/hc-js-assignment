var arr = [
  { id: 1, name: "Amit Kumar", age: 25 },
  { id: 2, name: "Rahul Dixit", age: 20 },
  { id: 3, name: "Ravi Joshi", age: 55 },
  { id: 4, name: "Rohit Verma", age: 35 },
  { id: 5, name: "Ajay Jain", age: 17 },
];

var A = arr.filter(function (x) {
  return x.name[0] == "A";
});

var R = arr.filter(function (x) {
  return x.name[0] == "R";
});

console.log("Names Stating From A");
console.log(A);

console.log("Names Stating From R");
console.log(R);
