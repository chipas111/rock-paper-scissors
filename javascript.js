
function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function getHumanChoice() {
        let userAnswer = window.prompt("Choose your weapon", "Rock, Paper, Scissors");
        return userAnswer
    }

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
            alert("You Won! Scissors beats Paper!") 
        } else if (normHumanChoice === "scissors" && normComputerChoice === "rock") {
            computerScore++
            alert("You Lose! Rock beats Scissors") 
        } else if (normHumanChoice === "rock" && normComputerChoice === "paper") {
            computerScore++
            alert("You Lose! Paper beats Rock")
        } else if (normHumanChoice === "rock" && normComputerChoice === "scissors") {
            humanScore++
            alert("You Won! Rock beats Scissors!")
        } else if (normHumanChoice === "paper" && normComputerChoice === "scissors") {
            computerScore++
            alert("You Lose! Scissors beats Paper!")
        } else if (normHumanChoice === "paper" && normComputerChoice === "rock") {
            humanScore++
            alert("You Won! Paper beats Rock!")
        } else if (normHumanChoice === normComputerChoice) {
            alert("Its a Tie!")
        } else {
            alert("Choose correct weapon")
        };
    }
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    alert(`Final Scores:\nHuman: ${humanScore}\nComputer: ${computerScore}`);
}

playGame();
