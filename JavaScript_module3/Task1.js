// Provided following array:

//     [
//         {“ id”: 1, “name”: “Amit Kumar”, “age”: 25 },
//         {“ id”: 2, “name”: “Rahul Dixit”, “age”: 20 },
//         {“ id”: 3, “name”: “Ravi Joshi”, “age”: 55 },
//         {“ id”: 4, “name”: “Rohit Verma”, “age”: 35 },
//         {“ id”: 5, “name”: “Ajay Jain”, “age”: 17 },
//     ]

// a.Print id and name of the youngest and oldest person
// b.Create another list having id and name of all the person above 18 years
// c.Find the average age
// d.Create 2 list with names starting with only‘ A’ and‘ R’ respectively
'use strict'

let spot = [{
        id: 1,
        name: "Amit Kumar ",
        age: 25
    }, {
        id: 2,
        name: "Rahul Dixit",
        age: 20
    }, { id: 3, name: "Ravi Joshi", age: 55 },
    {
        id: 4,
        name: "Rohit Verma",
        age: 35
    }, { id: 5, name: "Ajay Jain", age: 17 },
]


let max = spot.reduce(function(max_age, spot) {
    if (max_age < spot.age) {
        max_age = spot.age;

    }
    return max_age

}, 0);
spot.filter(function(r) {
    if (max == r.age) {
        console.log(`oldest person ${r.id} and ${r.name}`)
    }
})


// b.Create another list having id and name of all the person above 18 years

let min = spot.reduce(function(min_age, spot) {
    if (min_age > spot.age) {
        min_age = spot.age;

    }
    return min_age

}, spot[0].age);

spot.filter(function(e) {
    if (min == e.age) {
        console.log(`Youngest person ${e.name} and ${e.id}`)
    }
})


spot.filter(function(l) {
    if (l.age > 18) {
        console.log(`${l.id}  ${l.name}`)
    }
})

// c.Find the average ages


let result = spot.reduce(function(total, current) {

    var total = current.age + total
    return total
}, 0)


console.log(`Average age of persons is  ${result / spot.length} `)



// d.Create 2 list with names starting with only‘ A’ and‘ R’ respectively


spot.filter(function(obj) {
    if (obj.name.charAt(0) == 'A') {
        console.log(obj.name)

    }
})

console.log("Name starts with R")
spot.filter(function(obj) {
    if (obj.name.charAt(0) == 'R') {
        console.log(obj.name)

    }
})