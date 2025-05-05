import React from 'react';
import PropTypes from 'prop-types';
import styles from './LetterTiles.module.css';
import GameButton from '../GameButton/GameButton';

const LetterTiles = ({ letters, onLetterClick, selectedIndices, disabled }) => {
  const handleLetterClick = (letra, index) => {
    if (!disabled && !selectedIndices.includes(index)) {
      onLetterClick(letra, index);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.lettersContainer}>
        {letters.map((letra, index) => (
          <span 
            key={`letra-${index}`} 
            className={`${styles.letterTile} ${selectedIndices.includes(index) ? styles.selected : ''}`}
            data-letter={letra}
            onClick={() => handleLetterClick(letra, index)}
          >
            {letra}
          </span>
        ))}
      </div>
      
  
    </div>
  );
};

LetterTiles.propTypes = {
  letters: PropTypes.arrayOf(PropTypes.string).isRequired,
  onMixLetters: PropTypes.func.isRequired,
  onLetterClick: PropTypes.func.isRequired,
  selectedIndices: PropTypes.arrayOf(PropTypes.number).isRequired,
  disabled: PropTypes.bool
};

LetterTiles.defaultProps = {
  disabled: false
};

export default LetterTiles;