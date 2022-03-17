//5. Provided the following  array: [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10]
//a. Find the sum, min, and max
console.clear();
var array = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10];
//for finding sum
//using array.reduce method 
const sum = array.reduce((sum, element) => sum + element, 0);
//for finding min 
const min = array.reduce((min, element) => {
    if (min > element) min = element
    return min;
}, );
//for finding max
const max = array.reduce((max, element) => {
    if (max < element) max = element
    return max;
}, );
//printing sum,max and min of the given array elements 
console.log(`sum = [${sum}]`);
console.log(`min =[${min}]`);
console.log(`max =[${max }]`);



//b. Print “List is full of prime no” if every element is prime
//function to check whether a number is prime or not 
function checkprime(element) {
    if (element > 1) {
        for (let x = 2; x < element; x++)
            if (element % 2 == 0) return false;
    } else return false;
    return true;
}
//using array.every() method
//using ternary operator and array.every method 
array.every(checkprime) ? console.log("List is full of prime numbers") : console.log("List is not full of Prime Element");


//c. Print “List has a prime no” if there is a prime no in it
//again using ternary operator and array.some method 
const hasprime = array.some(checkprime) ? console.log("List has a Prime Element") : console.log("List has not a Prime Element");

//d. Remove duplicate values from the list.
//using array.filter method
const removedup = array.filter((item, index) => { return array.indexOf(item) == index; })
console.log("After removing Duplicate Elements from the List", removedup);

//e. Remove duplicate values from the list without using loop or any of the above methods (map(), filter(), reduce(), some() and every())
//using set
const removedupset = new Set(array);
console.log('removed duplicate elements using set', removedupset);