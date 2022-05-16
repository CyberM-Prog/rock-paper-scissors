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

let playerScore = 0

let computerScore = 0

let playerSelection


function playRound(playerSelection, computerSelection) {

    computerSelection = computerPlay()
    
    let btn = this.outerHTML

    function convertHTML() {
        if (btn == "<button>Rock</button>") return "rock";
        if (btn == "<button>Paper</button>") return "paper";
        if (btn == "<button>Scissors</button>") return "scissors";
    
    }

    playerSelection = convertHTML()


    if (playerSelection == computerSelection) {
        console.log("It's a tie!")
    }
    
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore = (playerScore + 1)
        console.log("Congrats, you won! The rock beaten the scissors");
    }

    else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore = (playerScore + 1)
        console.log("Congrats, you won! The paper beaten the rock")
    }

    else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore = (playerScore + 1)
        console.log("Congrats, you won! The scissors beaten the paper")
    }

    else if (computerSelection == "rock" && playerSelection == "scissors") {
        computerScore = (computerScore + 1)
        console.log("Oh no, you lost! The rock beaten the scissors")
    }

    else if (computerSelection == "paper" && playerSelection == "rock") {
        computerScore = (computerScore + 1)
        console.log("Oh no, you lost! The paper beaten the rock")
    }

    else if (computerSelection == "scissors" && playerSelection == "paper") {
        computerScore = (computerScore + 1)
        console.log("Oh no, you lost! The scissors beaten the paper")
    }

    else {
        console.log("Error! Problem with the input")
    }

}

const buttons = document.querySelectorAll('button')

buttons.forEach(btn => btn.addEventListener('click', playRound))



