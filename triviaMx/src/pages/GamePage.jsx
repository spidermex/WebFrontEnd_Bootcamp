import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useGame } from '../context/GameContext';
import Board from '../components/Board/Board';
import Question from '../components/Game/Question';
import AnswerOptions from '../components/Game/AnswerOptions';
import Dice from '../components/Game/Dice';
import Button from '../components/UI/Button';
import Modal from '../components/UI/Modal';
import SoundToggle from '../components/UI/SoundToggle';
import soundService from '../services/soundService';

/**
 * Página principal del juego Trivia Mx
 */
const GamePage = () => {
  const { 
    currentDice, 
    currentQuestion, 
    loading, 
    rollDice, 
    gameOver,
    winner,
    resetGame,
    playerPosition,
    ignorancePosition
  } = useGame();
  
  const [showRules, setShowRules] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isRolling, setIsRolling] = useState(false); // Estado para controlar la animación del dado
  
  // Detectar si es un dispositivo móvil pequeño
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 480);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Manejador para tirar el dado con animación
  const handleRollDice = () => {
    setIsRolling(true);
    
    // Después de la animación, hacer la llamada real para obtener el resultado
    setTimeout(() => {
      rollDice();
      setIsRolling(false);
    }, 2000); // Duración de la animación: 2 segundos
  };
  
  // Renderizar contenido según el estado del juego
  const renderGameContent = () => {
    if (gameOver) {
      return (
        <Modal 
          show={true}
          title={winner === 'player' ? '¡Felicidades! Has ganado' : 'Has perdido'}
          actions={
            <Button onClick={resetGame} variant="primary">
              Jugar de nuevo
            </Button>
          }
        >
          <WinnerMessage winner={winner}>
            {winner === 'player' 
              ? '¡Has derrotado a la ignorancia! Tu conocimiento te ha llevado a la victoria.'
              : 'La ignorancia ha ganado esta vez. ¡No te rindas, sigue aprendiendo y vuelve a intentarlo!'}
          </WinnerMessage>
          <ScoreSummary>
            <span>Tu posición final: Casilla {playerPosition}</span>
            <span>Posición final de la ignorancia: Casilla {ignorancePosition}</span>
          </ScoreSummary>
        </Modal>
      );
    }
    
    return (
      <>
        <Board />
        
        <GameControlsWrapper>
          {!currentQuestion && !loading && (
            <DiceSection>
              {/* Componente de dado visual */}
              <Dice 
                value={currentDice} 
                rolling={isRolling}
              />
              
              <RollButton 
                onClick={handleRollDice} 
                variant="primary"
                disabled={isRolling}
              >
                {isRolling ? 'Tirando...' : (isMobile ? 'Tirar' : 'Tirar dado')}
              </RollButton>
            </DiceSection>
          )}
          
          {loading && (
            <LoadingContainer>
              <LoadingSpinner />
              <LoadingMessage>Cargando pregunta...</LoadingMessage>
            </LoadingContainer>
          )}
          
          {currentQuestion && (
            <Modal
              show={true}
              title={`Pregunta valor ${currentDice}`}
              onClose={() => {}} >
              <QuestionContainer>
                <Question />
                <AnswerOptions />
              </QuestionContainer>
            </Modal>
          )}
        </GameControlsWrapper>
      </>
    );
  };
  
  return (
    <GamePageContainer>
      <Header>
        <GameTitle>Cosmic Trivia</GameTitle>
        <HeaderControls>
          <SoundToggle />
          <Button 
            onClick={() => setShowRules(true)} 
            variant="secondary"
          >
            {isMobile ? '?' : 'Reglas'}
          </Button>
        </HeaderControls>
      </Header>
      
      {renderGameContent()}
      
      <Modal
        show={showRules}
        title="Reglas del juego"
        onClose={() => setShowRules(false)}
      >
        <RulesList>
          <RuleItem>Tira el dado para determinar una categoría de preguntas.</RuleItem>
          <RuleItem>Si caes en un 'Hoyo Negro' Serás teletransportado a una casilla aleatoria.</RuleItem>
          <RuleItem>Responde correctamente y avanzarás el número de casillas que muestre el dado.</RuleItem>
          <RuleItem>Si respondes incorrectamente o se acaba el tiempo (20 segundos), la "ignorancia" avanzará el número de casillas que muestre el dado.</RuleItem>
          <RuleItem>El primero en llegar a la casilla 50 gana la partida.</RuleItem>
        </RulesList>
        <CategoryList>
          <CategoryTitle>Categorías:</CategoryTitle>
          <CategoriesGrid>
            <CategoryItem category={1}>1 - Cultura General</CategoryItem>
            <CategoryItem category={2}>2 - Deportes</CategoryItem>
            <CategoryItem category={3}>3 - Geografía e Historia</CategoryItem>
            <CategoryItem category={4}>4 - Ciencia y Tecnología</CategoryItem>
            <CategoryItem category={5}>5 - Cine, Música y TV</CategoryItem>
            <CategoryItem category={6}>6 - Arte y Literatura</CategoryItem>
          </CategoriesGrid>
        </CategoryList>
      </Modal>
    </GamePageContainer>
  );
};

