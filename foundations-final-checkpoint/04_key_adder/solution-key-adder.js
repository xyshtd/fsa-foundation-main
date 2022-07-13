/* eslint-disable no-unused-vars, no-prototype-builtins */

//refactored solution
function keyAdder() {
  return Object.values(this)
    .filter((value) => typeof value === 'number')
    .reduce((accum, value) => accum + value, 0);
}

//solution 2
/* function keyAdder() {
  return Object.entries(this)
    .filter((keyValue) => typeof keyValue[1] === 'number')
    .reduce((accum, keyValue) => accum + keyValue[1], 0);
} */

//solution 1 using for in loop
/* function keyAdder() {
  let sum = 0;
  for (let key in this) {
    let value = this[key];
    if (this.hasOwnProperty(key) && typeof value === 'number') {
      sum += value;
    }
  }
  return sum;
}
 */
