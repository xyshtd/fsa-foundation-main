const useMapToUpperCase = str => {
  return str.split(' ').map(word => {
    return word.toUpperCase();
  });
};

// Shorthand One-Liner Arrow Function Syntax (this is the same solution as above but it is refactored):

// const useMapToUpperCase = str => str.split(' ').map(word => word.toUpperCase());

const useFilter = arr => {
  return arr.filter(word => {
    return word.includes('@');
  });
};

// Shorthand One-Liner Arrow Function Syntax (this is the same solution as above but it is refactored):

// const useFilter = arr => arr.filter(word => word.includes('@'));

const sumWithReduce = (arr, start = 0) => {
  return arr.reduce((accum, num) => {
    return accum + num;
  }, start);
};

// Shorthand One-Liner Arrow Function Syntax (this is the same solution as above but it is refactored):

// const sumWithReduce = (arr, start = 0) =>
//   arr.reduce((accum, num) => accum + num, start);



const filterEvensDoubleAndSum = arr => {
  return arr
    .filter(num => num % 2 === 0)
    .map(num => num * 2)
    .reduce((accum, num) => accum + num);
};

// Shorthand One-Liner Arrow Function Syntax (this is the same solution as above but it is refactored):

// const filterEvensDoubleAndSum = arr =>
//   arr
//     .filter(num => num % 2 === 0)
//     .map(num => num * 2)
//     .reduce((accum, num) => accum + num);