import React, { useState, useEffect } from 'react';
import './App.css';
import { GameProvider } from './context/GameContext';
import GamePage from './pages/GamePage';
import SplashScreen from './pages/SplashScreen';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  // Función para ocultar el splash screen
  const hideSplash = () => {
    setShowSplash(false);
  };

  return (
    <div className="App">
      {showSplash ? (
        <SplashScreen onComplete={hideSplash} />
      ) : (
        <GameProvider>
          <GamePage />
        </GameProvider>
      )}
    </div>
  );
}

export default App;
