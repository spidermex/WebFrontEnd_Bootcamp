import React from 'react';
import styled from 'styled-components';
// Importar la imagen de fondo
import blackHoleImage from '../../assets/images/black-hole.svg';
import ignoranceImage from '../../assets/images/alien-3.svg';
import playerImage from '../../assets/images/ufo.png';

/**
 * Componente que representa una casilla individual del tablero
 */
const Square = ({ number, playerPosition, ignorancePosition, ...rest }) => {
  // Verificar si algún jugador está en esta casilla
  const hasPlayer = playerPosition === number;
  const hasIgnorance = ignorancePosition === number;
  
  // Si la casilla está activa (tiene un jugador), añadimos la clase correspondiente
  const isActive = hasPlayer || hasIgnorance;
  
  // Verificar si es una casilla de columna única (vertical)
  const isVerticalColumn = [11, 22, 33, 44].includes(number);
  
  return (
    <StyledSquare isActive={isActive} isVerticalColumn={isVerticalColumn} {...rest}>
      <SquareNumber>{number}</SquareNumber>
      <PlayersContainer>
        {hasPlayer && <PlayerPiece player="player" />}
        {hasIgnorance && <PlayerPiece player="ignorance" />}
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
  margin: 0; /* Eliminar cualquier margen */
  padding: 0; /* Eliminar cualquier padding */
  box-sizing: border-box; /* Asegurar que el borde no añada tamaño */
  
  // Destacar casillas con jugadores
  ${props => props.isActive && `
    border: 2px solid #f39c12;
    box-shadow: 0 0 5px rgba(243, 156, 18, 0.5);
    z-index: 2;
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
  width: 24px;
  height: 24px;
/*  border-radius: 50%;  */
   background-color:transparent; 
  background-image: ${props => props.player === "ignorance" ? `url(${ignoranceImage})` : `url(${playerImage})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  
`;

export default Square;