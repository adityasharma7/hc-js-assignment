// Provided the following  array:
//     [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10]
var list = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10];

//   a. Find the sum, min, and max

//sum
var sum = list.reduce((acc, cur) => {
    return acc + cur;
});
console.log("The sum of the array is : " + sum);
//min
var minimum = list.reduce((min, cur) => {
    if (min > cur) {
        min = cur;
    }
    return min;
}, list[0]);
console.log("The minimum element in the array is : " + minimum);
//max
var maximum = list.reduce((max, cur) => {
    if (max < cur) {
        max = cur;
    }
    return max;
}, list[0]);
console.log("The maximum element in the array is : " + maximum);
//   b. Print “List is full of prime no” if every element is prime
var isprime = list.every((element) => {
    if (element > 1) {
        for (let i = 2; i < element; i++) {
            if (element % i == 0) {
                return false;
            }
        }
        return true;
    }
});
if (isprime) {

    console.log("List is full of prime no");
} else {
    console.log("List is not full of prime no");
}
//   c. Print “List has a prime no” if there is a prime no in it
var hasprime = list.some((element) => {
    if (element > 1) {
        for (let i = 2; i < element; i++) {
            if (element % i == 0) {
                return false;
            }
        }
        return true;
    }

});
if (hasprime) {

    console.log("List has a prime no");
} else {
    console.log("List does not has a prime no");
}

//   d. Remove duplicate values from the list.
function removeduplicat(elements) {
    return elements.filter((value, index) => elements.indexOf(value) == index);
}
console.log("After removing duplicate values from the list. ");
console.log(removeduplicat(list));

// Note: Use map(), filter(), reduce(), some() and every() methods for above problems

//  e. Remove duplicate values from the list without using loop or any of the above methods (map(), filter(), reduce(), some() and every())
function duplicateRemover(elements) {
    return [...new Set(elements)];
}
console.log("After removing duplicate values from the list without using loop and methods: ");
console.log(duplicateRemover(list));