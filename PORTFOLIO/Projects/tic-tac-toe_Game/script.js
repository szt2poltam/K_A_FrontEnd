const board = document.getElementById('board');
const status = document.getElementById('status');

let boardState = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';

board.addEventListener('click', handleCellClick);

function handleCellClick(event) {
    const index = event.target.dataset.index;
    if (boardState[index] === '' && !checkWinner()) {
        boardState[index] = currentPlayer;
        event.target.innerText = currentPlayer;
        event.target.style.pointerEvents = 'none';
        if (checkWinner()) {
            status.textContent = `Player ${checkWinner()} wins!`;
            disableBoard();
        } else if (!boardState.includes('')) {
            status.textContent = 'It\'s a draw!';
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            status.textContent = `Next player: ${currentPlayer}`;
            if (currentPlayer === 'O') {
                computerMove();
            }
        }
    }
}

function computerMove() {
    const winningMoves = findWinningMoves('O');
    if (winningMoves.length > 0) {
        const randomWinningMove = winningMoves[Math.floor(Math.random() * winningMoves.length)];
        const cell = board.children[randomWinningMove];
        setTimeout(() => {
            cell.click();
        }, 500);
    } else {
        const emptyCells = [];
        for (let i = 0; i < 9; i++) {
            if (boardState[i] === '') {
                emptyCells.push(i);
            }
        }

        const randomIndex = Math.floor(Math.random() * emptyCells.length);
        const randomCell = board.children[emptyCells[randomIndex]];
        if (randomCell) {
            setTimeout(() => {
                randomCell.click();
            }, 500);
        }
    }
}

function findWinningMoves(player) {
    const winningMoves = [];
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]            
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (boardState[a] === player && boardState[b] === player && boardState[c] === '') {
            winningMoves.push(c);
        } else if (boardState[a] === player && boardState[c] === player && boardState[b] === '') {
            winningMoves.push(b);
        } else if (boardState[b] === player && boardState[c] === player && boardState[a] === '') {
            winningMoves.push(a);
        }
    }

    return winningMoves;
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]            
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
            return boardState[a];
        }
    }

    return null;
}

function resetBoard() {
    boardState = ['', '', '', '', '', '', '', '', ''];
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.innerText = '';
        cell.style.pointerEvents = 'auto';
    });
    currentPlayer = 'X';
    status.textContent = `Next player: ${currentPlayer}`;
}

function disableBoard() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.style.pointerEvents = 'none';
    });
}
