import React, { Component } from "react";

import GameInfo from "./GameInfo"
import Player from "./Player"
import GameBoard from "./GameBoard"
import "../index.css";

const buildInitialState = () => ({
    Players: [
        {id: 0,
        name: "Player 1",
        marker: "X",
        humanOrAI: "Human",
        hideAIDifficultyChoice: true,
        AIDifficulty: "Easy",
        totalWins: 0},

        {id: 1,
        name: "Player 2",
        marker: "O",
        humanOrAI: "Human",
        hideAIDifficultyChoice: true,
        AIDifficulty: "Easy",
        totalWins: 0}],

    board: ['', '', '', 
            '', '', '', 
            '', '', ''],
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
    }

    startClicked() {
        this.setState({hideUnChecked: true});
        this.setState({disableBoard: false});
    }

    resetClicked() {
        console.log('reset');

        this.setState({...buildInitialState()});
    }

    onChangeName(event, id) {
        let players = [...this.state.Players];
        players[id].name = event.target.value;
        this.setState({players});
    }

    onChangeHumanOrAI(event, id) {
        let players = [...this.state.Players];

        players[id].humanOrAI = event.target.value; 
        
        if (event.target.value === "AI") {
            players[id].hideAIDifficultyChoice = false;
        } else {
            players[id].hideAIDifficultyChoice = true;
        }

        this.setState({players});
    }

    onChangeAIDifficulty(event, id) {
        let players = [...this.state.Players];
        players[id].AIDifficulty = event.target.value;
        this.setState({players});
    }

    render() {
        return (
            <div>
                <div className="gameInfo">
                    <GameInfo gameInfo={this.state.gameInfo} startClicked={this.startClicked} resetClicked={this.resetClicked}/>
                </div>
                
                <div className="mainGrid">
                    <Player Player={this.state.Players[0]} ID={0} changeName={this.onChangeName} 
                            changeHumanOrAI={this.onChangeHumanOrAI} changeAIDifficulty={this.onChangeAIDifficulty}
                            hideUnchecked={this.state.hideUnChecked}/>
                    <GameBoard board={this.state.board} disableBoard={this.state.disableBoard}/>
                    <Player Player={this.state.Players[1]} ID={1} changeName={this.onChangeName} 
                            changeHumanOrAI={this.onChangeHumanOrAI} changeAIDifficulty={this.onChangeAIDifficulty}
                            hideUnchecked={this.state.hideUnChecked}/>
                </div>
            </div>
        );
    }
}

export default TicTacToe;