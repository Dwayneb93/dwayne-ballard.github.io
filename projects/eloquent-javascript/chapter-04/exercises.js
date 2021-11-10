////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step) { 
  var rangeArr =[];
  // if the step value exists
  if (step === undefined) {
    if (start === end) {
      return [];
    }
    else if (start < end) {
      for (var i = start; i <= end; i++) {
        rangeArr.push(i);
      }
    } else {
      for (var i = start; i >= end; i--) {
        rangeArr.push(i);
      }
    }
  } else {
    if (step < 0 && start < end) {
      return [];
    }
    else if (start < end) {
      for (var i = start; i <= end; i += step) {
        rangeArr.push(i);
      }
    } else {
      for (var i = start; i >= end; i += step) { // since adding neg numbs works like this
        rangeArr.push(i);
      }
    }
  }
  return rangeArr;
}

// range(1, 10) => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// range(5, 2) => [5, 4, 3, 2];

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) { // [1, 2, 3] // NON-DESTRUCTIVELY => [3, 2, 1]
  var reversedArr = [];
  for (var i = array.length - 1; i >= 0; i--) {
    reversedArr.push(array[i]);
  }
  return reversedArr;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) { // [1, 2, 3] // DESTRUCTIVELY => [3, 2, 1]
  var reversedArr = [];

  for (var i = array.length - 1; i >= 0; i--) {
    reversedArr.push(array[i]);
  }

  for (var j = 0; j < array.length; j++) {
    array[j] = reversedArr[j];
  }
  return reversedArr;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) { // [1, 2, 3]

  var rest = null;

  // iterate through array in reverse
  for (var i = array.length - 1; i >= 0; i--) {
    // reassign the current value of rest to an object with a value qual to the current
    // item in the array and a rest key equal to the current value of rest
    rest = { value: array[i], rest }
  }
  return rest;
}

// rest = { value: 3, rest: null }
// rest = { value: 2, rest: { value: 3, rest: null } }
// rest = { value: 1, rest: { value: 2, rest: { value: 3, rest: null } }}


////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list, arr=[]) { // => [1, 2, 3]
  // base // list argument is referring to the same list as above with the rests and stuff
  if (list.rest === null) {
    arr.push(list.value);
    return arr;
  }
  // recursion
  arr.push(list.value); // [1. 2]
  return listToArray(list.rest, arr); // listToArray({value: 3, rest: null})
}

/*

[1]
[1, 2]
[1, 2, 3] => HIT BASE CASE AND RETURN

*/

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(val, obj) { 
  return {
    value: val,
    rest: obj
  } 
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, n) { // n = 0 // => 1
  if (n < 0) {
    return undefined;
  }
  // base
  if (n === 0) {
    return list.value;
  }
  // recursion
  return nth(list.rest, n - 1);
}
/*
var nthObj = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
}
*/

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(val1, val2) {
    // if either of the input values are null, return false
    if (val1 === null || val2 === null) {
      return false;
    }
    // if both values are not objects, compare them directly
    if (typeof val1 !== 'object' && typeof val2 !== 'oject') {
      return val1 === val2;
    }
  
    var keys1 = Object.keys(val1); // [array, of, keys]
    var keys2 = Object.keys(val2); // [array, of, keys]
  
    // determine if the keys arrays are the same length, if not, return false
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    // iterate through the keys arrays
    for (var i = 0; i < keys1.length; i++) {
      // does keys2 include the current key from keys1
      if (!keys2.includes(keys1[i]) || !deepEqual(val1[keys1[i]], val2[keys2[i]])) { // if this resolves to falsey, then..
        return false;
      }
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
