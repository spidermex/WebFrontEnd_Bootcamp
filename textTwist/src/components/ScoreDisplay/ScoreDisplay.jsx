import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './ScoreDisplay.module.css';

const ScoreDisplay = ({ score, previousScore = null }) => {
  const scoreRef = useRef(null);
  
  // Add animation when score changes
  useEffect(() => {
    if (previousScore !== null && score > previousScore) {
      if (scoreRef.current) {
        scoreRef.current.classList.remove(styles.scoreChanged);
        // Trigger reflow to restart animation
        void scoreRef.current.offsetWidth;
        scoreRef.current.classList.add(styles.scoreChanged);
      }
    }
  }, [score, previousScore]);

  return (
    <div className={styles.scoreContainer}>
      <span className={styles.scoreLabel}>Puntuación:</span>
      <span ref={scoreRef} className={styles.scoreValue}>{score}</span>
    </div>
  );
};

ScoreDisplay.propTypes = {
  score: PropTypes.number.isRequired,
  previousScore: PropTypes.number
};

export default ScoreDisplay;