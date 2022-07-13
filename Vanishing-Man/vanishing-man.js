/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
// What is ASCIIART? Check the README.md or Workshop to see why ASCIIART is defined in your file.
const ASCIIART = [
  `

  O   
 /|\\\  
 / \\\  

=========`,
  `

  O      
 /|\\\   
 /       


=========`,
  `

  O      
 /|\\\   


=========`,
  `

  O      
 /|      


=========`,
  `

  O      
  |      


=========`,
  `

  O      



=========`,
  `





=========`,
];
class VanishingMan {
  constructor(secretWord) {
    this.secretWord = secretWord.toLowerCase().split('');
    this.remainingGuesses = 6;
    this.lettersGuessed = [];
    this.gameState = 'playing';
  }
  submitGuess(guess) {
    guess = guess.toLowerCase();
    if (this.gameState === 'playing') {
      if (!this.lettersGuessed.includes(guess)) {
        this.lettersGuessed.push(guess);
        if (!this.secretWord.includes(guess)) {
          this.remainingGuesses--;
        }
      }
    }
  }

  computeGameState() {
    if (this.remainingGuesses <= 0) {
      this.gameState = 'lost';
    } else if (
      this.remainingGuesses >= 0 &&
      this.secretWord.every((letter) => this.lettersGuessed.includes(letter))
    ) {
      this.gameState = 'won';
    }
  }

  getSecretWordPuzzle() {
    return this.secretWord
      .map((guess) => {
        if (this.lettersGuessed.includes(guess) || guess === ' ') {
          return guess;
        } else {
          return '#';
        }
      })
      .join('');
  }

  getGameStateMessage() {
    if (this.gameState === 'playing') {
      return `There is a total of ${
        this.remainingGuesses
      } guesses remaining:\n${
        this.remainingGuesses === 6
          ? ASCIIART[ASCIIART.length - 1]
          : ASCIIART[this.remainingGuesses]
      }`;
    } else if (this.gameState === 'lost') {
      return `Game Over, the word was "${this.secretWord.join('')}":\n${
        ASCIIART[0]
      }`;
    } else {
      return `Winner Winner Chicken Dinner, you won!`;
    }
  }
}

const game = new VanishingMan('hello');

const simulateVanishingMan = (secretWord) => {
  const characters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  const game = new VanishingMan(secretWord);

  function playVanishingMan() {
    if (game.gameState !== 'playing') {
      return game.getGameStateMessage();
    } else {
      const randomIndex = Math.floor(Math.random() * 26);
      const guess = characters[randomIndex];
      game.submitGuess(guess);
      game.computeGameState();
      return playVanishingMan();
    }
  }

  return playVanishingMan();
};
