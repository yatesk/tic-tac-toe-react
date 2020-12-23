import React, { Component } from "react";

import GameInfo from "./GameInfo"
import Player from "./Player"
import GameBoard from "./GameBoard"
import "../index.css";

class TicTacToe extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <div>
                <div className="gameInfo">
                    <GameInfo />
                </div>
                
                <div className="mainGrid">
                    <Player id='1'/>
                    <GameBoard />
                    <Player id='2'/>
                </div>
            </div>
        );
    }
}

export default TicTacToe;