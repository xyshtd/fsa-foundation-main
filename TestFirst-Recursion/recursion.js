// All of the recursive functions are pre-defined for you. Keep in mind, you need to determine
// their arguments! Keep in mind, there are a few test specs that require functions that are not solved
// recursively (you need to define those functions on your own).

/* eslint-disable no-unused-vars */

function factorialIterative(num) {
    let result=1;
    if (num === 0) return 1
    while(num>0){
        result*=num;
        num--;
    }
    return result;
}

function factorial(num) {
    if (num === 0) return 1
    return num*factorial(num-1)
   
}

function sumTheDigits(arr) {
    if (!arr.length) return 0;
    return arr[0]+sumTheDigits(arr.slice(1))
    
}

function countTheVowels(str) {
    debugger;
    if (str === '') return 0;
    let vowels =['a','e','i','o','u'];
    let isVowel = 0;
    if (vowels.includes(str[0])){
        isVowel = 1;
    }
    return isVowel+countTheVowels(str.slice(1))
}

function recSmallestInt(arr) {
    
    if (arr.length === 1) return arr[0]
    let smallest = recSmallestInt(arr.slice(1))
    if (smallest > arr[0]) smallest = arr[0]
    return smallest;
}

function fib(idx) {
    if (idx === 0 || idx ===1) return 1;
    // if idx = 2 fib(0)+fib(1)
    // if idx = 3 fib(1)+fib(2)
    return fib(idx-2)+fib(idx-1)
}
// === typeof
const type = val => {
    return Object.prototype.toString.call(val).slice(8, -1);
  };

function stringify(input) {
    if (type(input) === 'String') return `"${input}"`
    if (type(input) === 'Array') {
        let result = input.map(elem =>stringify(elem))
        return `[${result.join(',')}]`
    } 
    if (type(input) === 'Object') {
        let result = [];
        Object.keys(input).forEach(key => {
          let val = stringify(input[key]);
          result.push(`"${key}":${val}`);
        });
        return `{${result.join(',')}}`;
      }

    return input+""
}

function search(func) {
    let bool = false;
    this.forEach((val) => {
      if (func(val)) {
        bool = true;
      } else if (Array.isArray(val) && !bool) {
        bool = search.call(val, func);
      }
    });
    return bool;
  }

  function recursiveMap(arr, cb) {
    if (arr.length === 0) return [];
  
  
    if (Array.isArray(arr[0])) {
      return recursiveMap(arr[0], cb).concat(recursiveMap(arr.slice(1), cb));
    }
  
    let value = cb(arr[0]);
  
    return [value].concat(recursiveMap(arr.slice(1), cb));
  }