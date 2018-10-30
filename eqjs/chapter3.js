// Minimum

function min(num1, num2) {
  if (num1 < num2) {
    return num1;
  } else {
    return num2;
  }
}

// Jacked Up Recursion 

function isEven(num) {
  var i;
  for (i = num; i > -1; i -= 2) {
    if (i == 0) {
      return true;
    } else if (i == 1) {
      return false;
    }
  }
}

// Bean Counting

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
