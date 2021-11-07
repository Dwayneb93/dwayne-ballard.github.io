// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./dwayne-ballard.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    var allMen = _.filter(array, function(customer) {
        if (customer.gender === "male") {
            return true;
        } else {
            return false;
        }
    });
    return allMen.length; //since the filter function returns an array of items that fit that tester function, we can just call the length of that array to get the number of items
};

var femaleCount = function(array) {
    var allFemales = _.reduce(array, function(femaleCount, person) {
        if (person.gender === "female") {
            femaleCount += 1;
        }
        return femaleCount;
    }, 0);
    return allFemales;
}

var oldestCustomer = function(array) {
    var oldestPerson = _.reduce(array, function(oldestAge, currVal) {
        if (oldestAge.age < currVal.age) {
            return currVal;
        } else {
            return oldestAge;
        }    
    });
    return oldestPerson.name
}

var youngestCustomer = function(array) {
    var youngestPerson = _.reduce(array, function(youngestAge, currVal){
        if (youngestAge.age < currVal.age) {
            return youngestAge;
        } else {
            return currVal;
        }
    });
    return youngestPerson.name;
}

var averageBalance = function(array) {
    var balances = _.reduce(array, function(total, person){
        var removeDollarSign = person.balance.slice(1); // slice starts array at index provided, deleting the 0 index
        var noCommaNum = removeDollarSign.replaceAll(",", ""); // need to remove dollar signs, string quotes, and commas to add
        var intBalance = parseFloat(noCommaNum);
        return total + intBalance;
    }, 0);
    return balances / array.length;
}

var firstLetterCount = function(array, letter) {
    var startsWithCount = _.filter(array, function(customer) { // filter loops through each object in the customer array, and tests this func upon each
        if (customer.name[0].toLowerCase() === letter.toLowerCase()) { // ensures that we are defaulting characters to an easy way to compare
            return customer.name; // returns name to an output array created by filter func
        }
})
    return startsWithCount.length; // counts number of items in output array (the number of names that start with that letter)
}

var friendFirstLetterCount = function(array, customer, letter) {
    var friendsWith = _.filter(array, function(value) {
        if(value.name === customer) {
            return value;
        }
    })
    

var friendsCount = function(array, friendName) {
    // return an array of ONLY the customer objects who are friends with input name
    var friendsWith = _.filter(array, function(customer){
        // if friends property of the current cusomer contains friendName [ {name: }]
        for (var i = 0; i < friends.length; i++) {
            if (friends[i].name === friendName) {
            return true;
        }
    }
    return false;
});
    var friendsWithNames = friendsWithNames.map(customer => customer.name);

}

var topThreeTags;

var genderCount = function(array) {
    var genders = _.reduce(array, function(genderCount, person){
        if (genderCount[person.gender]) {
            genderCount[person.gender] += 1;
        } else {
            genderCount[person.gender] = 1;
        }
        return genderCount;
    }, {})
    return genders;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
