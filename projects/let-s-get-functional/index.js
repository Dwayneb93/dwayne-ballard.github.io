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
    var allFemales = _.reduce(array, function(previous, current) {
        return previous += current.gender === "female";
    }, 0); // <--- this 0 is the seed parameter... think of all the above as just the function param
    return allFemales;
}

var oldestCustomer = function(array) {
    var oldestName = _.reduce(array, function(maxAge, currVal, i) {
        var oldestAge = 0;
        if (currVal.age > maxAge) {
            oldestAge = currVal.age;
        }
        return oldestAge;
    }, 0);
    return oldestName.name;
}

var youngestCustomer;

var averageBalance;

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

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
