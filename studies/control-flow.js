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

let exNum = 0;

// If/ElseIf/Else Example
if (exNum > 0) {
  console.log('good');
} else if (exNum < 0) {
  console.log('bad');
} else {
  console.log('neither');
}


