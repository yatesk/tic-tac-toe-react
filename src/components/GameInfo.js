import React, { Component } from "react";

import "../index.css";

class GameInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "Click Start",
            startIsDisabled: false,
            resetIsDisabled: false,
            playAgainIsHidden: true
        };

        this.startClicked = this.startClicked.bind(this);
        this.resetClicked = this.resetClicked.bind(this);
    }

    startClicked() {
        this.setState({startIsDisabled: true});

        this.props.startClicked();
    }

    resetClicked() {
        this.setState({resetIsDisabled: true});

        this.props.resetClicked();
    }

    render() {
        return (
            <div>
                <h4>{this.state.text}</h4>
                <div>
                    <input type="button" id="start" disabled={this.state.startIsDisabled} onClick={this.startClicked} value="Start"/> 
                    <input type="button" id="reset" disabled={this.state.resetIsDisabled} onClick={this.resetClicked} value="Reset"/> 
                </div>
                <input type="button" className={this.state.playAgainIsHidden ? 'hidden' : ''} id="playAgain" value="Play Again?"/> 
            </div>
        );
    }
}

export default GameInfo;