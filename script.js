//ALLE FUNCTIONALITEIT VAN DIT PROJECT ZOU MOETEN PASSEN IN OF; PLAYER, GAMEBOARD OF GAME OBJECT!!!!
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

})();

function Cell(value) {
    return value
}

function createPlayer(name, marker) {
    return {
        name: name,
        marker: marker
    }
}
const game = {
    pushO: function (rows, columns) {
        if (GameBoard.board[rows][columns] == "O" || GameBoard.board[rows][columns] == "X") {
            console.log("kan niet kanker nerd")
        } else {
            GameBoard.board[rows][columns] = "O"
            console.log(GameBoard.board)
        }
    },
    
    pushX: function (rows, columns) {
        if (GameBoard.board[rows][columns] == "O" || GameBoard.board[rows][columns] == "X") {
            console.log("kan niet kanker nerd")
        } else {
            GameBoard.board[rows][columns] = "X"
            console.log(GameBoard.board)
        }
    }
}




