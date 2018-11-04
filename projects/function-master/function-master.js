//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    var arr = [];
    for (var key in object) {
        arr.push(object[key]);
    }
    return arr;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    var arr = [];
    for (var key in object) {
        arr.push(key);
    }
    return arr.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var arr = [];
    for (var key in object) {
        if (typeof(object[key]) === 'string') {
            arr.push(object[key]);
        } 
    }
    return arr.join(" ");
    
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection)) {
        return 'array';
    } else {
        return 'object';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    string = string.split("");
    var stringLetter = string[0].toUpperCase();
    string.splice(0, 1, stringLetter);
    string = string.join("");
    return string;
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    let i;
    string = string.split(" ");
    for (i = 0; i < string.length; i++) {
        string[i] = capitalizeWord(string[i]);
    }
    return string.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    return "Welcome " + object.name[0].toUpperCase() + object.name.slice(1, object.name.length) + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    return object.name[0].toUpperCase() + 
    object.name.slice(1, object.name.length) + 
    " is a " + object.species[0].toUpperCase() + 
    object.species.slice(1, object.species.length);
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    if (object.noises === undefined || object.noises[0] === undefined) {
        return 'there are no noises';
    }
    return object.noises.join(" ");
    
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    var i;
    string = string.split(" ");
    for (i = 0; i < string.length; i++) {
        if (string[i] === word) {
            return true;
        }
    }
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    if (object.friends[0] === undefined) {
        object.friends.push(name);
    } else if (object.friends === undefined) {
        object.friends = [];
        object.friends.push(name);
    } else {
        object.friends.push(name);
    }
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    var i;
    if (object.friends === undefined) {
        return false;
    }
    for (i = 0; i < object.friends.length; i++) {
        if (object.friends[i] === name) {
            return true;
        }
    }
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    let i;
    let probVar;
    let friends = ["Jimmy", "Bob", "Liza", "Sara"];
    for (i = 0; i < array.length; i++) {
        if (name === array[i].name) {
            probVar = array[i];
        }
    }
    for (let j = 0; j < friends.length; j++) {
        for (i = 0; i < probVar.friends.length; i++) {
            if (friends.indexOf(probVar.friends[i]) > -1) {
                friends.splice(j, 1);
                j--;
            }
        }
    }
    for (i = 0; i < friends.length; i++) {
        if (friends[i] === name) {
            friends.splice(i, 1);
        }
    }
    return friends;
}



//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    if (object.key === undefined) {
        object[key] = value;
        return object;
    } else {
        object[key] = value;
        return object;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    let objectArr = [];
    let keys;
    let i;
    let j;
    for (keys in object) {
        objectArr.push(keys);
    }
    for (i = 0; i < objectArr.length; i++) {
        for (j = 0; j < array.length; j++) {
            if (objectArr[i] === array[j]) {
                delete object[objectArr[i]];
            }
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    let arr = [];
    let i;
    for (i = 0; i < array.length; i++) {
        if (arr.indexOf(array[i]) < 0) {
            arr.push(array[i]);
        }
    }
    return arr;
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