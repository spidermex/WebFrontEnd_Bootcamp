import React from 'react';
import PropTypes from 'prop-types';
import styles from './GameButton.module.css';

const ActionButtons = ({ children, className = '' }) => {
  return (
    <div className={`${styles.actionButtons} ${className}`}>
      {children}
    </div>
  );
};

ActionButtons.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default ActionButtons;