// String //

// Character or textual data //

// Strings are character data, we MUST enclose Strings in single or double quotes //
var string0 = "Like this";
var string1 = 'Or this';

// Why are strings called strings? Like Mardi Gras beads are a string of //
// (cheap) pearls, strings are a string of characters, or an Array of characters. //

// Strings can be treated like an Array of characters.  We can access the //
// individual characters of strings using what’s called, Array-syntax, or //
// bracket notation. //

console.log(string0[0]); // Prints 'L' to the console.

// Can change case
var string2 = "Hmmmmm";
console.log(string2.toUpperCase()); //HMMMMM
console.log(string2.toLowerCase()); //hmmmmm

// Can change string to an array

console.log(string2.split("")); //['h', 'm', 'm', 'm', 'm']

// Can fuse strings (cocatenate)

console.log(string0 + " " + string1); // "Like this Or this"
