// -- Tasks --
const personData = [
    {id: 1, name: "Amit Kumar", age: 25},
    {id: 2, name: "Rahul Dixit", age: 20},
    {id: 3, name: "Ravi Joshi", age: 55},
    {id: 5, name: "Ajay Jain", age: 17},
    {id: 4, name: "Rohit Verma", age: 35},
]
    
// a. Print id and name of the youngest and oldest person
// b. Create another list having id and name of all the person above 18 years
// c. Find the average age
// d. Create 2 list with names starting with only ‘A’ and ‘R’ respectively
  
// Note: Use map(), filter(), reduce, some() and every() methods for above problems

// a1. Find Oldest And Youngest
// Finding Youngest -
const youngest = personData.reduce((min, perAge) => {
    if (perAge.age < min){
        return perAge.age
    }
    else {
        return min
    }

}, personData[0].age)

// Finding Oldest -
const oldest = personData.reduce((max, perAge) => {
    if (perAge.age < max){
        return max;
    }
    else {
        return perAge.age
    }
}, personData[0].age)

// Getting Youngest & Oldest ones in -
const printYoung = personData.filter(per => per.age == youngest)
const printOldest = personData.filter(per => per.age == oldest)

console.log("Oldest:", "Id:", printOldest[0].id, "Name:", printOldest[0].name);
console.log("Youngest:", "Id:",printYoung[0].id, "Name:", printYoung[0].name);

// b. Get data where age > 18
const dataOnAge = personData.filter(person => {
    const newObj = {};
    if (person.age > 18){
        newObj["id"] = person.id;
        newObj["Name"] = person.name;
        return newObj
    }
})

console.log("People less than 18 are:", dataOnAge);

//  c. printing the average age -
let averageAge = personData.reduce((sum, per) => {
    sum = sum + per.age;
    return sum
}, 0)

averageAge /= personData.length
console.log("Average Age:", averageAge);

// d. Create 2 list with names starting with only ‘A’ and ‘R’ respectively
// Names Start with A
const nameStartsA = personData.filter((per) => {
    if (per.name[0] === "A"){
        return per
    }
})

// Names Start with R
const nameStartsR = personData.filter((per) => {
    return per.name[0] === "R" ? per : null
})

console.log("Names which start with A are:", nameStartsA);
console.log("Names which start with R are:", nameStartsR);

// Task 2:
// Program 1:
a = 10;
console.log(a);
var a;

// Program 2:
// b = 5;
// console.log(b);
// let b;
// ReferenceError: Cannot access 'b' before initialization
