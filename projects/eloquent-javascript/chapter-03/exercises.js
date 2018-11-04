////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(num1, num2) {
  if (num1 < num2) {
    return num1;
  } else  if (num2 < num1) {
    return num2;
  } else {
    return 0;
  }
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(num) {
  var i;
  if (num < 0) {
    return false;
  }
  for (i = num; i > -1; i -= 2) {
    if (i == 0) {
      return true;
    } else if (i == 1) {
      return false;
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChar(theString, theSearch) {
  var i;
  var count = 0;
  for (i = 0; i < theString.length; i++) {
    if (theString[i] === theSearch) {
      count++;
    }
  }
  return count;
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs(theString) {
  var i;
  var count = 0;
  for (i = 0; i < theString.length; i++) {
    if (theString[i] === 'B') {
      count++;
    }
  }
  return count;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};