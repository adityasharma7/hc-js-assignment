//declaring array
var array = [0,1,2,3,4,5,6,7,8,9,10];
//sortout even numbers
let evenElement = function(a) {
    let evena=[];
    for(let x=0;x<a.length;x++) {
        const element= a[x];
        a[x]%2==0 ? evena.push(element):"";
    }
    return evena;
}

//sortout odd numbers
let oddElement = function(a) {
    let odda=[];
    for(let x=0;x<a.length;x++) {
        const element= a[x];
        a[x]%2!=0 ? odda.push(element):"";
    }
    return odda;
}

//sortout prime numbers
let primeElement = function(arr) {
    let primearr = [];

    for (let x of arr) {
        let isprime = true;
        const element = x;
        for (let y = 2; y < element; y++) {
            if (element % y == 0) {
                isprime = false
                break;
            }
        }
        //for pushing prime numbers in prime array
        arr[x] >= 2 && isprime == true ? primearr.push(element) : ""; 
    }
    return primearr;
}
//print odd,even & prime numbers
console.log("even elements", evenElement(array));
console.log("odd elements", oddElement(array));
console.log("prime elements", primeElement(array));