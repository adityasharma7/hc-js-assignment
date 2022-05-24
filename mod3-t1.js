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
// answer b





// c avarage age

const sum = Obj.reduce((acc, ele) => {
  acc = acc + ele.age;
  return acc;
}, 0);

console.log("the avarage age is : " + sum / Obj.length);



// ans wer d
let R = [];
let A = [];
for (ele of Obj) {
  if (ele.name[0] === "R") {
    R.push(ele.name);
  }
  if (ele.name[0] === "A") {
    A.push(ele.name);
  }
}

console.log(R, A);
