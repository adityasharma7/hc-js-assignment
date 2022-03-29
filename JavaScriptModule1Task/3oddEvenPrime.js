let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Filter out odd, even, and prime numbers and print them

let evenElements = [];
for(let num of array) {
    if(num % 2 === 0) evenElements.push(num);
}

let oddElements = [];
for(let num of array) {
    if(num % 2 === 0) oddElements.push(num);
}

for(let num of array) {
    if(num % 2 === 0) evenElements.push(num);
}

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