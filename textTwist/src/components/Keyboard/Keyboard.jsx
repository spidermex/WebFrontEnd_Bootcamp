import React from 'react';
import PropTypes from 'prop-types';
import styles from './Keyboard.module.css';

const Keyboard = ({ onKeyPress, availableLetters }) => {
  // Las filas del teclado
  const rows = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ'],
    ['⌫', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'ENTER']
  ];

  // Verificar si una letra está disponible
  const isLetterAvailable = (key) => {
    if (key === '⌫' || key === 'ENTER') return true;
    
    if (!availableLetters) return true;
    
    // Convertimos la letra a minúscula para comparar
    const lowerKey = key.toLowerCase();
    const availableLettersCounts = {};
    
    // Contamos las ocurrencias de cada letra disponible
    [...availableLetters.toLowerCase()].forEach(char => {
      availableLettersCounts[char] = (availableLettersCounts[char] || 0) + 1;
    });
    
    // Verificar si la letra está en las disponibles
    return (availableLettersCounts[lowerKey] || 0) > 0;
  };

  return (
    <div className={styles.keyboard}>
      {rows.map((row, i) => (
        <div key={i} className={styles.keyboardRow}>
          {row.map((key) => {
            const isAvailable = isLetterAvailable(key);
            const isSpecial = key === '⌫' || key === 'ENTER';
            
            return (
              <button
                key={key}
                className={`${styles.key} ${isSpecial ? styles.keySpecial : ''} ${!isAvailable ? styles.keyDisabled : ''}`}
                onClick={() => isAvailable && onKeyPress(key)}
                disabled={!isAvailable}
              >
                {key}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
};

Keyboard.propTypes = {
  onKeyPress: PropTypes.func.isRequired,
  availableLetters: PropTypes.string
};

export default Keyboard;