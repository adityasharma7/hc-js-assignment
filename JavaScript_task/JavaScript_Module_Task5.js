function sum() {
    var total = 0;
    let sum = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10]
    for (var i = 0; i < sum.length; i++) {
        total = total + sum[i];
    }
    console.log(` This is sum of  total elemet of Array: ${total}`);
}

sum();


function Findmin() {

    let min = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10]
    var min_value = min[0];
    for (var i = 0; i < min.length; i++) {
        if (min[i] < min_value) {
            min_value = min[i];
        }
    }
    console.log(`${min_value} is mimnimum value`);
}
Findmin();

function Findmax() {

    let max = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10]
    var max_value = max[0];
    for (var i = 0; i < max.length; i++) {
        if (max[i] > max_value) {
            max_value = max[i];
        }
    }
    console.log(`${max_value} is maximum value`);
}
Findmax();

// 5(b)

function checkPrime() {
    var count = 0;
    var number = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10]
    for (var i = 0; i < number.length; i++) {
        var number1 = number[i]
        if (number1 <= 1) {
            return false;
        } else {
            for (let j = 2; j < number1; j++) {
                if (number1 % j == 0) {
                    count++;

                }
            }

        }
    }

    if (count > 0) {
        console.log(count)
        console.log("list are not full of prime no")
    } else {
        console.log("list is full of prime no")
    }
}
checkPrime();

// 5(c)

function PrimeNo() {
    var count = 0;
    var number = [10,
        1, 42, 36, 4, 75, 6, 97, 81, 19, 10
    ]
    for (var i = 0; i < number.length; i++) {
        // console.log("hi");
        var number1 = number[i]
        if (number1 <= 1) {
            return false;
        } else {
            for (let j = 2; j < number1; j++) {
                if (number1 % j == 0) {
                    count++;

                }
            }

        }
    }

    if (count == 0) {
        // console.log(count)
        console.log("list has prime no")
    } else {
        console.log("list doesnt have prime no prime no")
    }
}
PrimeNo();

// 5(d)


function removeDuplicates(array) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        let exists = false;
        for (j = 0; j < result.length; j++) {
            if (array[i] === result[j]) {
                exists = true;
                break;
            }
        }
        if (!exists) {
            result.push(array[i]);
        }
    }
    return result;
}
const duplicates = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10]
console.log(removeDuplicates(duplicates))