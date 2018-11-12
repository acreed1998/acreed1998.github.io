// FUNCTIONS //

// A type of data encapsulating reusable code // 

// Functions allow us to store a block of code and execute that block //
// whenever and however many times we want! // 

// Functions can be considered to be logic data //
// Think of them like cooking recipies that are followed to the letter. //

// The two phases to using functions: First we must declare a variable a function.
// Next we can execute a function by calling it

function getItDone(a, b) {
    return a + b;
}
getItDone(7,9); // returns 16

// We can assign functions to variables

let i = function(a, b) {
    return a - b;
};

i(10,3); // returns 7


