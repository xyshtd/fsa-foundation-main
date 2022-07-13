/* eslint-disable no-unused-vars */
//Refactored Solution
const reject = (array, fn) => array.filter((val) => !fn(val));

/* const reject = (arr, func) => {
  const rejected = [];
  for (let i = 0; i < arr.length; i++) {
    if (!func(arr[i])) {
      rejected.push(arr[i]);
    }
  }
  return rejected;
};
 */
