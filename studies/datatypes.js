/*
* DATATYPES:
*
* Datatypes are nothing more than all of the values we store/access/use
* throughout our javascript code.
*
* We can separate datatypes into two (2) catagories:
*
* O - Simple/Primative
* O - Complex
*
* Let's take a quick look at some examples of each of them!
*/

// Simple/Primative //

// Number //
var num = 1;

// String //
var string = 'This is a string!';

// Boolean //
var thisIsTrue = true;
var thisIsFalse = false;

// Why are they simple? //

// Atomic, immutable: they do not hold, collect or aggregate other values, //
// and operations on simple values return new simple values, they do not alter //
// the original value. //


// Copy by value - when assigning or passing, simple data-types are copied from //
// one variable to the next. //

// *!Now for the Complex!* //

// Complex //

// Object //
var obj = {};

// Array //
var arr = [];

// Function //
function thisIsAFunction() {};

// Why are they complex? //

// Complex values aggregate other values and therefore are of indefinite size. //

// Copy by reference - when assigning or passing, complex data-types are //
// passed by reference. //

var notANumber = 'NaN';
var nullEx = null;
var partyTime = undefined;
console.log(notANumber++);
console.log(partyTime); // logs undefined
console.log(nullEx);

// infinty and -infinity
console.log(Infinity          ); /* Infinity */  
console.log(Infinity + 1      ); /* Infinity */  
console.log(Math.pow(10, 1000)); /* Infinity */  
console.log(Math.log(0)       ); /* -Infinity */  
console.log(1 / Infinity      ); /* 0 */




