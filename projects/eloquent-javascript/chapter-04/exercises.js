////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, incDec) {
  let arr = [];
  let origStart = start;
  if (start === end) {
    return arr;
  }
  if (incDec != undefined) {
    if (start > 0 && end > 0 && incDec < 0) {
      return arr;
    }
    while (start != end) {
      incDec = Math.abs(incDec);
      if (start <= end) {
        start += incDec;
        arr.push(start);
      } else {
        start -= incDec;
        arr.push(start);
      }
    }
  }
  if (start <= end) {
    for (start; start != end; start++) {
      arr.push(start);
    }
  } else {
    for (start; start != end; start--) {
      arr.push(start);
    }
  }
  if (arr[arr.length - 1 ] != end) {
    arr.push(end);
  }
  if (arr[0] != origStart) {
    arr.unshift(origStart);
  }
  return arr;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(arr) {
  if (arr[0] === undefined) {
    return 0;
  }
  var i;
  var sum = arr[0];
  for (i = 1; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(arr) {
  var i;
  var newArr = [];
  for (i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let oldVar = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = oldVar;
  }
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(arr) {
  if (arr.length === 1) {
    return {value: arr[0], rest: null};
  } else {
    return {value: arr[0], rest: arrayToList(arr.slice(1))};
  }
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(value, list) {
  return {value, rest: list};
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, n) {
  if (!list) {
    return undefined;
  } else if (n == 0) {
    return list.value;
  } else {
    return nth(list.rest, n - 1);
  }
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(a, b) {
  if (a === b) {
    return true;
  } if (a == null || typeof a != "object" || b == null || typeof b != "object") {
    return false;
  }
  let keysA = Object.keys(a);
  let keysB = Object.keys(b);
  if (keysA.length != keysB.length) {
    return false;
  }
  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }
  return true;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
