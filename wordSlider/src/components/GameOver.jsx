import React from "react";
import "../App.css";

const GameOver = ({ open, score, wordsFound, onRestart, onClose }) => {
  if (!open) return null;
  return (
    <div className="modal-overlay">
      <div className="modal gameover-modal">
        <h2>¡Juego terminado!</h2>
        <p>Puntuación: <b>{score}</b></p>
        <p>Palabras encontradas: <b>{wordsFound.length}</b></p>
        <div className="settings-actions">
          <button className="action-btn" onClick={onRestart}>Jugar de nuevo</button>
          <button className="action-btn" onClick={onClose}>Cerrar</button>
        </div>
      </div>
    </div>
  );
};

export default GameOver;
