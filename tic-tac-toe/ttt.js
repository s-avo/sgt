const CELLS_VERTICALLY     = 3
const CELLS_HORIZONTALLY   = 3
const EMPTY_TILE_SYMBOL    = ' ' 
const FIRST_PLAYER_SYMBOL  = 'X'
const FIRST_PLAYER_COLOR   = 'red'
const SECOND_PLAYER_SYMBOL = 'O'
const SECOND_PLAYER_COLOR  = 'blue'
 
let gameBoard = []

let isFirstPlayerTurn = true

window.onload = function() {
    initializeBoard()
}

function initializeBoard() {
    for (let row = 0; row < CELLS_VERTICALLY; row++) {
        let gameBoardRow = []
        for (let col = 0; col < CELLS_HORIZONTALLY; col++) {
            gameBoardRow.push(EMPTY_TILE_SYMBOL)
        }
        gameBoard[row] = gameBoardRow
    }
}

function makeMove(col, row) {
    let tile = gameBoard[row][col]

    if (tile === EMPTY_TILE_SYMBOL) {
        let button = document.getElementById('b' + col + row)
        if (isFirstPlayerTurn) {
            button.innerText   = FIRST_PLAYER_SYMBOL
            button.style.color = FIRST_PLAYER_COLOR
        } else {
            button.innerText   = SECOND_PLAYER_SYMBOL
            button.style.color = SECOND_PLAYER_COLOR
        }
        isFirstPlayerTurn = !isFirstPlayerTurn
        randomComputerMove()
    }
}

function randomComputerMove() {
    let randomRow  = Math.floor(Math.random() * CELLS_VERTICALLY)
    let randomCol  = Math.floor(Math.random() * CELLS_HORIZONTALLY)
    let randomTile = gameBoard[randomRow][randomCol]

    while (randomTile !== EMPTY_TILE_SYMBOL) {
        randomRow  = Math.floor(Math.random() * CELLS_VERTICALLY)
        randomCol  = Math.floor(Math.random() * CELLS_HORIZONTALLY)
        randomTile = gameBoard[randomRow][randomCol] 
    }
    makeMove(randomCol, randomRow)   
}
