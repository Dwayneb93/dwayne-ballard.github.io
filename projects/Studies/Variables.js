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

// 7. Function //
/* Is a complex data type that is a set of thatements that peform a task or calculates a value. A function *
    definition (or function declaration) conists of the function keyword followed by the name of the function, *
    a list of parameters (input placeholders) that are enclosed in parentheses and separated by commas, and *
    the code block that will perform the task. The code block is enclosed in curly braces. {}.
*/
function sum(x, y) {
    return x + y;
}
sum(5, 6); // prints => 11; This is a function call or how you invoke a function. 

// 8. undefined //
// Is a primitive data type that has no value or has not been initialized. 
var favoriteSong;
console.log(favoriteSong); // prints => undefined

// 9. null //
// Is a primitive data type that has no value and is intentionally nullified by a programmer. 
var nonExistent = null;

// 10. NaN //
// Is a primitive data type that represents not-a-number. 
var x = 10;
var y = "yellow";
console.log(isNaN(x)); // prints => false because x IS a number
console.log(isNaN(y)); // prints => true because y IS NOT a number

// 11. Infinity and -Infinity //
/* Is a primitive data type represented as a numeric value. Infinity represents a positive number *
    greater than no other. -Infinity is a negative number smaller than no other. 
*/
var num = 100;
console.log(num * Infinity); // prints => infinity
var num2 = 200;
console.log(num * -Infinity); // prints => -Infinity
num < num2; // Prints true because negative infinity is smaller than positive infinity. 

/**
 * Operators:
 * 
 * 0. Operators act on our data. Such as assigning them to a variable, comparing them, or performing *
 * arithmetic operations. Operators are classed by what they do and by how many operands they require *
 * Operands are the values that the operators act on. 
 */

// 1. Assignment Operators //
// By using ONLY an (=) sign, we can assign a value to a variable.
var firstName = "Dwayne"; // here the = sign assigns firstName a string value of Dwayne
// You can also simultaneously add and assign something to an already exisiting variable!
firstName += " Ballard";
console.log(firstName); // prints => Dwayne Ballard

// Others include -=, /=, *=, %= (remainder); All doing the same thing as += above but in respect to their math (except %).

// 2. Arithmetic Operators //
// Are operators that take numerical values, either constant expressions or statements, as their operands and return a single value.
// subtraction (-), addition (+), division (/), muiltiplication (*), remainder (%), exponent (**)


// 3. Comparison Operators //
// A comparison operator compares its operands and returns a logical(boolean) value based on whether the comparison is true.

/*
    ==       !=            ===                !==               >              >=             <          <=
  Equal   Not Equal   Strictly Equal   Strictly Not Equal  Greater Than  Greater/Equal to Less Than   Less/equal to

  Strictly/Not Strictly refers to being EXACT SAME/DIFFERENT as in same data type and same value
*/
var looseEqual = "10" == 10; // since this is a "loose" equal, it doesn't consider the data types of the string vs number

var strictEqual = "Dwayne" === "dwayne"; // would print false because D does not equal d

var isItBigger = 4 > 2; // if logged, would print true

var lessThanOrEqual = 45 <= 45; // would log true

// 4. Logical Operators //
// Are used to determine the logic between certain variables, values, statements, etc. They resolve to true or false.
    // Logical And (&&) Operator will return true if BOTH operands test true, and will return false otherwise.
    let x = 2;
    console.log(x < 7 && x > 3); // will return FALSE because 2 is less than 7 but NOT greater than 3

    // Logical Or (||) operator will return true if ONE of the operands test true, and false is neither. 
    let x = 5;
    console.log(x > 10 || x <= 5); // will return TRUE because x is equal to 5 and satisfies one condition. 

    // Logical Not (!) or Bang Operator will "flip" the logic of the statement. It will return false if
        // its operand can be converted to true, otherwise true will return.
    var logicalNot = "Dwayne" !== "dwayne"; // would return true because D does NOT equal d

// 5. Unary Operators (!, typeOf, -)
// Is an operation with ONLY ONE operand. Examples include typeOf, delete, 
var obj = {
    name: "Dwayne",
    age: 28
}
delete obj.name;
console.log(obj); // { age: 28 }; This single operand only did one thing. Deleted one item.

