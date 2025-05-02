import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import soundService from '../../services/soundService';

/**
 * Componente que muestra un dado 3D con animación
 * @param {Object} props - Propiedades del componente
 * @param {number|null} props.value - Valor final del dado (1-6)
 * @param {boolean} props.rolling - Si el dado está en animación de tirada
 * @param {Function} props.onRollEnd - Callback cuando termina la animación
 */
const Dice = ({ value, rolling, onRollEnd }) => {
  // Estado para guardar la rotación actual del dado
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });
  const [prevRolling, setPrevRolling] = useState(false);
  
  // Definir las rotaciones que corresponden a cada valor del dado
  const diceRotations = {
    1: { x: 0, y: 0, z: 0 },        // 1 arriba
    2: { x: -90, y: 0, z: 0 },      // 2 arriba
    3: { x: 0, y: -90, z: 0 },      // 3 arriba  
    4: { x: 0, y: 90, z: 0 },       // 4 arriba
    5: { x: 90, y: 0, z: 0 },       // 5 arriba
    6: { x: 180, y: 0, z: 0 }       // 6 arriba
  };
  
  useEffect(() => {
    // Reproducir sonido cuando comienza a rodar el dado
    if (rolling && !prevRolling) {
      soundService.playDiceRoll();
    }
    setPrevRolling(rolling);
    
    // Si el dado está rodando, generar rotaciones aleatorias durante la animación
    if (rolling) {
      const animationFrames = 20; // Número de frames para la animación
      let frame = 0;
      
      const interval = setInterval(() => {
        if (frame < animationFrames) {
          // Durante la animación, rotar aleatoriamente
          setRotation({
            x: Math.floor(Math.random() * 360),
            y: Math.floor(Math.random() * 360),
            z: Math.floor(Math.random() * 360)
          });
          frame++;
        } else {
          // Al final de la animación, establecer la rotación correspondiente al valor final
          if (value && diceRotations[value]) {
            setRotation(diceRotations[value]);
          }
          clearInterval(interval);
          if (onRollEnd) onRollEnd();
        }
      }, 100); // 100ms entre cada frame
      
      return () => clearInterval(interval);
    } else if (value && !rolling) {
      // Si hay un valor pero no está rodando, mostrar el valor directamente
      setRotation(diceRotations[value] || { x: 0, y: 0, z: 0 });
    }
  }, [rolling, value, prevRolling]);
  
  return (
    <DiceContainer>
      <DiceWrapper rolling={rolling}>
        <Cube style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) rotateZ(${rotation.z}deg)`
        }}>
          <Face className="front">1</Face>
          <Face className="back">6</Face>
          <Face className="right">3</Face>
          <Face className="left">4</Face>
          <Face className="top">2</Face>
          <Face className="bottom">5</Face>
        </Cube>
      </DiceWrapper>
    </DiceContainer>
  );
};

// Animación de tirada del dado
const rollAnimation = keyframes`
  0% { transform: translateY(0) rotate(0); }
  25% { transform: translateY(-30px) rotate(90deg); }
  50% { transform: translateY(0) rotate(180deg); }
  75% { transform: translateY(-20px) rotate(270deg); }
  100% { transform: translateY(0) rotate(360deg); }
`;

const DiceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  perspective: 600px;
  height: 100px;
`;

const DiceWrapper = styled.div`
  width: 60px;
  height: 60px;
  position: relative;
  transform-style: preserve-3d;
  animation: ${props => props.rolling ? rollAnimation : 'none'} 0.5s ease-in-out infinite;
  animation-iteration-count: ${props => props.rolling ? 4 : 0};
  
  @media (min-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

const Cube = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.5s ease-out;
`;

