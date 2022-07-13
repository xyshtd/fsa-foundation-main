/* eslint-disable no-unused-vars */
//Refactored Solution
const thrice = (func) => {
  let counter = 0;
  return () => {
    if (counter < 3) {
      counter++;
      return func();
    }
  };
};

//closure
/* function thrice(func) {
  let count = 0;
  return function () {
    if (count < 3) {
      count++;
      return func();
    }
    //return undefined (default; can omit)
    return;
  };
} */

/*const helloWorld = thrice(function() {
  return 'Hello World';
});
helloWorld ---> thrice(func)
func() ---> return 'Hello World'

1stcall = helloWorld()
count = 0
anonymous function = func()
1stcall = 'Hello World'

2nd..
3rd..
4thcall = helloWorld()
count = 3
anonymous function = undefined
4thcall = undefined;
*/
