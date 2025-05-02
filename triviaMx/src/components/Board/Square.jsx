import React from 'react';
import styled from 'styled-components';
import { useGame } from '../../context/GameContext';
// Importar la imagen de fondo
import blackHoleImage from '/public/images/black-hole.svg';
import ignoranceImage from '/public/images/alien-3.svg';
import playerImage from '/public/images/ufo.png';

/**
 * Componente que representa una casilla individual del tablero
 */
const Square = ({ number, ...rest }) => {
  const { 
    playerPosition, 
    ignorancePosition, 
    animatingPlayer,
    animationPosition,
    isPlayerTurn  // You need to add this to your context
  } = useGame();

  // Check for normal positions (when not animating)
  const hasPlayer = !animatingPlayer && (number === playerPosition);
  const hasIgnorance = !animatingPlayer && (number === ignorancePosition);
  
  // Is this square currently showing animation?
  const isAnimating = animatingPlayer && (number === animationPosition);
  
  // Which piece is moving? This is the key fix
  // We use isPlayerTurn from context to know which piece is actually moving
  const isPlayerAnimating = animatingPlayer && isPlayerTurn;
  const isIgnoranceAnimating = animatingPlayer && !isPlayerTurn;
  
  // Determine if square is active
  const isActive = hasPlayer || hasIgnorance || isAnimating;
  
  // Verificar si es una casilla de columna única (vertical)
  const isVerticalColumn = [11, 22, 33, 44].includes(number);
  
  return (
    <StyledSquare isActive={isActive} isVerticalColumn={isVerticalColumn} {...rest}>
      <SquareNumber>{number}</SquareNumber>
      <PlayersContainer>
        {/* Show player in this square if:
            1. It's normally here (not animating), OR
            2. This is the animation position AND it's the player's turn to move */}
        {(hasPlayer || (isAnimating && isPlayerAnimating)) && 
          <PlayerPiece 
            player="player" 
            isAnimating={isAnimating && isPlayerAnimating}
          />
        }
        
        {/* Same logic for ignorance */}
        {(hasIgnorance || (isAnimating && isIgnoranceAnimating)) && 
          <PlayerPiece 
            player="ignorance" 
            isAnimating={isAnimating && isIgnoranceAnimating}
          />
        }
      </PlayersContainer>
    </StyledSquare>
  );
};

// Estilo para la casilla
const StyledSquare = styled.div`
  position: relative;
  width: ${props => props.isVerticalColumn ? '28px' : '28px'};
  height: ${props => props.isVerticalColumn ? '40px' : '28px'};
  border: 1px solid #333;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: ${props => props.isVerticalColumn ? `url(${blackHoleImage})` : 'none'};
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${props => props.isVerticalColumn 
    ? 'rgba(255, 243, 224, 0.3)'
    : 'rgba(255, 255, 255, 0.7)'
  };
  transition: all 0.2s ease;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
  // Destacar casillas con jugadores
  ${props => props.isActive && `
    border: 2px solid #f39c12;
    box-shadow: 0 0 5px rgba(243, 156, 18, 0.5);
    z-index: 2;
  `}
  
  // Efecto pulsante para casillas especiales
  ${props => props.isVerticalColumn && `
    animation: pulse 2s infinite;
    
    @keyframes pulse {
      0% { background-color: rgba(255, 243, 224, 0.3); }
      50% { background-color: rgba(255, 200, 100, 0.5); }
      100% { background-color: rgba(255, 243, 224, 0.3); }
    }
  `}
  
  /* Responsive design - sizes */
  @media (min-width: 375px) {
    width: ${props => props.isVerticalColumn ? '32px' : '32px'};
    height: ${props => props.isVerticalColumn ? '50px' : '32px'};
  }
  
  @media (min-width: 480px) {
    width: ${props => props.isVerticalColumn ? '36px' : '36px'};
    height: ${props => props.isVerticalColumn ? '60px' : '36px'};
  }
  
  @media (min-width: 768px) {
    width: ${props => props.isVerticalColumn ? '50px' : '50px'};
    height: ${props => props.isVerticalColumn ? '80px' : '50px'};
  }
  
  @media (min-width: 1024px) {
    width: ${props => props.isVerticalColumn ? '60px' : '60px'};
    height: ${props => props.isVerticalColumn ? '100px' : '60px'};
  }
`;

const SquareNumber = styled.span`
  font-size: 10px;
  position: absolute;
  top: 1px;
  left: 1px;
  color: #333;
  
  @media (min-width: 480px) {
    font-size: 11px;
  }
  
  @media (min-width: 768px) {
    font-size: 14px;
    top: 2px;
    left: 2px;
  }
`;

const PlayersContainer = styled.div`
  display: flex;
  gap: 1px;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;
  
  @media (min-width: 480px) {
    gap: 2px;
  }
`;

const PlayerPiece = styled.div`
  width: 50px;
  height: 50px;
  background-color: transparent;
  background-image: ${props => props.player === "ignorance" ? `url(${ignoranceImage})` : `url(${playerImage})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  
  /* Only animate if this piece is currently moving */
  animation: ${props => props.isAnimating ? 'bounce 0.3s ease infinite alternate' : 'none'};
  
  @keyframes bounce {
    from { transform: translateY(0); }
    to { transform: translateY(-4px); }
  }
`;

export default Square;