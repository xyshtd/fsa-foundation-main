/* eslint-disable no-unused-vars */
//for (..of..) -> value
//for (..in..) -> key/index
const multipleMaps = (mapper, maps) => {
  return mapper.map((key) => {
    for (const keyValuePair of maps) {
      if (key in keyValuePair) return keyValuePair[key];
    }

    return key;
  });
};
//['a', 'b', 'c', 'd'], [{ a: 0, b: 1, c: 2, d: 3 }]);
// returns ==> [0, 1, 2, 3]
