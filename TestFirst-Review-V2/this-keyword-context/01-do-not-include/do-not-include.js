/* eslint-disable no-unused-vars, no-extend-native */
//.filter
Array.prototype.doNotInclude = function (arr) {
  if (!Array.isArray(arr)) arr = [arr];
  return this.filter((element, index) => {
    if (!arr.includes(index)) return element;
  });
};
