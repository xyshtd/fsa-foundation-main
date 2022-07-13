var Game = function() {
    this.playersGuess = null;
    this.winningNumber = generateWinningNumber();
    this.pastGuesses = [];
}

function generateWinningNumber() {
    return Math.ceil(Math.random()*100);
}

function newGame() {
    return new Game();
}

Game.prototype.difference = function() {
    return Math.abs(this.playersGuess-this.winningNumber);
}

Game.prototype.isLower = function() {
    return this.playersGuess < this.winningNumber;
}

Game.prototype.playersGuessSubmission = function(guess) {
    if(isNaN(guess) || guess < 1 || guess > 100) {
        return "That is an invalid guess.";
    }
    this.playersGuess = guess;
    return this.checkGuess();
}

Game.prototype.checkGuess = function() {
    if(this.playersGuess===this.winningNumber) {
        $('#hint, #submit').prop("disabled",true);
        $('#subtitle').text("RESET THE GAME to play again!")
        return 'You Win! The winning number was ' + this.winningNumber + '.';
    }
    else {
        if(this.pastGuesses.indexOf(this.playersGuess) > -1) {
            return 'You\'ve already guessed that!';
        }
        else {
            this.pastGuesses.push(this.playersGuess);
            $('#guess-list li:nth-child('+ this.pastGuesses.length +')').text(this.playersGuess);
            if(this.pastGuesses.length === 5) {
                $('#hint, #submit').prop("disabled",true);
                $('#subtitle').text("RESET THE GAME to play again!");
                $('#players-input').prop("disabled",true);
                return 'You Lose. The winning number was ' + this.winningNumber + '.';
            }
            else {
                var diff = this.difference();
                if(this.isLower()) {
                    $('#subtitle').text("Guess Higher!")
                } else {
                    $('#subtitle').text("Guess Lower!")
                }
                if(diff < 10) return'You\'re burning up!';
                else if(diff < 25) return'You\'re lukewarm.';
                else if(diff < 50) return'You\'re a bit chilly.';
                else return'You\'re ice cold!';
            }
        }
    }
}

Game.prototype.provideHint = function() {
    var random1 = this.winningNumber;
    var random2 = this.winningNumber;

    let cycle = 0;
    while(random1 === random2 || random1 === this.playersGuess || random2 === this.playersGuess) {
        cycle++;
        if(this.playersGuess > this.winningNumber) {
            random1 = Math.ceil(Math.random() * (Math.abs(this.playersGuess - 1)) + 1);
            random2 = Math.ceil(Math.random() * (Math.abs(this.playersGuess - 1)) + 1);
        } else {
            random1 = Math.ceil(Math.random() * (Math.abs(100-this.playersGuess)) + this.playersGuess);
            random2 = Math.ceil(Math.random() * (Math.abs(100-this.playersGuess)) + this.playersGuess);
        }
        if(cycle > 20000) {
            break;
        }
    }


    var hintArray = [this.winningNumber, random1, random2];
    return shuffle(hintArray);
}

function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

function makeAGuess(game) {
    var guess = $('#players-input').val();
    $('#players-input').val("");
    var output = game.playersGuessSubmission(parseInt(guess,10));
    $('#title').text(output);
}

$(document).ready(function() {
    var game = new Game();
    
    $('#submit').click(function(e) {
       makeAGuess(game);
    })

    $('#players-input').keypress(function(event) {
        if (event.which == 13) {
           makeAGuess(game);
        }
    })

    $('#hint').click(function() {
        var hints = game.provideHint();
        $('#title').text('The winning number is either '+hints[0]+', '+hints[1]+', or '+hints[2] + '.');
    });

    $('#reset').click(function() {
        game = newGame();
        $('#title').text('THE GUESSING GAME');
        $('#subtitle').text('Guess a number between 1-100')
        var text = "<a href='#' class='show-option' title='Guess will appear here'><i class='icon-edit icon-white'>-</i></a>";
        $(".guess").html(text);
        $('#hint, #submit').prop("disabled",false);
        $('#players-input').prop("disabled",false);

    });

    $(function() {
        $( ".show-option" ).tooltip({
            show: {
            effect: "slideDown",
            delay: 300
            }
        });
    });
})



