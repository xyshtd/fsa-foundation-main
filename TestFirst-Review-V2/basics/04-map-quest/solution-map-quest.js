/* eslint-disable no-unused-vars */
const mapQuest = (arr) => {
  let opposite = {
    N: 'S',
    E: 'W',
    S: 'N',
    W: 'E',
  };
  return arr.reduce((accum, current) => {
    if (accum[accum.length - 1] === opposite[current]) {
      accum.pop();
    } else {
      accum.push(current);
    }
    return accum;
  }, []);
};
