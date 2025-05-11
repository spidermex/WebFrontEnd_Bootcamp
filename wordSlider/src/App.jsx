import { useState, useEffect, useRef } from "react";
import Board from "./components/Board";
import Settings from "./components/Settings";
import Instrucciones from "./components/Instrucciones";
import GameOver from "./components/GameOver";
import "./App.css";
import settingsIcon from "./assets/images/settings-white.svg"
import settingDarkIcon from "./assets/images/settings-black.svg"
import helpIcon from "./assets/images/help.svg";
import helpDarkIcon from "./assets/images/help-black.svg";
import soundService from "./utils/soundService";


// Importa los datos locales (tablero y diccionario)
import { palabras_4 } from "./data/palabras_4.js";
import { palabras_5 } from "./data/palabras_5.js";
import { words_4 } from "./data/words_4.js";
import { words_5 } from "./data/words_5.js";
// import { palabras as palabras_6 } from "./data/palabras_6.js";
import { tableros_4 } from "./data/tableros4.js";
import { tableros_5 } from "./data/tableros5.js";
import { boards_4 } from "./data/boards4.js";
import { boards_5 } from "./data/boards5.js";

const defaultConfig = {
  idioma: "esp",
  boardSize: 4,
  gameEndsAt: "moves",
  totalMoves: 20,
  totalTime: 90,
  displayMode: "dark",
};

function getRandomBoard(config) {
  let boards;
  if (config.boardSize === 4 && config.idioma === 'esp') boards = tableros_4;
  else if (config.boardSize === 5 && config.idioma === 'esp') boards = tableros_5;
  else if (config.boardSize === 4 && config.idioma === 'eng') boards = boards_4;
  else if (config.boardSize === 5 && config.idioma === 'eng') boards = boards_5;
  else boards = [];
  const idx = Math.floor(Math.random() * boards.length);
  return boards[idx]?.board.map(row => [...row]) || [];
}

function getPalabras(config) {
  if (config.boardSize === 4) return config.idioma === 'esp' ? palabras_4 : words_4;
  if (config.boardSize === 5) return config.idioma === 'esp' ? palabras_5 : words_5;
  return new Set();
}

// Lógica para validar palabras en filas y columnas
function checkWords(board, palabras, wordsFound, BOARD_SIZE) {
  const found = [];
  // Filas
  for (let r = 0; r < BOARD_SIZE; r++) {
    let str = "";
    let revStr = "";
    for (let c = 0; c < BOARD_SIZE; c++) {
      str += board[r][c];
      revStr += board[r][BOARD_SIZE - 1 - c];
    }
    str = str.toLowerCase();
    revStr = revStr.toLowerCase();
    if (palabras.has(str) && !wordsFound.includes(str)) found.push(str);
    if (palabras.has(revStr) && !wordsFound.includes(revStr)) found.push(revStr);
  }
  // Columnas
  for (let c = 0; c < BOARD_SIZE; c++) {
    let str = "";
    let revStr = "";
    for (let r = 0; r < BOARD_SIZE; r++) {
      str += board[r][c];
      revStr += board[BOARD_SIZE - 1 - r][c];
    }
    str = str.toLowerCase();
    revStr = revStr.toLowerCase();
    if (palabras.has(str) && !wordsFound.includes(str)) found.push(str);
    if (palabras.has(revStr) && !wordsFound.includes(revStr)) found.push(revStr);
  }
  return found;
}

