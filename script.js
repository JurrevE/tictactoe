const GameBoard = (function GameBoard() {
    const board = [
        ["0,0", "0,1", "0,2"],
        ["1,0", "1,1", "1,2"],
        ["2,0", "2,1", "2,2"]
    ]
    console.log(board)
    return {
        getBoard: function () {
            return board;
        }
    }
})()

const players = {
    createPlayers: function () {
        const allowedMarkers = ["X", "O"]
        let player1 = {}
        let player2 = {}
        let player1marker;
        let player1name = prompt("Please enter your name", "player1")
        console.log(`player 1's name is: ${player1name}`)
        while (true) {
            player1marker = prompt("Please enter a marker, either: X or O", "X")
            if (allowedMarkers.includes(player1marker)) {
                break
            }
            else {
                alert("invalid marker! Choose between either X or O")
            }
        }
        console.log(`${player1name} Chose to play as: ${player1marker}`)
        const player2name = prompt("Please enter your name", "player2")
        console.log(`player 2's name is: ${player2name}`)
        const player2marker = player1marker === "X" ? "O" : "X";
        console.log(`${player2name} chose to play as: ${player2marker}`);

        player1 = {
            name: player1name,
            marker: player1marker
        },

            player2 = {
                name: player2name,
                marker: player2marker
            },

            getPlayerMarkersFromInside = function () { }
        return playermarkers = [player1marker, player2marker]
    }

}

const game = {
    board: GameBoard,

    getGameBoard: function () {
        return this.board.getBoard();
    },

    pushMarker: function () {
        const allowedspots = [0, 1, 2];
        const board = this.board.getBoard();

        let rowschoice, columnschoice;

        while (true) {
            rowschoice = parseInt(prompt("Please choose a number between (0-2) for the rows"));
            if (allowedspots.includes(rowschoice)) {
                break;
            } else {
                alert("PLEASE CHOOSE NUMBERS FROM 0-2");
            }
        }

        while (true) {
            columnschoice = parseInt(prompt("Please choose a number between (0-2) for the columns"));
            if (allowedspots.includes(columnschoice)) {
                break;
            } else {
                alert("PLEASE CHOOSE NUMBERS FROM 0-2");
            }
        }

        let activeplayer = playermarkers[0];
        console.log(activeplayer);

        if (board[rowschoice][columnschoice] === "O" || board[rowschoice][columnschoice] === "X") {
            console.log("kan niet kanker nerd")
        } else {
            board[rowschoice][columnschoice] = activeplayer
            console.log(board)
        }
        
        this.playerswitcher();
    },

    checkWin: function () {
        const board = this.board.getBoard();
        const markers = ["X", "O"]
        for (let marker of markers) {
            switch (true) {
                case //rows
                    (board[0][0] === marker && board[0][1] === marker && board[0][2] === marker) ||
                    (board[1][0] === marker && board[1][1] === marker && board[1][2] === marker) ||
                    (board[2][0] === marker && board[2][1] === marker && board[2][2] === marker):
                    console.log(`Marker: ${marker} is the Winner`);
                    return true;

                case //columns
                    (board[0][0] === marker && board[1][0] === marker && board[2][0] === marker) ||
                    (board[0][1] === marker && board[1][1] === marker && board[2][1] === marker) ||
                    (board[0][2] === marker && board[1][2] === marker && board[2][2] === marker):
                    console.log(`Marker: ${marker} is the Winner`);
                    return true;

                case //diagonals
                    (board[0][0] === marker && board[1][1] === marker && board[2][2] === marker) ||
                    (board[2][0] === marker && board[1][1] === marker && board[0][2] === marker):
                    console.log(`Marker: ${marker} is the Winner`);
                    return true;
            }
        }
        return false;
    },

    playerswitcher: function () {
        playermarkers.push(playermarkers.shift());
    }

}

let playgame = function () {
    players.createPlayers();

    let isGameOver = false; // Flag to track the game state

    const playNextMove = () => {
        if (!isGameOver) {
            game.pushMarker(); // Prompt the player for a move

            if (game.checkWin()) { // Check if there's a winner
                if (!isGameOver) {
                    console.log('Game Over!'); // Log a message for the end of the game only once
                    isGameOver = true; // Set the flag to true to indicate the game has ended
                    GameBoard.board = [
                        ["0,0", "0,1", "0,2"],
                        ["1,0", "1,1", "1,2"],
                        ["2,0", "2,1", "2,2"]
                    ]
                }
            } else {
                setTimeout(playNextMove, 4000); 
        }
    };

    
    playNextMove();
};

}

