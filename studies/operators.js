// OPERATORS //

// Operatiors act on the data we have throughout our javascript. They can //
// assign data to variables, compare them, or include them in arithmetic //
// operations. //

// Operators are sorted into categories based upon what they do and the ammount //
// of operands-(the values that operators act on) they require. //

// Unary - 1 value //
// Binary - 2 //
// Ternary - 3 //

// COMPARISON OPERATORS //

// Comparison operators (as the name would imply) compare two values and return //
// either true or false. //

console.log(1 < 2);
console.log(5 > 3);
console.log(2 <= 2);
console.log(6 >= 5);

// STRICT COMPARISON //

// Strict comparison takes value and type of the variables into account when //
// comparing them. DON'T USE NON-STRICT COMPARISON UNLESS YOU ABSOLUTELY HAVE TO //
// (BASICALLY NEVER!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!) //

console.log(2 === 2);
console.log(2 === '2');
console.log(2 !== 2);
console.log(2 !== '2');

// LOGICAL OPERATORS //

// && (The AND Operator): Both conditions MUST be true //

console.log(2 < 3 && 1 > 0);

// || (The OR Operator): At least one of the conditions must be true //

console.log(1 == 1 || 2 == 3);

// ! (The BANG Operator): Flips the truthiness of the value //

console.log(!true);

// !! (The (ALMIGHTY) DOUBLE BANG Operator): Coerces a value to Boolean //
// If the value was falsey (0, null, undefined, etc.), it will be false. //
// Otherwise, you'll get true instead. //

console.log(!!1);

// ARITHMETIC OPERATORS //

console.log(1 + 1);
console.log(2 - 1);
console.log(2 * 3);
console.log(4 / 2);
console.log(4 % 2);

// UNARY OPERATORS //
//  This is a set of operators that only take one operand

let i = 0;
i++;
console.log(i);
console.log(--i);
console.log(!true);
console.log(i--);
++i;
console.log(i);

// TERNARY OPERATORS //
// Shorthand if/else statements.

i === 10 ? console.log(false) : console.log(true);
