//ALLE FUNCTIONALITEIT VAN DIT PROJECT ZOU MOETEN PASSEN IN OF; PLAYER, GAMEBOARD OF GAME OBJECT!!!!
//Gameboard functionality!
const GameBoard = (function GameBoard() {
    const rows = 3;
    const columns = 3;
    const board = [];

    let counter = 1;

    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
            board[i].push(Cell(counter));
            counter++
        }

    }
    return {
        board: board
    }

})(); console.log(GameBoard.board)

function Cell(value) {
    return value
}

//player functionality
const player = {
    createPlayer: function (name, marker) {
        return {
            name: name,
            marker: marker
        }
    }
}

//Game functionality
const game = {
    pushO: function (rows, columns) {
        if (GameBoard.board[rows][columns] == "O" || GameBoard.board[rows][columns] == "X") {
            console.log("Cell already occupied, please choose another.")
        } else {
            GameBoard.board[rows][columns] = "O"
            console.log(GameBoard.board)
        }
    },

    pushX: function (rows, columns) {
        if (GameBoard.board[rows][columns] == "O" || GameBoard.board[rows][columns] == "X") {
            console.log("Cell already occupied, please choose another.")
        } else {
            GameBoard.board[rows][columns] = "X"
            console.log(GameBoard.board)
        }
    }





}
