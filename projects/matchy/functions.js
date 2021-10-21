/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(animals, name) {
    for (var i = 0; i < animals.length; i++) { // iterate through the input array
        if (animals[i].name === name) {       // at each iteration, you need to determine if the 
            return animals[i];              // current object being accessed has a name property equal
        }
        }
        return null; // because we dont want it to automatically exit function if first object name doesnt equal
}                      // we want the function to iterate through each object first, then null if it brings back false


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, replacement) {
    for (var i = 0; i < animals.length; i++) {
        if (animals[i].name === name) {
            return animals.splice(i, 1, replacement);
        }
    }
}



//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name) {
    for (var i = 0; i < animals.length; i++) {
        if (animals[i].name === name) { // if name is equal to name
            return animals.splice(i, 1); // return the new object and splice it at
        }                                // the index of i that equals name, and make
    }                                    // 1 removal
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal) {
    let size = Object.keys(animal).length;
    countedSameName = 0;
    nameArray = [];
    for (var i = 0; i < animals.length; i++) {
        if (animals[i].name === animal.name) {
            countedSameName += 1;
        }
    }
    if (countedSameName > 0) {
        nameArray.push(animal.name);
    }   
    if (nameArray.length > 0) {
        return animals;
    } else {
        return animals.push(animal);
    }
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}