// Estilos del componente
const GamePageContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  
  @media (min-width: 480px) {
    padding: 15px;
  }
  
  @media (min-width: 768px) {
    padding: 20px;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 800px;
  margin-bottom: 15px;
  padding: 0 5px;
  
  @media (min-width: 480px) {
    margin-bottom: 20px;
  }
`;

const GameTitle = styled.h1`
  font-size: 22px;
  color:rgb(152, 158, 163);
  margin: 0;
  
  @media (min-width: 480px) {
    font-size: 24px;
  }
  
  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

const HeaderControls = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const GameControlsWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DiceSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;
  
  @media (max-width: 380px) {
    flex-direction: ${props => props.currentDice ? 'column' : 'row'};
  }
`;

const RollButton = styled(Button)`
  min-width: 100px;
`;

const QuestionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DiceResult = styled.div`
  margin: 10px 0;
  font-size: 16px;
  color: #2c3e50;
  display: flex;
  align-items: center;
  
  @media (min-width: 480px) {
    font-size: 18px;
    margin: 15px 0;
  }
`;

const DiceValue = styled.span`
  display: inline-block;
  margin-left: 8px;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background-color: #3498db;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  
  @media (min-width: 480px) {
    width: 40px;
    height: 40px;
    font-size: 22px;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 0;
`;

const LoadingSpinner = styled.div`
  width: 30px;
  height: 30px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 10px;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const LoadingMessage = styled.div`
  color: #7f8c8d;
  font-size: 16px;
`;

const RulesList = styled.ul`
  padding-left: 20px;
  margin-bottom: 20px;
  font-size: 14px;
  
  @media (min-width: 480px) {
    font-size: 16px;
  }
`;

const RuleItem = styled.li`
  margin-bottom: 8px;
`;

const CategoryList = styled.div`
  background-color: #f1f2f6;
  padding: 10px;
  border-radius: 8px;
  
  @media (min-width: 480px) {
    padding: 15px;
  }
`;

const CategoryTitle = styled.h4`
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 15px;
  
  @media (min-width: 480px) {
    font-size: 16px;
  }
`;

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 5px;
  
  @media (min-width: 480px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const CategoryItem = styled.div`
  margin-bottom: 5px;
  padding: 5px;
  border-left: 4px solid ${props => {
    const colors = {
      1: '#3498db', // Cultura General
      2: '#2ecc71', // Deportes
      3: '#e67e22', // Geografía e Historia
      4: '#9b59b6', // Ciencia y Tecnología
      5: '#e74c3c', // Cine, Música y TV
      6: '#f1c40f', // Arte y Literatura
    };
    return colors[props.category] || '#95a5a6';
  }};
  padding-left: 10px;
  background-color: rgba(255, 255, 255, 0.7);
  font-size: 13px;
  
  @media (min-width: 480px) {
    font-size: 14px;
  }
`;

const WinnerMessage = styled.p`
  font-size: 16px;
  text-align: center;
  color: ${props => props.winner === 'player' ? '#2ecc71' : '#e74c3c'};
  margin-bottom: 20px;
  
  @media (min-width: 480px) {
    font-size: 18px;
  }
`;

const ScoreSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: #f1f2f6;
  padding: 15px;
  border-radius: 8px;
  font-size: 14px;
  
  @media (min-width: 480px) {
    font-size: 16px;
  }
`;

export default GamePage;