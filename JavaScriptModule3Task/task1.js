// Command + Shift + L - to select all similar elements in VS Code

// 1

let array = [
    {"id": 1, "name": "Amit Kumar", "age": 25}, 
    {"id": 2, "name": "Rahul Dixit", "age": 20}, 
    {"id": 3, "name": "Ravi Joshi", "age": 55},
    {"id": 4, "name": "Rohit Verma", "age": 35}, 
    {"id": 5, "name": "Ajay Jain", "age": 17},
]

// a. Print id and name of the youngest and oldest person

let findYoungestPerson = array.sort((person1, person2) => {
    return (person1.age < person2.age) ? -1 : (person1.age > person2.age) ? 1 : 0;
})

console.log(findYoungestPerson[0].id, findYoungestPerson[0].name);

let findOldestPerson = array.sort((person1, person2) => {
    return (person1.age < person2.age) ? 1 : (person1.age > person2.age) ? -1 : 0;
})

console.log(findOldestPerson[0].id, findOldestPerson[0].name);

// b. Create another list having id and name of all the person above 18 years

let peopleGreaterThanEighteen = array.filter((person) => person.age > 18).map((person) => {
    return {"id": person.id, "name": person.name};
})
console.log(peopleGreaterThanEighteen);

// c. Find the average age

let averageAge = 0;

array.map((person) => {
    return averageAge += person.age;
})

console.log(Math.floor(averageAge / array.length));

// d. Create 2 list with names starting with only ‘A’ and ‘R’ respectively

let peopleWithA = array.filter((person) => {
    let currentPerson = person.name;
    if(currentPerson[0] === "A" || currentPerson[0] === "a") {
        return currentPerson;
    }
})

console.log(peopleWithA.map((person) => person.name));


