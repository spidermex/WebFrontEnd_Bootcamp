import React, { useRef } from "react";
import "../App.css";

// Board recibe el tablero y callbacks para rotar filas/columnas
const Board = ({ board, onRotateRow, onRotateCol, selected, onSelect, mobile, highlighted }) => {
  // Para drag/touch
  const startRef = useRef(null);

  // Helper para saber si una celda está siendo arrastrada (solo la celda bajo el dedo/mouse)
  const isDragged = (r, c) => {
    if (!selected || !startRef.current) return false;
    let offset = 0;
    const cellSize = mobile ? 56 : 72;
    const dx = startRef.current.dragType === 'row' ? startRef.current.lastOffset || 0 : 0;
    const dy = startRef.current.dragType === 'col' ? startRef.current.lastOffset || 0 : 0;
    if (startRef.current.dragType === 'row') {
      // Nueva columna
      const newCol = selected.col + dx;
      return r === selected.row && c === ((newCol % board.length + board.length) % board.length);
    } else if (startRef.current.dragType === 'col') {
      // Nueva fila
      const newRow = selected.row + dy;
      return c === selected.col && r === ((newRow % board.length + board.length) % board.length);
    }
    // Si no hay drag, solo la celda original
    return r === selected.row && c === selected.col;
  };

  // Detectar inicio de drag/touch
  const handleStart = (rIdx, cIdx, e) => {
    onSelect(rIdx, cIdx);
    const point = e.touches ? e.touches[0] : e;
    startRef.current = { x: point.clientX, y: point.clientY, rIdx, cIdx, lastOffset: 0, dragType: null, moved: false };
  };

  // Detectar movimiento
  const handleMove = (e) => {
    if (!startRef.current) return;
    const point = e.touches ? e.touches[0] : e;
    const dx = point.clientX - startRef.current.x;
    const dy = point.clientY - startRef.current.y;
    // Tamaño de celda (ajustar si cambias el CSS)
    const cellSize = mobile ? 56 : 72;
    if (!startRef.current.dragType) {
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > cellSize / 2) {
        startRef.current.dragType = 'row';
      } else if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > cellSize / 2) {
        startRef.current.dragType = 'col';
      }
    }
    // Rotar filas
    if (startRef.current.dragType === 'row') {
      const n = Math.round(dx / cellSize);
      if (n !== startRef.current.lastOffset) {
        onRotateRow(startRef.current.rIdx, n - startRef.current.lastOffset, true);
        startRef.current.lastOffset = n;
        startRef.current.moved = true;
      }
    }
    // Rotar columnas
    else if (startRef.current.dragType === 'col') {
      const n = Math.round(dy / cellSize);
      if (n !== startRef.current.lastOffset) {
        onRotateCol(startRef.current.cIdx, n - startRef.current.lastOffset, true);
        startRef.current.lastOffset = n;
        startRef.current.moved = true;
      }
    }
  };

  // Limpiar drag/touch
  const handleEnd = () => {
    if (startRef.current && startRef.current.moved) {
      if (typeof window.onBoardMoveEnd === 'function') window.onBoardMoveEnd();
    }
    startRef.current = null;
    onSelect(null, null);
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
              className={`board-cell${isDragged(rIdx, cIdx) ? " selected" : ""}${highlighted && highlighted.length && highlighted.some(h => (h.type === "row" && h.idx === rIdx) || (h.type === "col" && h.idx === cIdx)) ? " highlighted" : ""}`}
              key={cIdx}
              onTouchStart={e => { handleStart(rIdx, cIdx, e); }}
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
