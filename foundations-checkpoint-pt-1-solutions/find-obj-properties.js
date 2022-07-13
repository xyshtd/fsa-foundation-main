const findObjPropsHasOwn = obj => {
  let keys = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      keys.push(key);
    }
  }
  return keys.join(', ');
};

const findObjKeys = obj => Object.keys(obj).join(', '); // shorthand syntax https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#Advanced_Syntax