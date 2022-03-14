// declaring array
var array =  [0, 2, 4, 6, 8, 10, 12, 14, 16]
//a. every element being twice of the elements in the current list 
let doubleElement=function(a){
    let twicea=[];
    for (const x of a) {
        const element = 2 * x;
        twicea.push(element);
    }
    return twicea;
}

//b. every element being half of the elements in the current list.
let halfElement = function(a) {
    let halfa = [];
    for (const x of a) {
        const element = x / 2;
        halfa.push(element);
    }
    return halfa;
}

//printing twice of elemnts 
console.log("twice of elemnents ", doubleElement(array));
//printing half of elements 
console.log("half of elemnents ", halfElement(array));