/* eslint-disable no-unused-vars */
//str.split; array. filter, every,some,includes
//forEach
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
const forEach = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
};

//map
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
const doubler = (num) => num * 2;

const map = (array, callback) => {
  let returnedArray = [];
  for (let i = 0; i < array.length; i++) {
    returnedArray.push(callback(array[i]));
  }
  return returnedArray;
};

//filter
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

const filter = (array, callback) => {
  let returnedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      returnedArray.push(array[i]);
    }
  }
  return returnedArray;
};

//includes
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

const includes = (collection, searchElement) => {
  for (let key in collection) {
    if (collection.hasOwnProperty(key)) {
      if (collection[key] === searchElement) {
        return true;
      }
    }
  }
  return false;
};

//countWords - split(separator);
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

const countWords = (startValue, string) => {
  return startValue + string.split(' ').length;
};

//reduce
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

const reduce = (array, startValue, callback) => {
  let value = startValue;
  array.forEach((elem) => {
    value = callback(value, elem);
  });
  return value;
};

//sum
const sum = (array) => {
  //return array.reduce((prev, current) => prev + current);
  const add = (prev, current) => prev + current;
  return reduce(array, 0, add);
};

//every
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every

const every = (array, checkerFunc) => {
  const testEvery = (prev, current) => {
    return prev && checkerFunc(current);
  };
  return reduce(array, true, testEvery);
};

//some
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some

const some = (array, checkerFunc) => {
  const testEvery = (prev, current) => {
    return prev || checkerFunc(current);
  };
  return reduce(array, false, testEvery);
};
