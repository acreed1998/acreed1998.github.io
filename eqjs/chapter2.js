// Exercise: Looping a Triangle

var i;
var numberThing = '#';
for (i = 0; i < 7; i++) {
  console.log("#" + numberThing.repeat(i));
}

// Exercise: Fizz Buzz

var i;
for (i = 1; i < 101; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
}

// Exercise: Chessboard

var i;
var j;
var numberThing = ' #';
var thingNumber = '# ';
for (i = 0; i <= 7; i++) {
  for (j = 0; i < 4; i++) {
    if (i % 2 == 0) {
      console.log(numberThing.repeat(4));
    } else {
      console.log(thingNumber.repeat(4));
    }
  }
}
