import React from "react";
import ReactDOM from "react-dom";

import TicTacToe from "./components/TicTacToe.js"
import "./index.css";

var destination = document.getElementById("container");

function App() {
    return (
        <div>
            <h1>Tic-Tac-Toe</h1>
            <TicTacToe />
        </div>
    );
}

ReactDOM.render(
    <App />,
    destination
); 