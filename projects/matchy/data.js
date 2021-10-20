/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
animal.species = 'dolphin';
animal['name'] = 'Gary';
animal['noises'] = [];
console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0] = "trills";
noises.push("squeaks");
noises.unshift("whistles");
noises[noises.length] = "clicks";
console.log(noises.length);
console.log(noises.length - 1);
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal['noises'] = noises;
animal.noises.push("grunts");
console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *  You can access properties on objects by using dot or bracket notation.
 * 2. What are the different ways of accessing elements on arrays?
 *  You can access elements in arrays by using their indexed value and by using
 *  various methods to manipulate said array.
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
console.log(animals);

var duck = {
  species: "duck",
  name: "Jerome",
  noises: ['quack', 'honk', 'sneeze', 'woosh']
};

animals.push(duck);

console.log(animals);

var wolf = {
  species: "wolf",
  name: "Balto",
  noises: ['howl', 'snarl', 'bark', 'whine']
};
animals.push(wolf);
console.log(animals);

var owl = {
  species: "owl",
  name: "Ollie",
  noises: ['hoot', 'whistles', 'coos']
};
animals.push(owl);
console.log(animals);
console.log(animals.length);
//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var friends = []; // I chose this structure because it is best for holding lists of "string" data.
function getRandom(array) { // we want this code to be reusable so we test it to a blank value
  var newArray = []; // [0, 1, 2, 3] // set a placeholder for the loop to push its values to
  for (var i = 0; i <= array.length - 1; i++) { // this loop function loops through the array at each
    newArray.push(i);                           // index (i) and pushes that index into the newArray
  }
  return Math.floor(Math.random() * (newArray[newArray.length - 1] - newArray[0]) + newArray[0]); // newArray.length - 1 just gives us a number; newArray[newArray.length - 1] gives us whole element
}; // gives us a range from 0 index to 3 index
var randomIndex = getRandom(animals); // now we made a new variable called randomIndex and are calling the random function with our array (animals) argument
console.log(randomIndex); // this logs to console and shows us that we are getting a random variable
friends.push(animals[randomIndex].name); // we are pushing to friends array by accessing animals array at a random index and then accessing the name
console.log(friends); //now a random animal prints to friens array

animals[1]['friends'] = friends; // now it is accessing 
// the first indexed value of animals, (animals[1]), then we use bracket notation to create new property 'friends', and then we give that property the value of our recently created friends array








/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}