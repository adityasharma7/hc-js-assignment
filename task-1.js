// Provided following array:

// [
// {“id”: 1, “name”: “Amit Kumar”, “age”: 25},
// {“id”: 2, “name”: “Rahul Dixit”, “age”: 20},
// {“id”: 3, “name”: “Ravi Joshi”, “age”: 55},
// {“id”: 4, “name”: “Rohit Verma”, “age”: 35},
// {“id”: 5, “name”: “Ajay Jain”, “age”: 17},
// ]
//   a. Print id and name of the youngest and oldest person
//   b. Create another list having id and name of all the person above 18 years
//   c. Find the average age
//   d. Create 2 list with names starting with only ‘A’ and ‘R’ respectively

const arr = [
  { id: 1, name: "Amit Kumar", age: 25 },
  { id: 2, name: "Rahul Dixit", age: 20 },
  { id: 3, name: "Ravi Joshi", age: 55 },
  { id: 4, name: "Rohit Verma", age: 35 },
  { id: 5, name: "Ajay Jain", age: 17 }
];

//   a. Print id and name of the youngest and oldest person

const minAge = arr.reduce((prev, curr) => {
  return Math.min(curr.age, prev);
}, Number.MAX_VALUE);

const maxAge = arr.reduce((prev, curr) => {
  return Math.max(curr.age, prev);
}, Number.MIN_VALUE);

const [youngestPerson] = arr.filter((obj) => obj.age === minAge);
const [oldestPerson] = arr.filter((obj) => obj.age === maxAge);

console.log(
  `Youngest person has name: ${youngestPerson.name} and ID: ${youngestPerson.id}`
);
console.log(
  `Oldest person has name: ${oldestPerson.name} and ID: ${oldestPerson.id}`
);

//   b. Create another list having id and name of all the person above 18 years

const aboveEighteen = arr
  .filter((obj) => obj.age > 18)
  .map((obj) => {
    const { id, name } = obj;
    return [id, name];
  });

console.log(aboveEighteen);

//   c. Find the average age

const totalAge = arr.reduce((prev, curr) => {
  return curr.age + prev;
}, 0);

console.log(`The average age is: ${totalAge / arr.length}`);

//   d. Create 2 list with names starting with only ‘A’ and ‘R’ respectively

const namesWithA = arr.filter(obj => {
  return obj.name[0] === 'A'
})

const namesWithR = arr.filter(obj => {
  return obj.name[0] === 'R'
})

console.log(`Names with A: ${namesWithA}`)
console.log(`Names with R: ${namesWithR}`)

