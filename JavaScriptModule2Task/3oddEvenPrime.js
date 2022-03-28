let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// find odd,even, prime

let evenElements = array.filter((num) =>  num % 2 === 0);
let oddElements = array.filter((num) =>  num % 2 !== 0);
let primeElements = [];

while(array.length) {
    let currentElement = array.pop();
    for(let i = 2; i < currentElement; i++) {
        if(currentElement % i === 0) break;
    }
    primeElements.push(currentElement);
}

console.log(evenElements);
console.log(oddElements);
console.log(primeElements);

