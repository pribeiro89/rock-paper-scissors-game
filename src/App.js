import React from 'react';
import './App.scss';
import { ScoreContextProvider } from './context/ScoreContext';
import Game from './components/Game/Game';
import Rules from './components/Rules/Rules';
import Header from './components/Header/Header';

const App = () => {
  return (
    <ScoreContextProvider>
      <div className="app">
        <Header />
        <main>
          <Game selectedGame={'advanced'} />
          <Rules />
        </main>
      </div>
    </ScoreContextProvider>
  );
}

export default App;
