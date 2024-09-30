//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.

// Constants

const choices = ["X", "O"]
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

// Variables (state)

let board
let turn
let winner
let tie

//Cached Element References

const squareEls = document.querySelectorAll(".sqr")

const messageEl = document.querySelector("#message")

const resetBtnEl = document.querySelector("#reset")

//Functions
const init = () => {
  board = [" ", " ", " ", " ", " ", " ", " ", " ", " "]
  turn = "X"
  winner = false
  tie = false
  render()
}

const placePiece = (index) => {
  board[index] = turn
}

const checkForWinner = () => {
  if (board[0] !== " " && board[0] === board[1] && board[0] === board[2]) {
    winner = true
    console.log("You win!")
    return
  } else if (
    board[3] !== " " &&
    board[3] === board[4] &&
    board[3] === board[5]
  ) {
    winner = true
    console.log("You win!")
    return
  } else if (
    board[6] !== " " &&
    board[6] === board[7] &&
    board[6] === board[8]
  ) {
    winner = true
    console.log("You win!")
    return
  } else if (
    board[0] !== " " &&
    board[0] === board[3] &&
    board[0] === board[6]
  ) {
    winner = true
    console.log("You win!")
    return
  } else if (
    board[1] !== " " &&
    board[1] === board[4] &&
    board[1] === board[7]
  ) {
    winner = true
    console.log("You win!")
    return
  } else if (
    board[2] !== " " &&
    board[2] === board[5] &&
    board[2] === board[8]
  ) {
    winner = true
    console.log("You win!")
    return
  } else if (
    board[0] !== " " &&
    board[0] === board[4] &&
    board[0] === board[8]
  ) {
    winner = true
    console.log("You win!")
    return
  } else if (
    board[6] !== " " &&
    board[6] === board[4] &&
    board[6] === board[2]
  ) {
    winner = true
    return
  }
}

const checkForTie = () => {
  if (winner === true) return
  //else if (!board.includes(" ")) {
  tie = true
  board.forEach((ele, index) => {
    if (ele === " ") tie = false
    // else {
    //   tie = true
    // }
  })
}
// tie = true
// } else tie = false

const switchPlayerTurn = () => {
  if (winner === true) return
  else if (turn === "X") {
    turn = "O"
  } else {
    turn = "X"
  }
}

const handleClick = (event) => {
  // console.log("it is working")
  sqaureIndex = event.target.id
  if (board[sqaureIndex] !== " " || winner === true) return
  placePiece(sqaureIndex)
  checkForWinner()
  checkForTie()
  switchPlayerTurn()
  console.log(board)
  render()
}

const updateBoard = () => {
  board.forEach((cell, index) => {
    const square = squareEls[index]
    square.textContent = cell
  })
}

const updateMessage = () => {
  if (winner === false && tie === false) {
    messageEl.textContent = `Continue Playing it's ${turn} turn`
  } else if (winner === false && tie === true) {
    messageEl.textContent = "it's a tie"
  } else {
    messageEl.textContent = `Player ${turn} You have won!`
  }
}

const render = () => {
  updateBoard()
  updateMessage()
}

init()

// Event Listeners
document.querySelectorAll(".sqr").forEach((square) => {
  square.addEventListener("click", handleClick)
})

resetBtnEl.addEventListener("click", init)
