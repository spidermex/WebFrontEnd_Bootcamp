import { createContext, useState, useEffect } from 'react';

// Crear el contexto
export const GameSettingsContext = createContext();

// Proveedor del contexto
export const GameSettingsProvider = ({ children }) => {
  // Cargar configuración guardada o usar valores predeterminados
  const [gameTime, setGameTime] = useState(() => {
    const savedTime = localStorage.getItem('gameTime');
    return savedTime ? parseInt(savedTime, 10) : 120; // Valor predeterminado: 2 minutos
  });
  
  const [soundEnabled, setSoundEnabled] = useState(() => {
    const savedSound = localStorage.getItem('soundEnabled');
    return savedSound !== null ? JSON.parse(savedSound) : true; // Predeterminado: sonido activado
  });
  
    const [idioma, setIdioma] = useState(() => {
    const savedIdioma = localStorage.getItem('idioma');
    return savedIdioma !== null ? JSON.parse(savedIdioma) : null; // Predeterminado: español
  });

  // Estado para controlar si el juego está pausado
  const [isPaused, setIsPaused] = useState(false);

  // Guardar cambios en localStorage
  useEffect(() => {
    localStorage.setItem('gameTime', gameTime.toString());
  }, [gameTime]);

  useEffect(() => {
    localStorage.setItem('soundEnabled', JSON.stringify(soundEnabled));
  }, [soundEnabled]);

    useEffect(() => {
    localStorage.setItem('idioma', JSON.stringify(idioma));
  }, [idioma]);

  // Los valores que se expondrán en el contexto
  const value = {
    gameTime,
    setGameTime,
    soundEnabled,
    setSoundEnabled,
    isPaused,
    setIsPaused,
    idioma,
    setIdioma
  };

  return (
    <GameSettingsContext.Provider value={value}>
      {children}
    </GameSettingsContext.Provider>
  );
};