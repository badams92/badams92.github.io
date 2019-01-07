////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step = 1) {
  let result = [];
  if (start !== end) {
    // step has to be positive or else it would decrement and never end
    if (end > start && step > 0) {
      for (let i = start; i < end + 1; i += step) {
        result.push(i);
      }
    // step has to be negative for the same reason
    } else if (start > end && step < 0) {
      for (let i = start; i > end - 1; i += step) {
        result.push(i);
      }
    }
  }
  return result;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(arr) {
  let result = [];
  for (let i = arr.length - 1; i > -1; i--) {
    result.push(arr[i]);
  }
  return result;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(arr) {
  for (let i = 0; i < Math.floor(arr.length/2); i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = temp;
  }
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(arr) {
  let list = {};
  // base case with an array of length 1
  if (arr.length === 1) {
    list.value = arr[0];
    list.rest = null;
  // recursive case for arrays of length > 1
  } else if (arr.length > 1) {
    list.value = arr[0];
    // recursively call arrayToList() with the rest of the array
    list.rest = arrayToList(arr.slice(1));
  }
  return list;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
  let arr = [];
  let current = list;
  while (current.rest !== null) {
    arr.push(current.value);
    current = current.rest;
  }
  arr.push(current.value);
  return arr;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(value, list) {
  return {value: value, rest: list};
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, index) {
  if (index > -1) {
    let current = list;
    for (let i = 0; i < index; i++) {
      if (current.rest === null) {
        return undefined;
      }
      current = current.rest;
    }
    return current.value;
  }
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(object1, object2) {
  // if they're equal, return true
  if (object1 === object2) {
    return true;
  } 
  // if the objects are objects and not null, proceed
  else if ((typeof object1 == "object" && object1 != null) && (typeof object2 == "object"  && object2 != null)) {
    // if their array of keys is not the same length, return false
    if (Object.keys(object1).length != Object.keys(object2).length) {
      return false;
    }
    // iterate through each key in one object
    for (let key in object1) {
      // if the other object does not have the same key as a property, return false
      if (!object2.hasOwnProperty(key)) {
        return false;
      }
      // recursively check properties for which they have same key names
      // if they are not the same, return false
      if (!deepEqual(object1[key], object2[key])) {
        return false;
      }
    }
    // if it passes through all other return false statements, it must return true
    return true;
  // if they're not equal, and not non-null objects, must be false
  } else {
    return false;
  }
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
