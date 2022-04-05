"use strict";
// 1. Provided following array:

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


// Note: Use map(), filter(), reduce, some() and every() methods for above problems
const array = [
    { id: 1, name: 'Amit Kumar', age: 25 },
    { id: 2, name: 'Rahul Dixit', age: 20 },
    { id: 3, name: 'Ravi Joshi', age: 55 },
    { id: 4, name: 'Rohit Verma', age: 35 },
    { id: 5, name: 'Ajay Jain', age: 17 },
]

//d. Create 2 list with names starting with only ‘A’ and ‘R’ respectively
let Astartname, Rstartname;
console.log("list of names starting with 'A' ", Astartname = array.filter(x => x.name[0] === 'A'));
console.log("list of names starting with 'R' ", Rstartname = array.filter(x => x.name[0] === 'R'));


//a. Print id and name of the youngest and oldest person
const youngestPerson = () => {
    const youngest = array.sort((p1, p2) => p1.age - p2.age);
    return `youngest person's [ id: ${youngest[0].id} , Name: ${youngest[0].name} ]`
};
const oldestPerson = () => {
    const oldest = array.sort((p1, p2) => p2.age - p1.age);
    return `oldest person's [ id: ${oldest[0].id} , Name: ${oldest[0].name} ]`
};
console.log(youngestPerson());
console.log(oldestPerson());


//b. Create another list having id and name of all the person above 18 years
const adult = array.filter(p => p.age > 18);
console.log("above 18");
adult.map(function(p) {
    console.log(`Id: ${p.id},`, `Name: ${p.name}`)
});


//c. Find the average age
const averageAge = array.reduce((sum, curr) => (sum + curr.age), 0) / array.length;
console.log(`Average Age is ${averageAge}`);