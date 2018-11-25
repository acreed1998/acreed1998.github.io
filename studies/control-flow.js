// CONTROL FLOW //

// JavaScript supports a compact set of statements, specifically control flow //
// statements, that you can use to incorporate a great deal of interactivity //
// in your application. //

// The semicolon (;) character is used to separate statements in JavaScript code. //

// BLOCK STATEMENTS //

// The most basic statement is a block statement that is used to group statements. //
// The block is delimited by a pair of curly brackets: //

// Block statements are commonly used with control flow statements //
// (e.g. if, for, while, switch). //

let x = 10;
while (x > 0) {
  x--;
}

if (x === 0) {
  console.log('BOTH STATEMENTS WORKED');
}

for (let i = 10; i > x; i--) {
  console.log('The For Loop is Running');
}


// Switch Statement //
// Convienient When:
// 1. You are comparing multiple possible conditions of an expression and the 
// 1. expression itself is non-trivial. //
// 2. You have multiple values that may require the same code. //
// 3. You have some values that will require essentially all of another value's //
// 3. execution, plus only a few statements. //

let z = 5;
switch (z) {
  case 1:
    console.log('No');
    break;
  case 2:
    console.log('No2');
    break;
  case 3:
    console.log('No3');
    break;
  case 4:
    console.log('No4');
    break;
  default:
    console.log("You'll get to 5 eventually");
    break;
};



let exNum = 0;

// If/ElseIf/Else Example
if (exNum > 0) {
  console.log('good');
} else if (exNum < 0) {
  console.log('bad');
} else {
  console.log('neither');
}

