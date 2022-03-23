2.  Try the below code and identify which of the below programs are a valid case of hoisting?

Program 1:
a = 10;
console.log(a);
var a;


Program 2:
a = 5;
console.log(a);
let a;

Ans-- The above program 1 is valid in case of hoisting. 
The below program 2 gives the error - Uncaught referenceError- cannot access 'a' before initialization. 
Hoisting works in case of var only in case of let it doesn't work fine.
In case of var it allows the access of declaration before initialization, On the other hand let cannot access the declaration before initialization. 
-var declarations are globally scoped or function scoped while let and const are block scoped.
-var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.
-They are all hoisted to the top of their scope. But while var variables are initialized with undefined, let and const variables are not initialized.
-While var and let can be declared without being initialized, const must be initialized during declaration.
 