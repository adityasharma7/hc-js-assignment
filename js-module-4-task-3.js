//Implement code for sum using recursion

function recSum(n) {
    if (n <= 1)
        return n;
    return n + recSum(n - 1);
}

//passing a value to a function 
let n = 7;
console.log(recSum(n));