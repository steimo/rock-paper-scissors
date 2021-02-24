let computerSelection = () => {
        let variants = ["rock", "paper", "scissors"];
        let randomElement = variants[Math.floor(Math.random() * variants.length)]; 
        console.log("Computer choice: " + randomElement);
        return randomElement;
};


let playerSelection = () => {
        return (event.srcElement.id.toString().trim());
};


let start = () => {
        const buttons = document.querySelectorAll('button');
        for (let i=0; i < buttons.length; i++) {
                buttons[i].addEventListener('click', () => {
                      playGame(); 
                       
                })
        }
};

function playRound(playerSelection, computerSelection) {
        let displayResults = document.getElementById("display-results");

        if (playerSelection == computerSelection) {
                return 'tie';
        } else if (playerSelection == 'rock') {
                if (computerSelection == 'scissors') {
                        displayResults.innerHTML = ('You win the round! Rock smashes Scissors!');
                        return true;
                } else {
                        displayResults.innerHTML = ('You lose the round! Paper covers Rock!');
                        return false;
                }
        } else if (playerSelection == 'paper') {
                if (computerSelection == 'rock') {
                        displayResults.innerHTML = ('You win the round! Paper covers Rock!');
                        return true;
                } else {
                        displayResults.innerHTML = ('You lose the round! Scissors cuts Paper');
                        return false;
                } 
        } else if (playerSelection == 'scissors') {
                if (computerSelection == 'paper') {
                        displayResults.innerHTML = ('You win the round! Scissors cuts Paper');
                        return true;
                } else {
                        displayResults.innerHTML = ('You lose the round! Rock smashes Scissors');
                        return false;
                }
        }
}

let playerScore = 0;
let computerScore = 0;
let generalScore = 0;
function playGame() {
        if (generalScore < 5) {
                let game = playRound(playerSelection(), computerSelection());
                if (game === 'tie') {
                        let displayResults = document.getElementById("display-results");
                        displayResults.innerHTML = "It's a tie game!";
                } else if (game === true) {
                        playerScore += 1;
                        generalScore += 1;
                } else if (game === false) {
                        computerScore += 1;
                        generalScore += 1;
                }
                console.log("Computer score: " + computerScore);
                console.log("Player score: " + playerScore);
                let htmlPlayerScore = document.getElementById("player-score");
                htmlPlayerScore.innerHTML = playerScore;
                let htmlComputerScore = document.getElementById("computer-score");
                htmlComputerScore.innerHTML = computerScore;

        } else {
                if (playerScore > computerScore) {
                        alert("You have higher score. You win the game!");
                        let button = document.getElementById("again");
                        if (!!button == false) {
                                newGame();
                        }
                } else {
                        alert("Computer has higher score. You lose the game:("); 
                        let button = document.getElementById("again");
                        if (!!button == false) {
                                newGame();
                        }
                }
        }



}

function newGame() {
        let x = document.createElement("BUTTON");
        x.id = "again";
        let y = document.createTextNode("Try again");
        x.appendChild(y);
        document.getElementById('try-again-button').appendChild(x);
        let button = document.getElementById("again");
        button.addEventListener('click', () => {
                generalScore = 0;
                computerScore = 0;
                playerScore = 0;
                let htmlPlayerScore = document.getElementById("player-score");
                htmlPlayerScore.innerHTML = 0;
                let htmlComputerScore = document.getElementById("computer-score");
                htmlComputerScore.innerHTML = 0;
                let displayResults = document.getElementById("display-results");
                displayResults.innerHTML = "";
                button.remove();
        })

};


start();






















