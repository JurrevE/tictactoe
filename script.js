//ALLE FUNCTIONALITEIT VAN DIT PROJECT ZOU MOETEN PASSEN IN OF; PLAYER, GAMEBOARD OF GAME OBJECT!!!!
//Gameboard functionality!
const GameBoard = (function GameBoard() {
    const rows = 3;
    const columns = 3;
    const board = [[
    ]];

    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
            board[i].push("");
        }
    }
    return {
        board: board
    }
})(); console.log(GameBoard.board)

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
        game.checkWin()
    },

    pushX: function (rows, columns) {
        if (GameBoard.board[rows][columns] == "O" || GameBoard.board[rows][columns] == "X") {
            console.log("Cell already occupied, please choose another.")
        } else {
            GameBoard.board[rows][columns] = "X"
            console.log(GameBoard.board)
        }
        game.checkWin()
        
    }, 

    checkWin: function () {
        const board = GameBoard.board
        const markers = ["X", "O"]
        for (let marker of markers) {
            switch (true) {
                case 
                (board[0][0] === marker && board[0][1] === marker && board[0][2] === marker) || 
                (board[1][0] === marker && board[1][1] === marker && board[1][2] === marker) ||
                (board[2][0] === marker && board[2][1] === marker && board[2][2] === marker):
                    console.log("Winner");
                    return true;

                case 
                (board[0][0] === marker && board[1][0] === marker && board[2][0] === marker) || 
                (board[0][1] === marker && board[1][1] === marker && board[2][1] === marker) ||
                (board[0][2] === marker && board[1][2] === marker && board[2][2] === marker):      
                    console.log("winner") 
                    return true;

                case 
                (board[0][0] === marker && board[1][1] === marker && board[2][2] === marker) || 
                (board[2][0] === marker && board[1][1] === marker && board[0][2] === marker):
                    console.log("winner")
                    return true;
                }
            }
    return false;
    }
    
}

    
    
    
    
    
    
    
    
    
    
    





