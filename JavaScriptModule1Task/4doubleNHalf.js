//Generate and print another list such that:
// a. every element being twice of elements in the current list. 
// b. every element being half of the elements in the current list.

let array = [0, 2, 4, 6, 8, 10, 12, 14, 16];

let double = [];
for(let num of nums) {
    double.push(num * 2);
}

let half = [];
for(let num of nums) {
    half.push(num * 2);
}

console.log(double);
console.log(half);