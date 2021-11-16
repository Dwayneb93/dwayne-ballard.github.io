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