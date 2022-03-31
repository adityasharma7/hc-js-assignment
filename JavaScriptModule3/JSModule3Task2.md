Java-Script Module 3 Task
2.  Try the below code and identify which of the below programs are a valid case of hoisting?

Program 1:
a = 10;
console.log(a);
var a;


Program 2:
a = 5;
console.log(a);
let a;

Answer: I tried the above programs and I identified that program 1 is the valid case of hoisting because when we use the var keyword for variable declaration. The var is executed in the global scope. when the program 1 is executed, In the compile phase the memory is allocated to the var with an undefined placeholder then In the execution phase the undefined placeholder is updated with the value 10. 
On the other hand in program 2 the let is used in variable declaration, when let is declared it create its own execution context or own scope that's why it gives a Reference Error:"cannot access 'a' before initialization." The space before initialization is called a "temporal dead zone" that's why it does not support hoisting.