const Face = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: white;
  border: 2px solid #333;
  border-radius: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.1);
  
  // Configurar los puntos del dado
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
  }
  
  &.front {
    transform: translateZ(30px);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Ccircle cx='30' cy='30' r='8' fill='%23333'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: center;
    font-size: 0;
  }
  
  &.back {
    transform: rotateY(180deg) translateZ(30px);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Ccircle cx='15' cy='15' r='6' fill='%23333'/%3E%3Ccircle cx='45' cy='15' r='6' fill='%23333'/%3E%3Ccircle cx='15' cy='45' r='6' fill='%23333'/%3E%3Ccircle cx='45' cy='45' r='6' fill='%23333'/%3E%3Ccircle cx='15' cy='30' r='6' fill='%23333'/%3E%3Ccircle cx='45' cy='30' r='6' fill='%23333'/%3E%3C/svg%3E");
    font-size: 0;
  }
  
  &.right {
    transform: rotateY(90deg) translateZ(30px);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Ccircle cx='30' cy='15' r='6' fill='%23333'/%3E%3Ccircle cx='30' cy='30' r='6' fill='%23333'/%3E%3Ccircle cx='30' cy='45' r='6' fill='%23333'/%3E%3C/svg%3E");
    font-size: 0;
  }
  
  &.left {
    transform: rotateY(-90deg) translateZ(30px);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Ccircle cx='15' cy='15' r='6' fill='%23333'/%3E%3Ccircle cx='45' cy='15' r='6' fill='%23333'/%3E%3Ccircle cx='15' cy='45' r='6' fill='%23333'/%3E%3Ccircle cx='45' cy='45' r='6' fill='%23333'/%3E%3C/svg%3E");
    font-size: 0;
  }
  
  &.top {
    transform: rotateX(90deg) translateZ(30px);
    
    &::before, &::after {
      content: '';
      position: absolute;
      border-radius: 50%;
      background-color: #333;
    }
    
    &::before {
      width: 12px;
      height: 12px;
      top: 10px;
      left: 10px;
    }
    
    &::after {
      width: 12px;
      height: 12px;
      bottom: 10px;
      right: 10px;
    }
    
    font-size: 0;
  }
  
  &.bottom {
    transform: rotateX(-90deg) translateZ(30px);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Ccircle cx='15' cy='15' r='6' fill='%23333'/%3E%3Ccircle cx='45' cy='15' r='6' fill='%23333'/%3E%3Ccircle cx='30' cy='30' r='6' fill='%23333'/%3E%3Ccircle cx='15' cy='45' r='6' fill='%23333'/%3E%3Ccircle cx='45' cy='45' r='6' fill='%23333'/%3E%3C/svg%3E");
    font-size: 0;
  }
  
  @media (min-width: 768px) {
    font-size: 30px;
    
    &.front, &.back, &.right, &.left, &.top, &.bottom {
      transform-origin: center;
    }
    
    &.front {
      transform: translateZ(40px);
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Ccircle cx='40' cy='40' r='10' fill='%23333'/%3E%3C/svg%3E");
    }
    
    &.back {
      transform: rotateY(180deg) translateZ(40px);
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Ccircle cx='20' cy='20' r='8' fill='%23333'/%3E%3Ccircle cx='60' cy='20' r='8' fill='%23333'/%3E%3Ccircle cx='20' cy='60' r='8' fill='%23333'/%3E%3Ccircle cx='60' cy='60' r='8' fill='%23333'/%3E%3Ccircle cx='20' cy='40' r='8' fill='%23333'/%3E%3Ccircle cx='60' cy='40' r='8' fill='%23333'/%3E%3C/svg%3E");
    }
    
    &.right {
      transform: rotateY(90deg) translateZ(40px);
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Ccircle cx='40' cy='20' r='8' fill='%23333'/%3E%3Ccircle cx='40' cy='40' r='8' fill='%23333'/%3E%3Ccircle cx='40' cy='60' r='8' fill='%23333'/%3E%3C/svg%3E");
    }
    
    &.left {
      transform: rotateY(-90deg) translateZ(40px);
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Ccircle cx='20' cy='20' r='8' fill='%23333'/%3E%3Ccircle cx='60' cy='20' r='8' fill='%23333'/%3E%3Ccircle cx='20' cy='60' r='8' fill='%23333'/%3E%3Ccircle cx='60' cy='60' r='8' fill='%23333'/%3E%3C/svg%3E");
    }
    
    &.bottom {
      transform: rotateX(-90deg) translateZ(40px);
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Ccircle cx='20' cy='20' r='8' fill='%23333'/%3E%3Ccircle cx='60' cy='20' r='8' fill='%23333'/%3E%3Ccircle cx='40' cy='40' r='8' fill='%23333'/%3E%3Ccircle cx='20' cy='60' r='8' fill='%23333'/%3E%3Ccircle cx='60' cy='60' r='8' fill='%23333'/%3E%3C/svg%3E");
    }
  }
`;

export default Dice;