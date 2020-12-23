import React, { Component } from "react";

import "../index.css";

class Player extends Component {

    render() {
        return (
            <div className='sidebar'>
            <input type="text" id="playerName" value={this.props.Player.name} onChange={(e) => {this.props.changeName(e, this.props.Player.id)}} className="playerName"/>
            <div>
              <input type="radio" id={"player"+this.props.Player.id+"Human"} name={"player"+this.props.Player.id} value="Human" checked={this.props.Player.humanOrAI === 'Human'} onChange={(e) => {this.props.changeHumanOrAI(e, this.props.Player.id)}}/>
              <label htmlFor={"player"+this.props.Player.id+"Human"}>Human</label>
              <input type="radio" id={"player"+this.props.Player.id+"AI"} name={"player"+this.props.Player.id} value="AI" checked={this.props.Player.humanOrAI === 'AI'} onChange={(e) => {this.props.changeHumanOrAI(e, this.props.Player.id)}}/>
              <label htmlFor={"player"+this.props.Player.id+"AI"}>AI</label>
            </div>
            <div className={this.props.Player.hideAIDifficultyChoice ? 'hidden' : ''}>
              <input type="radio" id={"player"+this.props.Player.id+"Easy"} name={"player"+this.props.Player.id+this.props.Player.AIDifficulty} value="Easy" checked={this.props.Player.AIDifficulty === 'Easy'} onChange={(e) => {this.props.changeAIDifficulty(e, this.props.Player.id)}}/>
              <label htmlFor={"player"+this.props.Player.id+"Easy"}>Easy</label>
              <input type="radio" id={"player"+this.props.Player.id+"Medium"} name={"player"+this.props.Player.id+this.props.Player.AIDifficulty} value="Medium" checked={this.props.Player.AIDifficulty === 'Medium'} onChange={(e) => {this.props.changeAIDifficulty(e, this.props.Player.id)}}/>
              <label htmlFor={"player"+this.props.Player.id+"Medium"}>Medium</label>
            </div>
      
            <label className='wins'>Wins: </label>
            <label className='wins'>{this.props.Player.totalWins}</label>
          </div>
        );
    }
}

export default Player;