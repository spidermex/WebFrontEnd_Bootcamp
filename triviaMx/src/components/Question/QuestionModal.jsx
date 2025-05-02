import React from 'react';
import styled from 'styled-components';
import Modal from '../UI/Modal';
import Button from '../UI/Button';
import { useGame } from '../../context/GameContext';

const QuestionModal = () => {
  const { 
    currentQuestion, 
    selectedAnswer, 
    selectAnswer, 
    timer, 
    showQuestionModal, 
    closeQuestionModal,
    answerStatus
  } = useGame();

  if (!showQuestionModal || !currentQuestion) return null;

  const handleOptionClick = (index) => {
    if (selectedAnswer === null) {
      selectAnswer(index);
    }
  };

  return (
    <Modal 
      show={showQuestionModal} 
      title={`Pregunta - ${currentQuestion.category}`}
      onClose={selectedAnswer !== null ? closeQuestionModal : null} // Only allow closing after answering
      actions={
        selectedAnswer !== null ? (
          <Button onClick={closeQuestionModal} primary>
            Continuar
          </Button>
        ) : null
      }
    >
      <QuestionContainer>
        <Timer>{timer}</Timer>
        <Question>{currentQuestion.question}</Question>
        
        <OptionsContainer>
          {currentQuestion.options.map((option, index) => (
            <OptionButton 
              key={index}
              onClick={() => handleOptionClick(index)}
              selected={selectedAnswer === index}
              correct={selectedAnswer !== null && index === currentQuestion.correctAnswerIndex}
              incorrect={selectedAnswer === index && index !== currentQuestion.correctAnswerIndex}
              disabled={selectedAnswer !== null}
            >
              {option}
            </OptionButton>
          ))}
        </OptionsContainer>
        
        {answerStatus && (
          <ResultMessage status={answerStatus}>
            {answerStatus === 'correct' ? '¡Correcto!' : 'Incorrecto'}
          </ResultMessage>
        )}
      </QuestionContainer>
    </Modal>
  );
};

// Styled components for the question modal
const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Timer = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: ${props => props.children <= 10 ? '#e74c3c' : '#2c3e50'};
`;

const Question = styled.h2`
  font-size: 18px;
  margin: 0;
  text-align: center;
  
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const OptionButton = styled.button`
  padding: 12px 15px;
  border-radius: 6px;
  border: 2px solid #bdc3c7;
  background-color: ${props => {
    if (props.selected && props.correct) return '#27ae60';
    if (props.selected && props.incorrect) return '#e74c3c';
    if (props.correct && props.selected !== null) return '#27ae60';
    return '#f9f9f9';
  }};
  color: ${props => (props.selected || (props.correct && props.selected !== null)) ? '#fff' : '#2c3e50'};
  font-size: 16px;
  cursor: ${props => props.disabled ? 'default' : 'pointer'};
  transition: all 0.2s;
  
  &:hover {
    background-color: ${props => props.disabled ? '' : '#ecf0f1'};
  }
`;

const ResultMessage = styled.div`
  padding: 10px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  border-radius: 6px;
  background-color: ${props => props.status === 'correct' ? 'rgba(39, 174, 96, 0.2)' : 'rgba(231, 76, 60, 0.2)'};
  color: ${props => props.status === 'correct' ? '#27ae60' : '#e74c3c'};
`;

export default QuestionModal;