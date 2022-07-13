  const presses = phrase => {
      const keys = ['1', 'ABC2', 'DEF3', 'GHI4', 'JKL5', 'MNO6', 'PQRS7', 'TUV8', 'WXYZ9', ' 0'];
      // method chaining: 
      //  .toUpperCase() returns a string
      //  .split('') is called on the string and returns an array
      //  .reduce() is called on the array .split returned

      return phrase.toUpperCase().split('').reduce((total, char)=> {
        // Find the string in the keys array that contains the character
        // the string is added to the array filter creates, since there is only
        // one string the character is located in, only one string is returned
        // to the array filter creates, this is why the [0] (zeroth) index is always
        // taken.
        let key = keys.filter(key => key.includes(char))[0];
        return key.indexOf(char) + 1 + total;


      }, 0)
  }