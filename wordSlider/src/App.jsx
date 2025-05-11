import { useState, useEffect } from "react";
import Board from "./components/Board";
import "./App.css";

// Importa los datos locales (tablero y diccionario)
import { palabras } from "./data/palabras_4.js";
import { boards_4 } from "./data/boards4.js";


const TOTAL_MOVES = 20;
const BOARD_SIZE = 4;

function getRandomBoard() {
  // Selecciona un tablero aleatorio
  const idx = Math.floor(Math.random() * boards_4.length);
  return boards_4[idx].board.map(row => [...row]);
}

// Lógica para validar palabras en filas y columnas
function checkWords(board, palabras, wordsFound) {
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
  const [board, setBoard] = useState(getRandomBoard());
  const [moves, setMoves] = useState(TOTAL_MOVES);
  const [score, setScore] = useState(0);
  const [wordsFound, setWordsFound] = useState([]);
  const [selected, setSelected] = useState(null);
  const [mobile, setMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => setMobile(window.innerWidth < 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Detectar palabras tras cada movimiento
  useEffect(() => {
    const nuevas = checkWords(board, palabras, wordsFound);
    if (nuevas.length > 0) {
      setWordsFound(prev => [...prev, ...nuevas]);
      setScore(prev => prev + nuevas.length * 100);
    }
    // eslint-disable-next-line
  }, [board]);

  // Lógica para rotar fila
  const rotateRow = (rowIdx, dir = 1) => {
    setBoard(prev => {
      const newBoard = prev.map(r => [...r]);
      if (dir > 0) {
        newBoard[rowIdx].unshift(newBoard[rowIdx].pop());
      } else {
        newBoard[rowIdx].push(newBoard[rowIdx].shift());
      }
      return newBoard;
    });
    setMoves(m => m - 1);
  };

  // Lógica para rotar columna
  const rotateCol = (colIdx, dir = 1) => {
    setBoard(prev => {
      const newBoard = prev.map(r => [...r]);
      if (dir > 0) {
        const last = newBoard[BOARD_SIZE - 1][colIdx];
        for (let r = BOARD_SIZE - 1; r > 0; r--) {
          newBoard[r][colIdx] = newBoard[r - 1][colIdx];
        }
        newBoard[0][colIdx] = last;
      } else {
        const first = newBoard[0][colIdx];
        for (let r = 0; r < BOARD_SIZE - 1; r++) {
          newBoard[r][colIdx] = newBoard[r + 1][colIdx];
        }
        newBoard[BOARD_SIZE - 1][colIdx] = first;
      }
      return newBoard;
    });
    setMoves(m => m - 1);
  };

  // Selección de celda para interacción táctil/mouse
  const handleSelect = (row, col) => {
    setSelected({ row, col });
    // Aquí se puede implementar lógica de arrastre para rotar
  };

  // TODO: Lógica de validación de palabras y puntaje

  return (
    <div className="App">
      <header className="header">
        <h1>Word Slider</h1>
        <div className="score-panel">
          <span>Puntaje: {score}</span>
          <span>Movimientos: {moves}</span>
        </div>
      </header>
      <main>
        <Board
          board={board}
          onRotateRow={rotateRow}
          onRotateCol={rotateCol}
          selected={selected}
          onSelect={handleSelect}
          mobile={mobile}
        />
        <div className="found-words">
          {wordsFound.map((w, i) => (
            <span key={i}>{w.toUpperCase()}</span>
          ))}
        </div>
        <div className="action-buttons">
          <button className="action-btn" onClick={() => setBoard(getRandomBoard())}>Nuevo tablero</button>
          <button className="action-btn" onClick={() => window.location.reload()}>Reset</button>
        </div>
      </main>
    </div>
  );
}

export default App;
