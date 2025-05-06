import { useState } from 'react';
import soundService from '../../utils/soundService';
import soundOnIcon from '../../images/sound-on.svg';
import soundOffIcon from '../../images/sound-off.svg';
import './SoundToggle.css';

/**
 * Componente para activar/desactivar el sonido del juego
 */
const SoundToggle = () => {
  const [soundOn, setSoundOn] = useState(soundService.isSoundEnabled());

  const toggleSound = () => {
    const newState = soundService.toggleSound();
    setSoundOn(newState);
  };

  return (
    <button
      className="soundButton"
      onClick={toggleSound}
      aria-pressed={soundOn}
      type="button"
    >
      {soundOn ? (
        <span role="img" aria-label="Sound enabled">
          <img src={soundOnIcon} alt="" />
        </span>
      ) : (
        <span role="img" aria-label="Sound disabled">
          <img src={soundOffIcon} alt="" />
        </span>
      )}
    </button>
  );
};

export default SoundToggle;