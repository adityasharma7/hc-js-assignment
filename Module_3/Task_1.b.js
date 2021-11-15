var arr = [
  { id: 1, name: "Amit Kumar", age: 25 },
  { id: 2, name: "Rahul Dixit", age: 20 },
  { id: 3, name: "Ravi Joshi", age: 55 },
  { id: 4, name: "Rohit Verma", age: 35 },
  { id: 5, name: "Ajay Jain", age: 17 },
];

var newAge = arr.filter(function (x) {
  return x.age > 18;
});

console.log("Peoples above 18 are : ");
console.log(newAge);
