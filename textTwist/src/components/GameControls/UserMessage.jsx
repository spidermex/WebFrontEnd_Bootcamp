import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserMessage.module.css';

const UserMessage = ({ message, type }) => {
  if (!message) return null;
  
  return (
    <div className={`${styles.messageContainer} ${styles[type]}`}>
      {message}
    </div>
  );
};

UserMessage.propTypes = {
  message: PropTypes.string,
  type: PropTypes.oneOf(['success', 'error', 'info'])
};

UserMessage.defaultProps = {
  message: '',
  type: 'info'
};

export default UserMessage;