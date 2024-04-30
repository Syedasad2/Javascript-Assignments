// Function to play the game
function playGame() {
    var secretNumber = Math.ceil(Math.random() * 6);
    var userGuess = parseInt(document.getElementById('userGuess').value);
    var points = 0;

    // Check if the guess is correct
    if (!isNaN(userGuess) && userGuess >= 1 && userGuess <= 6) {
        // If the guess is correct on the first attempt, give 6 points
        if (userGuess === secretNumber) {
            points = 6;
            document.getElementById('result').innerText = "Correct! You earned " + points + " points.";
        } else {
            points = 3;
            document.getElementById('result').innerText = "Incorrect guess. Try again.";
        }
    } else {
        // Invalid guess
        document.getElementById('result').innerText = "Please enter a number between 1 and 6.";
    }
}
