import React from "react";

import "../index.css";

function GameBoard({board, disableBoard, cellClicked}) {
    
    return (
        <div className="gameBoardGrid">
            <input type="button" className='cell' id='0' disabled={disableBoard} value={board[0]} onClick={(e) => {cellClicked(e)}}/>
            <input type="button" className='cell' id='1' disabled={disableBoard} value={board[1]} onClick={(e) => {cellClicked(e)}}/>
            <input type="button" className='cell' id='2' disabled={disableBoard} value={board[2]} onClick={(e) => {cellClicked(e)}}/> 
    
            <input type="button" className='cell' id='3' disabled={disableBoard} value={board[3]} onClick={(e) => {cellClicked(e)}}/> 
            <input type="button" className='cell' id='4' disabled={disableBoard} value={board[4]} onClick={(e) => {cellClicked(e)}}/> 
            <input type="button" className='cell' id='5' disabled={disableBoard} value={board[5]} onClick={(e) => {cellClicked(e)}}/> 
    
            <input type="button" className='cell' id='6' disabled={disableBoard} value={board[6]} onClick={(e) => {cellClicked(e)}}/> 
            <input type="button" className='cell' id='7' disabled={disableBoard} value={board[7]} onClick={(e) => {cellClicked(e)}}/> 
            <input type="button" className='cell' id='8' disabled={disableBoard} value={board[8]} onClick={(e) => {cellClicked(e)}}/> 
        </div>
    );
}

export default GameBoard;