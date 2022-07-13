/* eslint-disable no-unused-vars, no-prototype-builtins */
//does not use Array.prototype.reduce or Array.prototype.reduceRight
const reduceRight = (arr, startValue, callback) => {
  let value = startValue;
  [...arr].reverse().forEach((elem) => {
    value = callback(value, elem);
  });
  return value;
};
