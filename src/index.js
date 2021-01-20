import React, { useState } from "react";
import ReactDOM from "react-dom";

import TicTacToe from "./components/TicTacToe.js"
import "./index.css";

var destination = document.getElementById("container");

function App() {
    const [gameId, setGameId] = useState(1);

    return (
        <div>
            <h1>Tic-Tac-Toe</h1>
            <TicTacToe key={gameId} resetGame={() => setGameId(gameId + 1)}/>
        </div>
    );
}

ReactDOM.render(
    <App />,
    destination
); 