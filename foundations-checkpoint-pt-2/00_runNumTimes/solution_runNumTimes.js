/* eslint-disable no-unused-vars */
//Refactored solution
const runNumTimes = (func, num) => {
  for (let i = 0; i < num; i++) {
    func();
  }
};

/* const runNumTimes = (func, num) => {
  let counter = 0;
  while (counter < num) {
    func();
    counter++;
  }
}; */