// 6. Ternary Operators (1 ? b : c)
/*  The conditional operator is the ONLY JS operator that takes 3 operands. The operator can have one *
    two values based on a condition. condition ? val1 : val2;
*/
var status = (age >= 18) ? 'adult' : 'minor'; 
// This statement assigns the value "adult" to the variable status if age i8 or more. Otherwise, it assigns
    // the value "minor" to status.

/**
 * String Manipulation:
 * 
 * 0. Refers to how strings are manipulated, changed, moved, handled, used, etc in JS. There are 2 ways
 * in which strings may be manipulated. This is either by string methods or by assignment operators.

 */

// 1. You can manipulate strings by using assignment operators (+=);
var greeting = "Hello!";
console.log(greeting) // => Hello!
greeting += " My name is Dwayne!"; // this will add and assign this string to the original. 
console.log(greeting); // => Hello! My name is Dwayne!

// You can also just add different variables together with an operator. ** ACCOUNT FOR SPACES **
var str1 = "color black";
var str2 = "That dog";
var str3 = str2 + " is the " + str1;
console.log(str3); // "That dog is the color black"

// To avoid having to account for spaces we can use string interpolation
var str4 = `${str2} is the ${str1}`;
console.log(str4); // "That dos is the color black"

// 2. String Manipulation via methods
// There are various built-in methods used to manipulate strings.

// You can use the slice() method to extract a part of a string and returns that extraction into a new string.
let str = "Apples";
let lonelyApple = str.slice(0, 5); // starts at the 0 index and ends at the 5th. Takes out the 0 - 5 indexes and puts in new string.
console.log(lonelyApple); // => Apple

// You can also use the replace() method to replaced a specified value with another value in a string.
let text = "Thanks for visiting Louisiana!";
let newText = text.replace("Louisiana", "New Orleans"); // Thanks for Visiting New Orleans!

// You can also use .toUpperCase() or .toLowerCase() to change the case of a string.
let school = "operation spark";
console.log(school.toUpperCase()); // => OPERATION SPARK

// You can also turn values that aren't strings into string by using toString();
let number = 500;
let numberString = toString(number); // if logged, prints => "500"

// Another string manipulation method is split which turns a string into an array of strings.
var message = "Hey other words, let's get privacy from each other";
var isolatedWords = message.split(" ");
console.log(isolatedWords); // => ["Hey", "other", "words", "let's", "get", "privacy"......]

/**
 * Control Flow:
 * 
 * 0. We can control the flow of an application or code by using conditional if or if-else if-else statements OR *
 * through the use of a switch statement.
 * 
 * 1. Conditional statements allow us to control the flow of our application by direction code
 * based on conditions that are evaluated to boolean value (true or false). The anatomy of an if - else if - else statement
 * is
 *      if(conidition tests for true) {
 *          do this
 *      } else if (this condition tests true) {
 *          do this
 *      } else { (default statement... if all above test false, we come here
 *          do this
 *      }
 * Starts off with an if statement that tests a condition in parentheses. Inside the curly braces {} is the body
 * of the statement that is executed if the tested condition is true. 
 * ** Can have as many else-if statements and then the "else" statement at the end is a default to end the code chain.
 * 
 * 2. Switch statements are very similar to else=ifs and can sometimes make for a cleaner code instead of writing out each 
 * condition separately. 
 * The switch statement evaluates an input expression, matching the expressions value to a case clause, and executes statements
 * associated with that case.
 */

// Example of if - else if - else statement
var weather = 90;
    if (weather >= 85) {
        console.log("It's too hot");
    } else if (weather >= 70 && weather < 85) {
        console.log("It feels great outside!");
    } else if (weather < 70 && weather >= 60) {
        console.log("It's a bit chilly out");
    } else {
        console.log("Let's start up the fireplace");
    }
// will log "It's too hot" because the weather, 90 is greater than 85. The code block stops there and doesn't reach
    // any of the code below the "passed for true" condition.

// Example of Switch Statement
var color = 'pink';
switch (color) {
    case 'orange':
    case 'red':
    case 'yellow':
        console.log('This is a warm color');
        break; // **** A BREAK statement ends the case, similar to indicate the next step in an else-if chain
    case 'blue':
    case 'green':
    case 'purple':
        console.log('This is a cool color');
        break;
    default: // **** default is like else statement at end of if-else if-else chain.
        console.log("Sorry, that color isn't in my palette");
}
// Since we are checking for pink, the code goes all the way to the last statement since it is not
    // in any of the case statements. it will print "sorry, that color isnt in my palette"

/**
 * 
 * 
 * 
 */