2.  Try the below code and identify which of the below programs are a valid case of hoisting?

Program 1:
a = 10;
console.log(a);
var a;

Program 2:
a = 5;
console.log(a);
let a;


program 1 is valid case for hoisting  because we declared the variable with var and var is hoisted globally so we can use the variable without initializing and declaring it. 

program 2 is not a valid case for hoisting as we declared a variable with let and that's why  we can't use the variable before declaring it. So, it will throw  ReferenceError that  Cannot access 'a' before initialization.
