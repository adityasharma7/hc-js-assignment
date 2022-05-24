const Obj = [
  { id: 1, name: "Amit Kumar", age: 25 },
  { id: 2, name: "Rahul Dixit", age: 20 },
  { id: 3, name: "Ravi Joshi", age: 55 },
  { id: 4, name: "Rohit Verma", age: 35 },
  { id: 5, name: "Ajay Jain", age: 17 },
];
const min = Obj.reduce((acc, ele) => {
  return acc.age < ele.age ? acc.age : ele.age;
}, Infinity);

let { id, name, age } = Obj.find((ele) => ele.age === min);

console.log(" the younest one is " + name + " having id " + id);
