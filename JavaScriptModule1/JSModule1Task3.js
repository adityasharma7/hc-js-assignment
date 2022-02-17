var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Method for odd 
function oddfilter(array) {
    var odd = [];
    for (let index = 0; index < array.length; index++) {
        if (!(array[index] % 2 == 0)) {
            odd = array[index];
            console.log(odd);
        }

    }

}


//Method for even 
function evenfilter(array) {
    var even = [];
    for (let index2 = 0; index2 < array.length; index2++) {
        if (array[index2] % 2 == 0) {
            even = array[index2];
            console.log(even);
        }

    }

}


//Method for prime 

function primefilter(number) {
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

//Print all 
console.log("Odd array elements: ");
oddfilter(array)

console.log("Even array elements: ");
evenfilter(array)

console.log("Prime array elements: ");
for (let i = 0; i < array.length; i++) {
    var prime = primefilter(array[i]);
    if (prime) {
        console.log(array[i])
    }
}