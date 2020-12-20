import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

var destination = document.getElementById("container");

ReactDOM.render(

    <div className="columns">
        <TicTacToe/>
    </div>,
    destination
); 