// a.Find the sum, min, and max
'use strict'
let input = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10]
let result = input.reduce(function(acc, curr) {
    acc = curr + acc;
    return acc;
}, 0)

console.log("Total of element" + " " +
    result);


let result_max = input.reduce(function(max, value) {
    if (value > max) {
        max = value
    }
    return max
}, 0);
console.log("Max element is" + " " +
    result_max);


let result_min = input.reduce(function(min, value) {
    // min = value;
    if (value < min) {
        min = value
    }
    return min
}, input[0]);
console.log("Min element is" + " " +
    result_min);


// b.Print“ List is full of prime no”
// if every element is prime

function prime(a) {
    if (a <= 1) {

        return false
    } else {
        for (let i = 2; i < a; i++) {
            if (a % i == 0) {
                return false;
            }

        }
        return true;
    }

}

let result3 = input.every(prime)

if (!result3) {
    console.log("list contain a number which is not prime")

} else {
    console.log(`${result3}`);
}



// .Print“ List has a prime no”
// if there is a prime no in it

function find_prime(a) {
    if (a <= 1) {

        return false
    } else {
        for (let i = 2; i < a; i++) {
            if (a % i == 0) {
                return false;
            }

        }
        return true;
    }

}




function find_prime(b) {
    if (b <= 1) {

        return false
    } else {
        for (let i = 2; i < b; i++) {
            if (b % i == 0) {
                return false;
            }

        }
        return true;
    }
}


let result4 = input.some(find_prime);

if (result4) {
    console.log("list contain prime no")
} else {
    console.log("list doesnt have  prime number")
};


// var a = ["ayush",
//     "piyush ", "ankush"
// ];

// var result = a.reduce(function(acc, curr) {
//         console.log(acc)
//         if (curr[0] == 'a') {
//             acc = acc + curr;

//         }
//         return acc;

//     }, ""

// );
// console.log(result)






// d.Remove duplicate values from the list.

// Note: Use map(), filter(), reduce(), some() and every() methods
// for above problems


let unique_value = input.filter((c, index) => {
    return input.indexOf(c) === index;
});

console.log(`${unique_value} are unique elements`);


// Remove duplicate values from the list without using loop or any of the above methods(map(), filter(), reduce(), some() and every())

let set = new Set(input)
var final = Array.from(set)
console.log(`${ final} are only unique element without using any method`);