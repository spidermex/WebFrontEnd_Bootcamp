import React from 'react';
import styled from 'styled-components';
import { useGame } from '../../context/GameContext';

/**
 * Componente que muestra la pregunta actual y el temporizador
 */
const Question = () => {
  const { 
    currentQuestion, 
    timer, 
    CATEGORIES,
    currentDice
  } = useGame();
  
  if (!currentQuestion) return null;
  
  const category = CATEGORIES[currentDice];
  const isTimeCritical = timer <= 10;
  
  return (
    <QuestionContainer>
      <CategoryHeader>
        <CategoryName>{category}</CategoryName>
        <Timer critical={isTimeCritical}>
          {timer} {timer === 1 ? 'segundo' : 'segundos'}
        </Timer>
      </CategoryHeader>
      <QuestionText>{currentQuestion.question}</QuestionText>
    </QuestionContainer>
  );
};

// Estilos del componente
const QuestionContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 800px;
  
  @media (min-width: 480px) {
    padding: 15px;
    margin-bottom: 15px;
  }
`;

const CategoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  flex-wrap: wrap;
  gap: 5px;
  
  @media (min-width: 480px) {
    flex-wrap: nowrap;
  }
`;

const CategoryName = styled.h3`
  margin: 0;
  color: #2c3e50;
  font-size: 14px;
  
  @media (min-width: 480px) {
    font-size: 16px;
  }
  
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const Timer = styled.div`
  background-color: ${props => props.critical ? '#e74c3c' : '#3498db'};
  color: white;
  padding: 3px 8px;
  border-radius: 20px;
  font-weight: bold;
  font-size: 12px;
  transition: background-color 0.3s ease;
  ${props => props.critical && 'animation: pulse 1s infinite;'}
  
  @keyframes pulse {
    0% { opacity: 1; }
    50% { opacity: 0.7; }
    100% { opacity: 1; }
  }
  
  @media (min-width: 480px) {
    font-size: 14px;
    padding: 4px 10px;
  }
  
  @media (min-width: 768px) {
    font-size: 16px;
    padding: 5px 12px;
  }
`;

const QuestionText = styled.p`
  font-size: 16px;
  color: #34495e;
  line-height: 1.4;
  margin: 0;
  
  @media (min-width: 480px) {
    font-size: 17px;
    line-height: 1.5;
  }
  
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

export default Question;