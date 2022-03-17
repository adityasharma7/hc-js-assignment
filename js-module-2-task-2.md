2.Identify the difference between regular functions and arrow functions

An arrow function is also known as the fat arrow function. It is a new feature introduced in ES6 that is a more concise syntax for writing function expressions. Both regular JavaScript functions and arrow functions work in a similar manner but there are some differences between them. Let's see the differences below: -
->Syntax
->Arguments binding
->Use of this keyword
->Using a new keyword

1) Syntax:
A programmer can get the same result as regular functions by writing a few lines of code using arrow functions.
Curly brackets are not required if only one expression is present.

2) Arguments binding
arguments object inside the regular functions contains the list of arguments.

The arrow function, on the opposite, doesn’t define arguments i.e. they do not have arguments binding.

But you can easily access the arrow function arguments using a rest parameter ...args.

3) Use of this keyword
Inside of a regular JavaScript function, this value is dynamic. The dynamic context means that the value of this depends on how the function is invoked.

The behavior of this inside of an arrow, function differs considerably from the regular function’s this behavior as an arrow function does not have its own “this” keyword.
The value of this inside an arrow function remains the same throughout the lifecycle of the function and is always bound to the value of this in the closest non-arrow parent function which means No matter how or where being executed, this value inside of an arrow function always equals this value from the outer function.


4) Using a new keyword

Regular functions are constructible and callable. They can be called using the new keyword.

But, the arrow functions are only callable and not constructible, i.e., arrow functions can never be used as constructor functions.

Summary:-
this value inside a regular function is dynamic and depends on how the function is invoked. But this inside the arrow function is bound lexically and equals to this of the outer function. Fat arrow methods always bind this a value to the class instance.