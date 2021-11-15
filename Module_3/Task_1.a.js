var arr = [
  { id: 1, name: "Amit Kumar", age: 25 },
  { id: 2, name: "Rahul Dixit", age: 20 },
  { id: 3, name: "Ravi Joshi", age: 55 },
  { id: 4, name: "Rohit Verma", age: 35 },
  { id: 5, name: "Ajay Jain", age: 17 },
];

var oldest = arr.reduce(function (acc, curr) {
  if (acc < curr.age) {
    acc = curr.age;
  }
  return acc;
}, 0);

var youngest = arr.reduce(function (acc, curr) {
  if (acc > curr.age) {
    acc = curr.age;
  }
  return acc;
}, oldest);

console.log("Oldest person is: ");
for (var i = 0; i < arr.length; i++) {
  if (arr[i].age == oldest) {
    console.log(arr[i]);
  }
}

console.log("Youngest person is: ");
for (var i = 0; i < arr.length; i++) {
  if (arr[i].age == youngest) {
    console.log(arr[i]);
  }
}
