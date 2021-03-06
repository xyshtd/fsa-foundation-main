/* 
Write your guess-game code here! Don't forget to look at the test specs as a guide. You can run the specs
by running "testem".

In this file, you will also include the event listeners that are needed to interact with your HTML file when
a user clicks a button or adds a guess to the input field.
*/
//Example 1: https://jmunoz1992.github.io/Guessing-Game-Final/
//Example 2: https://tkbrooks.github.io/guessing-game/


document.getElementById('');

class Game {
  constructor() {
    this.playersGuess = null;
    this.winningNumber = generateWinningNumber();
    this.pastGuesses = [];
  }

  difference() {
    return Math.abs(this.playersGuess - this.winningNumber);
  }

  isLower() {
    return this.playersGuess < this.winningNumber;
  }

  playersGuessSubmission(guess) {
    if (typeof guess !== 'number' || guess < 1 || guess > 100) {
      throw 'That is an invalid guess.';
    }
    this.playersGuess = guess; 
    return this.checkGuess();
  }

  checkGuess() {
    
    let feedbackText = '';
    
    if (this.playersGuess === this.winningNumber) {
      feedbackText = 'You Win!';
    } else if (this.pastGuesses.includes(this.playersGuess)) {
      feedbackText = 'You have already guessed that number.';
    } else {
      this.pastGuesses.push(this.playersGuess);
      if (this.pastGuesses.length === 5) {
        feedbackText = 'You Lose.';
      } else {
        let diff = this.difference();
        if (diff < 10) feedbackText = "You're burning up!";
        else if (diff < 25) feedbackText = "You're lukewarm.";
        else if (diff < 50) feedbackText = "You're a bit chilly.";
        else feedbackText = "You're ice cold!";
      }
    }
 
    document.getElementById('guess-feedback').innerHTML = feedbackText;
    //Document.querySelector()
    //https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
    //li:nth-child
    //https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child
    document.querySelector(`#guess-list li:nth-child(${this.pastGuesses.length})`).innerHTML = this.playersGuess
    
    return feedbackText; 
  }

  provideHint() {
    const hintArray = [
      this.winningNumber,
      generateWinningNumber(),
      generateWinningNumber(),
    ];
    return shuffle(hintArray);
  }
}

//math.random 0-0.99999999
function generateWinningNumber() {
  return Math.ceil(Math.random() * 100);
}

function newGame() {
  return new Game(); 
}


 //Use the fisher-yates Shuffle algorithm
  //https://bost.ocks.org/mike/shuffle/
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    let temp = arr[i];
    arr[i] = arr[randomIndex];
    arr[randomIndex] = temp;
  }
  return arr;
}

function playGame() {
  const game = newGame();
  const button = document.querySelector('button');

  // When they click, we will check in the input field to see if they have guessed a number. Then we will run the function `checkGuess`, and give it the player's guess, the winning number, and the empty array of guesses!
  button.addEventListener('click', function() {
    const playersGuess = + document.querySelector('input').value;
    document.querySelector('input').value = '';
    game.playersGuessSubmission(playersGuess);
  });
}

playGame();