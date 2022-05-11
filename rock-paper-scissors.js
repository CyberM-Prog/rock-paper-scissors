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

let computerSelection = computerPlay()

let playerSelection = prompt("Rock, paper, or scissors?", "").toLocaleLowerCase()

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return ("It's a tie!")
    }
    
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        return ("Congrats, you win! The rock beaten the scissors")
    }

    else if (playerSelection == "paper" && computerSelection == "rock") {
        return ("Congrats, you win! The paper beaten the rock")
    }

    else if (playerSelection == "scissors" && computerSelection == "paper") {
        return ("Congrats, you win! The scissors beaten the paper")
    }

    else if (computerSelection == "rock" && playerSelection == "scissors") {
        return ("Oh no, you lose! The rock beaten the scissors")
    }

    else if (computerSelection == "paper" && playerSelection == "rock") {
        return ("Oh no, you lose! The paper beaten the rock")
    }

    else if (computerSelection == "scissors" && playerSelection == "paper") {
        return ("Oh no, you lose! The scissors beaten the paper")
    }

    else {
        return ("Error! Problem with the input")
    }

}

