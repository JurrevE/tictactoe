//gameoboard, displaycontroller, 
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
})()

function Cell() {
}