import React, { useState } from "react";

import "../index.css";

function GameInfo(props) {
    const [startIsDisabled, setStartIsDisabled] = useState(false);
    const [resetIsDisabled, setResetIsDisabled] = useState(false);

    function startClicked() {
        setStartIsDisabled(true);
        setResetIsDisabled(false);

        props.startClicked();
    }

    function resetClicked() {
        setResetIsDisabled(true);
        setStartIsDisabled(false);

        props.resetClicked();
    }

    function playAgainClicked() {

        props.playAgainClicked();
    }

    return (
        <div>
            <h4>{props.gameInfo}</h4>
            <div>                                                                              
                <input type="button" id="start" disabled={startIsDisabled} onClick={startClicked} value="Start"/> 
                <input type="button" id="reset" disabled={resetIsDisabled} onClick={resetClicked} value="Reset"/> 
            </div>
            <input type="button" id="playAgain" className={props.playAgainIsHidden ? 'hidden' : ''}  onClick={playAgainClicked} value="Play Again?"/> 
        </div>
    );
}

export default GameInfo;