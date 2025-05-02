import React from 'react';
import styled from 'styled-components';
import Button from './Button';

/**
 * Componente Modal para mostrar información importante
 */
const Modal = ({ show, title, children, onClose, actions }) => {
  if (!show) return null;
  
  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          {onClose && (
            <CloseButton onClick={onClose}>×</CloseButton>
          )}
        </ModalHeader>
        <ModalBody>
          {children}
        </ModalBody>
        {actions && (
          <ModalFooter>
            {actions}
          </ModalFooter>
        )}
      </ModalContent>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 15px;
`;

const ModalContent = styled.div`
  background-color: #fff;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  animation: fadeIn 0.3s ease;
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @media (min-width: 768px) {
    width: 80%;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid #e1e1e1;
`;

const ModalTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  color: #2c3e50;
  
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #95a5a6;
  
  &:hover {
    color: #7f8c8d;
  }
`;

const ModalBody = styled.div`
  padding: 20px;
  font-size: 16px;
  color: #34495e;
  line-height: 1.5;
  
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 15px 20px;
  border-top: 1px solid #e1e1e1;
`;

export default Modal;