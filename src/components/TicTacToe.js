import React, { Component } from "react";

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

    board: ['', '', '',
        '', '', '',
        '', '', ''],
    totalMarkedCells: 0,
    whoseTurn: 'X',
    disableBoard: true,
    gameInfo: "Click Start",

    hideUnChecked: false
});

class TicTacToe extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ...buildInitialState()
        };

        this.startClicked = this.startClicked.bind(this);
        this.resetClicked = this.resetClicked.bind(this);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeHumanOrAI = this.onChangeHumanOrAI.bind(this);
        this.onChangeAIDifficulty = this.onChangeAIDifficulty.bind(this);

        this.cellClicked = this.cellClicked.bind(this);
    }

    startClicked() {
        this.setState({ hideUnChecked: true });
        this.setState({ disableBoard: false });

        if (this.state.Players[0].humanOrAI === 'AI') {
            this.AIMove();
        }
    }

    resetClicked() {
        console.log('reset');

        this.setState({ ...buildInitialState() });
    }

    onChangeName(event, id) {
        let players = [...this.state.Players];
        players[id].name = event.target.value;
        this.setState({ players });
    }

    onChangeHumanOrAI(event, id) {
        let players = [...this.state.Players];

        players[id].humanOrAI = event.target.value;

        if (event.target.value === "AI") {
            players[id].hideAIDifficultyChoice = false;
        } else {
            players[id].hideAIDifficultyChoice = true;
        }

        this.setState({ players });
    }

    onChangeAIDifficulty(event, id) {
        let players = [...this.state.Players];
        players[id].AIDifficulty = event.target.value;
        this.setState({ players });
    }

    cellClicked(event) {
        this.markCell(parseInt(event.target.id));
    }

    AIMove() {
        // AI MOVES
        if (this.state.Players[0].humanOrAI === 'AI') {
            if (this.state.Players[0].AIDifficulty === "Easy") {
                this.markCell(AI.Easy(this.state.board));
            } else if (this.state.Players[0].AIDifficulty === "Medium") {
                this.markCell(AI.Medium(this.state.board));
            }
        }
    }

    markCell(index) {
        if (this.state.board[index] === '') {
            let newBoard = [...this.state.board];

            newBoard[index] = this.state.whoseTurn;

            this.setState({ board: newBoard });

            this.setState({ totalMarkedCells: this.state.totalMarkedCells + 1 })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.checkForWinner(this.state.whoseTurn)) {
            if (this.state.Players[0].marker === this.state.whoseTurn) {
                /// player 1 wins
                console.log("player1 won");
            } else {
                // player 2 wins
                console.log('Player2 won');
            }

            // check to avoid infinite loop
            if (this.state.disableBoard === false) {
                this.setState({ disableBoard: true });
            }
        } else {
            this.nextPlayersTurn(prevState);
        }
    }

    checkForWinner(whoseTurnMarker) {
        if (this.state.totalMarkedCells === 9) {
            // game ends in tie
            console.log("tie")
            return true;
        }

        if (this.checkForWinningLine() === whoseTurnMarker) {
            return true;
        }

        return false;
    }

    checkForWinningLine() {
        // horizontal check
        for (let index = 0; index < 3; index++) {
            let a = this.state.board[0 + (index * 3)];
            let b = this.state.board[1 + (index * 3)];
            let c = this.state.board[2 + (index * 3)];

            if (a === b && a === c && b === c) {
                return a;
            }
        }

        // vertical check
        for (let index = 0; index < 3; index++) {
            let a = this.state.board[0 + index];
            let b = this.state.board[3 + index];
            let c = this.state.board[6 + index];

            if (a === b && a === c && b === c) {
                return a;
            }
        }

        // upper left to lower right diagonal check 
        if (this.state.board[0] === this.state.board[4] && this.state.board[0] === this.state.board[8] && this.state.board[4] === this.state.board[8]) {

            return this.state.board[0];
        }

        // upper right to lower left diagonal check
        if (this.state.board[2] === this.state.board[4] && this.state.board[2] === this.state.board[6] && this.state.board[4] === this.state.board[6]) {
            return this.state.board[2];
        }

        return '';
    }


    nextPlayersTurn(prevState) {
        if (this.state.whoseTurn === prevState.whoseTurn) {
            const nextTurn = this.state.whoseTurn === this.state.Players[0].marker ? this.state.Players[1].marker : this.state.Players[0].marker;
            
            this.setState({ whoseTurn: nextTurn });
        }
    }

    render() {
        return (
            <div>
                <div className="gameInfo">
                    <GameInfo gameInfo={this.state.gameInfo} startClicked={this.startClicked} resetClicked={this.resetClicked} />
                </div>

                <div className="mainGrid">
                    <Player Player={this.state.Players[0]} ID={0} changeName={this.onChangeName}
                        changeHumanOrAI={this.onChangeHumanOrAI} changeAIDifficulty={this.onChangeAIDifficulty}
                        hideUnchecked={this.state.hideUnChecked} />
                    <GameBoard board={this.state.board} disableBoard={this.state.disableBoard} cellClicked={this.cellClicked} />
                    <Player Player={this.state.Players[1]} ID={1} changeName={this.onChangeName}
                        changeHumanOrAI={this.onChangeHumanOrAI} changeAIDifficulty={this.onChangeAIDifficulty}
                        hideUnchecked={this.state.hideUnChecked} />
                </div>
            </div>
        );
    }
}

export default TicTacToe;