import React, { useState } from "react";

import GameInfo from "./GameInfo"
import Player from "./Player"
import GameBoard from "./GameBoard"

import "../index.css";

const buildInitialPlayers = () => ([
        {
            id: 0,
            marker: "X",
            humanOrAI: "Human",
            hideAIDifficultyChoice: true,
            AIDifficulty: "Easy",
            totalWins: 0
        },
        {
            id: 1,
            marker: "O",
            humanOrAI: "Human",
            hideAIDifficultyChoice: true,
            AIDifficulty: "Easy",
            totalWins: 0
        }]); 

function TicTacToe(props) {
    const [players, setPlayers] = useState(buildInitialPlayers());

    const [disableBoard, setDisableBoard] = useState(true);
    const [hideUnchecked, setHideUnchecked] = useState(false);
    const [playAgainIsHidden, setPlayAgainIsHidden] = useState(true);

    const [whoseTurn, setWhoseTurn] = useState(0);

    const [gameInfo, setGameInfo] = useState("Click Start");

    const [board, setBoard] = useState(Array(9).fill(''));

    function startClicked() {
        setHideUnchecked(true);
        setDisableBoard(false);

        setGameInfo(players[whoseTurn].marker + "'s turn.");
    }

    function playAgainClicked() {
        setBoard(Array(9).fill(''));
        
        setPlayAgainIsHidden(true);
        setDisableBoard(false);
        setGameInfo(players[whoseTurn].marker + "'s turn.");

        // loser goes first next game
        const nextTurn = 1 - whoseTurn;
        setWhoseTurn(nextTurn);
    }

    function onChangeHumanOrAI(event, id) {
        let newPlayers = [...players];

        players[id].humanOrAI = event.target.value;

        if (event.target.value === "AI") {
            players[id].hideAIDifficultyChoice = false;
        } else {
            players[id].hideAIDifficultyChoice = true;
        }

        setPlayers(newPlayers);
    }

    function onChangeAIDifficulty(event, id) {
        let newPlayers = [...players];
        players[id].AIDifficulty = event.target.value;

        setPlayers(newPlayers);
    }

    function gameOver(winner) {
        if (winner === 'tie') {
            setGameInfo("Tie.");
        }
        /// player 1 wins
        else if (players[0].marker === winner) {
            let newPlayers = players;
            newPlayers[0].totalWins += 1;

            setPlayers(newPlayers);
            setGameInfo(players[0].marker + " won!");
            nextPlayersTurn();
        } 
        // player 2 wins
        else if (players[1].marker === winner) {
            let newPlayers = players;
            newPlayers[1].totalWins += 1;

            setPlayers(newPlayers);

            setGameInfo(players[1].marker + " won!");

            nextPlayersTurn();
        }

        setDisableBoard(true);
        setPlayAgainIsHidden(false);
    }

    function nextPlayersTurn() {            
        const nextTurn = 1 - whoseTurn;

        setWhoseTurn(nextTurn);
    }

    return (
        <div>
            <div className="gameInfo">
                <GameInfo gameInfo={gameInfo} 
                    playAgainIsHidden={playAgainIsHidden} 
                    startClicked={startClicked} 
                    resetGame={props.resetGame} 
                    playAgainClicked={playAgainClicked}/>
            </div>
            <div className="mainGrid">
                <Player thePlayer={players[0]}
                    changeHumanOrAI={onChangeHumanOrAI} 
                    changeAIDifficulty={onChangeAIDifficulty}
                    hideUnchecked={hideUnchecked} />
                <GameBoard board={board} 
                    setBoard={setBoard} 
                    disableBoard={disableBoard} 
                    whoseTurn={whoseTurn} 
                    nextTurn={nextPlayersTurn} 
                    gameOver={gameOver} 
                    setGameInfo={setGameInfo} 
                    players={players}/>
                <Player thePlayer={players[1]}
                    changeHumanOrAI={onChangeHumanOrAI} 
                    changeAIDifficulty={onChangeAIDifficulty}
                    hideUnchecked={hideUnchecked} />
            </div>
        </div>
    );
}

export default TicTacToe;