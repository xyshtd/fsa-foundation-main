/* eslint-disable no-unused-vars, no-prototype-builtins */
<<<<<<< HEAD
//Checkpoint 1 solutions: https://www.youtube.com/playlist?list=PLx0iOsdUOUmndKpeD_szGCo7XV3YNTjGN
=======
// SM: great job!
>>>>>>> a7bbe33326c5d4b4cff98d43181bff85e1715604
const findObjPropsHasOwn = (obj) => {
  let arr = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      arr.push(`${key}`);
    }
  }
  return arr.join(', ');
};

const findObjKeys = (obj) => {
  return Object.keys(obj).join(', ');
};
