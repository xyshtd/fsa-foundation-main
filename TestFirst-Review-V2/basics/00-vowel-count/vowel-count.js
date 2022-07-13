/* eslint-disable no-unused-vars */
//.toLowerCase, .split, .reduce
const vowelsCount = (str) => {
  return str
    .toLowerCase()
    .split('')
    .reduce(
      (acc, current) => {
        if ('aeiou'.includes(current)) {
          acc[current]++;
          acc['total']++;
        }
        return acc;
      },
      {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0,
        total: 0,
      }
    );
};
