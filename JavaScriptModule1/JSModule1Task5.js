// Provided the following array: [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10]
var array = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10];
// a.Find the sum, min, and max

function findSumMinMax(list) {
    //sum
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];

    }
    console.log("The sum of the all elements: " + sum);

    //min and max
    let min = array[0];
    let max = array[0];
    for (let j = 0; j < array.length; j++) {
        if (min > array[j]) {
            min = array[j];
        }
        if (max < array[j]) {
            max = array[j];
        }

    }
    console.log("The maximum in the list: " + max);
    console.log("The minimum in the list: " + min);
}

findSumMinMax(array);

// b.Print“ List is full of prime no”
// if every element is prime
function primeCheckList(list) {
    var flag = false;
    upperLoop:
        for (let k = 0; k < array.length; k++) {
            let number = array[k];

            if (number <= 1) {
                flag = false;
            } else {
                for (let i = 2; i < number; i++) {
                    if (number % i == 0) {
                        flag = false;
                        break upperLoop;

                    }
                }
                flag = true;
            }
        }
    if (flag) {
        console.log("List is full of prime no");
    } else {
        console.log("List is not full of prime no");
    }



}
primeCheckList(array);

// c.Print“ List has a prime no”
// if there is a prime no in it
function ListHasAprime(list) {
    var flag = false;
    upperLoop:
        for (let k = 0; k < array.length; k++) {
            let number = array[k];

            if (number <= 1) {
                flag = false;
            } else {
                for (let i = 2; i < number; i++) {
                    if (number % i == 0) {
                        flag = false;

                    }
                }
                flag = true;
                break upperLoop;
            }
        }
    if (flag) {
        console.log("List has a prime no");
    } else {
        console.log("List does not have any prime no");
    }



}
ListHasAprime(array);
// d.Remove duplicate values from the list()
// Note: Use loops
// for above problems
function list(list) {
    let ind2 = 0,
        temp = [];
    var key, j;
    for (let i = 1; i < list.length; i++) {
        key = list[i];
        j = i - 1;
        while (j >= 0 && list[j] > key) {
            list[j + 1] = list[j];
            j = j - 1;
        }
        list[j + 1] = key;
    }
    console.log("Before Removing duplicate values from the list we sort the list:\n" + list);
    for (let index = 0; index < list.length; index++) {
        if (list[index] != list[index + 1]) {
            temp[ind2++] = list[index];
        }

    }
    console.log("After Removing duplicate values from the list() \n" + temp);

}
list(array);