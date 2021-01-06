import React from "react";
import "../index.css";

function Player ({Player, changeName, changeHumanOrAI, changeAIDifficulty, hideUnchecked}) {

  function hideUnselectedPlayers(playerChecked) {
    let isHideUncheckedHidden = hideUnchecked && !(Player.humanOrAI === playerChecked)

    if (isHideUncheckedHidden) {
      return 'hidden';
    }
    return ''
  }

  function hideUnselectedAIDifficulty(AIDifficultyChecked) {
    let isHideUncheckedHidden = hideUnchecked && !(Player.AIDifficulty === AIDifficultyChecked)

    if (isHideUncheckedHidden) {
      return 'hidden';
    }
    return ''
  }

    return (
        <div className='sidebar'>
        <input type="text" id="playerName" value={Player.name} onChange={(e) => {changeName(e, Player.id)}} className="playerName"/>
        <div>
          <input type="radio" className={hideUnselectedPlayers('Human')} id={"player"+Player.id+"Human"} name={"player"+Player.id} value="Human" checked={Player.humanOrAI === 'Human'} onChange={(e) => {changeHumanOrAI(e, Player.id)} }/>
          <label htmlFor={"player"+Player.id+"Human"} className={hideUnselectedPlayers('Human')}>Human</label>
          <input type="radio" className={hideUnselectedPlayers('AI')} id={"player"+Player.id+"AI"} name={"player"+Player.id} value="AI" checked={Player.humanOrAI === 'AI'} onChange={(e) => {changeHumanOrAI(e, Player.id)}}/>
          <label htmlFor={"player"+Player.id+"AI"} className={hideUnselectedPlayers('AI')}>AI</label>
        </div>
        <div className={Player.hideAIDifficultyChoice ? 'hidden' : ''}>
          <input type="radio" className={hideUnselectedAIDifficulty('Easy')} id={"player"+Player.id+"Easy"} name={"player"+Player.id+Player.AIDifficulty} value="Easy" checked={Player.AIDifficulty === 'Easy'} onChange={(e) => {changeAIDifficulty(e, Player.id)}}/>
          <label htmlFor={"player"+Player.id+"Easy"} className={hideUnselectedAIDifficulty('Easy')}>Easy</label>
          <input type="radio" className={hideUnselectedAIDifficulty('Medium')} id={"player"+Player.id+"Medium"} name={"player"+Player.id+Player.AIDifficulty} value="Medium" checked={Player.AIDifficulty === 'Medium'} onChange={(e) => {changeAIDifficulty(e, Player.id)}}/>
          <label htmlFor={"player"+Player.id+"Medium"} className={hideUnselectedAIDifficulty('Medium')}>Medium</label>
        </div>
  
        <label className='wins'>Wins: </label>
        <label className='wins'>{Player.totalWins}</label>
      </div>
    );
}

export default Player;