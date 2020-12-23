import React, { Component } from "react";

import "../index.css";

class GameBoard extends Component {
    
    render() {
        return (
            <div className="gameBoardGrid">
            <input type="button" className='cell' id='cell0' disabled={this.props.disableBoard} value={this.props.board[0]}/>
            <input type="button" className='cell' id='cell1' disabled={this.props.disableBoard} value={this.props.board[1]}/>
            <input type="button" className='cell' id='cell2' disabled={this.props.disableBoard} value={this.props.board[2]}/> 
      
            <input type="button" className='cell' id='cell3' disabled={this.props.disableBoard} value={this.props.board[3]}/> 
            <input type="button" className='cell' id='cell4' disabled={this.props.disableBoard} value={this.props.board[4]}/> 
            <input type="button" className='cell' id='cell5' disabled={this.props.disableBoard} value={this.props.board[5]}/> 
      
            <input type="button" className='cell' id='cell6' disabled={this.props.disableBoard} value={this.props.board[6]}/> 
            <input type="button" className='cell' id='cell7' disabled={this.props.disableBoard} value={this.props.board[7]}/> 
            <input type="button" className='cell' id='cell8' disabled={this.props.disableBoard} value={this.props.board[8]}/> 
          </div>
        );
    }
}

export default GameBoard;