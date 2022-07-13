/* eslint-disable no-unused-vars */
//.split .reduce .push .join

const pigify = (phrase) => {
  const phraseArr = phrase.split(' ');
  const vowel = 'aeiouAEIOU';

  return phraseArr
    .reduce((accum, word) => {
      let indexOfVowel = 0;
      for (let i = 0; i < word.length; i++) {
        const letter = word[i];
        if (vowel.includes(letter)) {
          // if the vowel isn't u OR if the vowel is u and the preceeding character isn't 'q'
          //three-> indexofVowel =3
          //quiet-> indexofVowel = 2
          if (letter !== 'u' || (letter === 'u' && word[i - 1] !== 'q')) {
            indexOfVowel = i;
            break;
          }
        }
      }
      //word.slice(3) 'ee' + word.slice(0,3) 'thr'
      //word.slice(2) 'iet' + word.slice(0,2) 'quu'
      const startNoConsonants = word.slice(indexOfVowel);
      const consonantsForEnd = word.slice(0, indexOfVowel);
      //['eethay']
      //['eethay']
      //accum = [...accum, `${startNoConsonants}${consonantsForEnd}ay`]
      accum.push(`${startNoConsonants}${consonantsForEnd}ay`);
      return accum;
    }, [])
    .join(' ');
};
