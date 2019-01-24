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
    });
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
    let targetFriends = [];
    _.each(array, (e, i, a) => {
       if (e.name.toLowerCase() === customer.toLowerCase()) {
           targetFriends = e.friends;
       }
    });
    return firstLetterCount(targetFriends, letter);
};

var friendsCount = function(array, name) {
    let result = [];
    _.each(array, (e,i,a) => {
        if (e.name !== name) {  // they can't be on their own list of friends
            _.each(e.friends, (element, index, arr) => {
               if (element.name === name) result.push(e.name); 
            });
        }
    });
    return result;
};

var topThreeTags = function(array) {
    let temp = {};
    // make an object with each tag and a count of its frequency
    _.each(array, (e, i, a) => {
        _.each(e.tags, (element, index, arr) => {
           temp[element] = (temp[element] + 1) || 1; 
        });
    });
    let arr = [];
    // takes the tag and count from the temp object and splits each one into their own object and pushes it into a new array
    for (let key in temp) {
        arr.push({"tag": key, "count": temp[key]});
    }
    arr.sort((a, b) => {return b.count - a.count}); // sorts the tags by their count
    let result = [];
    // pushes the name of the first 3 tags into an array
    for (let i = 0; i < 3; i++) {
        result.push(arr[i].tag);
    }
    return result;
};

var genderCount = function(array) {
    let result = {};
    _.reduce(array, (seed, e, i) => {
        return result[e.gender] = (result[e.gender] + 1) || 1;
    }, 0);
    return result;
};

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
