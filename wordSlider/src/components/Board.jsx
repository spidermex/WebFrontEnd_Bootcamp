import React, { useRef } from "react";
import "../App.css";

// Board recibe el tablero y callbacks para rotar filas/columnas
const Board = ({ board, onRotateRow, onRotateCol, selected, onSelect, mobile }) => {
  // Para drag/touch
  const startRef = useRef(null);

  // Detectar inicio de drag/touch
  const handleStart = (rIdx, cIdx, e) => {
    onSelect(rIdx, cIdx);
    const point = e.touches ? e.touches[0] : e;
    startRef.current = { x: point.clientX, y: point.clientY, rIdx, cIdx };
  };

  // Detectar movimiento
  const handleMove = (e) => {
    if (!startRef.current) return;
    const point = e.touches ? e.touches[0] : e;
    const dx = point.clientX - startRef.current.x;
    const dy = point.clientY - startRef.current.y;
    // Tamaño de celda (ajustar si cambias el CSS)
    const cellSize = mobile ? 56 : 72;
    // Rotar filas
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > cellSize / 2) {
      const n = Math.round(dx / cellSize);
      if (n !== 0) {
        onRotateRow(startRef.current.rIdx, n);
        startRef.current.x += n * cellSize; // Para permitir más drag
      }
    }
    // Rotar columnas
    else if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > cellSize / 2) {
      const n = Math.round(dy / cellSize);
      if (n !== 0) {
        onRotateCol(startRef.current.cIdx, n);
        startRef.current.y += n * cellSize;
      }
    }
  };

  // Limpiar drag/touch
  const handleEnd = () => {
    startRef.current = null;
  };

  return (
    <div
      className={`board-container${mobile ? " mobile" : ""}`}
      onMouseMove={handleMove}
      onMouseUp={handleEnd}
      onTouchMove={handleMove}
      onTouchEnd={handleEnd}
    >
      {board.map((row, rIdx) => (
        <div className="board-row" key={rIdx}>
          {row.map((cell, cIdx) => (
            <div
              className={`board-cell${selected && selected.row === rIdx && selected.col === cIdx ? " selected" : ""}`}
              key={cIdx}
              onTouchStart={e => handleStart(rIdx, cIdx, e)}
              onMouseDown={e => handleStart(rIdx, cIdx, e)}
            >
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
