import React from 'react';

const Instrucciones = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="modal-overlay">
      <div className="modal instrucciones-modal">
        <h2>Instrucciones</h2>
        <p>Próximamente aquí las instrucciones.</p>
        <div className="settings-actions">
          <button className="action-btn" onClick={onClose}>Cerrar</button>
        </div>
      </div>
    </div>
  );
};

export default Instrucciones;