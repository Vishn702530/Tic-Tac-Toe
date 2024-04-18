
let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];

function winnerGame() {
    const wiiningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 5], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]];

    for (let combo of wiiningCombos) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }
    return false;
}

function drawGame() {
    return board.every(cell => cell != '');
}


function gamePlay(cellIndex) {
    if (board[cellIndex] === '') {
        board[cellIndex] = currentPlayer;
        renderBoard();
        if (winnerGame()) {
            alert(`${currentPlayer} wins the game`)
           
        }

        else if (drawGame()) {
            alert('game ended in draw');
        }
        else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function renderBoard(){
const cells =document.querySelectorAll('.cell');
cells.forEach((cell,index) =>{
    cell.textContent = board[index];
});
}


function cellHandler() {
    const cellIndex = this.dataset.index;
    gamePlay(cellIndex);
}
document.querySelectorAll('.cell').forEach(cell=> {
    cell.addEventListener("click", cellHandler);
});

function resetGame(){
    currentPlayer = 'X'
    board = ['', '', '', '', '', '', '', '', ''];
    renderBoard();
}

document.getElementById('reset').addEventListener("click",resetGame);

