# Difference Between Regular Functions and Arrow Functions:

# Regular Function
### Function declaration
function myFun(){
return hello,world;
}
// Function expression
const myFun = function() {
  return Hello,world;
}

# Arrow Functions
const myFun = () => {
  return Hello,world;
}


# Regular Functions
this value inside a regular function is dynamic and depends on the invocation.
(i) simple invocation :- the value of this equals to the global object (or undefined if the function runs in strict mode)
(ii)method invocation :- the value of this is the object owning the method
(iii)indirect invocation :- the value of this equals to the first argument
(iv)Constructor invocation :- using new keyword this equals to the newly created instance

# Arrow Functions
this inside the arrow function is bound lexically and equals to this of the outer function.


# Regular Functions
The regular function can easily construct objects.
For example, the new house() function creates instances of a car
# Arrow Functions
A consequence of this resolved lexically is that an arrow function cannot be used as a constructor.
If you try to invoke an arrow function with new keyword, JavaScrip throws an error
Invoking new Car('black'), where Car is an arrow function, throws TypeError: Car is not a constructor

# Regular Functions
return expression statement returns the result from a function
If the return statement is missing, or there's no expression after return statement, the regular function implicitely returns undefined

# Arrow Functions
If the arrow function contains one expression, and you omit the function's curly braces, then the 
expression is implicitly returned by the arrow function without the use of return keyword.