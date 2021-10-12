// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know 
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */

function reverseString(input) {
    // YOUR CODE GOES BELOW HERE //
    var newString = ""; // this is where the outputs will return for the newly reversed string

    // a for loop will help us continuously run inputs once i (length of the input) reaches 0
    for (var i = input.length - 1; i >= 0; i--) {
      newString += input[i]; // this will concatenate the strings where each iteration will be placedinto the var newString = " " i.e first iteration will equate to 
    }                         // newString which is just " " at the moment, + input[lenght-1 (which is "o")]
    return newString;         // therefore the first iteration reads to the newString as "o"
                              // 2nd iteration is newString = "o" += [length-2 which is "l"(decrease by 1 in each iteration i--)]
                              // 2nd iteration logs to newString as newString = "lo"; and so on....
    // YOUR CODE GOES ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}