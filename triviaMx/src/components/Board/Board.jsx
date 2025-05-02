import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import Square from './Square';
import { useGame } from '../../context/GameContext';
import ignoranceImage from '/public/images/alien-3.svg';
import playerImage from '/public/images/ufo.png';


/**
 * Componente que representa el tablero de juego completo
 * Sigue el patrón de numeración específico del tablero de la imagen tablero1.png
 */
const Board = () => {
  const { 
    playerPosition, 
    ignorancePosition, 
    BOARD_SIZE 
  } = useGame();
  
  const boardRef = useRef(null);
  const [orientation, setOrientation] = useState('landscape');
  
  // Determinar la orientación según el ancho de la pantalla
  useEffect(() => {
    const checkOrientation = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setOrientation(width < height ? 'portrait' : 'landscape');
    };
    
    // Comprobar al cargar y al cambiar el tamaño
    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    
    return () => {
      window.removeEventListener('resize', checkOrientation);
    };
  }, []);
  
  // Crear la estructura del tablero para renderizar
  const renderBoard = () => {
    return (
      <>
        {/* Fila 1: casillas 1-10 (izquierda a derecha) */}
        <BoardRow key="row-1">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(number => (
            <Square 
              key={number}
              number={number}
              playerPosition={playerPosition}
              ignorancePosition={ignorancePosition}
              data-square={number}
            />
          ))}
        </BoardRow>
        
        {/* Fila 2: casilla 11 (vertical, alineada a la derecha) */}
        <VerticalContainer alignRight>
          <Square 
            key={11}
            number={11}
            playerPosition={playerPosition}
            ignorancePosition={ignorancePosition}
            data-square={11}
            isVerticalColumn={true}
          />
        </VerticalContainer>
        
        {/* Fila 3: casillas 12-21 (derecha a izquierda) */}
        <BoardRow key="row-3">
          {[21, 20, 19, 18, 17, 16, 15, 14, 13, 12].map(number => (
            <Square 
              key={number}
              number={number}
              playerPosition={playerPosition}
              ignorancePosition={ignorancePosition}
              data-square={number}
            />
          ))}
        </BoardRow>
        
        {/* Fila 4: casilla 22 (vertical, alineada a la izquierda) */}
        <VerticalContainer alignLeft>
          <Square 
            key={22}
            number={22}
            playerPosition={playerPosition}
            ignorancePosition={ignorancePosition}
            data-square={22}
            isVerticalColumn={true}
          />
        </VerticalContainer>
        
        {/* Fila 5: casillas 23-32 (izquierda a derecha) */}
        <BoardRow key="row-5">
          {[23, 24, 25, 26, 27, 28, 29, 30, 31, 32].map(number => (
            <Square 
              key={number}
              number={number}
              playerPosition={playerPosition}
              ignorancePosition={ignorancePosition}
              data-square={number}
            />
          ))}
        </BoardRow>
        
        {/* Fila 6: casilla 33 (vertical, alineada a la derecha) */}
        <VerticalContainer alignRight>
          <Square 
            key={33}
            number={33}
            playerPosition={playerPosition}
            ignorancePosition={ignorancePosition}
            data-square={33}
            isVerticalColumn={true}
          />
        </VerticalContainer>
        
        {/* Fila 7: casillas 34-43 (derecha a izquierda) */}
        <BoardRow key="row-7">
          {[43, 42, 41, 40, 39, 38, 37, 36, 35, 34].map(number => (
            <Square 
              key={number}
              number={number}
              playerPosition={playerPosition}
              ignorancePosition={ignorancePosition}
              data-square={number}
            />
          ))}
        </BoardRow>
        
        {/* Fila 8: casilla 44 (vertical, alineada a la izquierda) */}
        <VerticalContainer alignLeft>
          <Square 
            key={44}
            number={44}
            playerPosition={playerPosition}
            ignorancePosition={ignorancePosition}
            data-square={44}
            isVerticalColumn={true}
          />
        </VerticalContainer>
        
        {/* Fila 9: casillas 45-50 (izquierda a derecha) */}
        <BoardRow key="row-9">
          {[45, 46, 47, 48, 49, 50].map(number => (
            <Square 
              key={number}
              number={number}
              playerPosition={playerPosition}
              ignorancePosition={ignorancePosition}
              data-square={number}
            />
          ))}
        </BoardRow>
      </>
    );
  };
  
  // Hacer scroll hasta la posición actual del jugador
  useEffect(() => {
    if (boardRef.current && playerPosition > 0) {
      const playerSquare = boardRef.current.querySelector(`[data-square="${playerPosition}"]`);
      if (playerSquare) {
        playerSquare.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [playerPosition]);
  
  return (
    <BoardContainer>
      <PlayerInfoContainer>
        <PlayerInfo>
          <PlayerIndicator player="player">
            <PlayerDot player="player" />
            <PlayerText>
              {/* <PlayerName>Tú</PlayerName>  */}
              <PositionIndicator>Casilla {playerPosition}</PositionIndicator>
            </PlayerText>
          </PlayerIndicator>
          <PlayerIndicator player="ignorance">
            <PlayerDot player="ignorance" />
            <PlayerText>
              {/* <PlayerName>Ignorancia</PlayerName> */}
              <PositionIndicator>Casilla {ignorancePosition}</PositionIndicator>
            </PlayerText>
          </PlayerIndicator>
        </PlayerInfo>
      </PlayerInfoContainer>
      <BoardGrid ref={boardRef} orientation={orientation}>
        {renderBoard()}
      </BoardGrid>
      
    </BoardContainer>
  );
};

// Estilos para el tablero y sus elementos
const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const BoardGrid = styled.div`
  /* Estructura de filas para el patrón serpiente */
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0; /* Eliminar espacio vertical entre filas */
  padding: ${props => props.orientation === 'portrait' ? '5px' : '10px'};
  background-image: url('./images/hubble-space.jpg');
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow-x: auto;
  max-width: 100%;
  position: relative; /* Para permitir posicionamiento absoluto dentro */
  
  /* Scrollbar para móviles pequeños */
  @media (max-width: 480px) {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    
    &::-webkit-scrollbar {
      height: 4px;
    }
    
    &::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 4px;
    }
    
    &::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 4px;
    }
  }
`;

const PlayerInfoContainer = styled.div`

  width: 100%;
  margin-top: 0;
  overflow-x: hidden;
  margin-bottom: 5px;
  
  @media (min-width: 768px) {
    margin-top: 20px;
  }
`;

const PlayerInfo = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  width: 100%;
  
  @media (max-width: 380px) {
    flex-direction: row;
    align-items: center;
  }
  
  @media (min-width: 768px) {
    justify-content: space-evenly;
    gap: 0;
  }
`;

const PlayerIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  background-color: ${props => props.player === 'player' ? '#eaf2ff' : '#ffebee'};
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  min-width: 120px;
  
  @media (min-width: 480px) {
    padding: 8px 12px;
    min-width: 150px;
  }
`;

const PlayerText = styled.div`
  display: flex;
  flex-direction: column;
`;

const PlayerName = styled.span`
  font-weight: 500;
  font-size: 14px;
  
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const PlayerDot = styled.div`
  width: 15px;
  height: 15px;
  background-image: ${props => props.player === 'ignorance' ? `url(${ignoranceImage})` : `url(${playerImage})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  flex-shrink: 0;
`;

const PositionIndicator = styled.span`
  font-size: 12px;
  color: #666;
  
  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

const BoardRow = styled.div`
  display: flex;
  flex-direction: ${props => props.isVertical ? 'column' : 'row'};
  width: 100%;
  height: auto;
  justify-content: ${props => props.isVertical ? 'center' : 'flex-start'};
  align-items: center;
  margin: 0;
  padding: 0;
`;

const VerticalContainer = styled.div`
  display: flex;
  justify-content: ${props => props.alignRight ? 'flex-end' : 'flex-start'};
  width: 100%;
`;

export default Board;