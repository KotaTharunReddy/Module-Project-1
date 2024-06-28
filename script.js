document.getElementById("rules").addEventListener("click", function() {
    var container = document.getElementById("container");
    if (container.style.display === "none" || container.style.display === "") {
        container.style.display = "block";
    } else {
        container.style.display = "none";
    }
});

document.getElementById("crossmark").addEventListener("click", function() {
    document.getElementById("container").style.display = "none";
});
// script.js

// Function to show the rules banner
// function showbanner() {
//     document.getElementById("container").style.display = "block";
// }

// Event listeners for the game area selections
document.getElementById("gamearearock").addEventListener("click", () => userSelection("rock"));
document.getElementById("gameareascissors").addEventListener("click", () => userSelection("scissors"));
document.getElementById("gameareapaper").addEventListener("click", () => userSelection("paper"));

// Function to handle user selection
function userSelection(userChoice) {
    const choices = ["rock", "paper", "scissors"];
    const pcChoice = choices[Math.floor(Math.random() * choices.length)];

    document.getElementById("gamearea_youpicked").style.display = "block";
    document.getElementById("gamearea_pcpicked").style.display = "block";

    document.getElementById("gamearea_youpicked").innerText = `YOU PICKED: ${userChoice.toUpperCase()}`;
    // document.getElementById("gamearearock").style.display="block"; // my change
    document.getElementById("gamearea_pcpicked").innerText = `PC PICKED: ${pcChoice.toUpperCase()}`;

    const result = determineWinner(userChoice, pcChoice);
    displayResult(result);
}

// Function to determine the winner
function determineWinner(user, pc) {
    if (user === pc) return "tie";
    if ((user === "rock" && pc === "scissors") || 
        (user === "scissors" && pc === "paper") || 
        (user === "paper" && pc === "rock")) {
        return "user";
    }
    return "pc";
}

// Function to display the result
function displayResult(result) {
    resetDisplay();
    document.getElementById("gamearea").style.display = "none"; // my change 

    if (result === "user") {
        document.getElementById("userwins").style.display = "block";
        document.getElementById("you_win").style.opacity = "1";
        document.getElementById("against_pc").style.opacity = "1";
        document.getElementById("playagain1").style.opacity = "1";
        document.getElementById("playagain1text").style.opacity = "1";
        incrementScore("userdisplay");
    } else if (result === "pc") {
        document.getElementById("pcwins").style.display = "block";
        document.getElementById("pc_win").style.opacity = "1";
        document.getElementById("against_pc").style.opacity = "1";
        document.getElementById("playagain2").style.opacity = "1";
        document.getElementById("playagain2text").style.opacity = "1";
        incrementScore("computerdisplay");
    } else {
        document.getElementById("tie").style.display = "block";
        document.getElementById("tietext").style.opacity = "1";
        document.getElementById("playagain3").style.opacity = "1";
        document.getElementById("playagain3text").style.opacity = "1";
    }

    document.getElementById("playagain1").addEventListener("click", resetGame);
    document.getElementById("playagain2").addEventListener("click", resetGame);
    document.getElementById("playagain3").addEventListener("click", resetGame);
}

// Function to increment the score
function incrementScore(id) {
    const scoreElement = document.getElementById(id);
    scoreElement.innerText = parseInt(scoreElement.innerText) + 1;
}

// Function to reset the game
function resetGame() {
    resetDisplay();
    document.getElementById("gamearea").style.display = "block"; // mychange
    document.getElementById("gamearea_youpicked").style.display = "none";
    document.getElementById("gamearea_pcpicked").style.display = "none";
}

// Function to reset the display
function resetDisplay() {
    document.getElementById("userwins").style.display = "none";
    document.getElementById("pcwins").style.display = "none";
    document.getElementById("tie").style.display = "none";
    document.getElementById("you_win").style.opacity = "0";
    document.getElementById("against_pc").style.opacity = "0";
    document.getElementById("playagain1").style.opacity = "0";
    document.getElementById("playagain1text").style.opacity = "0";
    document.getElementById("pc_win").style.opacity = "0";
    document.getElementById("against_pc").style.opacity = "0";
    document.getElementById("playagain2").style.opacity = "0";
    document.getElementById("playagain2text").style.opacity = "0";
    document.getElementById("tietext").style.opacity = "0";
    document.getElementById("playagain3").style.opacity = "0";
    document.getElementById("playagain3text").style.opacity = "0";
}

// Initially hide the game area elements
document.getElementById("gamearea_youpicked").style.display = "none";
document.getElementById("gamearea_pcpicked").style.display = "none";
resetDisplay();
