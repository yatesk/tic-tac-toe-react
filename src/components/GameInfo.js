import React, { Component } from "react";

import "../index.css";

class GameInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "Click Start",
            startIsActive: true,
            resetIsActive: false,
            playAgainIsHidden: true
        };
    }

    render() {
        return (
            <div>
                <h4>{this.state.text}</h4>
                <div>
                    <input type="button" id="start" value="Start"/> 
                    <input type="button" id="reset" value="Reset"/> 
                </div>
                <input type="button" className={this.state.playAgainIsHidden ? 'hidden' : ''} id="playAgain" value="Play Again?"/> 
            </div>
        );
    }
}


export default GameInfo;