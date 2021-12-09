// ************    DECLARATION OF VARIABLES    ************

let bingoCell = document.createElement("div")

// ************    DECLARATION OF FUNCTIONS    ************

const createCell = () => {
    bingoCell = document.createElement("div")
}

const createBingoBoard = () => {
    const numberOfCells = 76
    for (let cellNumber = 1; cellNumber <= numberOfCells; cellNumber++){
        createCell()
        bingoCell.classList.add("cell")
        bingoCell.innerText = cellNumber
        document.getElementById("bingo-board-container").appendChild(bingoCell)
    }}

const chooseNumber = () => {
    const selectedNumber = Math.ceil(Math.random() * 76)
    const allCells = document.querySelectorAll("main div")
    const winner = allCells[selectedNumber - 1]
    winner.classList.add("winningNumber")

}

// ************    INITIALIZATION    ************

createBingoBoard()