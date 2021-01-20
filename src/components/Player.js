import React from "react";
import "../index.css";

function Player ({thePlayer, changeHumanOrAI, changeAIDifficulty, hideUnchecked}) {

  function hideUnselectedPlayers(playerChecked) {
    let isHideUncheckedHidden = hideUnchecked && !(thePlayer.humanOrAI === playerChecked)

    if (isHideUncheckedHidden) {
      return 'hidden';
    }
    return ''
  }

  function hideUnselectedAIDifficulty(AIDifficultyChecked) {
    let isHideUncheckedHidden = hideUnchecked && !(thePlayer.AIDifficulty === AIDifficultyChecked)

    if (isHideUncheckedHidden) {
      return 'hidden';
    }
    return ''
  }

    return (
        <div className='sidebar'>
        <label id="playerMarker" className="playerMarker">{thePlayer.marker}</label>
        <div>
          <input type="radio" className={hideUnselectedPlayers('Human')} id={"player"+thePlayer.id+"Human"} name={"player"+thePlayer.id} value="Human" checked={thePlayer.humanOrAI === 'Human'} onChange={(e) => {changeHumanOrAI(e, thePlayer.id)} }/>
          <label htmlFor={"player"+thePlayer.id+"Human"} className={hideUnselectedPlayers('Human')}>Human</label>
          <input type="radio" className={hideUnselectedPlayers('AI')} id={"player"+thePlayer.id+"AI"} name={"player"+thePlayer.id} value="AI" checked={thePlayer.humanOrAI === 'AI'} onChange={(e) => {changeHumanOrAI(e, thePlayer.id)}}/>
          <label htmlFor={"player"+thePlayer.id+"AI"} className={hideUnselectedPlayers('AI')}>AI</label>
        </div>
        <div className={thePlayer.hideAIDifficultyChoice ? 'hidden' : ''}>
          <input type="radio" className={hideUnselectedAIDifficulty('Easy')} id={"player"+thePlayer.id+"Easy"} name={"player"+thePlayer.id+thePlayer.AIDifficulty} value="Easy" checked={thePlayer.AIDifficulty === 'Easy'} onChange={(e) => {changeAIDifficulty(e, thePlayer.id)}}/>
          <label htmlFor={"player"+thePlayer.id+"Easy"} className={hideUnselectedAIDifficulty('Easy')}>Easy</label>
          <input type="radio" className={hideUnselectedAIDifficulty('Medium')} id={"player"+thePlayer.id+"Medium"} name={"player"+thePlayer.id+thePlayer.AIDifficulty} value="Medium" checked={thePlayer.AIDifficulty === 'Medium'} onChange={(e) => {changeAIDifficulty(e, thePlayer.id)}}/>
          <label htmlFor={"player"+thePlayer.id+"Medium"} className={hideUnselectedAIDifficulty('Medium')}>Medium</label>
        </div>
  
        <label className='wins'>Wins: </label>
        <label className='wins'>{thePlayer.totalWins}</label>
      </div>
    );
}

export default Player;