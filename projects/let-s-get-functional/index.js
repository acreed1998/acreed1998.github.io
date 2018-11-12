// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-acreed-github-io');

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
    let count;
    count = _.filter(array, function(e, i, a){  
        return (e.gender === 'male');
    });
    return count.length;
};

var femaleCount = function(array) {
    let count = 0;
    _.each(array, function(e, i, a){  
        if (e.gender === 'female') {
            count++;
        }
    });
    return count;
};

var oldestCustomer = function(array) {
    let oldestAge;
    let oldestName;
    _.each(array, function(e, i, a) {
        if (oldestAge === undefined) {
            oldestAge = e.age;
            oldestName = e.name;
        } else if (e.age >= oldestAge) {
            oldestAge = e.age;
            oldestName = e.name;
        }
    });
    return oldestName;
};

var youngestCustomer = function(array) {
    let youngestAge;
    let youngestName;
    _.each(array, function(e, i, a) {
        if (youngestAge === undefined) {
            youngestAge = e.age;
            youngestName = e.name;
        } else if (e.age <= youngestAge) {
            youngestAge = e.age;
            youngestName = e.name;
        }
    });
    return youngestName;
};

var averageBalance = function(array) {
    let totalBalance = 0;
    let currentIndexBalance = 0;
    let divisor = 0;
    _.each(array, function(e, i, a) {
        currentIndexBalance = _.moneyToString(e.balance);
        totalBalance += currentIndexBalance;
        divisor++;
    });
    return (totalBalance / divisor);
};

var firstLetterCount = function(array, letter) {
    let counter = 0;
    letter = letter.toUpperCase();
    _.each(array, function(e, i, a) {
        if (e.name[0] === letter) {
            counter++;
        }
    });
    return counter;
};

var friendFirstLetterCount = function(array, customer, letter) {
    let numberOfFriends = 0;
    letter = letter.toUpperCase();
    customer = _.makeNameCap(customer);
    _.each(array, function(e, i, a) {
        if (e.name === customer) {
            _.each(e.friends, function(e2, i2, a2) {
               if (e2.name[0] === letter) {
                   numberOfFriends++;
               } 
            });
        }
    });
    return numberOfFriends;
};

var friendsCount = function(array, name) {
    if (name === undefined) {
        return [];
    }
    let listOfNames = [];
    name = _.makeNameCap(name);
    _.each(array, function(e, i, a) {
        _.each(e.friends, function(e2, i2, a2) {
            if (e2.name === name) {
                listOfNames.push(e.name);
            }
        });
    });
    console.log(Array.isArray(listOfNames));
    return listOfNames;
};

var topThreeTags = function(array) {
    let tagsInArray = [];
    let tagObject = {};
    let currentTag;
    let resultingTags = [];
    let currentHighest = 0;
    _.each(array, function(e, i, a) {
        _.each(e.tags, function(e2, i2, a2) {
            tagsInArray.push(e2);
        });
    });
    tagsInArray.sort();
    _.each(tagsInArray, function(e3, i3, a3) {
        if (currentTag != e3) {
            currentTag = e3;
            tagObject[currentTag] = 0;
        }
        if (currentTag === e3) {
            tagObject[currentTag]++;
        }
    });
    while (resultingTags.length < 3) {
        _.each(tagObject, function(e4, i4, a4) {
            if (e4 > currentHighest) {
                currentHighest = e4;
            }
            if (e4 === currentHighest) {
                resultingTags.push(i4);
            }
        });
    }
    return resultingTags;
};

var genderCount = function(array) {
    let genders = {
        male: 0,
        female: 0,
        transgender: 0
    };
    _.each(array, function(e, i, a) {
        if (e.gender === 'male') {
            genders.male++;
        } else if (e.gender === 'female') {
            genders.female++;
        } else {
            genders.transgender++;
        }
    });
    return genders;
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
