/* eslint-disable no-unused-vars */


//06-functions-and-closure/functions.js

function once(func) {
  let invoked = false;
  return (...args) => {
    if (invoked) return 'the function has already been called...';
    invoked = true;
    return func(...args);
  };

  // return function () {
  //   return func(...arguments);
  // };
  // WRONG VVV
  // return () => {
  //   return func(...arguments);
  // };
}

function randomlyCall(func) {
  return (...args) => {
    if (Math.random() < 0.5) return func(...args);
    return 'Try again!';
  };

  // return function () {
  //   return func(...arguments);
  // };
  // WRONG VVV
  // return () => {
  //   return func(...arguments);
  // };
}

function onlyWorkNTimes(func, n) {
  return (...args) => {
    n--;
    if (n >= 0) return func(...args);
  };

  // return function () {
  //   return func(...arguments);
  // };
  // WRONG VVV
  // return () => {
  //   return func(...arguments);
  // };
}

//07-functional-programming/00-recreate-array-methods/functional.js

function forEach(arr, func) {
  // arr.forEach(func);
  for (let i = 0; i < arr.length; i++) func(arr[i], i, arr);
}

// MAP
// 1. How many arguments? 1
// 2. Datatypes of arguments? function
// 3. Return value? array with same length as input array
// OF CALLBACK:
// 4. How many arguments? 0 to 3
// 5. Datatypes of arguments? (currentElement (any), index (number), reference to original array (array))
// 6. Return value? any (it will be used to replace the current element in the new returned array)

const doubler = (x) => x * 2;

function map(arr, func) {
  const out = [];
  arr.forEach((x, i) => out.push(func(x, i, arr)));
  return out;
}

// FILTER
// 1. How many arguments? 1
// 2. Datatypes of arguments? function
// 3. Return value? array with less than or equal to length as input array
// OF CALLBACK:
// 4. How many arguments? 0 to 3
// 5. Datatypes of arguments? (currentElement (any), index (number), reference to original array (array))
// 6. Return value? any truthy or falsey value (it will be used to decide whether or not to keep the current element in the output array)

function filter(arr, func) {
  const out = [];
  arr.forEach((x, i) => {
    if (func(x, i, arr)) out.push(x);
  });
  // arr.forEach((x, i) => (func(x, i, arr) ? out.push(x) : null));
  return out;
}

// REDUCE
// 1. How many arguments? 1-2 (2nd argument is technically optional, it will be set to the 1st element of the array if not provided)
// 2. Datatypes of arguments? (reducer (function), initial value of accumulator (any))
// 3. Return value? the final value of the accumulator (any), usually same datatype as 2nd argument
// OF CALLBACK:
// 4. How many arguments? 2-4
// 5. Datatypes of arguments?
//   - current accumulator (any, usually same datatype as your initialValue argument)
//   - currentValue (any, from the array)
//   - index of current element (number)
//   - ref to original array (array)
// 6. Return value? the next value of the accumulator (any), usually the same datatype as 2nd argument

const countWords = (baseValue, str) => baseValue + str.split(' ').length;

// function reduce(arr, initialValue = arr[0], reducer) {
//   let acc = initialValue;
//   arr.forEach((x, i) => (acc = reducer(acc, x, i, arr)));
//   return acc;
// }
function reduce(arr, acc = arr[0], reducer) {
  arr.forEach((x, i) => (acc = reducer(acc, x, i, arr)));
  return acc;
}

//07-functional-programming/01-use-array-methods/use-array-methods.js
/* eslint-disable no-unused-vars */ 
/* eslint-disable no-unused-vars */

// const keyifyArrayOfObjects = (keyToOrganizeBy, arr) =>
//   arr.reduce((obj, superheroObj) => {
//     obj[superheroObj[keyToOrganizeBy]] = superheroObj;
//     return obj;
//   }, {});

const keyifyArrayOfObjects = (keyToOrganizeBy, arr) =>
  arr.reduce(
    (obj, superheroObj) =>
      Object.assign(obj, {
        [superheroObj[keyToOrganizeBy]]: superheroObj,
      }),
    {}
  );

  //Object.assign()
//The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

