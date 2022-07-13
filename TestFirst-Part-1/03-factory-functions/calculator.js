/* eslint-disable no-unused-vars */
function createCalculator(num) {
  return {
    total: 0,
    add(num) {
      this.total += num;
    },
    subtract(num) {
      this.total -= num;
    },
    value() {
      return this.total;
    },
    clear() {
      this.total = 0;
    },
  };
}

function addSquareMethod(arrOfCalcs) {
  return arrOfCalcs.map(function (arrElement) {
    arrElement.square = function () {
      return this.total * this.total;
    };
    return arrElement;
  });
}

const customPrototype = {
  total: -10,
  add(num) {
    this.total += num;
  },
  subtract(num) {
    this.total -= num;
  },
  value() {
    return this.total;
  },
  clear() {
    this.total = -10;
  },
};

const createHumanCalculator = (num) => {
  const instance = Object.create(customPrototype);
  return instance;
};

/* addSquareMethod ArrowFunction
const addSquareMethod = arr => {
  return arr.map(val => {
    val.square = function () {
      return this.total * this.total;
    };
    return val;
  });
};
*/

//Array.prototype.map()
//.map() Create a new Array vs.forEach() Mutate Existing Array
//https://codeburst.io/javascript-map-vs-foreach-f38111822c0f
//The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
/*
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

*/
