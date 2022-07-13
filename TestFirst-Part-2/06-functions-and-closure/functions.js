/* eslint-disable no-unused-vars */

function concatString() {
  return Array.from(arguments).join('');
}
// solution 2 if not use Array.from
/* function concatString() {
  let result = '';
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
} */

/*The arguments object
arguments is an Array-like object accessible inside functions that contains the values of the arguments passed to that function.

For example, if a function is passed 3 arguments, you can access them as follows:

arguments[0] // first argument
arguments[1] // second argument
arguments[2] // third argument
Copy to Clipboard
Each argument can also be set or reassigned:

arguments[1] = 'new value';
//convert to Array
var args = Array.prototype.slice.call(arguments);
or
let args = Array.from(arguments);
or
let args = [...arguments]
*/

function yourFunctionRunner() {
  let result = '';
  for (let i = 0; i < arguments.length; i++) {
    //call each function()
    result += arguments[i]();
  }
  return result;
}

const makeAdder = (numOneToRemember) => {
  return function aFunc(numTwo) {
    return numOneToRemember + numTwo;
  };
};

const once = (funcOne) => {
  let counter = 0;
  return function funcTwo() {
    if (counter === 0) {
      counter++;
      return funcOne();
    }
    return 'the function has already been called...';
  };
};
//solution 2
/*
const once = (func) => {
  let notCalled = true;
  return () => {
    if (notCalled) {
      notCalled = false;
      return func();
    }
    return 'the function has already been called...'
  }
}
*/
const createObjectWithClosures = () => {
  let total = 0;
  return {
    oneIncrementer: () => (total += 1),
    tensIncrementer: () => (total += 10),
    getValue: () => total,
    setValue: (num) => (total = num),
  };
};
/* solution with function keyword
const createObjectWithClosures = function () {
    let total = 0;
    return {
      oneIncrementer: function () {
        total += 1;
      },
      tensIncrementer: function () {
        total += 10;
      },
      getValue: function () {
        return total;
      },
      setValue: function (val) {
        total = val;
      },
    };
  };
 */

const dontSpillTheBeans = (secret) => {
  return {
    getSecret: function () {
      return secret;
    },
    setSecret: function (newSecret) {
      secret = newSecret;
    },
  };
};
