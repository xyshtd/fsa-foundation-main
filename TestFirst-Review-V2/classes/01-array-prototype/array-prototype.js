/* eslint-disable no-unused-vars */
//.forEach() this
Array.prototype.maap = function (func) {
  const arr = [];
  this.forEach((element) => arr.push(func(element)));

  return arr;
};

Array.prototype.fiilter = function (func) {
  const arr = [];
  this.forEach((element) => {
    if (func(element)) arr.push(element);
  });

  return arr;
};

Array.prototype.reeduce = function (func, accum) {
  this.forEach((element) => (accum = func(accum, element)));

  return accum;
};
