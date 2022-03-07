// Provided following array:

// [
// {“id”: 1, “name”: “Amit Kumar”, “age”: 25},
// {“id”: 2, “name”: “Rahul Dixit”, “age”: 20},
// {“id”: 3, “name”: “Ravi Joshi”, “age”: 55},
// {“id”: 4, “name”: “Rohit Verma”, “age”: 35},
// {“id”: 5, “name”: “Ajay Jain”, “age”: 17},
// ]
// Note: Use map(), filter(), reduce, some() and every() methods for above problems

//a.Print id and name of the youngest and oldest person

const list = [
    { id: 1, name: "Amit Kumar", age: 25 },
    { id: 2, name: "Rahul Dixit", age: 20 },
    { id: 3, name: "Ravi Joshi", age: 55 },
    { id: 4, name: "Rohit Verma", age: 35 },
    { id: 5, name: "Ajay Jain", age: 17 },
];

//Yongest
var youngest = list.reduce((young, person) => {

    if (young.age > person.age) {
        young = person;
    }
    return young;
}, list[0]);
console.log(`The Youngest Person is: Id: ${youngest.id} Name: ${youngest.name} `);

//Oldest
var oldest = list.reduce((old, person2) => {
    if (old.age < person2.age) {
        old = person2;
    }
    return old;
}, list[0]);

console.log(`The Oldest Person is:   Id: ${oldest.id} Name: ${oldest.name} \n`);

//b. Create another list having id and name of all the person above 18
var above18 = list.filter(person => person.age > 18).map(person => {
    let anotherlist = {
        id: person.id,
        name: person.name
    };
    return anotherlist;
});
console.log('The list of all person above 18:\n', above18);


// c. Find the average age 
var average = (list.reduce((sum, person) => sum + person.age, 0)) / list.length;
console.log(`\nThe Average age of person in the list is: ${average}\n`);

// d. Create 2 list with names starting with only ‘A’ and ‘R’ respectively
//Names staring with only 'A'
let startA = list.filter(person => person.name[0] == 'A').map(person => person.name);
console.log(`The list of names starting with only 'A':\n`, startA);
//Names staring with only 'R'
let startR = list.filter(person => person.name[0] == 'R').map(person => person.name);
console.log(`\nThe list of names starting with only 'R':\n`, startR);