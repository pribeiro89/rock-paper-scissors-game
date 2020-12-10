import React, { useState } from 'react';
import './Game.scss';
import BgImg from './../assets/bg-pentagon.svg';
import ChoiceBtn from './ChoiceBtn';
import ResultScreen from './ResultScreen';

const gameOptions = {
  advanced: ['lizard', 'paper', 'rock', 'scissors', 'spock'],
};

const Game = ({ selectedGame }) => {
  const [userPick, setUserPick] = useState('');
  const gameChoices = gameOptions[selectedGame];

  return (
    <div className="game">
      {!userPick && (
        <div className="choice-wrapper">
          <img src={BgImg} alt="pentagon" className="bg-img--pentagon" />
          {gameChoices.map(type => (
            <ChoiceBtn
              key={type}
              type={type}
              onClick={() => setUserPick(type)}
            />
          ))}
        </div>
      )}
      {userPick && (
        <ResultScreen gameChoices={gameChoices} userPick={userPick} />
      )}
    </div>
  )
}

export default Game;
