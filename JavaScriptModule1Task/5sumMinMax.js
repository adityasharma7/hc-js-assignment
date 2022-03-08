let array = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10];

let sum = array.reduce((total, num) => total + num);
let min = Math.min(...array);
let max = Math.max(...array);

console.log(sum);
console.log(min);
console.log(max);


let count = 0;

for(let num of array) {
    for(let i = 2; i < num; i++) {
        if(num % 2 === 0) continue;
    }
    count++;
}

if(count === array.length) console.log("List is full of prime no");
else console.log("List has prime no");