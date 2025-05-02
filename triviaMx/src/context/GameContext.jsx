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
  const [animatingPlayer, setAnimatingPlayer] = useState(false);
  const [animationPosition, setAnimationPosition] = useState(0);
  const [isPlayerTurn, setIsPlayerTurn] = useState(true); // Add this state
  
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
    
    // Primero, mostrar el resultado durante 2 segundos
    setTimeout(() => {
      // Después de 2 segundos, cerrar la ventana modal
      setCurrentQuestion(null);
      
      // Después de que se cierre la modal, esperar un tiempo breve y luego mover la ficha
      setTimeout(() => {
        movePlayer(isCorrect);
      }, 1500); // Esperar 500ms DESPUÉS de cerrar la modal para mover la ficha
    }, 1500);
  };
  
  // Manejar tiempo agotado
  const handleTimeUp = () => {
    stopTimer();
    setAnswerStatus('incorrect');
    
    // Reproducir sonido de respuesta incorrecta
    soundService.playWrongAnswer();
    
    // Primero, mostrar el resultado durante 2 segundos
    setTimeout(() => {
      // Después de 2 segundos, cerrar la ventana modal
      setCurrentQuestion(null);
      
      // Después de que se cierre la modal, esperar un tiempo breve y luego mover la ficha
      setTimeout(() => {
        movePlayer(false);
      }, 1500); // Esperar 500ms DESPUÉS de cerrar la modal para mover la ficha
    }, 1500);
  };
  
  // Mover jugador
  const movePlayer = (isPlayerMoving) => {
    setIsPlayerTurn(isPlayerMoving);
    
    if (isPlayerMoving) {
      // El jugador avanza
      const startPosition = playerPosition;
      const endPosition = Math.min(playerPosition + currentDice, BOARD_SIZE);
      
      // Iniciar la animación
      animateMovement(startPosition, endPosition, true);
    } else {
      // La "ignorancia" avanza
      const startPosition = ignorancePosition;
      const endPosition = Math.min(ignorancePosition + currentDice, BOARD_SIZE);
      
      // Iniciar la animación
      animateMovement(startPosition, endPosition, false);
    }
  };

  // Nueva función para animar el movimiento
  const animateMovement = (start, end, isPlayer) => {
    // Establecer estado de animación
    setAnimatingPlayer(true);
    setAnimationPosition(start);
    
    // Reproducir sonido de movimiento
    soundService.playMove();
    
    let currentPos = start;
    
    // Función para el movimiento paso a paso
    const moveStep = () => {
      // Incrementamos la posición
      currentPos++;
      
      // Actualizamos la posición de animación
      setAnimationPosition(currentPos);
      
      // Si llegamos a la posición final
      if (currentPos >= end) {
        // Comprobar si es una casilla especial (11, 22, 33, 44)
        if ([11, 22, 33, 44].includes(end)) {
          // Vamos a esperar un momento antes de teletransportar
          setTimeout(() => {
            handleSpecialSquare(end, isPlayer);
          }, 500);
        } else {
          // Actualizar la posición final del jugador o ignorancia
          finalizeMovement(end, isPlayer);
        }
        
        return;
      }
      
      // Si no hemos llegado al final, programar el siguiente paso
      setTimeout(moveStep, 300); // Velocidad de la animación (300ms por casilla)
    };
    
    // Iniciar el movimiento después de un breve retraso
    setTimeout(moveStep, 200);
  };

  // Función para manejar casillas especiales (11, 22, 33, 44)
  const handleSpecialSquare = (position, isPlayer) => {
    let minRange, maxRange;
    
    // Determinar el rango según la casilla
    switch (position) {
      case 11:
        minRange = 1;
        maxRange = 21;
        break;
      case 22:
        minRange = 12;
        maxRange = 32;
        break;
      case 33:
        minRange = 23;
        maxRange = 43;
        break;
      case 44:
        minRange = 34;
        maxRange = 49;
        break;
      default:
        return position;
    }
    
    // Generar posición aleatoria dentro del rango, excepto la posición actual
    let newPosition;
    do {
      newPosition = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
    } while (newPosition === position);
    
    // Reproducir sonido de teletransporte
    soundService.playTeleport();
    
    // Actualizar temporalmente la posición para la siguiente animación
    const startPosition = position;
    
    // Iniciar nueva animación desde la posición actual a la nueva posición
    setTimeout(() => {
      animateMovement(startPosition, newPosition, isPlayer);
    }, 500);
  };

  // Función para finalizar el movimiento
  const finalizeMovement = (position, isPlayer) => {
    // Actualizar la posición final del jugador o ignorancia
    if (isPlayer) {
      setPlayerPosition(position);
      if (position === BOARD_SIZE) {
        endGame('player');
      }
    } else {
      setIgnorancePosition(position);
      if (position === BOARD_SIZE) {
        endGame('ignorance');
      }
    }
    
    // Terminar animación
    setAnimatingPlayer(false);
    
    // Preparar el siguiente turno si el juego no ha terminado
    if (!gameOver) {
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

    if (timerActive && timer <= 10 && timer > 0) {
      soundService.playCriticalTime();
    } else {
      soundService.stopCriticalTime();
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
    animatingPlayer,     // Add animation state
    animationPosition,   // Add animation position
    isPlayerTurn,        // Add isPlayerTurn to the context value
  };
  
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export default GameContext;