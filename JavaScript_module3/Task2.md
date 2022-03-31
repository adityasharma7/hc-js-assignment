Try the below code and identify which of the below programs are a valid case of hoisting?
Program 1:
a = 10;
console.log(a);
var a;

Program 2:
a = 5;
console.log(a);
let a;

Answer:
Program 1 is valid case of hoisting because in that program you will get output 10 as hoisting concept apply on that you can access variable value before declaration but it is only when you use  var variable.but in second program you got reference error because if you use let keyword The variable is in a "temporal dead zone" from the start of the block until it is declared.

