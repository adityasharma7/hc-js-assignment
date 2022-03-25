const persons = [
        { "id": 1, "name": "Amit Kumar", "age": 25 },
        { "id": 2, "name": "Rahul Dixit", "age": 20 },
        { "id": 3, "name": "Ravi Joshi", "age": 55 },
        { "id": 4, "name": "Rohit Verma", "age": 35 },
        { "id": 5, "name": "Ajay Jain", "age": 17 },
    ]
    // a. Print id and name of the youngest and oldest person
    //sorting out youngest person from given array 
const youngestPerson = () => {
    const youngest = persons.sort((p1, p2) => p1.age - p2.age);
    return `youngest person's [ id: ${youngest[0].id} , Name: ${youngest[0].name} ]`
};

//sorting out oldest person from given array 
const oldestPerson = () => {
    const oldest = persons.sort((p1, p2) => p2.age - p1.age);
    return `oldest person's [ id: ${oldest[0].id} , Name: ${oldest[0].name} ]`
};

console.log(youngestPerson());
console.log(oldestPerson());

//b. Create another list having id and name of all the person above 18 years
//finding out people above the age of 18 years

const above18 = array.filter((p) => p.age > 18);
console.log("above 18");
above18.map(function(p) {
    console.log(`Id: ${p.id},`, `Name: ${p.name}`)
});


//c. Find the average age
const avgAge = array.reduce((sum, curr) => (sum + curr.age), 0) / array.length;
console.log(`Average Age is ${avgAge}`);

//d. Create 2 list with names starting with only ‘A’ and ‘R’ respectively
console.log("list of names starting with 'A' ", Astartname = array.filter((x) => x.name[0] == 'A'));
console.log("list of names starting with 'R' ", Rstartname = array.filter((x) => x.name[0] == 'R'));