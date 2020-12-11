import React, { useContext } from 'react';
import './Header.scss';
import logo from './../../assets/logo-bonus.svg';
import { ScoreContext } from '../../context/ScoreContext';

const Header = () => {
  const [score] = useContext(ScoreContext);

  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      <div className="score-container">
        <h3>Score</h3>
        <span className="score">{score}</span>
      </div>
    </header>
  );
}

export default Header;