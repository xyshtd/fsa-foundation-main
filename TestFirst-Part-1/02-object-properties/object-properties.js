/* eslint-disable no-unused-vars */
const setPropsOnObj = (obj) => {
  obj.x = 7;
  obj['y'] = 8;
  obj['onePlus'] = (num) => num + 1;
};
//num ++    complete operation first, then num+1
//++ num    num+1 first, then complete operation

const setPropsOnArr = (arr) => {
  arr['hello'] = () => 'Hello!';
  arr['full'] = 'stack';
  arr[0] = 5;
  arr['twoTimes'] = (num) => num * 2;
};

const setPropsOnFunc = (func) => {
  func.year = '20??';
  func.divideByTwo = (num) => num / 2;
};

const shallowCopy = (arg1, arg2) => {
  if (Array.isArray(arg1) && Array.isArray(arg2)) return [...arg1, ...arg2];
  else return { ...arg1, ...arg2 };
};

/* 
const shallowCopy = (arg1, arg2) => {
  if (Array.isArray(arg1) && Array.isArray(arg2)) {
    let mergedArray = arg1.concat(arg2);
    return mergedArray;
  } else {
    let mergedObj = {};
    Object.assign(mergedObj, arg1, arg2);
    return mergedObj
  }
};
 */
