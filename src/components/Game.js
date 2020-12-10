import React from 'react'
import './Game.scss';
import BgImg from './../assets/bg-pentagon.svg';
import ChoiceBtn from './ChoiceBtn';

const Game = () => {
  return (
    <div className="game">
      <div className="choice-wrapper">
        <img src={BgImg} alt="pentagon" className="bg-img--pentagon" />
        <ChoiceBtn type="lizard" />
        <ChoiceBtn type="paper" />
        <ChoiceBtn type="rock" />
        <ChoiceBtn type="scissors" />
        <ChoiceBtn type="spock" />
      </div>
    </div>
  )
}

export default Game;
