// AI Gets Random Empty Cell Index
export function Easy(board) {
    let openCells = [];

    for (let index = 0; index < (board).length; index++) {
        if (board[index] === '') {
            openCells.push(index);
        }
    }

    const randomIndex = Math.floor(Math.random() * openCells.length);

    return openCells[randomIndex];
}

export function Medium(board) {
    // take middle cell
    if (board[4] === '') {
        return 4;
    }

    let boardCellValues = Array(9).fill(0);

    for (let index = 0; index < board.length; index++) {
        if (board[index] == '') {
            boardCellValues[index] += 1;
        }
    }

    // check diaginal for matchs
    // upper left to lower right diagonal check 
    if ((board[0] === board[4] && board[0] !== '') || (board[0] === board[8] && board[0] !== '') || (board[4] === board[8]) && board[4] !== '') {
        if (board[0] === '') {
            boardCellValues[0] += 2;
        }
        if (board[4] === '') {
            boardCellValues[4] += 2;
        }
        if (board[8] === '') {
            boardCellValues[8] += 2;
        }
    }
    
    // upper right to lower left diagonal check
    if ((board[2] === board[4] && board[2] !== '') || (board[2] === board[6] && board[2] !== '') || (board[4] === board[6]) && board[4] !== '') {
        if (board[2] === '') {
            boardCellValues[2] += 2;
        }
        if (board[4] === '') {
            boardCellValues[4] += 2;
        }
        if (board[6] === '') {
            boardCellValues[6] += 2;
        }
    }

    // check horizontal for matches
    for (let index = 0; index < 3; index++) {
        let a = board[0 + (index * 3)];
        let b = board[1 + (index * 3)];
        let c = board[2 + (index * 3)];

        if ((a === b && a !== '') || (a === c && a !== '') || (b === c && b !== '')) {
            if (board[0 + (index * 3)] === '') {
                boardCellValues[0 + (index * 3)] += 2;
            }
            if (board[1 + (index * 3)] === '') {
                boardCellValues[1 + (index * 3)] += 2;
            }
            if (board[2 + (index * 3)] === '') {
                boardCellValues[2 + (index * 3)] += 2;
            }
        }
    }

    // check vertical for matches
    for (let index = 0; index < 3; index++) {
        let a = board[0 + index];
        let b = board[3 + index];
        let c = board[6 + index];

        if ((a === b && a !== '') || (a === c && a !== '') || (b === c && b !== '')) {
            if (board[0 + index] === '') {
                boardCellValues[0 + index] += 2;
            }
            if (board[3 + index] === '') {
                boardCellValues[3 + index] += 2;
            }
            if (board[6 + index] === '') {
                boardCellValues[6 + index] += 2;
            }
        }
    }

    // randomly pick a max value
    const maxValueIndexes = [];

    boardCellValues.forEach(function(value, index) {
        if (value === Math.max(...boardCellValues)) {
            maxValueIndexes.push(index);
        }
    });

    console.log(boardCellValues);

    return maxValueIndexes[Math.floor(Math.random() * maxValueIndexes.length)];
}