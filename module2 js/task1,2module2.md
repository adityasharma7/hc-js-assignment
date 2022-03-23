What is the difference between object and Map?
Ans-- Map - Map is helpful in storing data in the form of pairs as it is a data structure. The pair has a unique key and a value mapped to the key.We can use map to prevent duplicity. 

In Map the key-field can be of any data type like integer, array, even an onject.
In case of map the original order of elements is preserved. 

The map is an instance of an object.
map will automatically update its size and get the easiest.

The map use set() method to add the new elements.
Map not use this on the place of this map is using its inbuilt has() function.

For accessing the elements map use its inbuilt get() method. 

Object-- As map object is also used for storing data with its key-value pair. 
In object the data type of the key-field is restricted to integer,string and symbols. 

In case of objects there is no preserved order of elements. 

Object is not the instance of map.
In javascript there are many ways to create an object, using-direct literal, use of constructor, using object.create. 

To access the elements the object uses the 'key' name with a dot operator. 

Objetc uses '===' operator for performing the task. 

In object new element is added directly. 
The size calculation in object is to be done manually with the help of object.keys(). 






Que 2- Identify the difference between regular functions and arrow functions?
Ans- Arrow function is also called fat arrow function.
We can define function in java script with many ways but the usual way of using it by function keyword. the function declaration and function expression is  known as regular function. 
The main differenc ebetween the regualr function and the arrow function.  
-this valeue with regular and arrow function.

 Regular function- In regular function this value is dynamic. Dynamic means how the value of this depends how function is invoked. 
 The four ways to invoke a regular function- 
i) simple invocation- the value of this s eqauls to global object. 
 function fun1(){
     console.log(this);
 }
 fun1(); //logs global object.

ii) method invocation- the value of this is the object owening the method.
const car ={
    method(){
        console.log(this);
    }
} ;
car.method(); //logs car

iii) indirect invocation- By using fun1.call(thisval, arg1, ..., argN) or fun1.apply(thisval, [arg1, ..., argN]) the value of 'this' equals to the first argument-
function fun1(){
    console.log(this);
}
const text ={value: 'T'};
fun1.call(text);  //logs{value: 'T'}
fun1.apply(text); //logs{value: 'T'}

iv) constructor invocation- In constructor invocation using 'new' keyword 'this' equals to newly created instance-
function fun1(){
    console.log(this);
}
new fun1();  // logs an instance of fun1

Arrow function-
The arrow fucntion doesn't define its own execution context. The behaviour of 'this' is totally differnt in regular function and the arrow function. 
'this' value inside of an arrow function alwayas equals this value from the outer function. The arrow fucntion resolve this lexically.
Take an example, here cup() is an outer function of the tea() arrow fucntion:

 const myobject = {
     cup(items){
         console.log(this);
         const callback = () => {
             console.log(this);
         };
         items.forEach(callback);
     }
 };
myobject.cup([4,5,6]);
'this' value inside the arrow function callback() equals to 'this' of the outer fucntions cup().

(II) Constructors
i) Regular function- regular function can easily construct an objects. 
Taking an example- the new cup() function creates instance of a cup:

function cup(color){
    this.color = color;
}
const bluecup = new cup('blue');
bluecup instance of cup;

Cup is a regular function. When invoked with the new keyword 'new'new instance of cup type are created. 

ii.) Arrow function- In javascript when we try to invoke arrow function prefixed with new keyword, It throws an errow:
const cup = (color) => {
    this.color = color;
}; 
const redCar = new Cup('red');
//TypeError: Cup is not a constructor. 
 
 (III.) Arguments Object
 i) Regular function:
 In regular function body, argument is special array- Like object containing the list of arguments with which function been invoked. 

 -Invoking the function with 2 arguments: 
 function myfunction(){
     console.log(arguments);
 }
 myfunction('n','m');
 In myfunction() body the arguments is an array-like object having invocation arguments: 'n' and 'm'.

 ii.) Arrow function:
 In case of arrow function, no arguments are specially keywords is deifiend inside an arrow function.

 Same(with 'this' value), the arguments objects is resolved lexically: the arrow function accesses arguments from the outer function. 

Access arguments inside of an arrow function:

fucntion myregularFunction(){
    const myArrowFunction = () => {
        console.log(arguments);
    }
    myArrowfunction('c', 'd');
}
myRegularFunction('a', 'b');

The arrow fucntion myArrowFunction() is invoked with the arguments 'c', 'd'. Inside the body, arguments object equals to the argumnets of myRegularFunction() invocation: 'a', 'b'.

If we don't want to use direct arguments of the arrow function, then we can also use 'the rest parameters' feature: 
    function myFunctionFunction() {
        const myArrowFunction = (...args) => {
            console.log(args);
        }
        myArrowFunction('c', 'd');
    }
    myRegularFunction('a', 'b');

    '...args' rest parameter collects teh execution arguments of the arrow function: ['c', 'd'].


 (IV) Implicit return
 i.) Regular function- "return expression" statement returns the result from a function: 
  function myFunction(){
      return 44;
  }
  myFunction();  // => 44

In case return statement is missing, or there is no expression after return statement, the regular fucntion implicitely returns undefined:

function myEmptyFunction(){
    44;
}
function myEmptyFunction1(){
  44;
  return;
}
 myEmptyFunction();  // => undefined
 myEmptyFunction1(); //=> undefined

 ii.) Arrow function 
Arrow function works same as an regular function interms to return the values, but there is an exception. 

In case arrow function cinatins one expression, and we omit the fucntion's curly braces, at that time the expression is implicitly returned. These are the inline arrows function.

const increments = (num) => num + 1;
increments(41); // => 42

The increment() arrow consists of only one expression: num+1. This expression is implicitly returned by the arrow function without the use of return keyword. 

(V) Methods
i.) Regular function
The regular functions are helful to define methods on classes. 

In the class College, the method logName() is defined using a regular fucntion 
class College{
    constructor(collegeName){
        this.collegeName = collegeName;
    }
    LogName() {
        console.log(this.collegeName);
    }
}
const Scsit = new College ('SCSIT'); 

As a method regular functions are ways to go.

In some cases we don't need to supply the methods as a callback, such as- to setTimeout() or an event listner. In such cases we may face some difficulties in accessing the 'this' value. 

For example- Use logName() method as a callback to setTimeout(): 

setTimeout(Scsit.logName,2000); //after 2  second logs "undefined"
Now bind this value manually to the right context: 
setTimeout(Scsit.logName.bind(Scsit),2000);
//after 2 second logs "Scsit"

Now using bind this value binds to instance.
It requires boilerplate to do manually, so its better to use arrow function as a class field. 

ii.) Arrow function
With the help of Class fields proposal we can can use arrow function as methods inside classes. 
As compare to the regular function  in the arrow function, method define using an arrow binds this lexicallt to the  class instance. 

Using arrow function as a field:

class college {
    constructor(collegeNmae){
        this.collegeNmae = collegeName;
    }
    logName = () => {
        console.log(this.heroName);
    }
}
const college = new college('Scsit');

Now, we can use Scsit.logName as a callback without any manual binding of this. the value of this inside logName() methods is always the class instance: 

setTimeout(Scsit.logName, 2000);
//after 2 second logs "Scsit"


