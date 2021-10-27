//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


function objectValues(object) {
    return Object.values(object);  
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function keysToString(object) {
    var keysArray = [];
    for (var key in object) {
        keysArray.push(key);
    }
    return keysArray.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function valuesToString(object) {
    var arrValues = [];
    for (var key in object) {
        if (typeof object[key] === "string") {
        arrValues.push(object[key]);
    }
}
    return arrValues.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection)) {
        return "array";
    } else {
        return "object";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {        // "Dwayne is coding" 
    var splitArray = string.split(" ");
    var capitalizeString = "";               // ["Dwayne", "is", "coding"] ex.
        for (var i = 0; i < splitArray.length; i++) { //loops through each index
            var capital = splitArray[i].replace(splitArray[i][0], splitArray[i][0].toUpperCase());
            capitalizeString += capital + " "; // even added space at LAST ITERATION that we MUST REMOVE with trim()
            console.log(capitalizeString);                               // i at 0 = "Dwayne"           // 
        }
        return capitalizeString.trim(); // takes empty space from beginning and end
    }                                   // of string and removes it

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    var capitalizeNameString = "Welcome " + object.name.replace(object.name[0], object.name[0].toUpperCase()) + "!";
        return capitalizeNameString;
    }
   

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    var message = object.name.replace(object.name[0], object.name[0].toUpperCase()) + " is a " + object.species.replace(object.species[0], object.species[0].toUpperCase());
    return message;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    for (var key in object) {
        if (object.hasOwnProperty("noises") && object["noises"].length > 0) {
            return object["noises"].join(" ");
        } 
    }
    return "there are no noises";
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    if (string.includes(word)) {
        return true;
    } else {
        return false;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    object.friends.push(name);
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    if (object.hasOwnProperty("friends") && object["friends"].includes(name)) {
        return true; //return true if name is a friend of object
    } else {
        return false; // return false if name is not a friend of friends array
    }
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
   var notFriends = [];
   for (var i = 0; i < array.length; i++) { //looping through array (friends)
    // to see if friends array includes a specific name; if it doesn't we want to push THOSE names
    // into notFriends array
        if ((array[i].friends.includes(name) || array[i].name === name) !== true) { //includes method evaluates to true or false
            notFriends.push(array[i].name); // so if the name isnt included in the friends array
            // or the name isn't equal the name we are searching for, then push that name to array
        }
   } return notFriends;

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    object[key] = value;
    return object;
}
//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
if (array.length > 0) {
    for (var x in object) {
        for (var y = 0; y < array.length; y++) {
            if (array[y] === x || array[y] == object[x])
            delete object[x];
        }
    }
}
return object;
}


//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    var unique = array.filter(function(elem, index, self) {
        return index == self.indexOf(elem);
    });
    return unique;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}