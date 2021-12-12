// ************    DECLARATION OF VARIABLES    ************

let bingoCell = document.createElement("div")
const numberOfCells = 76
const playerBoardCells = 24
const playerNumbers = []

// ************    DECLARATION OF FUNCTIONS    ************

const createCell = () =>{
    bingoCell = document.createElement("div")
    bingoCell.classList.add("cell")
}

const createMainBoard = (x) =>{
    for (let cellNumber = 1; cellNumber <= x; cellNumber++){
        createCell()
        bingoCell.innerText = cellNumber
        document.getElementById("bingo-board-container").appendChild(bingoCell)
}}

const firstArray = (x) =>{
    const arr = []
    for (let i = 1; i <= x; i++){
        arr.push(i)}
    return arr
}

const chooseWinner = (range) =>{
    const randomIndex = Math.floor(Math.random() * range.length)
    const winningNumber = numberArray.splice(randomIndex, 1)[0]
    return winningNumber
}

const clickPlay = () =>{
    if (numberArray.length === 0){
        alert("Game Over.")
        return
    } else{
    const allCells = document.querySelectorAll("main div")
    const winner = chooseWinner(numberArray).toString()
    for (let i = 0; i < allCells.length; i++){
        const testCell = allCells[i]
        if (testCell.innerText === winner){
            testCell.classList.add("winningNumber")
}}}}

const playerNumberCell = (arr) =>{ //output a number between 1 and 76 x amount of times without repeating the number
    const randomIndex = Math.floor(Math.random() * arr.length)
    const newArr = arr
    const winningNumber = newArr.splice(randomIndex, 1)[0]
    return winningNumber
}

const createPlayerBoard = (cells, boards) =>{
    const playerNumberArray = firstArray(numberOfCells)
    const playerSection = document.createElement("section")
    // console.log("you are here")
    if (boards === undefined){
        const boardContainer = document.createElement("div")
        boardContainer.classList.add("player-board")
        for (let i = 0; i < cells; i++){
            // console.log("here too")
            createCell()
            bingoCell.classList.remove("cell")
            bingoCell.classList.add("player-cell")
            bingoCell.innerText = playerNumberCell(playerNumberArray)
            boardContainer.appendChild(bingoCell)
            // console.log(boardContainer)
    //     }} else {
    //         for(let i = 0; i < boards; i++){
    //             const boardContainer = document.createElement("div")
    //             for (let i = 0; i < cells; i++){
    //                 createCell()
    //                 bingoCell.classList.remove("cell")
    //                 bingoCell.classList.add("player-cell")
    //                 bingoCell.innerText = playerNumberCell(playerNumberArray)
    //                 boardContainer.appendChild(bingoCell)
    //                 boardContainer.classList.add("player-board")}       
    // }}
    playerSection.appendChild(boardContainer)
    document.getElementsByTagName("body")[0].appendChild(playerSection)
}}}

// ************    INITIALIZATION    ************

createMainBoard(numberOfCells)
const numberArray = firstArray(numberOfCells)
createPlayerBoard(playerBoardCells)