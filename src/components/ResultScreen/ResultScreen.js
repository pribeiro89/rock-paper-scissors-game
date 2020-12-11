import React, { useState, useEffect, useContext } from 'react';
import './ResultScreen.scss';
import Choice from '../Choice/Choice';
import { ScoreContext } from '../../context/ScoreContext';

const calculateScore = (choices, userPick, housePick) => {
  const userPickIndex = choices.findIndex((choice) => choice === userPick);
  const housePickIndex = choices.findIndex((choice) => choice === housePick);

  if (userPickIndex === -1 || housePickIndex === -1) {
    throw new Error('Choices are not valid.');
  }

  if (userPickIndex === housePickIndex) {
    return 0;
  }

  let userIndex = userPickIndex + 1;
  userIndex = userIndex === choices.length ? 0 : userIndex;
  if (userIndex === housePickIndex) {
    return 1;
  }

  if (choices.length > 3) {
    let userIndex = userPickIndex + 3;
    userIndex = userIndex >= choices.length ? userIndex - choices.length : userIndex;
    if (userIndex === housePickIndex) {
      return 1;
    }
  }

  // Alternative calculation
  // switch (userPick) {
  //   case 'paper':
  //     return housePick === 'rock' || housePick === 'spock' ? 1 : -1;
  //   case 'rock':
  //     return housePick === 'lizard' || housePick === 'scissors' ? 1 : -1;
  //   case 'scissors':
  //     return housePick === 'paper' || housePick === 'lizard' ? 1 : -1;
  //   case 'lizard':
  //     return housePick === 'spock' || housePick === 'paper' ? 1 : -1;
  //   case 'spock':
  //     return housePick === 'scissors' || housePick === 'rock' ? 1 : -1;
  //   default:
  //     console.error('User pick not valid.')
  //     return 0;
  // }

  return -1;
}

const ResultScreen = ({ gameChoices, userPick, resetGame }) => {
  const [housePick, setHousePick] = useState('');
  const [currentScore, setCurrentScore] = useState(null);
  const [score, setScore] = useContext(ScoreContext);


  useEffect(() => {
    setTimeout(() => {
      const randomChoice = gameChoices[Math.floor(Math.random() * gameChoices.length)];
      setHousePick(randomChoice);

      const gameScore = calculateScore(gameChoices, userPick, randomChoice);
      setCurrentScore(gameScore);
      setScore(score + gameScore);
    }, 2000);
  }, []);

  return (
    <div className="result">
      <div className="pick-wrapper">
        <h3>You Picked</h3>
        <div className="pick">
          <Choice type={userPick} />
        </div>
      </div>
      <div className="pick-wrapper pick-wrapper--house">
        <h3>The House Picked</h3>
        <div className="pick">
          {!housePick && (
            <div className="pick--empty"></div>
          )}
          {housePick && (
            <Choice type={housePick} />
          )}
        </div>
      </div>
      {currentScore !== null && (
        <div className="result__box">
          <h2 className="result__title">
            {currentScore === 0 && 'You Tied'}
            {currentScore === 1 && 'You Win'}
            {currentScore === -1 && 'You Lose'}
          </h2>
          <button className="play-again" onClick={resetGame}>
            Play Again
          </button>
        </div>
      )}
    </div>
  )
}

export default ResultScreen;
