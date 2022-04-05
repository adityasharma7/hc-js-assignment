2. Identify the difference between regular functions and arrow functions

**1.**
**regular functions**
// Function declaration
function myFun(){
return hello,world;
}
// Function expression
const myFun = function() {
  return Hello,world;
}
**arrow functions**
const myFun = () => {
  return Hello,world;
}


**2.**
**regular functions**
this value inside a regular function is dynamic and depends on the invocation.
(i) simple invocation :- the value of this equals to the global object (or undefined if the function runs in strict mode)
(ii)method invocation :- the value of this is the object owning the method
(iii)indirect invocation :- the value of this equals to the first argument
(iv)Constructor invocation :- using new keyword this equals to the newly created instance
**arrow functions**
this inside the arrow function is bound lexically and equals to this of the outer function.


**3.**
**regular functions**
The regular function can easily construct objects.
For example, the new house() function creates instances of a car
**arrow functions**
A consequence of this resolved lexically is that an arrow function cannot be used as a constructor.
If you try to invoke an arrow function with new keyword, JavaScrip throws an error
Invoking new Car('black'), where Car is an arrow function, throws TypeError: Car is not a constructor


**4.**
**regular functions**
return expression statement returns the result from a function
If the return statement is missing, or there's no expression after return statement, the regular function implicitely returns undefined
**arrow functions**
If the arrow function contains one expression, and you omit the function's curly braces, then the 
expression is implicitly returned by the arrow function without the use of return keyword.



