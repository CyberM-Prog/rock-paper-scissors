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

    if (playerScore >= 5 || computerScore >= 5) {
        return;
    }

    computerSelection = computerPlay()

    let message
    
    let btn = this.outerHTML

    function convertHTML() {
        if (btn == "<button>Rock</button>") return "rock";
        if (btn == "<button>Paper</button>") return "paper";
        if (btn == "<button>Scissors</button>") return "scissors";
    }

    playerSelection = convertHTML()

    if (playerSelection == computerSelection) {
        message = ("It's a tie!")
    }
    
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore = (playerScore + 1)
        message = ("Congrats, you won! The rock beaten the scissors");
    }

    else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore = (playerScore + 1)
        message = ("Congrats, you won! The paper beaten the rock")
    }

    else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore = (playerScore + 1)
        message = ("Congrats, you won! The scissors beaten the paper")
    }

    else if (computerSelection == "rock" && playerSelection == "scissors") {
        computerScore = (computerScore + 1)
        message = ("Oh no, you lost! The rock beaten the scissors")
    }

    else if (computerSelection == "paper" && playerSelection == "rock") {
        computerScore = (computerScore + 1)
        message = ("Oh no, you lost! The paper beaten the rock")
    }

    else if (computerSelection == "scissors" && playerSelection == "paper") {
        computerScore = (computerScore + 1)
        message = ("Oh no, you lost! The scissors beaten the paper")
    }

    else {
        message = ("Error! Problem with the input")
    }

    if (playerScore >= 5) {
        message = playerScore + "-" + computerScore + "! You won the game!";
        div.textContent = message;
        return;
    }

    if (computerScore >= 5) {
        message = playerScore + "-" + computerScore + "! You lost the game!";
        div.textContent = message;
        return;
    }

    div.textContent = message + " - Result: " + playerScore + "-" + computerScore


}

const buttons = document.querySelectorAll('button')

buttons.forEach(btn => btn.addEventListener('click', playRound))

const body = document.querySelector('body')

const div = document.createElement('div')
div.textContent = "Result: " + playerScore + "-" + computerScore
body.appendChild(div)


