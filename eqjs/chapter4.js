// The Sum of a Range

function range(start, end, incDec) {
  var arr = [];
  if (incDec != undefined) {
    do {
      arr.push(start);
      start += incDec;
    } while (start != end); 
    arr.push(end);
    return arr;     
  }
  do {
    if (start <= end) {
      arr.push(start);
      start++;
    } else {
      arr.push(start);
      start--;
    }
  } while (start != end);
  arr.push(end);
  return arr;
}

function sum(arr) {
  var i;
  var sum = arr[0];
  for (i = 1; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Reversing a String

function reverseArray(arr) {
  var i;
  var newArr = [];
  for (i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}

function reverseArray(arr) {
  var i;
  var newArr = [];
  for (i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  arr = newArr;
  return arr;
}

// Lists

function arrayToLists(arr) {
    if (arr.length === 1) {
        return {value: arr[0], rest: null};
    }
    else {
        return {value: arr[0], rest: arrayToLists(arr.slice(1))};
    }
}

function listToArray(list) {
    if (list.rest === null) {
        return [list.value];
    }
    else {
        return [list.value].concat(listToArray(list.rest));
    }
}

// Deep Equal
