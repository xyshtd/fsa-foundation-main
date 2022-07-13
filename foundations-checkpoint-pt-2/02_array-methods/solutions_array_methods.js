/* eslint-disable no-unused-vars */

//useMapToUpperCase
const useMapToUpperCase = (str) => {
  return str.split(' ').map((element) => element.toUpperCase());
};
// Shorthand One-Liner Arrow Function Syntax
// const useMapToUpperCase = str => str.split(' ').map(word => word.toUpperCase());

/* wrong solution (not using .map)
const useMapToUpperCase = (str) => {
  return str.toUpperCase().split(' ');
};
*/

//useFilter
const useFilter = (arr) => {
  return arr.filter((element) => element.includes('@'));
};
//// const useFilter = arr => arr.filter(word => word.includes('@'));

//sumWithReduce
const sumWithReduce = (arr, startValue = 0) => {
  return startValue + arr.reduce((prev, current) => prev + current);
};
//// const sumWithReduce = (arr, start = 0) => arr.reduce((accum, num) => accum + num, start);

//filterEvensDoubleAndSum
//.filter .map .reduce
const filterEvensDoubleAndSum = (arr) => {
  return arr
    .filter((element) => element % 2 === 0)
    .map((element) => element * 2)
    .reduce((prev, current) => prev + current);
};
// arrow function syntax
// const filterEvensDoubleAndSum = arr =>
//   arr
//     .filter(num => num % 2 === 0)
//     .map(num => num * 2)
//     .reduce((accum, num) => accum + num);
