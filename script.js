// Module for managing the game board
const GameBoard = (function GameBoard() {
    // Initial game board setup
    const board = [
        ["0,0", "0,1", "0,2"],
        ["1,0", "1,1", "1,2"],
        ["2,0", "2,1", "2,2"]
    ];
    console.log(board);

    // Exposed methods
    return {
        getBoard: function () {
            return board;
        }
    };
})();

// Module for managing player creation
const players = {
    createPlayers: function () {
        const allowedMarkers = ["X", "O"];
        let player1 = {};
        let player2 = {};
        let player1marker;

        // Player 1 setup
        let player1name = prompt("Please enter your name", "player1");
        console.log(`player 1's name is: ${player1name}`);
        while (true) {
            player1marker = prompt("Please enter a marker, either: X or O", "X");
            if (allowedMarkers.includes(player1marker)) {
                break;
            } else {
                alert("invalid marker! Choose between either X or O");
            }
        }
        console.log(`${player1name} Chose to play as: ${player1marker}`);

        // Player 2 setup
        const player2name = prompt("Please enter your name", "player2");
        console.log(`player 2's name is: ${player2name}`);
        const player2marker = player1marker === "X" ? "O" : "X";
        console.log(`${player2name} chose to play as: ${player2marker}`);

        // Players object setup
        player1 = {
            name: player1name,
            marker: player1marker
        };

        player2 = {
            name: player2name,
            marker: player2marker
        };

        // Dummy function and return
        getPlayerMarkersFromInside = function () { };
        return playermarkers = [player1marker, player2marker];
    }
};

// Main game module
const game = {
    board: GameBoard,

    // Retrieve the current game board
    getGameBoard: function () {
        return this.board.getBoard();
    },

    // Push marker to the board based on player input
    pushMarker: function () {
        const allowedspots = [0, 1, 2];
        const board = this.board.getBoard();

        let rowschoice, columnschoice;

        // Get valid row choice from the player
        while (true) {
            rowschoice = parseInt(prompt("Please choose a number between (0-2) for the rows"));
            if (allowedspots.includes(rowschoice)) {
                break;
            } else {
                alert("PLEASE CHOOSE NUMBERS FROM 0-2");
            }
        }

        // Get valid column choice from the player
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

        // Check if the chosen spot is already occupied
        if (board[rowschoice][columnschoice] === "O" || board[rowschoice][columnschoice] === "X") {
            console.log("Spot already taken");
        } else {
            // Update the board with the player's marker
            board[rowschoice][columnschoice] = activeplayer;
            console.log(board);
        }
        // Switch to the next player's turn
        this.playerswitcher();
    },

    // Check if a player has won
    checkWin: function () {
        const board = this.board.getBoard();
        const markers = ["X", "O"];
        for (let marker of markers) {
            switch (true) {
                // Check for wins in rows
                case (board[0][0] === marker && board[0][1] === marker && board[0][2] === marker) ||
                     (board[1][0] === marker && board[1][1] === marker && board[1][2] === marker) ||
                     (board[2][0] === marker && board[2][1] === marker && board[2][2] === marker):
                    console.log(`Marker: ${marker} is the Winner`);
                    return true;

                // Check for wins in columns
                case (board[0][0] === marker && board[1][0] === marker && board[2][0] === marker) ||
                     (board[0][1] === marker && board[1][1] === marker && board[2][1] === marker) ||
                     (board[0][2] === marker && board[1][2] === marker && board[2][2] === marker):
                    console.log(`Marker: ${marker} is the Winner`);
                    return true;

                // Check for wins in diagonals
                case (board[0][0] === marker && board[1][1] === marker && board[2][2] === marker) ||
                     (board[2][0] === marker && board[1][1] === marker && board[0][2] === marker):
                    console.log(`Marker: ${marker} is the Winner`);
                    return true;
            }
        }
        return false;
    },

    // Check if the game is a draw
    checkDraw: function () {
        const board = this.getGameBoard(); 
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] !== "X" && board[i][j] !== "O") {
                    return false; 
                }
            }
        }
        return !this.checkWin(); 
    },

    // Reset the game board
    resetBoard: function () {
        const board = [
            ["0,0", "0,1", "0,2"],
            ["1,0", "1,1", "1,2"],
            ["2,0", "2,1", "2,2"]
        ];
        console.log(board);
    },

    // Switch player markers
    playerswitcher: function () {
        playermarkers.push(playermarkers.shift());
    },

    // Start the game
    playgame: function () {
        players.createPlayers();
        let isGameOver = false;
        const playNextMove = () => {
            if (!isGameOver) {
                game.pushMarker();
                if (game.checkWin()) {
                    console.log('Game Over! There is a winner!');
                    isGameOver = true;
                    game.resetBoard();
                } else if (game.checkDraw()) {
                    console.log('Game Over! It\'s a draw!');
                    isGameOver = true;
                    game.resetBoard();
                } else {
                    setTimeout(playNextMove, 2000);
                }
            }
        };
        playNextMove();
    }
};

// Module for drawing the game board on the web page
const drawboard = {
    board: GameBoard,

    // Build the HTML representation of the game board
    buildboard: function () {
        let tictactoeboard = document.getElementById("tictactoeboard");
        const gameBoard = this.board.getBoard(); 

        gameBoard.forEach(row => {
            row.forEach(item => {
                const div = document.createElement("div");
                div.classList.add("cell");
                div.textContent = item; 

                // Add click event listener for each cell
                div.addEventListener("click", function () {
                    console.log(`You clicked on div: ${item}`);
                });

                tictactoeboard.appendChild(div);
            });
        });
    }
};
