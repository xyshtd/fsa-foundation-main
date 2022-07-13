/* eslint-disable no-unused-vars */
//Solution 1: for loop
const repeat = (str, num) => {
  let result = '';
  for (let i = 0; i < num; i++) {
    result += str;
  }
  return result;
};

// Solution 2 recursion
/*
const repeat = (str, num) => {
  if (num === 0) return '';
  let result = str + repeat(str, num - 1);
  return result;
};
*/

//Solution 3(not allowed)
//String.prototype.repeat()
/*
const repeat = (str, num) => {
  return (str = str.repeat(num));
};
*/

//The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat

//Solution 1: for loop
const sum = (arr) => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
};

//Solution 2: forEach
/*
const sum = (arr) => {
  let result = 0;
  arr.forEach((element) => {
    result += element;
  });
  return result;
};
*/

//Solution 3: Array.prototype.reduce()
//reduce((previousValue, currentValue, currentIndex, array) => { }, initialValue)
/* const sum = (arr) => {
  const total = arr.reduce((a, b) => {
    return a + b;
  }, 0);
  return total;
}; */

//The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value. Perhaps the easiest-to-understand case for reduce() is to return the sum of all the elements in an array

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

//https://www.w3docs.com/snippets/javascript/how-to-find-the-sum-of-an-array-of-numbers.html

const join = (anArr, delimiter) => {
  let returnedStr = '';
  for (let i = 0; i < anArr.length; i++) {
    let element = anArr[i];
    returnedStr += element;
    if (delimiter && i < anArr.length - 1) {
      returnedStr += delimiter;
    }
  }

  return returnedStr;
};

//solution 2 forEach
/*
const join = (anArr, delimiter = '') => {
  let returnedStr = '';
  anArr.forEach((element) => (returnedStr = returnedStr + element + delimiter));
  if (delimiter) return returnedStr.slice(0, -1);
  else if (!delimiter) return returnedStr;
};
*/

//solution 3 not allowed
//Array.prototype.join()
/*
const join = (anArr, delimiter ='') => anArr.join(delimiter);
 */

//The newline character is \n in JavaScript and many other languages. Add \n character whenever you require a line break to add a new line to a string.

const gridGenerator = (size) => {
  let board = '';
  // i = lines = row 1, row 2, row 3...
  // j = characters = content in each row
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if ((i + j) % 2 === 0) {
        board += '#';
      } else if ((i + j) % 2 === 1) {
        board += ' ';
      }
    }
    board += '\n';
  }
  return board;
};

//calls Object.prototype.hasOwnProperty and does not use Object.keys
//Solution: push -> array, join -> string

const paramify = (obj) => {
  let arr = [];
  for (let key in obj) {
    //https://eslint.org/docs/rules/no-prototype-builtins
    //if (Object.hasOwnProperty.call(obj, key)) {
    if (obj.hasOwnProperty(key)) {
      arr.push(`${key}=${obj[key]}`);
    }
  }
  // or return join(arr.sort(), '&');
  return arr.sort().join('&');
};

/* partial solution if doesn't need sort 
const paramify = (obj) => {
  let str = '';
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      str += `${key}=${obj[key]}&`;
    }
  }
  return str.slice(0, -1);
}; */

//calls Object.keys and does not use Object.prototype.hasOwnProperty
//solution 1 Array.prototype.map()
// Method Chaining: Break Method Chains into lines, so it's easy to read. (the white spaces will be ignored by JS)
const paramifyObjectKeys = (obj) => {
  return Object.keys(obj)
    .map((key) => {
      return `${key}=${obj[key]}`;
    })
    .sort()
    .join('&');
};

//solution 2 for loop
/* const paramifyObjectKeys = (obj) => {
  let arr = [];
  let keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    let value = obj[key];
    arr.push(`${key}=${value}`);
  }
  return arr.sort().join('&');
}; */

//solution 1: move the large one to the end; the next round, do not compare the last two numbers
const sort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      //Compare the adjacent positions
      if (arr[j] > arr[j + 1]) {
        //Swap the numbers
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

// for example [6,10,3,9,1] length = 5
//i=0, j=0    6,10,3,9,1
//i=0, j=1    6,3,10,9,1
//i=0, j=2    6,3,9,10,1
//i=0, j=3    3,6,9,1,10

//i=1, j=0    3,6,9,1,10
//i=1, j=1    3,6,9,1,10
//i=1, j=2    3,6,1,9,10

//i=2,j=0     3,6,1,9,10
//i=2,j=1     3,1,6,9,10

//i=3,j=0     1,3,6,9,10

//Solution 2: move the smaller number to the front
/*
const sort = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = arr.length - i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }
  return arr;
};
// for example [8,6,4,9,1] length = 5
//i=4, j=1    6,8,4,9,1

//i=3, j=2    6,4,8,9,1
//i=3, j=1    4,6,8,9,1

//i=2, j=3    4,6,8,9,1
//i=2, j=2    4,6,8,9,1
//i=2, j=1    4,6,8,9,1

//i=1, j=4    4,6,8,1,9
//i=1, j=3    4,6,1,8,9
//i=1, j=2    4,1,6,8,9
//i=1, j=1    1,4,6,8,9
*/

//https://www.geeksforgeeks.org/bubble-sort/

// Solution 3: using a single loop but 83 doesn't like it :(
/*
function sort(arr) {
  for (let j = 0; j < arr.length - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
      // updating the value of j = -1, so after getting updated for j++, in the loop it becomes 0 and the loop begins from the start.
      j = -1;
    }
  }

  return arr;
}

*/
//https://www.geeksforgeeks.org/how-to-sort-an-array-in-a-single-loop/

/* Solution 4 (not allowed)
//Array.prototype.sort()

const sort = (arr) => {
  if (typeof arr[0] === 'number') return arr.sort((a, b) => a - b);
  else if (typeof arr[0] === 'string')
    // or return arr.sort((a,b) => a.localeCompare(b))
    return arr.sort();
};

*/
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
//https://www.w3docs.com/snippets/javascript/how-to-sort-array-alphabetically-in-javascript.html

// Solution 5
// Compare first number to all other numbers, find the smallest that goes first in array
// go through array again, find next smallest...
/*
const sort = (arr) => {
  let sortedArr = [];
  for (let i = 0; i < arr.length; i++) {
    let lowest = arr[i];
    let foundIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < lowest) {
        lowest = arr[j];
        foundIndex = j;
      }
    }
    sortedArr.push(lowest);
    arr.splice(foundIndex, 1);
    i = -1;
  }
  return sortedArr;
};
 */
