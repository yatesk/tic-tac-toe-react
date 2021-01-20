import React, { useEffect } from "react";

import "../index.css";
import BoardSquare from "./BoardSquare";
import * as AI from "../AI.js"

function GameBoard({board, setBoard, disableBoard, whoseTurn, nextTurn, gameOver, setGameInfo, players}) {
    const draw = totalMarkedCells() === 9;

    function totalMarkedCells() {
        let count = 0;
        for (let index = 0; index < board.length; index++) {
            if (board[index] !== '') {
                count += 1;
            }
        }
        return count;
    }

    function AIMove() {
        // AI MOVES
        if (players[whoseTurn].humanOrAI === 'AI') {
            if (players[whoseTurn].AIDifficulty === "Easy") {
                updateBoard(AI.Easy(board));
            } else if (players[whoseTurn].AIDifficulty === "Medium") {
                updateBoard(AI.Medium(board));
            }
        }
    }

    function updateBoard(cellIndex) {
        if (board[cellIndex] === '') {
            const nextBoard = board.slice();
            nextBoard[cellIndex] = players[whoseTurn].marker;
            setBoard(nextBoard);
            nextTurn();
        }  
    }

    function checkForWinningLine() {
        // horizontal check
        for (let index = 0; index < 3; index++) {
            let a = board[0 + (index * 3)];
            let b = board[1 + (index * 3)];
            let c = board[2 + (index * 3)];

            if (a === b && a === c && b === c) {
                return a;
            }
        }

        // vertical check
        for (let index = 0; index < 3; index++) {
            let a = board[0 + index];
            let b = board[3 + index];
            let c = board[6 + index];

            if (a === b && a === c && b === c) {
                return a;
            }
        }

        // upper left to lower right diagonal check 
        if (board[0] === board[4] && board[0] === board[8] && board[4] === board[8]) {

            return board[0];
        }

        // upper right to lower left diagonal check
        if (board[2] === board[4] && board[2] === board[6] && board[4] === board[6]) {
            return board[2];
        }

        return '';
    }

    useEffect(() => {
        if (disableBoard===false) {
            let checkForWinner = checkForWinningLine();
            if (checkForWinner !== '' ) {
                gameOver(checkForWinner);
            }
            else if (draw) {
                gameOver('tie');
            } 
            else {
                setGameInfo(players[whoseTurn].marker + "'s turn.")
                AIMove();
            }
        }
    }, [board, disableBoard]);

    function renderBoardSquare(cellIndex) {
        return <BoardSquare 
                value={board[cellIndex]} 
                disableBoard={disableBoard}
                onClick={() => {
                    updateBoard(cellIndex);
                }}
                />;
    }

    return (
        <div className="gameBoardGrid">
            {renderBoardSquare(0)}
            {renderBoardSquare(1)}
            {renderBoardSquare(2)}

            {renderBoardSquare(3)}
            {renderBoardSquare(4)}
            {renderBoardSquare(5)}

            {renderBoardSquare(6)}
            {renderBoardSquare(7)}
            {renderBoardSquare(8)}
        </div>
    );
}

export default GameBoard;