/* eslint-disable no-unused-vars */
const rotater = (str) => {
  let flip = false;
  let result;

  return function (number) {
    if (number === str.length) flip = !flip;

    if (!flip) result = str.slice(number) + str.slice(0, number);
    else if (flip) result = str.slice(-number) + str.slice(0, -number);

    return result;
  };
};

// flip = false -> abcd (1)bcda (2)cdab (3)dabc (4) abcd
// flip = true  -> abcd (1)dabc (2)cdab (3)bcda (4) abcd
