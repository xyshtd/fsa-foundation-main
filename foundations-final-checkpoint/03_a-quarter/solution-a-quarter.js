/* eslint-disable no-unused-vars, no-prototype-builtins */
const aQuarter = (func) => {
  let counter = 1;
  return function (...arg) {
    if (counter % 4 === 0) {
      counter++;
      return func(...arg);
    }
    counter++;
    return 'something went wrong :/';
  };
};

/*
accepts a function argument and returns a new function
the function returned returns the string "something went wrong :/" the first 3 times it is called, on the 4th call it runs and returns the value of the function passed to aQuarter
it repeats the behavior of returning "something went wrong :/" 3 times in a row, then it runs the function passed to aQuarter and returns the value
EXTRA-CREDIT: the function returned from aQuarter can pass multiple arguments to the function it invokes (the function passed to aQuarter)

*/
