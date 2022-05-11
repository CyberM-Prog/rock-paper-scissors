function computerPlay() {
    let computerChoice = getRandomIntInclusive(1, 3)

    if (computerChoice == 1) {
        return ("Rock")
    }

    else if (computerChoice == 2) {
        return ("Paper")
    }

    else {
        return ("Scissors")
    }
}

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}