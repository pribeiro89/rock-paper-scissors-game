import React from 'react';
import './App.scss';
import logo from './assets/logo-bonus.svg';
import Game from './components/Game';
import Rules from './components/Rules';

const App = () => {
  return (
    <div className="app-container">
      <header className="header">
        <img src={logo} alt="Logo" className="logo" />
        <div className="score-container">
          <h3>Score</h3>
          <span className="score">12</span>
        </div>
      </header>
      <main>
        <Game />
        <Rules />
      </main>
    </div>
  );
}

export default App;
