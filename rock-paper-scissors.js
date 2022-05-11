function computerPlay() {
    let computerChoice = getRandomIntInclusive(1, 3)

    if (computerChoice == 1) {
        return ("rock")
    }

    else if (computerChoice == 2) {
        return ("paper")
    }

    else {
        return ("scissors")
    }
}

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let computerSelection

let playerSelection

let playerScore = 0

let computerScore = 0

function playRound(playerSelection, computerSelection) {

    computerSelection = computerPlay()

    playerSelection = prompt("Rock, paper, or scissors?", "").toLowerCase()

    if (playerSelection == computerSelection) {
        return ("It's a tie!")
    }
    
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore = (playerScore + 1)
        return ("Congrats, you won! The rock beaten the scissors");
    }

    else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore = (playerScore + 1)
        return ("Congrats, you won! The paper beaten the rock")
    }

    else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore = (playerScore + 1)
        return ("Congrats, you won! The scissors beaten the paper")
    }

    else if (computerSelection == "rock" && playerSelection == "scissors") {
        computerScore = (computerScore + 1)
        return ("Oh no, you lost! The rock beaten the scissors")
    }

    else if (computerSelection == "paper" && playerSelection == "rock") {
        computerScore = (computerScore + 1)
        return ("Oh no, you lost! The paper beaten the rock")
    }

    else if (computerSelection == "scissors" && playerSelection == "paper") {
        computerScore = (computerScore + 1)
        return ("Oh no, you lost! The scissors beaten the paper")
    }

    else {
        return ("Error! Problem with the input")
    }

}

function game() {
    
    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection, computerSelection).concat(" - ", playerScore, "-", computerScore));
    }

    if (playerScore > computerScore) {
        console.log("You won the game! The final result is ", playerScore, "-", computerScore)
    }

    else if (playerScore < computerScore) {
        console.log("Bad luck, you lost the game! The final result is ", playerScore, "-", computerScore)
    }

    else {
        console.log("It's a tie! The final result is ", playerScore, "-", computerScore)
    }
}


