/* eslint-disable no-unused-vars */
const accessor = (obj) => {
  return function (key, value) {
    if (value === undefined) {
      return obj[key];
    } else {
      obj[key] = value;
    }
  };
};
