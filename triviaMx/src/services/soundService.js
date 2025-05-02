/**
 * Servicio para gestionar los efectos de sonido del juego
 */

// Importar archivos de sonido
import diceRollSound from '../assets/sounds/dice-roll.mp3';
import correctAnswerSound from '../assets/sounds/correct-answer.mp3';
import wrongAnswerSound from '../assets/sounds/wrong-answer.mp3';
import gameWinSound from '../assets/sounds/game-win.mp3';
import gameOverSound from '../assets/sounds/Sad-Trombone.mp3';
import criticalTimeSound from '../assets/sounds/tenSeconds.mp3';

// Crear instancias de audio para cada efecto
const diceRoll = new Audio(diceRollSound);
const correctAnswer = new Audio(correctAnswerSound);
const wrongAnswer = new Audio(wrongAnswerSound);
const gameWin = new Audio(gameWinSound);
const gameOver = new Audio(gameOverSound);
const criticalTime = new Audio(criticalTimeSound);

// Estado global de sonido
let soundEnabled = true;

/**
 * Servicio de sonido para el juego
 */
const soundService = {
  /**
   * Reproducir sonido de tirar dado
   */
  playDiceRoll: () => {
    if (soundEnabled) {
      diceRoll.currentTime = 0;
      diceRoll.play().catch(error => console.warn('Error reproduciendo sonido:', error));
    }
  },
  
/**
 * Reproducir sonido de tiempo crítico
 */
  playCriticalTime: () => {
    if (soundEnabled) {
      criticalTime.currentTime = 0;
      criticalTime.play().catch(error => console.warn('Error reproduciendo sonido:', error));
    }
  },

  stopCriticalTime: () => {
    if (soundEnabled) {
      criticalTime.pause();
    }
  },

  /**
   * Reproducir sonido de respuesta correcta
   */
  playCorrectAnswer: () => {
    if (soundEnabled) {
      correctAnswer.currentTime = 0;
      correctAnswer.play().catch(error => console.warn('Error reproduciendo sonido:', error));
    }
  },
  
  /**
   * Reproducir sonido de respuesta incorrecta
   */
  playWrongAnswer: () => {
    if (soundEnabled) {
      wrongAnswer.currentTime = 0;
      wrongAnswer.play().catch(error => console.warn('Error reproduciendo sonido:', error));
    }
  },
  
  /**
   * Reproducir sonido de victoria
   */
  playGameWin: () => {
    if (soundEnabled) {
      gameWin.currentTime = 0;
      gameWin.play().catch(error => console.warn('Error reproduciendo sonido:', error));
    }
  },
  
  /**
   * Reproducir sonido de derrota
   */
  playGameOver: () => {
    if (soundEnabled) {
      gameOver.currentTime = 0;
      gameOver.play().catch(error => console.warn('Error reproduciendo sonido:', error));
    }
  },
  
  /**
   * Habilitar o deshabilitar todos los sonidos
   */
  toggleSound: () => {
    soundEnabled = !soundEnabled;
    return soundEnabled;
  },
  
  /**
   * Obtener el estado actual del sonido
   */
  isSoundEnabled: () => soundEnabled
};

export default soundService;