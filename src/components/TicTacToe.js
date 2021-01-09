import React, { useEffect, useState  } from "react";

import GameInfo from "./GameInfo"
import Player from "./Player"
import GameBoard from "./GameBoard"
import "../index.css";
import * as AI from "../AI.js"

const buildInitialState = () => ({
    Players: [
        {
            id: 0,
            name: "Player 1",
            marker: "X",
            humanOrAI: "Human",
            hideAIDifficultyChoice: true,
            AIDifficulty: "Easy",
            totalWins: 0
        },

        {
            id: 1,
            name: "Player 2",
            marker: "O",
            humanOrAI: "Human",
            hideAIDifficultyChoice: true,
            AIDifficulty: "Easy",
            totalWins: 0
        }],
});

function TicTacToe() {
    const [theState, setTheState] = useState({...buildInitialState()});

    const [disableBoard, setDisableBoard] = useState(true);
    const [hideUnchecked, setHideUnchecked] = useState(false);
    const [playAgainIsHidden, setPlayAgainIsHidden] = useState(true);

    const [whoseTurn, setWhoseTurn] = useState(0);
    const [totalMarkedCells, setTotalMarkedCells] = useState(0);

    const [gameInfo, setGameInfo] = useState("Click Start");

    const [board, setBoard] = useState(['', '', '',
                                        '', '', '',
                                        '', '', '']);

    function startClicked() {
        setHideUnchecked(true);
        setDisableBoard(false);

        if (theState.Players[0].humanOrAI === 'AI') {
            AIMove();
        }
    }

    function resetClicked() {
        setHideUnchecked(false);
        setDisableBoard(true);

        setTheState({...buildInitialState()});
    }

    function playAgainClicked() {
        const newBoard = [  '', '', '',
                            '', '', '',
                            '', '', ''];

        setBoard(newBoard);
        
        setPlayAgainIsHidden(true);

        // loser goes first next game
        const nextTurn = 1 - whoseTurn;

        setWhoseTurn(nextTurn);
    }

    function onChangeName(event, id) {
         let players = [...theState.Players];
         players[id].name = event.target.value;

         setTheState({...theState, Players: players});
    }

    function onChangeHumanOrAI(event, id) {
        let players = [...theState.Players];

        players[id].humanOrAI = event.target.value;

        if (event.target.value === "AI") {
            players[id].hideAIDifficultyChoice = false;
        } else {
            players[id].hideAIDifficultyChoice = true;
        }

        setTheState({...theState, Players: players});
    }

    function onChangeAIDifficulty(event, id) {
        let players = [...this.state.Players];
        players[id].AIDifficulty = event.target.value;

        setTheState({...theState, Players: players});
    }

    function cellClicked(event) {
         markCell(parseInt(event.target.id));
    }

    function AIMove() {
        // AI MOVES
        if (theState.Players[whoseTurn].humanOrAI === 'AI') {
            if (theState.Players[whoseTurn].AIDifficulty === "Easy") {
                console.log("p1 easy");
                markCell(AI.Easy(board));
            } else if (theState.Players[whoseTurn].AIDifficulty === "Medium") {
                console.log("p1 medium");
                markCell(AI.Medium(board));
            }
        }
    }

    function markCell(index) {
        if (board[index] === '') {
            let newBoard = [...board];

            newBoard[index] = theState.Players[whoseTurn].marker;

            setBoard(newBoard);
            setTotalMarkedCells(totalMarkedCells + 1);
        }
    }

    useEffect(() => {
        if (checkForWinner(theState.Players[whoseTurn].marker)) {
            gameOver();
        } 
        
        // MAKE AN ELSE IF   
        else {
            nextPlayersTurn();
            AIMove();
        }

        // } else if(theState.totalMarkedCells != prevState.totalMarkedCells){
        //     nextPlayersTurn(prevState);
        //     AIMove();
        // }

    });

    // componentDidUpdate(prevProps, prevState) {
    //     if (this.checkForWinner(this.state.Players[this.state.whoseTurn].marker)) {
    //         this.gameOver();
    //     } else if(this.state.totalMarkedCells != prevState.totalMarkedCells){
    //         this.nextPlayersTurn(prevState);
    //         this.AIMove();
    //     }
    // }

    function gameOver() {
        if (totalMarkedCells === 9) {
            // to avoid infinite loop
            setGameInfo("Tie.");
        }
        /// player 1 wins
        else if (theState.Players[0].marker === theState.Players[whoseTurn].marker) {
            setStateOnlyWhenValueChanged('Players[0].totalWins', 55);
            setGameInfo(theState.Players[0].name + " won!");
        } 
        // player 2 wins
        else if (theState.Players[1].marker === theState.Players[whoseTurn].marker) {
            setGameInfo(theState.Players[1].name + " won!");
        }

        setDisableBoard(true);
        setPlayAgainIsHidden(false);
    }

    // Prevents componentDidUpdate from entering an infinite loop
    function setStateOnlyWhenValueChanged(property, value) {
        if (theState[property] !== value) {
            setTheState({...theState, [property]: value});
        }
    }

    // // componentWillUpdate(object nextProps, object nextState)
    // // instead - Using useState with useEffect

    function checkForWinner(whoseTurnMarker) {
        if (totalMarkedCells === 9) {
            // game ends in tie - no winner
            return true;
        }

        if (checkForWinningLine() === whoseTurnMarker) {
            return true;
        }

        return false;
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

    function nextPlayersTurn() {
     //   if (theState.whoseTurn === prevState.whoseTurn) {
            // const nextTurn = this.state.whoseTurn === this.state.Players[0].marker ? this.state.Players[1].marker : this.state.Players[0].marker;
            const nextTurn = 1 - whoseTurn;

            setWhoseTurn(nextTurn);
     //   }
    }

    return (
        <div>
            <div className="gameInfo">
                <GameInfo gameInfo={gameInfo} playAgainIsHidden={playAgainIsHidden} startClicked={startClicked} resetClicked={resetClicked} playAgainClicked={playAgainClicked}/>
            </div>

            <div className="mainGrid">
                <Player Player={theState.Players[0]} changeName={onChangeName}
                    changeHumanOrAI={onChangeHumanOrAI} changeAIDifficulty={onChangeAIDifficulty}
                    hideUnchecked={hideUnchecked} />
                <GameBoard board={board} disableBoard={disableBoard} cellClicked={cellClicked} />
                <Player Player={theState.Players[1]} changeName={onChangeName}
                    changeHumanOrAI={onChangeHumanOrAI} changeAIDifficulty={onChangeAIDifficulty}
                    hideUnchecked={hideUnchecked} />
            </div>
        </div>
    );

}

export default TicTacToe;