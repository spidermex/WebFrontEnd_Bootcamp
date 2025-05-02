import React from 'react';
import './App.css';
import { GameProvider } from './context/GameContext';
import GamePage from './pages/GamePage';

function App() {
  return (
    <div className="App">
      <GameProvider>
        <GamePage />
      </GameProvider>
    </div>
  );
}

export default App;
