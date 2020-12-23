import React, { Component } from "react";

import "../index.css";

class Player extends Component {
    constructor(props) {
        super(props);

        this.state = {Player1: {
            id: props.id,
            name: "Player " + props.id,
            marker: "X",
            humanOrAI: "Human",
            hideAIDifficultyChoice: true,
            AIDifficulty: "Easy",
            totalWins: 0},
            Player2: {
                id: props.id,
                name: "Player " + props.id,
                marker: "X",
                humanOrAI: "Human",
                hideAIDifficultyChoice: true,
                AIDifficulty: "Easy",
                totalWins: 0},
        };

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeHumanOrAI = this.onChangeHumanOrAI.bind(this);
        this.onChangeAIDifficulty = this.onChangeAIDifficulty.bind(this);
    }

    onChangeName(event) {
        this.setState({name: event.target.value});
    }

    onChangeHumanOrAI(event) {
        this.setState({humanOrAI: event.target.value}) 
        
        if (event.target.value === "AI") {
            this.setState({hideAIDifficultyChoice: false});
        } else {
            this.setState({hideAIDifficultyChoice: true});
        }
    }

    onChangeAIDifficulty(event) {
        this.setState({AIDifficulty: event.target.value})   
    }

    render() {
        return (
            <div className='sidebar'>
            <input type="text" id="playerName" value={this.state.name} onChange={this.onChangeName} className="playerName"/>
            <div>
              <input type="radio" name={"player"+this.state.id} value="Human" checked={this.state.humanOrAI === 'Human'} onChange={this.onChangeHumanOrAI}/>
              <label htmlFor="playerHuman">Human</label>
              <input type="radio" name={"player"+this.state.id} value="AI" checked={this.state.humanOrAI === 'AI'} onChange={this.onChangeHumanOrAI}/>
              <label htmlFor="playerAI">AI</label>
            </div>
            <div className={this.state.hideAIDifficultyChoice ? 'hidden' : ''}>
              <input type="radio" name={"player"+this.state.id+"AIDifficulty"} value="Easy" checked={this.state.AIDifficulty === 'Easy'} onChange={this.onChangeAIDifficulty}/>
              <label htmlFor="AIEasy">Easy</label>
              <input type="radio" name={"player"+this.state.id+"AIDifficulty"} value="Medium" checked={this.state.AIDifficulty === 'Medium'} onChange={this.onChangeAIDifficulty}/>
              <label htmlFor="AIMedium">Medium</label>
            </div>
      
            <label className='wins'>Wins: </label>
            <label className='wins'>{this.state.totalWins}</label>
          </div>
        );
    }
}

export default Player;