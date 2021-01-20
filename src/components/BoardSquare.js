import React from "react";

import "../index.css";

function BoardSquare({value, disableBoard, onClick}) {
    return (
        <input type="button" className='cell' disabled={disableBoard} value={value} onClick={onClick}/> 
    );
}

export default BoardSquare;