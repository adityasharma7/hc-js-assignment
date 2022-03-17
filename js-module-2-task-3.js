//Provided the following  array: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] Filter out odd, even, and prime numbers and print them

var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//using array.filter method 
//filter out even elements from given array
const evenarr = array.filter(x => x % 2 == 0);
//filter out odd elements from given array 
const oddarr = array.filter(x => x % 2 != 0);
// Checking whehter a number is prime or not 
const ifPrime = value => {
        for (let i = 2; i < value; i++) {
            if (value % i === 0) {
                return false;
            }
        }
        return value > 1
    }
    //filter out the prime number using array.filter method 
const primeFilter = array.filter(ifPrime);
//print odd,even and prime numbers
console.log(`even array = [${evenarr}]`);
console.log(`odd array = [${oddarr}]`);
console.log(`prime array =[${primeFilter}]`);