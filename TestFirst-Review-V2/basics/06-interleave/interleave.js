//Arrow functions don't have their own bindings to this, arguments or super, and should not be used as methods.
const interleave = function () {
  //const strs = Array.from(arguments)
  const strs = [...arguments];
  let longestStringLength = 0;

  for (let i = 0; i < strs.length; i++) {
    if (strs[i].length > longestStringLength) {
      longestStringLength = strs[i].length;
    }
  }
  let interleavedString = '';

  for (let i = 0; i < longestStringLength; i++) {
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i]) {
        interleavedString += strs[j][i];
      }
    }
  }

  return interleavedString;
};

//solution 2 rest parameters, .reduce .forEach
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
//function fName(a, b, ...theArgs) {}
/*
function sum(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
  console.log(sum(1, 2, 3)); -->6
*/
// ...strs = [str1, str2, str3]
/* 
const interleave = (...strs) => {
  const longestStringLength = strs.reduce((longest, currentStr) => {
    if (currentStr.length > longest) {
      return currentStr.length;
    } else {
      return longest;
    }
  }, 0);

  let interleavedString = '';

  for (let i = 0; i < longestStringLength; i++) {
    strs.forEach((currentStr) => {
      if (currentStr[i]) {
        interleavedString += currentStr[i];
      }
    });
  }

  return interleavedString;
}; 
*/
