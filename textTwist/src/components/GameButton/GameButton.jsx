import React from 'react';
import PropTypes from 'prop-types';
import styles from './GameButton.module.css';

const GameButton = ({ 
  children, 
  onClick, 
  type = 'primary', 
  buttonType = 'button',
  disabled = false, 
  highlight = false,
  className = '' 
}) => {
  const buttonClass = `${styles.gameButton} ${styles[`button${type.charAt(0).toUpperCase() + type.slice(1)}`]} ${highlight ? styles.buttonHighlight : ''} ${disabled ? styles.buttonDisabled : ''} ${className}`;
  
  return (
    <button
      type={buttonType}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

GameButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['primary', 'secondary', 'highlight']),
  buttonType: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
  highlight: PropTypes.bool,
  className: PropTypes.string
};

export default GameButton;