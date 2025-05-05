import React from 'react';
import PropTypes from 'prop-types';
import styles from './LetterTiles.module.css';

const LetterTiles = ({ letters, onMixLetters, disabled }) => {
  return (
    <div className={styles.container}>
      <div className={styles.lettersContainer}>
        {letters.map((letra, index) => (
          <span 
            key={`letra-${index}`} 
            className={styles.letterTile}
            data-letter={letra}
          >
            {letra}
          </span>
        ))}
      </div>
      
      <div className={styles.controls}>
        <button 
          onClick={onMixLetters}
          className={styles.mixButton}
          disabled={disabled}
        >
          Mezclar
        </button>
      </div>
    </div>
  );
};

LetterTiles.propTypes = {
  letters: PropTypes.arrayOf(PropTypes.string).isRequired,
  onMixLetters: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

LetterTiles.defaultProps = {
  disabled: false
};

export default LetterTiles;