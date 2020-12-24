import React, { Component } from "react";
import "../index.css";

class Player extends Component {

  hideUnselectedPlayers(playerChecked) {
    let hideUnchecked = this.props.hideUnchecked && !(this.props.Player.humanOrAI === playerChecked)

    if (hideUnchecked) {
      return 'hidden';
    }
    return ''
  }

  hideUnselectedAIDifficulty(AIDifficultyChecked) {
    let hideUnchecked = this.props.hideUnchecked && !(this.props.Player.AIDifficulty === AIDifficultyChecked)

    if (hideUnchecked) {
      return 'hidden';
    }
    return ''
  }

  render() {
      return (
          <div className='sidebar'>
          <input type="text" id="playerName" value={this.props.Player.name} onChange={(e) => {this.props.changeName(e, this.props.Player.id)}} className="playerName"/>
          <div>
            <input type="radio" className={this.hideUnselectedPlayers('Human')} id={"player"+this.props.Player.id+"Human"} name={"player"+this.props.Player.id} value="Human" checked={this.props.Player.humanOrAI === 'Human'} onChange={(e) => {this.props.changeHumanOrAI(e, this.props.Player.id)} }/>
            <label htmlFor={"player"+this.props.Player.id+"Human"} className={this.hideUnselectedPlayers('Human')}>Human</label>
            <input type="radio" className={this.hideUnselectedPlayers('AI')} id={"player"+this.props.Player.id+"AI"} name={"player"+this.props.Player.id} value="AI" checked={this.props.Player.humanOrAI === 'AI'} onChange={(e) => {this.props.changeHumanOrAI(e, this.props.Player.id)}}/>
            <label htmlFor={"player"+this.props.Player.id+"AI"} className={this.hideUnselectedPlayers('AI')}>AI</label>
          </div>
          <div className={this.props.Player.hideAIDifficultyChoice ? 'hidden' : ''}>
            <input type="radio" className={this.hideUnselectedAIDifficulty('Easy')} id={"player"+this.props.Player.id+"Easy"} name={"player"+this.props.Player.id+this.props.Player.AIDifficulty} value="Easy" checked={this.props.Player.AIDifficulty === 'Easy'} onChange={(e) => {this.props.changeAIDifficulty(e, this.props.Player.id)}}/>
            <label htmlFor={"player"+this.props.Player.id+"Easy"} className={this.hideUnselectedAIDifficulty('Easy')}>Easy</label>
            <input type="radio" className={this.hideUnselectedAIDifficulty('Medium')} id={"player"+this.props.Player.id+"Medium"} name={"player"+this.props.Player.id+this.props.Player.AIDifficulty} value="Medium" checked={this.props.Player.AIDifficulty === 'Medium'} onChange={(e) => {this.props.changeAIDifficulty(e, this.props.Player.id)}}/>
            <label htmlFor={"player"+this.props.Player.id+"Medium"} className={this.hideUnselectedAIDifficulty('Medium')}>Medium</label>
          </div>
    
          <label className='wins'>Wins: </label>
          <label className='wins'>{this.props.Player.totalWins}</label>
        </div>
      );
  }
}

export default Player;