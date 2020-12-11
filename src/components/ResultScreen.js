import React, { useState, useEffect } from 'react';
import './ResultScreen.scss';
import Choice from './Choice';

const ResultScreen = ({ gameChoices, userPick }) => {
  const [housePick, setHousePick] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setHousePick(
      gameChoices[Math.floor(Math.random() * gameChoices.length + 1)]
    ), 2000);
    return () => {
      clearTimeout(timer);
    }
  }, [gameChoices]);

  return (
    <div className="result">
      <div className="pick-wrapper">
        <h3>You Picked</h3>
        <div className="pick">
          <Choice type={userPick} />
        </div>
      </div>
      <div className="pick-wrapper">
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
    </div>
  )
}

export default ResultScreen;