function App() {
  const [config, setConfig] = useState(defaultConfig);
  const [board, setBoard] = useState(() => getRandomBoard(defaultConfig));
  const [score, setScore] = useState(0);
  const [wordsFound, setWordsFound] = useState([]);
  const [selected, setSelected] = useState(null);
  const [mobile, setMobile] = useState(window.innerWidth < 600);
  const [highlighted, setHighlighted] = useState([]);
  const movesPending = useRef(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [instruccionesOpen, setInstruccionesOpen] = useState(false);
  const [moves, setMoves] = useState(config.totalMoves);
  const [timer, setTimer] = useState(config.totalTime);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const handleResize = () => setMobile(window.innerWidth < 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Cambiar tablero y palabras al cambiar config
  useEffect(() => {
    setBoard(getRandomBoard(config));
    setWordsFound([]);
    setScore(0);
    setMoves(config.totalMoves);
    setTimer(config.totalTime);
  }, [config.boardSize, config.idioma]);

  // Cambiar moves/timer si cambia config
  useEffect(() => {
    setMoves(config.totalMoves);
  }, [config.totalMoves]);
  useEffect(() => {
    setTimer(config.totalTime);
  }, [config.totalTime]);

  // Timer countdown (si modo tiempo)
  useEffect(() => {
    if (config.gameEndsAt !== 'timer') return;
    if (timer <= 0) return;
    const interval = setInterval(() => {
      setTimer(t => t - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [config.gameEndsAt, timer]);

  // Detectar palabras y resaltar SOLO al descontar un movimiento (al finalizar el drag)
  useEffect(() => {
    window.onBoardMoveEnd = () => {
      if (movesPending.current) {
        if (config.gameEndsAt === 'moves') setMoves(m => m - 1);
        movesPending.current = false;
        // Validar palabras y resaltar
        const palabras = getPalabras(config);
        const nuevas = checkWords(board, palabras, wordsFound, config.boardSize);
        if (nuevas.length > 0) {
          setWordsFound(prev => [...prev, ...nuevas]);
          // console.log("Palabras encontradas:", wordsFound);
          soundService.playCorrectAnswer();
          setScore(prev => prev + nuevas.length * 100);
          // Guardar info para resaltar
          const now = Date.now();
          const highlights = [];
          // Filas
          for (let r = 0; r < config.boardSize; r++) {
            let str = "";
            let revStr = "";
            for (let c = 0; c < config.boardSize; c++) {
              str += board[r][c];
              revStr += board[r][config.boardSize - 1 - c];
            }
            str = str.toLowerCase();
            revStr = revStr.toLowerCase();
            if (palabras.has(str) && !wordsFound.includes(str) && nuevas.includes(str)) {
              highlights.push({ type: "row", idx: r, reverse: false, word: str, timestamp: now });
            }
            if (palabras.has(revStr) && !wordsFound.includes(revStr) && nuevas.includes(revStr)) {
              highlights.push({ type: "row", idx: r, reverse: true, word: revStr, timestamp: now });
            }
          }
          // Columnas
          for (let c = 0; c < config.boardSize; c++) {
            let str = "";
            let revStr = "";
            for (let r = 0; r < config.boardSize; r++) {
              str += board[r][c];
              revStr += board[config.boardSize - 1 - r][c];
            }
            str = str.toLowerCase();
            revStr = revStr.toLowerCase();
            if (palabras.has(str) && !wordsFound.includes(str) && nuevas.includes(str)) {
              highlights.push({ type: "col", idx: c, reverse: false, word: str, timestamp: now });
            }
            if (palabras.has(revStr) && !wordsFound.includes(revStr) && nuevas.includes(revStr)) {
              highlights.push({ type: "col", idx: c, reverse: true, word: revStr, timestamp: now });
            }
          }
          setHighlighted(prev => [...prev, ...highlights]);
        }else {
          soundService.playWrongAnswer();
        }
      }
    };
    return () => { window.onBoardMoveEnd = null; };
  }, [board, config, wordsFound]);

  // Limpiar highlights después de 2 segundos
  useEffect(() => {
    if (highlighted.length === 0) return;
    const timer = setInterval(() => {
      const now = Date.now();
      setHighlighted(prev => prev.filter(h => now - h.timestamp < 2000));
    }, 200);
    return () => clearInterval(timer);
  }, [highlighted]);

  // Detectar fin de juego por turnos o tiempo
  useEffect(() => {
    if (config.gameEndsAt === 'moves' && moves === 0) {
      setGameOver(true);
      soundService.playGameWin()
    }
    if (config.gameEndsAt === 'timer' && timer === 0) {
      setGameOver(true);
      soundService.playGameWin()
    }
  }, [moves, timer, config.gameEndsAt]);

  const handleRestart = () => {
    setBoard(getRandomBoard(config));
    setWordsFound([]);
    setScore(0);
    setMoves(config.totalMoves);
    setTimer(config.totalTime);
    setGameOver(false);
  };

  const handleCloseGameOver = () => setGameOver(false);

  // Lógica para rotar fila
  const rotateRow = (rowIdx, dir = 1, isDrag = false) => {
    setBoard(prev => {
      const newBoard = prev.map(r => [...r]);
      if (dir > 0) {
        for (let i = 0; i < dir; i++) newBoard[rowIdx].unshift(newBoard[rowIdx].pop());
      } else {
        for (let i = 0; i < -dir; i++) newBoard[rowIdx].push(newBoard[rowIdx].shift());
      }
      return newBoard;
    });
    if (!isDrag && config.gameEndsAt === 'moves') setMoves(m => m - 1);
    else movesPending.current = true;
  };

  // Lógica para rotar columna
  const rotateCol = (colIdx, dir = 1, isDrag = false) => {
    setBoard(prev => {
      const newBoard = prev.map(r => [...r]);
      if (dir > 0) {
        for (let i = 0; i < dir; i++) {
          const last = newBoard[config.boardSize - 1][colIdx];
          for (let r = config.boardSize - 1; r > 0; r--) {
            newBoard[r][colIdx] = newBoard[r - 1][colIdx];
          }
          newBoard[0][colIdx] = last;
        }
      } else {
        for (let i = 0; i < -dir; i++) {
          const first = newBoard[0][colIdx];
          for (let r = 0; r < config.boardSize - 1; r++) {
            newBoard[r][colIdx] = newBoard[r + 1][colIdx];
          }
          newBoard[config.boardSize - 1][colIdx] = first;
        }
      }
      return newBoard;
    });
    if (!isDrag && config.gameEndsAt === 'moves') setMoves(m => m - 1);
    else movesPending.current = true;
  };

  // Selección de celda para interacción táctil/mouse
  const handleSelect = (row, col) => {
    setSelected({ row, col });
    // Aquí se puede implementar lógica de arrastre para rotar
  };

  return (
    <div className={`App${config.displayMode === "dark" ? " dark" : " light"}`}>
      <header className="header">
        <h1>Word Slider</h1>
        <div className="header-btns">
          <button className="header-btn" onClick={() => setInstruccionesOpen(true)} title="Ayuda">
            <img src={config.displayMode === "dark" ? helpIcon : helpDarkIcon} alt="Ayuda" />
          </button>
          <button className="header-btn" onClick={() => setSettingsOpen(true)} title="Configuración">
            <img src={config.displayMode === "dark" ? settingsIcon : settingDarkIcon } alt="Configuración" />
          </button>
        </div>
      </header>
      <div className="score-panel">
        <span>Puntaje: {score}</span>
        {config.gameEndsAt === 'moves' && <span>Movimientos: {moves}</span>}
        {config.gameEndsAt === 'timer' && <span>Tiempo: {timer}s</span>}
      </div>

      <main>
        <Board
          board={board}
          onRotateRow={rotateRow}
          onRotateCol={rotateCol}
          selected={selected}
          onSelect={handleSelect}
          mobile={mobile}
          highlighted={highlighted}
        />
        <div className="action-buttons">
          <button className="action-btn" onClick={() => {
            setBoard(getRandomBoard(config));
            setWordsFound([]);
            setScore(0);
            setMoves(config.totalMoves);
            setTimer(config.totalTime);
          }}>Nuevo tablero</button>
        </div>
        <div className="found-words">
          {wordsFound.map((w, i) => (
            <span key={i}>{w.toUpperCase()}</span>
          ))}
        </div>
      </main>
      <Settings open={settingsOpen} onClose={() => setSettingsOpen(false)} config={config} setConfig={setConfig} />
      <Instrucciones open={instruccionesOpen} onClose={() => setInstruccionesOpen(false)} />
      <GameOver open={gameOver} score={score} wordsFound={wordsFound} onRestart={handleRestart} onClose={handleCloseGameOver} />
    </div>
  );
}

export default App;
