                                                                         Task#2

2. Identify the difference between regular functions and arrow functions.

First diffrence is syntax diffrence which you can see in below example
var add = function(x, y) {
  return x + y;
}; ES6


This is Arrow function syntax:

//let add = (x, y) => { return x + y }; 

it can also be return as: 
let add = (x, y) => x + y;

Second Diffrence: Regular Function can have same arguments while 
 Arrow functions can never have duplicate named parameters, whether in strict or non-strict mode

Third diffrence: Use of this keyword:

Unlike regular functions, arrow functions do not have their own this. The value of this inside an arrow function remains the same throughout the lifecycle of the function.

let me = { 
 name: "Ashutosh Verma", 
 thisInArrow:() => { 
 console.log("My name is " + this.name); // no 'this' binding here 
 }, 
 thisInRegular(){ 
 console.log("My name is " + this.name); // 'this' binding works here 
 } 
};
me.thisInArrow(); 
me.thisInRegular();

Output of This Program is: me.thisInArrow (calling of arrow function)
                           me.thisInRegular() (calling of normal function)
                Output:    My name is 
                           My name is Ashutosh Verma
                           
Fouth Diffrence:

Using new keyword:
Regular functions created using function declarations or expressions are constructible and callable. Since regular functions are constructible, they can be called using the new keyword.

However, the arrow functions are only callable and not constructible, i.e arrow functions can never be used as constructor functions. Hence, they can never be invoked with the new keyword.






