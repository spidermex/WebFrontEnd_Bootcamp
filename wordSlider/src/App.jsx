import { useState, useEffect, useRef } from "react";
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
  const [highlighted, setHighlighted] = useState([]); // [{type: 'row'|'col', idx, reverse, word, timestamp}]
  const movesPending = useRef(false);

  useEffect(() => {
    const handleResize = () => setMobile(window.innerWidth < 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Detectar palabras y resaltar SOLO al descontar un movimiento (al finalizar el drag)
  useEffect(() => {
    window.onBoardMoveEnd = () => {
      if (movesPending.current) {
        setMoves(m => m - 1);
        movesPending.current = false;
        // Validar palabras y resaltar
        const nuevas = checkWords(board, palabras, wordsFound);
        if (nuevas.length > 0) {
          setWordsFound(prev => [...prev, ...nuevas]);
          setScore(prev => prev + nuevas.length * 100);
          // Guardar info para resaltar
          const now = Date.now();
          const highlights = [];
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
            if (palabras.has(str) && !wordsFound.includes(str) && nuevas.includes(str)) {
              highlights.push({ type: "row", idx: r, reverse: false, word: str, timestamp: now });
            }
            if (palabras.has(revStr) && !wordsFound.includes(revStr) && nuevas.includes(revStr)) {
              highlights.push({ type: "row", idx: r, reverse: true, word: revStr, timestamp: now });
            }
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
            if (palabras.has(str) && !wordsFound.includes(str) && nuevas.includes(str)) {
              highlights.push({ type: "col", idx: c, reverse: false, word: str, timestamp: now });
            }
            if (palabras.has(revStr) && !wordsFound.includes(revStr) && nuevas.includes(revStr)) {
              highlights.push({ type: "col", idx: c, reverse: true, word: revStr, timestamp: now });
            }
          }
          setHighlighted(prev => [...prev, ...highlights]);
        }
      }
    };
    return () => { window.onBoardMoveEnd = null; };
  }, [board, palabras, wordsFound]);

  // Limpiar highlights después de 2 segundos
  useEffect(() => {
    if (highlighted.length === 0) return;
    const timer = setInterval(() => {
      const now = Date.now();
      setHighlighted(prev => prev.filter(h => now - h.timestamp < 2000));
    }, 200);
    return () => clearInterval(timer);
  }, [highlighted]);

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
    if (!isDrag) setMoves(m => m - 1);
    else movesPending.current = true;
  };

  // Lógica para rotar columna
  const rotateCol = (colIdx, dir = 1, isDrag = false) => {
    setBoard(prev => {
      const newBoard = prev.map(r => [...r]);
      if (dir > 0) {
        for (let i = 0; i < dir; i++) {
          const last = newBoard[BOARD_SIZE - 1][colIdx];
          for (let r = BOARD_SIZE - 1; r > 0; r--) {
            newBoard[r][colIdx] = newBoard[r - 1][colIdx];
          }
          newBoard[0][colIdx] = last;
        }
      } else {
        for (let i = 0; i < -dir; i++) {
          const first = newBoard[0][colIdx];
          for (let r = 0; r < BOARD_SIZE - 1; r++) {
            newBoard[r][colIdx] = newBoard[r + 1][colIdx];
          }
          newBoard[BOARD_SIZE - 1][colIdx] = first;
        }
      }
      return newBoard;
    });
    if (!isDrag) setMoves(m => m - 1);
    else movesPending.current = true;
  };

  // Manejar el fin de un drag para descontar solo un movimiento y disparar validación
  useEffect(() => {
    window.onBoardMoveEnd = () => {
      if (movesPending.current) {
        setMoves(m => m - 1);
        movesPending.current = false;
        window._boardMoveJustEnded = true;
      }
    };
    return () => { window.onBoardMoveEnd = null; };
  }, []);

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
          highlighted={highlighted}
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
