//ALLE FUNCTIONALITEIT VAN DIT PROJECT ZOU MOETEN PASSEN IN OF; PLAYER, GAMEBOARD OF GAME OBJECT!!!!
(function GameBoard() {
    const rows = 3;
    const columns = 3;
    gameboard = [];

    for (let i = 0; i < rows; i++) {
        gameboard[i] = [];
        for (let j = 0; j < columns; j++) {
        gameboard[i].push(Cell());
        
        }
    }
    console.log(gameboard)
})();

function Cell() {
    console.log("meowmeow")
}

function createPlayer(name, marker) {
    return {
        player:name,
        marker:marker
    }
}
let player1 = createPlayer("Jurre", "x")
const player2 = createPlayer("Maja", "o")
