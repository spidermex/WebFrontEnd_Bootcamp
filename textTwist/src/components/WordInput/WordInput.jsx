import React from 'react';
import PropTypes from 'prop-types';
import styles from './WordInput.module.css';
import GameButton from '../GameButton/GameButton';

const WordInput = ({ value, onChange, onSubmit, placeholder, disabled }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  // Pasamos el evento de cambio sin restricciones para permitir la entrada por teclado
  const handleChange = (e) => {
    onChange(e);
  };

  // Crear un array de 7 elementos para las ranuras
  const slots = Array(7).fill(null);

  return (
    <div>
      {/* Contenedor de ranuras para las letras */}
      <div className={styles.inputSlotsContainer}>
        {slots.map((_, index) => (
          <div key={`slot-${index}`} className={styles.inputSlot}>
            {value[index] ? value[index].toUpperCase() : ''}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className={styles.wordForm}>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className={styles.wordInput}
          autoFocus
          disabled={disabled}
          maxLength={7}
          
        />
        <GameButton 
          buttonType="submit" 
          type="highlight"
          disabled={disabled || value.length === 0}
        >
          Enviar
        </GameButton>
      </form>
    </div>
  );
};

WordInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool
};

WordInput.defaultProps = {
  placeholder: 'Escribe o haz clic en las letras...',
  disabled: false
};

export default WordInput;