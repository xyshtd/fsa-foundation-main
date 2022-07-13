/* eslint-disable no-unused-vars */
//this, func.call
function callAll(obj, funcArr) {
  return funcArr.map((func) => func.call(obj));
}
