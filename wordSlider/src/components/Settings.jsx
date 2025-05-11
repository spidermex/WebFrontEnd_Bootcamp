import React, { useState } from "react";
import "../App.css";

const defaultConfig = {
  idioma: "esp",
  boardSize: 4,
  gameEndsAt: "moves",
  totalMoves: 20,
  totalTime: 90,
  displayMode: "dark",
};

const movesOptions = {
  4: [20, 30, 40, 50, 60, 70, 80, 90, 100],
  5: [30, 40, 50, 60, 70, 80, 90, 100],
//   6: [50, 60, 70, 80, 90, 100],
};
const timeOptions = [30, 40, 50, 60, 70, 80, 90, 100, 120, 140, 160, 180, 200, 240, 260, 300];

const Settings = ({ open, onClose, config, setConfig }) => {
  const [localConfig, setLocalConfig] = useState(config || defaultConfig);

  const handleChange = (field, value) => {
    setLocalConfig(prev => ({ ...prev, [field]: value }));
    if (field === "boardSize") {
      // Ajustar movimientos por defecto al cambiar tamaño
      setLocalConfig(prev => ({
        ...prev,
        totalMoves: movesOptions[value][0],
      }));
    }
  };

  const handleSave = () => {
    setConfig(localConfig);
    onClose();
  };

  if (!open) return null;
  return (
    <div className="modal-overlay">
      <div className="modal settings-modal">
        <h2>Configuración</h2>
        <div className="settings-group">
          <label>Idioma:</label>
          <select value={localConfig.idioma} onChange={e => handleChange("idioma", e.target.value)}>
            <option value="esp">Español</option>
            <option value="eng">Inglés</option>
          </select>
        </div>
        <div className="settings-group">
          <label>Tamaño del tablero:</label>
          <select value={localConfig.boardSize} onChange={e => handleChange("boardSize", Number(e.target.value))}>
            <option value={4}>4x4</option>
            <option value={5}>5x5</option>
            {/* <option value={6}>6x6</option> */}
          </select>
        </div>
        <div className="settings-group">
          <label>Modo de juego:</label>
          <select value={localConfig.gameEndsAt} onChange={e => handleChange("gameEndsAt", e.target.value)}>
            <option value="moves">Por turnos</option>
            <option value="timer">Por tiempo</option>
          </select>
        </div>
        {localConfig.gameEndsAt === "moves" ? (
          <div className="settings-group">
            <label>Número de turnos:</label>
            <select value={localConfig.totalMoves} onChange={e => handleChange("totalMoves", Number(e.target.value))}>
              {movesOptions[localConfig.boardSize].map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
        ) : (
          <div className="settings-group">
            <label>Tiempo (segundos):</label>
            <select value={localConfig.totalTime} onChange={e => handleChange("totalTime", Number(e.target.value))}>
              {timeOptions.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
        )}
        <div className="settings-group">
          <label>Modo visual:</label>
          <select value={localConfig.displayMode} onChange={e => handleChange("displayMode", e.target.value)}>
            <option value="dark">Oscuro</option>
            <option value="light">Claro</option>
          </select>
        </div>
        <div className="settings-actions">
          <button className="action-btn" onClick={handleSave}>Guardar</button>
          <button className="action-btn" onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
