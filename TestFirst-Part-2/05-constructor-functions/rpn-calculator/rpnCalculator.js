/* eslint-disable no-unused-vars, no-throw-literal*/
//e.g. 2 3+ 4 -
//numArr = [2,3]
//num1 = 3;
//num2 = 2;
//numArr = []
//.plus(3,2)
//.value = 5
//numArr = [5,4]
//num1 = 4;
//num2 = 5;
//numArr = []
//.minus(4,5)
//.value = 1
//numArr = [1,...]

//constructor function
function RPNCalculator() {
  this.numArr = [];
}
//attach prototype methods one by one
RPNCalculator.prototype.push = function (num) {
  this.numArr.push(num);
};

RPNCalculator.prototype.popNumsPushValue = function (calcMethod) {
  if (this.numArr.length < 2) {
    throw 'rpnCalculatorInstance is empty';
  } else {
    const num1 = this.numArr.pop();
    const num2 = this.numArr.pop();
    this.push(calcMethod(num1, num2));
  }
};

RPNCalculator.prototype.plus = function () {
  this.popNumsPushValue((Arr0, Arr1) => Arr1 + Arr0);
};

RPNCalculator.prototype.minus = function () {
  this.popNumsPushValue((Arr0, Arr1) => Arr1 - Arr0);
};

RPNCalculator.prototype.times = function () {
  this.popNumsPushValue((Arr0, Arr1) => Arr1 * Arr0);
};

RPNCalculator.prototype.divide = function () {
  this.popNumsPushValue((Arr0, Arr1) => Arr1 / Arr0);
};

RPNCalculator.prototype.value = function () {
  return this.numArr[this.numArr.length - 1];
};

const rpnCalculatorInstance = new RPNCalculator();

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
//The throw statement throws a user-defined exception. Execution of the current function will stop (the statements after throw won't be executed), and control will be passed to the first catch block in the call stack. If no catch block exists among caller functions, the program will terminate.
//https://scriptasylum.com/tutorials/infix_postfix/algorithms/postfix-evaluation/
//http://en.wikipedia.org/wiki/Reverse_Polish_notation
