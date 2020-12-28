import React, { Component } from "react";

import "../index.css";

class GameInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            startIsDisabled: false,
            resetIsDisabled: false,
            // playAgainIsHidden: true
        };

        this.startClicked = this.startClicked.bind(this);
        this.resetClicked = this.resetClicked.bind(this);
        this.playAgainClicked = this.playAgainClicked.bind(this);
    }

    startClicked() {
        this.setState({startIsDisabled: true});
        this.setState({resetIsDisabled: false});

        this.props.startClicked();
    }

    resetClicked() {
        this.setState({resetIsDisabled: true});
        this.setState({startIsDisabled: false});

        this.props.resetClicked();
    }

    playAgainClicked() {

        this.props.playAgainClicked();
    }


    render() {
        return (
            <div>
                <h4>{this.props.gameInfo}</h4>
                <div>                                                                              
                    <input type="button" id="start" disabled={this.state.startIsDisabled} onClick={this.startClicked} value="Start"/> 
                    <input type="button" id="reset" disabled={this.state.resetIsDisabled} onClick={this.resetClicked} value="Reset"/> 
                </div>
                <input type="button" id="playAgain" className={this.props.playAgainIsHidden ? 'hidden' : ''}  onClick={this.playAgainClicked} value="Play Again?"/> 
            </div>
        );
    }
}

export default GameInfo;