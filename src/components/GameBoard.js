import React, { Component } from "react";

import "../index.css";

class GameBoard extends Component {
    
    render() {
        return (
            <div className="gameBoardGrid">
                <input type="button" className='cell' id='0' disabled={this.props.disableBoard} value={this.props.board[0]} onClick={(e) => {this.props.cellClicked(e)}}/>
                <input type="button" className='cell' id='1' disabled={this.props.disableBoard} value={this.props.board[1]} onClick={(e) => {this.props.cellClicked(e)}}/>
                <input type="button" className='cell' id='2' disabled={this.props.disableBoard} value={this.props.board[2]} onClick={(e) => {this.props.cellClicked(e)}}/> 
        
                <input type="button" className='cell' id='3' disabled={this.props.disableBoard} value={this.props.board[3]} onClick={(e) => {this.props.cellClicked(e)}}/> 
                <input type="button" className='cell' id='4' disabled={this.props.disableBoard} value={this.props.board[4]} onClick={(e) => {this.props.cellClicked(e)}}/> 
                <input type="button" className='cell' id='5' disabled={this.props.disableBoard} value={this.props.board[5]} onClick={(e) => {this.props.cellClicked(e)}}/> 
        
                <input type="button" className='cell' id='6' disabled={this.props.disableBoard} value={this.props.board[6]} onClick={(e) => {this.props.cellClicked(e)}}/> 
                <input type="button" className='cell' id='7' disabled={this.props.disableBoard} value={this.props.board[7]} onClick={(e) => {this.props.cellClicked(e)}}/> 
                <input type="button" className='cell' id='8' disabled={this.props.disableBoard} value={this.props.board[8]} onClick={(e) => {this.props.cellClicked(e)}}/> 
            </div>
        );
    }
}

export default GameBoard;