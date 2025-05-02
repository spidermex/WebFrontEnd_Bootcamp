import React from 'react';
import styled from 'styled-components';
import { useGame } from '../../context/GameContext';

/**
 * Componente que muestra las opciones de respuesta disponibles
 */
const AnswerOptions = () => {
  const { 
    currentQuestion, 
    selectAnswer, 
    selectedAnswer, 
    answerStatus
  } = useGame();
  
  if (!currentQuestion) return null;
  
  return (
    <OptionsContainer>
      {currentQuestion.options.map((option, index) => {
        const isSelected = selectedAnswer === index;
        const isCorrect = currentQuestion.correctAnswerIndex === index;
        
        // Determinar el estado visual de la opción
        let optionStatus = '';
        if (answerStatus) {
          if (isCorrect) {
            optionStatus = 'correct';
          } else if (isSelected) {
            optionStatus = 'incorrect';
          }
        } else if (isSelected) {
          optionStatus = 'selected';
        }
        
        return (
          <OptionButton 
            key={index} 
            onClick={() => selectAnswer(index)}
            status={optionStatus}
            disabled={selectedAnswer !== null}
          >
            <OptionLetter>{String.fromCharCode(65 + index)}</OptionLetter>
            <OptionText>{option}</OptionText>
          </OptionButton>
        );
      })}
    </OptionsContainer>
  );
};

// Estilos del componente
const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: 800px;
  
  @media (min-width: 480px) {
    gap: 10px;
  }
`;

const OptionButton = styled.button`
  display: flex;
  align-items: center;
  padding: 8px 10px;
  border-radius: 8px;
  border: none;
  background-color: ${props => {
    if (props.status === 'correct') return '#2ecc71';
    if (props.status === 'incorrect') return '#e74c3c';
    if (props.status === 'selected') return '#3498db';
    return '#f1f2f6';
  }};
  color: ${props => props.status ? '#ffffff' : '#333333'};
  font-size: 14px;
  cursor: ${props => props.disabled ? 'default' : 'pointer'};
  transition: all 0.2s ease;
  text-align: left;
  outline: none; /* Remover outline para una mejor apariencia en móviles */
  
  /* Efecto de feedback táctil para móviles */
  &:active {
    transform: ${props => !props.disabled ? 'scale(0.98)' : 'none'};
  }
  
  &:hover {
    background-color: ${props => {
      if (props.disabled) {
        if (props.status === 'correct') return '#2ecc71';
        if (props.status === 'incorrect') return '#e74c3c';
        if (props.status === 'selected') return '#3498db';
        return '#f1f2f6';
      }
      return '#dfe4ea';
    }};
  }
  
  @media (min-width: 480px) {
    font-size: 15px;
    padding: 10px 12px;
  }
  
  @media (min-width: 768px) {
    font-size: 18px;
    padding: 12px 20px;
  }
`;

const OptionLetter = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.1);
  margin-right: 10px;
  font-weight: bold;
  flex-shrink: 0; /* Evitar que se comprima */
  font-size: 12px;
  
  @media (min-width: 480px) {
    width: 28px;
    height: 28px;
    font-size: 14px;
  }
  
  @media (min-width: 768px) {
    width: 30px;
    height: 30px;
    margin-right: 12px;
  }
`;

const OptionText = styled.span`
  flex: 1;
  word-break: break-word; /* Permitir que texto largo se rompa adecuadamente */
  hyphens: auto;
  
  /* Limitar a 2 líneas en móviles muy pequeños si el texto es muy largo */
  @media (max-width: 320px) {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export default AnswerOptions;