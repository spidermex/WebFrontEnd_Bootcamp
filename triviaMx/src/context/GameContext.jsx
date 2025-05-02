import React, { createContext, useState, useContext, useEffect } from 'react';
import { getRandomQuestion } from '../services/firebase';
import soundService from '../services/soundService';

// Crear el contexto
const GameContext = createContext();

// Hook personalizado para usar el contexto
export const useGame = () => useContext(GameContext);

// Proveedor del contexto
export const GameProvider = ({ children }) => {
  // Estados del juego
  const [playerPosition, setPlayerPosition] = useState(0); // Comienza en casilla 0 (antes de la 1)
  const [ignorancePosition, setIgnorancePosition] = useState(0);
  const [currentDice, setCurrentDice] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(20); // Temporizador de 20 segundos
  const [timerActive, setTimerActive] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answerStatus, setAnswerStatus] = useState(null); // 'correct', 'incorrect', null
  
  // Constantes del juego
  const BOARD_SIZE = 50;
  const CATEGORIES = {
    1: 'Cultura General',
    2: 'Deportes',
    3: 'Geografía e Historia',
    4: 'Ciencia y Tecnología',
    5: 'Cine, Música y TV',
    6: 'Arte y Literatura'
  };
  
  // Tirar el dado
  const rollDice = () => {
    setLoading(true);
    setSelectedAnswer(null);
    setAnswerStatus(null);
    
    // Generar valor aleatorio del dado
    const diceValue = Math.floor(Math.random() * 6) + 1;
    setCurrentDice(diceValue);
    
    // Obtener pregunta según la categoría (valor del dado)
    fetchQuestion(diceValue);
  };
  
  // Obtener pregunta de Firebase
  const fetchQuestion = async (category) => {
    try {
      const question = await getRandomQuestion(category);
      setCurrentQuestion(question);
      startTimer();
      setLoading(false);
    } catch (error) {
      console.error('Error obteniendo pregunta:', error);
      setLoading(false);
      // Manejar el error adecuadamente
      // Intentar con otra categoría si hay error
      const newCategory = category % 6 + 1; // Avanza a la siguiente categoría en ciclo
      fetchQuestion(newCategory);
    }
  };
  
  // Iniciar temporizador
  const startTimer = () => {
    setTimer(20);
    setTimerActive(true);
  };
  
  // Detener temporizador
  const stopTimer = () => {
    setTimerActive(false);
  };
  
  // Seleccionar respuesta
  const selectAnswer = (index) => {
    if (selectedAnswer !== null) return; // Prevenir múltiples selecciones
    
    setSelectedAnswer(index);
    stopTimer();
    
    const isCorrect = index === currentQuestion.correctAnswerIndex;
    setAnswerStatus(isCorrect ? 'correct' : 'incorrect');
    
    // Reproducir sonido según la respuesta
    if (isCorrect) {
      soundService.playCorrectAnswer();
    } else {
      soundService.playWrongAnswer();
    }
    
    // Avanzar al jugador correspondiente después de 2 segundos
    setTimeout(() => {
      movePlayer(isCorrect);
    }, 2000);
  };
  
  // Manejar tiempo agotado
  const handleTimeUp = () => {
    stopTimer();
    setAnswerStatus('incorrect');
    
    // Reproducir sonido de respuesta incorrecta
    soundService.playWrongAnswer();
    
    // Avanzar a la "ignorancia" después de 2 segundos
    setTimeout(() => {
      movePlayer(false);
    }, 2000);
  };
  
  // Mover jugador
  const movePlayer = (isPlayerMoving) => {
    if (isPlayerMoving) {
      // El jugador avanza
      const newPosition = Math.min(playerPosition + currentDice, BOARD_SIZE);
      setPlayerPosition(newPosition);
      
      if (newPosition === BOARD_SIZE) {
        endGame('player');
      }
    } else {
      // La "ignorancia" avanza
      const newPosition = Math.min(ignorancePosition + currentDice, BOARD_SIZE);
      setIgnorancePosition(newPosition);
      
      if (newPosition === BOARD_SIZE) {
        endGame('ignorance');
      }
    }
    
    // Preparar el siguiente turno si el juego no ha terminado
    if (!gameOver) {
      setCurrentQuestion(null);
      // No reseteamos el currentDice para poder mostrar el último valor
    }
  };
  
  // Terminar juego
  const endGame = (winnerName) => {
    setGameOver(true);
    setWinner(winnerName);
    stopTimer();
    
    // Reproducir sonido según el ganador
    if (winnerName === 'player') {
      soundService.playGameWin();
    } else {
      soundService.playGameOver();
    }
  };
  
  // Reiniciar juego
  const resetGame = () => {
    setPlayerPosition(0);
    setIgnorancePosition(0);
    setCurrentDice(null);
    setCurrentQuestion(null);
    setLoading(false);
    setTimer(20);
    setTimerActive(false);
    setGameOver(false);
    setWinner(null);
    setSelectedAnswer(null);
    setAnswerStatus(null);
  };
  
  // Efecto para el temporizador
  useEffect(() => {
    let interval;
    
    if (timerActive && timer > 0) {
      interval = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
    } else if (timer === 0 && timerActive) {
      handleTimeUp();
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerActive, timer]);
  
  const value = {
    playerPosition,
    ignorancePosition,
    currentDice,
    currentQuestion,
    loading,
    timer,
    timerActive,
    gameOver,
    winner,
    selectedAnswer,
    answerStatus,
    BOARD_SIZE,
    CATEGORIES,
    rollDice,
    selectAnswer,
    resetGame,
  };
  
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export default GameContext;