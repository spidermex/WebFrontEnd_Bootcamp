import React, { useState } from 'react';
import styled from 'styled-components';
import soundService from '../../services/soundService';

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
    <SoundButton onClick={toggleSound} soundOn={soundOn}>
      {soundOn ? (
        <span role="img" aria-label="Sonido activado">🔊</span>
      ) : (
        <span role="img" aria-label="Sonido desactivado">🔇</span>
      )}
    </SoundButton>
  );
};

const SoundButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 5px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;
  color: ${props => props.soundOn ? '#3498db' : '#95a5a6'};
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.5);
  }
  
  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export default SoundToggle;