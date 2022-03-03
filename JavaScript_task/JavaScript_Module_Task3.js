//    Task - no 3
var input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function even(input) {
    console.log("This are even numbers")
    for (var i = 0; i < input.length; i++) {
        if (input[i] % 2 == 0) {
            console.log(input[i]);
        }
    }
}



function odd(input) {
    console.log("This are odd numbers")
    for (var i = 0; i < input.length; i++) {
        if (input[i] % 2 !== 0) {
            console.log(input[i]);
        }

    }
}

function checkPrime(number) {
    if (number <= 1) {
        return false;
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                return false;
            }
        }
        return true;

    }
}
input.forEach(function(element) {
    const isPrime = checkPrime(element);
    if (isPrime) {
        console.log(`${element} is a prime number`);
    }
});

even(input);
odd(input);