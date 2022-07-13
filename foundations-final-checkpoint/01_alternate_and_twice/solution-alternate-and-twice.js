/* eslint-disable no-unused-vars, no-prototype-builtins */

const alternate = (func) => {
  let counter = 0;
  return () => {
    if (counter % 2 === 0) {
      counter++;
      return func();
    } else {
      counter++;
    }
  };
};

const twice = (func) => {
  let counter = 0;
  return () => {
    if (counter < 2) {
      counter++;
      return func();
    } else {
      return 0;
    }
  };
};
