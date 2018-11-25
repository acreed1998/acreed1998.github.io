// FUNCTIONS //

// A type of data encapsulating reusable code // 

// Functions allow us to store a block of code and execute that block //
// whenever and however many times we want! // 

// Functions can be considered to be logic data //
// Think of them like cooking recipies that are followed to the letter. //

// The two phases to using functions: First we must declare a variable a function.
// Next we can execute/call/run a function by calling it with its name and () //

// Functions can take things called parameters inside the () when they are declared //
// These are variables that exist within the scope of the function and may or may //
// not be used in the function itself when it is called //

// When calling the function, we can give the parameters of the function values //
// called arguments. They basically tell a function to go through the code stored //
// within as if the parameters have the values of the arguments passed to them //

// We use parameters to specify the amount of inputs a fuction can/is supposed to take //
// for some functions if we dont fill in all parameters with a value, it will //
// still run and produce some kind of result; but for others, you may get an // 
// error. //

// To specify what output we want a function to produce, we use return. Return //
// is like console.log for functions. It will spit out the value or operation given //
// to it as the end result of the function. Once return is used, the function stops //
// running. //



// Declare named functions like this: //
// function [nameOfFuntion](parameter, parameter, parameter, ...) {} //
var a = 5;

function getItDone(a, b) {
    return a + b;
}
getItDone(7,9); // returns 16

// We can assign functions to variables

let i = function(a, b) {
    return a - b;
};

i(10,3); // returns 7

console.log(a); // We get global a and not function a because function a //
// is locked to the function's scope //

// functions can access and change global items though //
var atg = 5;
function increm(variable) {
    variable = variable + 2;
    atg = variable;
    return atg;
}

console.log(increm(atg)); // runs the function and changes the global atg to 7
