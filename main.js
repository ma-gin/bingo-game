// ************    DECLARATION OF VARIABLES    ************

let bingoCell = document.createElement("div")
const numberOfCells = 76

// ************    DECLARATION OF FUNCTIONS    ************

const createCell = () =>{
    bingoCell = document.createElement("div")
    bingoCell.classList.add("cell")
}

const createBingoBoard = () =>{
    for (let cellNumber = 1; cellNumber <= numberOfCells; cellNumber++){
        createCell()
        bingoCell.innerText = cellNumber
        document.getElementById("bingo-board-container").appendChild(bingoCell)
}}

const firstArray = () =>{
    const arr = []
    for (let i = 1; i <= numberOfCells; i++){
        arr.push(i)}
    return arr
}

const chooseWinner = (range) =>{
    const randomIndex = Math.floor(Math.random() * range.length)
    const winningNumber = numberArray.splice(randomIndex, 1)[0]
    // console.log(winningNumber)
    return winningNumber
}

const clickPlay = () =>{
    if (numberArray.length === 0){
        alert("This Shouldn't Happen.")
        return
    } else{
    const allCells = document.querySelectorAll("main div")
    const winner = chooseWinner(numberArray).toString()
    for (let i = 0; i < allCells.length; i++){
        const testCell = allCells[i]
        if (testCell.innerText === winner){
            testCell.classList.add("winningNumber")
}}}}

// ************    INITIALIZATION    ************

createBingoBoard()
const numberArray = firstArray()