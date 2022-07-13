/* eslint-disable no-unused-vars, no-prototype-builtins */

//Solution 1 Refactored
const soup = (phrase, bank) => {
  const charTally = {};
  for (let i = 0; i <= bank.length; i++) {
    let char = bank[i];
    if (charTally[char]) charTally[char]++;
    else charTally[char] = 1;
  }

  for (let i = 0; i < phrase.length; i++) {
    if (charTally[phrase[i]] > 0) {
      charTally[phrase[i]]--;
    } else {
      return false;
    }
  }
  return true;
};
/*

// SM: nice work, Please do NOT leave unused code or commented out code.
// Solution 1 map
const soup = (phrase, characterBank) => {
  let charMap = {};
  for (let i = 0; i < phrase.length; i++) {
    if (!charMap[phrase[i]]) {
      charMap[phrase[i]] = 1;
    } else {
      charMap[phrase[i]]++;
    }
  }
  for (let j = 0; j < characterBank.length; j++) {
    if (charMap[characterBank[j]]) charMap[characterBank[j]]--;
  }
  for (let key in charMap) {
    //if (charMap[key] !== 0) return false
    //doesn't cover the edge case
    if (charMap[key] > 0) return false;
  }
  return true;
};
*/

//Solution 2 str con: orginal strings are changed;
/* const soup = (phrase, characterBank) => {
  for (let i = 0; i < phrase.length; i++) {
    let phraseElement = phrase[i];
    let index = characterBank.indexOf(phraseElement);
    if (index === -1) return false;
    //characterBank = characterBank.substring(0, index) + characterBank.substring(index + 1);
    characterBank =
      characterBank.slice(0, index) + characterBank.slice(index + 1);
  }
  return true;
}; */

// Solution 3 Index0f,Splice con: convert to arrays
/*
const soup = (phrase, characterBank) => {
  const phraseArr = [...phrase];
  const characterBankArr = [...characterBank];
  for (let i = 0; i < phraseArr.length; i++) {
    let phraseElement = phrase[i];
    let index = characterBankArr.indexOf(phraseElement);
    //if (!characterBank.includes(phraseElement)) return false;
    if (index === -1) return false;
    characterBankArr.splice(index, 1);
  }
  return true;
};
*/
