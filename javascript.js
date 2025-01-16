
function playGame() {

    let humanScore = 0;
    let computerScore = 0;
    const totalRounds = 5
    let currentRound = 0

    const buttons = document.querySelector("#buttons");
    let humanChoice;

    let yourScore = document.querySelector("#yourscore")
    let compScore = document.querySelector("#compscore") 
    let description = document.querySelector("#description")

    const scoreSection = document.querySelector("#section");
    const finalScore = document.createElement("p");
    scoreSection.appendChild(finalScore);
    updateScore(); 

    buttons.addEventListener("click", (event) => {
    if (currentRound >= totalRounds) {
        // alert("Игра завершена"); 
        description.textContent = "The game is over"
        return;
    }

    const target = event.target
    switch(target.id) {
        case 'btnRock':
            console.log('Rock');
            humanChoice = "Rock"
            break;
        case 'btnPaper':
            console.log('Paper');
            humanChoice = "Paper"
            break;
        case 'btnScissors':
            console.log('Scissors');
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

    function declareWinner() {
        if (humanScore > computerScore) {
            alert(`Игра завершена! Вы победили! Итоговый счёт: Человек ${humanScore}, Компьютер ${computerScore}`);
        }
        else if (humanScore <computerScore) {
            alert(`Игра завершена! Вы проиграли! Итоговый счёт: Человек ${humanScore}, Компьютер ${computerScore}`);
        }
        else {
            alert(`Игра завершена! Ничья! Итоговый счёт: Человек ${humanScore}, Компьютер ${computerScore}`);
        }
    }

    function updateScore() {
        finalScore.textContent = `Current Scores:\nHuman: ${humanScore}\nComputer: ${computerScore}`;
    }

}
playGame()
