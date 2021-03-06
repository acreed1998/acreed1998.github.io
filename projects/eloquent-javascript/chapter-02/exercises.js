
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) {
  var i;
  var numberThing = '#';
  for (i = 0; i < num; i++) {
    console.log("#" + numberThing.repeat(i));
  }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  var i;
  for (i = 1; i < 16; i++) {
      if (i % 3 == 0 && i % 5 == 0) {
          console.log("fizzbuzz");
      } else if (i % 5 == 0) {
          console.log("buzz");
      } else if (i % 3 == 0) {
          console.log("fizz");
      } else {
          console.log(i);
      }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(num) {
  var arr = [];
  var rowArr = [];
  var numThing = "#";
  var space = " ";
  var firstRowItem = " ";
  var i;
  var j;
  for (i = 0; i < num; i++) {
    arr = [];
    arr[0] = firstRowItem;
    for (j = 0; j < num - 1; j++) {
      if (arr[arr.length - 1] === "#") {
        arr.push(space);
      } else if (arr[arr.length - 1] === " ") {
        arr.push(numThing);
      }
    }
    arr = arr.join("");
    rowArr.push(arr);
    if (firstRowItem === "#") {
      firstRowItem = " ";
    } else {
      firstRowItem = "#";
    }
  }
  rowArr = rowArr.join("\n");
  rowArr += "\n";
  console.log(rowArr);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
