const newGame = () => new Game();

const generateWinningNumber = () => Math.floor(100 * Math.random() + 1);

const shuffle = (arr) => {
    let lastIndex = arr.length, temp, i;
    while (lastIndex) {
        i = Math.floor(Math.random() * lastIndex--);
        temp = arr[lastIndex];
        arr[lastIndex] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

class Game {
    constructor() {
        this.winningNumber = generateWinningNumber();
        this.playersGuess = null;
        this.pastGuesses = [];
        this.heatMap = [];
        this.gameOver = false;
        this.gotHint = false;
    }

    difference() {
        return Math.abs(this.winningNumber - this.playersGuess);
    }
    isLower() {
        return ((this.winningNumber - this.pastGuesses[this.pastGuesses.length - 1]) < 0);
    }
    playersGuessSubmission(guess) {
        if (guess < 1 || guess > 100 || (typeof(guess) !== "number")) {
            throw("Invalid guess.");
        } else {
            this.playersGuess = guess;
            return this.checkGuess();
        }
    }
    checkGuess() {
        if (this.pastGuesses.includes(this.playersGuess)) {
            return "You have already guessed that number.";
        } else {
            this.pastGuesses.push(this.playersGuess);
            if (this.playersGuess === this.winningNumber) {
                this.gameOver = true;
                this.heatMap.push("win");
                return "You Win!";
            } else if (this.pastGuesses.length >= 5) {
                this.gameOver = true;
                this.heatMap.push("lose");
                return "You Lose.";
            } else if (this.difference() < 10) {
                this.heatMap.push("hot");
            } else if (this.difference() < 25) {
                this.heatMap.push("warm");
            } else if (this.difference() < 50) {
                this.heatMap.push("chilly");
            } else {
                this.heatMap.push("cold");
            }
            return "Valid Guess.";
        }
    }
    provideHint() {
        let hintArr = [this.winningNumber];
        while (hintArr.length < 10) {
            let num = generateWinningNumber();
            if (!hintArr.includes(num) && !this.pastGuesses.includes(num)) {
                hintArr.push(num);
            }
        }
        this.gotHint = true;
        return shuffle(hintArr);
    }
}

$(document).ready(function() {
    let game = newGame();
    let winArr = [];

    // Watch for invalid input > 100 or < 1 or NaN
    $("#user-guess").on("keyup", function(event) {
        let guess = +$(this).val();
        if (guess > 100) {
            $(this).val($(this).val().slice(0,2));
        } else if (isNaN(guess) || !guess) {
            $(this).val("");
        }
    });

    // User clicks submit button
    $("#submit").on("click", function() {
        if (validateInput() && !game.gameOver) {
            makeGuess(game);
            fadeHints();
        }
        $("#user-guess").focus();
    });

    // User presses enter to submit
    $("#user-guess").on("keypress", function(event) {
        if (validateInput() && !game.gameOver && event.which === 13) {
            makeGuess(game);
            fadeHints();
        }
    })

    // User presses the reset button
    $("#reset").on("click", function() {
        if (!game.gameOver) { // No cheating
            winArr = []; 
            calcStars();
        }

        game = newGame();

        $(".guess-div").fadeOut(200, function() {
            $(this).removeClass("hot warm chilly cold win lose")
            .children("h3").text("")
            .closest(".guess-div").fadeIn(200);
        
            $("#user-guess").prop("disabled", false);
            // If I don't put this here, it doesn't work if the previous game has been won or lost
            $("#user-guess").focus();
        });

        $(".arrow-div").fadeOut(200, function() {
            $(this).removeClass("arrow-up arrow-down").fadeIn(200);
        });

        fadeHints();
        $("#hint").prop("disabled", false);
        $("#submit").prop("disabled", false);
        $("#reset").removeClass("action");
    });

    // User presses the hint button
    $("#hint").on("click", function() {
        if (!game.gotHint) {
            let hintArr = game.provideHint();

            $(".hint-div").each(function(index) {
                $(this).hide().text(hintArr[index]).fadeIn();
            });
            $("#hint").prop("disabled", true);
            $("#user-guess").focus();
        }
    });

    // Remove hint numbers
    const fadeHints = function() {
        $(".hint-div").fadeOut(200, function() {
            $(this).text("").fadeIn();
        });
    }

    // Double check that the input is valid
    const validateInput = function(game) {
        const guess = +$("#user-guess").val();
        if (guess < 1 || guess > 100 || isNaN(guess) || !guess) {
            $("#user-guess").val("");
            return false;
        }
        return true;
    }

    // Add or remove stars
    const calcStars = function() {
        $("#stars").fadeOut(200, function() {
            $(this).html("");
            winArr.forEach(win => {
                if (win === "gold") {
                    $("#stars").append("<div class=\"col-1 gold-star\"></div>")
                } else if (win === "silver") {
                    $("#stars").append("<div class=\"col-1 silver-star\"></div>")
                }
            })
            $("#stars").fadeIn(200);
        })
    }

    // Check the guess and do stuff
    const makeGuess = function(game) {
        const guess = +$("#user-guess").val();
        $("#user-guess").val("");

        const outputText = game.playersGuessSubmission(guess);
        console.log(outputText);

        if (game.gameOver) {
            if (game.heatMap[game.heatMap.length - 1] === "win") {
                if (game.gotHint) {
                    winArr.push("silver");
                } else {
                    winArr.push("gold");
                }
            } else {
                winArr = [];
            }

            calcStars();
            $("#user-guess").prop("disabled", true);
            $("#submit").prop("disabled", true);
            $("#hint").prop("disabled", true);
            $("#reset").addClass("action");
            $("#reset").focus();
        }

        const index = game.pastGuesses.length - 1;
        $(".guess-div")
            .eq(index)
            .addClass(game.heatMap[index])
            .children("h3")
            .text(game.pastGuesses[index])
            .hide().fadeIn("slow");

        let arrowClass = "";
        if (game.isLower()) {
            arrowClass = "arrow-down";
        } else if (!game.gameOver) {
            arrowClass = "arrow-up";
        }

        $(".arrow-div")
            .eq(index)
            .addClass(arrowClass)
            .hide().fadeIn("slow");
    }
});





