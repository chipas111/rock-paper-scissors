
function playGame() {

    let humanScore = 0;
    let computerScore = 0;
    const totalRounds = 5
    let currentRound = 0

    const buttons = document.querySelector("#buttons");
    let humanChoice;

    let humanWeapon = document.querySelector("#humanweapon")
    let compWeapon = document.querySelector("#compweapon")
    let yourScore = document.querySelector("#yourscore")
    let compScore = document.querySelector("#compscore") 
    let description = document.querySelector("#description")

    buttons.addEventListener("click", (event) => {
    if (currentRound >= totalRounds) {
        description.textContent = "The game is over, reload browser to play again"
        return;
    }

    const target = event.target
    switch(target.id) {
        case 'btnRock':
            humanWeapon.textContent = "Your weapon: Rock"
            humanChoice = "Rock"
            break;
        case 'btnPaper':
            humanWeapon.textContent = "Your weapon: Paper"
            humanChoice = "Paper"
            break;
        case 'btnScissors':
            humanWeapon.textContent = "Your weapon: Scissors"
            humanChoice = "Scissors"
            break;
        default: return;
        }

        if (humanChoice) {
            const computerChoice = getComputerChoice()
            playRound (humanChoice, computerChoice)
            currentRound++
            updateScore()
        }
        if (currentRound === totalRounds) {
            declareWinner()
        }
    })

    function getComputerChoice() {
        let computerAnswer = Math.random();
        if (computerAnswer <= 0.33) {
        return "Scissors";
    } else if (computerAnswer < 0.66)  {
        return "Rock";
    } else if (computerAnswer >= 0.66) {
        return "Paper"  };
    }

    function playRound(humanChoice, computerChoice) {

        let normHumanChoice = humanChoice.toLowerCase()
        let normComputerChoice = computerChoice.toLowerCase()

        if (normHumanChoice === "scissors" && normComputerChoice === "paper") {
            humanScore++
            description.textContent = "You Won! Scissors beats Paper!"
            compWeapon.textContent = "Computer weapon: Paper"

        } else if (normHumanChoice === "scissors" && normComputerChoice === "rock") {
            computerScore++
            description.textContent = "You Lose! Rock beats Scissors"
            compWeapon.textContent = "Computer weapon: Rock"

        } else if (normHumanChoice === "rock" && normComputerChoice === "paper") {
            computerScore++
            description.textContent = "You Lose! Paper beats Rock"
            compWeapon.textContent = "Computer weapon: Paper"

        } else if (normHumanChoice === "rock" && normComputerChoice === "scissors") {
            humanScore++
            description.textContent = "You Won! Rock beats Scissors!"
            compWeapon.textContent = "Computer weapon: Scissors"

        } else if (normHumanChoice === "paper" && normComputerChoice === "scissors") {
            computerScore++
            description.textContent = "You Lose! Scissors beats Paper!"
            compWeapon.textContent = "Computer weapon: Scissors"

        } else if (normHumanChoice === "paper" && normComputerChoice === "rock") {
            humanScore++
            description.textContent = "You Won! Paper beats Rock!"
            compWeapon.textContent = "Computer weapon: Rock"

        } else if (normHumanChoice === normComputerChoice) {
            description.textContent = "Its a Tie!"
            compWeapon.textContent = "Computer weapon: " + humanChoice

        } else {
            description.textContent = "Choose correct weapon"
        };
    }

    function declareWinner() {
        if (humanScore > computerScore) {
            description.textContent = `The game is finished! You won!`;
        }
        else if (humanScore < computerScore) {
            description.textContent = `The game is finished! You lose!`;
        }
        else {
            description.textContent = `Игра завершена! Ничья!`;
        }
    }

    function updateScore() {
        yourScore.textContent = `Current Scores:\nHuman: ${humanScore}`;
        compScore.textContent = `Current Scores:\nComputer: ${computerScore}`;
    }

}
playGame()
