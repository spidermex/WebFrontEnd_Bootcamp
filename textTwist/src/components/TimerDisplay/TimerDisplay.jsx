import React from 'react';
import PropTypes from 'prop-types';
import styles from './TimerDisplay.module.css';

const TimerDisplay = ({ seconds }) => {
  // Format time in MM:SS
  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Determine if time is low (less than 30 seconds)
  const isTimeLow = seconds < 30;

  return (
    <div className={styles.timerBox}>
      <span className={`${styles.timer} ${isTimeLow ? styles.timerLow : ''}`}>
        {formatTime(seconds)}
      </span>
    </div>
  );
};

TimerDisplay.propTypes = {
  seconds: PropTypes.number.isRequired
};

export default TimerDisplay;