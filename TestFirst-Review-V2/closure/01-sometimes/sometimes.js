/* eslint-disable no-unused-vars */
const sometimes = (func) => {
  let counter = 1;
  return function () {
    if (counter <= 3 || counter % 2 === 1) {
      counter++;
      return func(...arguments);
    } else {
      counter++;
      return 'I do not know!';
    }
  };
};

//solution 2
/* 
const sometimes = (fn) => {
  let i = 0;
  return function () {
    if (++i >= 4 && i % 2 === 0) {
      return 'I do not know!';
    }
    return fn.apply(null, arguments);
  };
};
 */
