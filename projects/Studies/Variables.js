/**
 * Variables:
 * 
 * 0. Variables are named identifiers that are bound to a scope within our application. They *
 * can be considered as a container for values. These values can be primitive (types of data  *
 * such as strings, numbers, and booleans) or complex (types of values like objects, arrays, *
 * and functions)
 * 
 * 1. A variable is created by using the var keyword, followed by an identifier (or name).
 * 2. There are two phases to using variables: declaration and initialization/assignment.
 */

// 1. Declaration //
// This is when we use the var keyword and give it a name
var petName; // Notice the camelCase when declaring variables
console.log(petName); // prints => undefined since the variable has NOT been initialized.

// 2. Assignment or Initialization //
// This is when a value is assigned to the undeclared variable.
petName = "Ahri";
console.log(petName); // prints => Ahri

// 3. Re-assignment //
// Changing or updating the value of a previously assigned variable
petName = "Colton";
console.log(petName); // prints => Colton

// 4. var, let, const //
/* These are the keywords used to declare variables. However, they each have different *
    behaviors when used. Let and const variables are declared the same as var.
 */
/* var, as shown above, can be reassigned. This is true for the keyword let, too. However, *
    the const variable CANNOT be reassigned. Also, CANNOT leave const variables unassigned.
*/
let myName;
myName = "Dwayne";
console.log(myName); // prints => Dwayne
myName = "Michael";
console.log(myName); // prints => Michael

const myAge; // SYNTAX ERROR - can't leave const unassigned
myAge = 28;
console.log(myAge); // prints => 28
myAge = 21;
console.log(myAge); // prints => TYPEERROR - assignment is made to a constant variable.

// 5. Scope //
/* Refers to a space in the code where certain variables can be used after the variable *
    has been declared. Every time a code block is created useing either a loop, an *
    if-statement, or a function, a new scope is created. (loop blocks, if blocks, 
    functions, respectively). 

    var values will be stuck to the function (function scoped) but will NOT be stuck *
    to if statements or loops.

    let and const values will be stuck in the scope of ANY code block so they are *
    block scoped.
*/
function exFunc() {
    var x = 5;
    let y = 10;
    const z = 15;
}
console.log(x, y, z); // prints => undefined for all
exFunc(); // x, y, and z are all NOT accessible outside the function.

if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
}
console.log(a, b, c); // prints => 10, undefined, undefined. Var variables are not *
// blocked scoped. 

for (var i = 0; i < 5; 1++) {
    var d = 100;
    var e = 200;
    const f = 300;
}
console.log(d, e, f); // prints => 100, undefined, undefined. Again, let and const *
// are block scoped, while var is not.

// 6. Hoisting //
/*
    In JavaScript, before the statements of a program are executed, ALL var and function *
    declarations are dragged (hoisted) to the top of the program. Because of this, var * 
    values will not return a reference error if you try to refer to them before they *
    are declared. They will return undefined. Only the DECLARATION is brought to the
    top, NOT the INITIALIZATION.
*/
console.log(favColor); // print => undefined. The program sees the variable, but not the value.

var favColor = "Black";

console.log(favColor); // print => Black. The variable has been declared by this point.

// let and const values are NOT hoisted. Therefore, you will get a reference error *
//  if you try to refer to them before they are declared.

console.log(weight); // print => REFERENCE ERROR
console.log(num); // print => REFERENCE ERROR

let weight = 175;
const num = 2000;

/**
 * Data Types
 * Are the types of values we will see and work with while coding. There are 2 main *
 * data types: Simple/Primitive AND Complex.
 * 
 * 0. // Primitive/simple data types // do not hold or collect other values, and operations *
 * on primitive values will return a NEW primitive value. They do not alter the original. *
 * Primitive data types also copy by value, which means that when assigning or passing, *
 * simple data types are copied from one variable to the next.
 *      // COPY BY VALUE //
 *          var a = 1;
 *          var b = a; // the value stored in var a is COPIED into var b
 *          b = 2; // changing the value at b doesn't effect what is stored in a
 *          console.log(a) // prints => 1
 * 
 * 1. // Complex data types // aggregate other values and are indefinite in size. They are copied *
 * by reference, which means that when assigning or passing, complex data-types are passed by *
 * reference. Objects, arrays, and functions are complex.
 *      // COPY BY REFERENCE //
 *          var a { one: 'foo' };
 *      Here, the value stored in b is a REFERENCE to the value stored in a - they now *
 *      BOTH point to the same object
 *          var b = a;
 * 
 *      Changing the value at b effects all references because variable b points to the *
 *      reference in memory where object 'a' is stored // a === b
 *      b.one = 'bar';
 *      console.log(a.one); console.log(b.one) // both print => bar
 */

// 2. Number //
// Is a primitive value used to represent numerical data such as numbers, decimals, etc. 
var num = 1500;

// 3. String //
// Is a primitive value represented by a sequence of characters and/or digits wrapped in quotes.
var string = "I am 28 years old and am trying to pursue a new career!";

// 4. Boolean //
// Is a primitive data type that is used for logic and can only be either TRUE or FALSE.
var over21 = true; 

// 5. Array //
// An array is a complex data type, and is an indexed list-like object that holds data within brackets [].
var bestFriends = ["Heather", "Dylan", "Myles", "Tia"];
// Arrays can hold objects, and other arrays, too.
var sampleArray = [["Eggs", 2], ["Bread", 1], ["Go to store", "Mail check", "visit mom"], { friend: "Heather" }];

// 6. Object //
/* Is a complex data type that stores various key-value pairs. The key is always a string that *
    refers to a specific property. The value refers to the actual data. An object is enclosed with *
    curly brackets {}.
*/
var sampleObject = {
    name: "Dwayne",
    age: 28,
    hobbies: ["hiking", "riding bike", "video games", "movies"]
};