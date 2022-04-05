# 2. Try the below code and identify which of the below programs are a valid case of hoisting?
Program 1:
a = 10;
console.log(a);
var a; //it is hoisted to the top of the scope

Program 2:
b = 5;//but here we initialied in temporal dead zone it give ReferenceError
console.log(b);
let b; //it is also hoisted to the top of the scope
-----------------------------------------------------------------------------------
## program 1 is valid case of hoisting
In it we declared the variable with var , (var a;) is hoisted 
JavaScript engine finds a var variable declaration during the compile time, it will add that variable to the lexical environment and initialize it with undefined and later during the execution when it reaches the line where the actual assignment (a=10) is done in the code, it will assign the value 10 to the variable and we get the output 10

## program 2 is not valid case of hoisting
In it we declared the variable with let , (let a;) is also hoisted 
Declarations let & const are also hoisted in JavaScript, while the var declarations are initialized with undefined, but let and const declarations remain uninitialized.
we can’t access the variable before it declared in the source code. this area before declaration is called “Temporal Dead Zone” 
In program 2 we use variable in temporal dead zone thats why it give (ReferenceError: Cannot access 'b' before initialization)

