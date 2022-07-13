// Shorthand One-Liner Arrow Function Syntax
const newObj = constructorFunc => Object.create(constructorFunc.prototype);

// Here is the same solution but with different syntax:

const newObj = constructorFunc => {
  return Object.create(constructorFunc.prototype);
};