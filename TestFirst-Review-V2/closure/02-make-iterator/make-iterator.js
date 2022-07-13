/* eslint-disable no-unused-vars */
const makeIterator = (arr) => {
  let index = 0;
  return {
    getNext() {
      const value = arr[index++];
      const done = index > arr.length;
      return { value, done };
    },

    getIndex() {
      //return Math.min(index, array.length)
      return index;
    },
  };
};
