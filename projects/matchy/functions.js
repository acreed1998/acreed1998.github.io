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
    var i;
    for (i = 0; i < animals.length; i++) {
        if (animals[i].name === name) {
            return animals[i];
        }
    }
    return null;
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace(animals, name, replacement) {
    var i;
    for (i = 0; i < animals.length; i++) {
        if (animals[i].name === name) {
            animals.splice(i, 1, replacement);
        }
    }
    return null;
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(animals, name) {
    var i;
    for (i = 0; i < animals.length; i++) {
        if (animals[i].name === name) {
            animals.splice(i, 1);
        }
    }
    return null;
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(animals, animal) {
    let i = 0;
    if (animal.name.length == 0 || animal.species.length == 0) {
        return "Try Again!";
    }
    for (i = 0; i < animals.length; i++) {
        if (animals[i].name === animal.name) {
            return "Same Name!";
        }
    }
    animals.push(animal);
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
