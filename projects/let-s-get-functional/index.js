// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-badams92');

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
 *    npm start --prefix ./projects/let-s-get-functional
 */

var maleCount = function(array) {
    return _.filter(array, (e, i, a) => {
        return e.gender === "male";
    }).length;
};

var femaleCount = function(array) {
    return  _.reduce(array, (seed, element, index) => {
        if (element.gender === "female") seed++;
        return seed;
    }, 0);
};

var oldestCustomer = function(array) {
    let eldest = array[0];
    _.each(array, (e, i, a) => {
        if (e.age > eldest.age) eldest = e;
    });
    return eldest.name;
};

var youngestCustomer = function(array) {
    let youth = array[0];
    _.each(array, (e, i, a) => {
        if (youth.age > e.age) youth = e;
    })
    return youth.name;
};

var averageBalance = function(array) {
    return  _.reduce(array, (seed, e, i) => {
        seed += parseFloat(e.balance.replace(/\D/g,""));
        return seed;
    }, 0) / array.length * 0.01;
};

var firstLetterCount = function(array, letter) {
    return _.reduce(array, (seed, e, i) => {
        if (e.name[0].toLowerCase() === letter.toLowerCase()) seed++;
        return seed;
    }, 0);
};

var friendFirstLetterCount = function(array, customer, letter) {
    return firstLetterCount(customer.friends, letter);
};

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
