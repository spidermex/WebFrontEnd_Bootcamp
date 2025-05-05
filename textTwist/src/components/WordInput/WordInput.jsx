import React from 'react';
import PropTypes from 'prop-types';
import styles from './WordInput.module.css';

const WordInput = ({ value, onChange, onSubmit, placeholder, disabled }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.wordForm}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={styles.wordInput}
        autoFocus
        disabled={disabled}
      />
      <button 
        type="submit" 
        className={styles.submitButton}
        disabled={disabled}
      >
        Enviar
      </button>
    </form>
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
  placeholder: 'Escribe una palabra...',
  disabled: false
};

export default WordInput;