import React, { Component } from "react";

import "../index.css";

class GameBoard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            board: ['', '', '', 
                    '', '', '', 
                    '', '', ''],
            disableBoard: true
        };
    }

    render() {
        return (
            <div className="gameBoardGrid">
            <input type="button" className='cell' id='cell0' disabled={this.state.disableBoard} value={this.state.board[0]}/>
            <input type="button" className='cell' id='cell1' disabled={this.state.disableBoard} value={this.state.board[1]}/>
            <input type="button" className='cell' id='cell2' disabled={this.state.disableBoard} value={this.state.board[2]}/> 
      
            <input type="button" className='cell' id='cell3' disabled={this.state.disableBoard} value={this.state.board[3]}/> 
            <input type="button" className='cell' id='cell4' disabled={this.state.disableBoard} value={this.state.board[4]}/> 
            <input type="button" className='cell' id='cell5' disabled={this.state.disableBoard} value={this.state.board[5]}/> 
      
            <input type="button" className='cell' id='cell6' disabled={this.state.disableBoard} value={this.state.board[6]}/> 
            <input type="button" className='cell' id='cell7' disabled={this.state.disableBoard} value={this.state.board[7]}/> 
            <input type="button" className='cell' id='cell8' disabled={this.state.disableBoard} value={this.state.board[8]}/> 
          </div>
        );
    }
}

export default GameBoard;