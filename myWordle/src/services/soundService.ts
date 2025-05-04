/**
 * Servicio para gestionar los efectos de sonido del juego
 */

// Importar archivos de sonido
import clickEnterSound from '../sounds/clickEnter.mp3';
import gameWinSound from '../sounds/powerUp.mp3';
import gameOverSound from '../sounds/Sad-Trombone.mp3';


// Crear instancias de audio para cada efecto
const clickEnter = new Audio(clickEnterSound);
const gameWin = new Audio(gameWinSound);
const gameOver = new Audio(gameOverSound);

// Estado global de sonido
let soundEnabled = true;

/**
 * Servicio de sonido para el juego
 */
const soundService = {
  /**
   * Reproducir sonido de click Enter
   */
  playclickEnter: () => {
    if (soundEnabled) {
      clickEnter.currentTime = 0;
      clickEnter.play().catch(error => console.warn('Error reproduciendo sonido:', error));
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