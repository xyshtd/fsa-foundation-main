 //basics/01-pig-latin/pig-latin.js

function pigify(str) {
  return str
    .split(' ')
    .map((word) => {
      let firstVowelIdx;
      for (let i = 0; i < word.length; i++) {
        if (word[i] === 'u' && word[i - 1] === 'q') continue;
        if ('aeiou'.includes(word[i])) {
          firstVowelIdx = i;
          break;
        }
      }
      return word.slice(firstVowelIdx) + word.slice(0, firstVowelIdx) + 'ay';
    })
    .join(' ');
}

// word.slice(firstVowelIdx) + word.slice(0, firstVowelIdx) + 'ay'
// ool + sch + 'ay'





//basics/03-rename-files/rename-files.js

function renameFiles(files) {
  const out = [];
  files.forEach((file) => {
    if (out.includes(file)) {
      let num = 1;
      while (out.includes(`${file}(${num})`)) {
        num++;
      }
      out.push(`${file}(${num})`);
    } else out.push(file);
  });
  return out;
}




//basics/04-map-quest/solution-map-quest.js

function mapQuest(arr) {
  const opp = {
    N: 'S',
    S: 'N',
    E: 'W',
    W: 'E',
  };
  return arr.reduce((acc, dir) => {
    if (opp[acc.at(-1)] === dir) acc.pop();
    else acc.push(dir);
    return acc;
  }, []);
}


//basics/06-interleave/interleave.js

// function interleave(...args) {
//   // const arrayOfLengths = args.map(str => str.length);
//   // const longestLength = Math.max(...arrayOfLengths);
//   const longestLength = Math.max(...args.map((str) => str.length));
//   let out = '';
//   for (let i = 0; i < longestLength; i++) {
//     for (let j = 0; j < args.length; j++) {
//       if (i < args[j].length) out += args[j][i];
//     }
//   }
//   return out;
// }

function interleave(...args) {
  const out = [];
  for (let i = 0; i < args.length; i++) {
    for (let j = 0; j < args[i].length; j++) {
      if (!out[j]) out[j] = '';
      out[j] += args[i][j];
    }
  }
  return out.join('');
}

// const interleave = (...args) =>
//   [...Array(Math.max(...args.map((str) => str.length)))].reduce((acc, _, i) => {
//     args.forEach((str) => (acc += str[i] || ''));
//     return acc;
//   }, '');

// const interleave = (...args) =>
//   [...Array(Math.max(...args.map((str) => str.length)))].reduce(
//     (acc, _, i) => acc + args.reduce((acc, str) => acc + (str[i] || ''), ''),
//     ''
//   );

// let arr = [1,2,3];
// Math.max(arr); // WRONG
// Math.max(...arr); // Math.max(1, 2, 3); CORRECT



//classes/00-vehicles/vehicle.js
class Vehicle {
  constructor(arr) {
    [this.wheelTotal, this.energySource, this.manufacturer] = arr;
    this.isOn = false;
  }
  getSpec(key) {
    // if (Object.keys(this).includes(key)) return this[key]; BAD
    if (this.hasOwnProperty(key)) return this[key];
  }
}

class Tesla extends Vehicle {
  // constructor(arr) {
  //   super(arr[4][0]);
  //   [
  //     this.milesPerCharge,
  //     this.model,
  //     this.chargePercentage,
  //     this.minutesToCharge,
  //   ] = arr;
  // }

  constructor([
    milesPerCharge,
    model,
    chargePercentage,
    minutesToCharge,
    [superArr],
  ]) {
    super(superArr);
    this.milesPerCharge = milesPerCharge;
    this.model = model;
    this.chargePercentage = chargePercentage;
    this.minutesToCharge = minutesToCharge;
  }
}