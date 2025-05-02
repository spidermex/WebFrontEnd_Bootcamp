import React from 'react';
import styled from 'styled-components';

/**
 * Componente de botón reutilizable para la aplicación
 * @param {Object} props - Propiedades del botón
 * @param {string} props.variant - Variante del botón ('primary', 'secondary', 'success', 'danger')
 * @param {boolean} props.disabled - Si el botón está deshabilitado
 * @param {function} props.onClick - Función a ejecutar cuando se hace clic
 * @param {ReactNode} props.children - Contenido del botón
 */
const Button = ({ variant = 'primary', disabled = false, onClick, children, ...props }) => {
  return (
    <StyledButton 
      variant={variant}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

const getButtonColor = (variant) => {
  switch (variant) {
    case 'primary':
      return { bg: '#3498db', hover: '#2980b9', text: '#fff' };
    case 'secondary':
      return { bg: '#95a5a6', hover: '#7f8c8d', text: '#fff' };
    case 'success':
      return { bg: '#2ecc71', hover: '#27ae60', text: '#fff' };
    case 'danger':
      return { bg: '#e74c3c', hover: '#c0392b', text: '#fff' };
    default:
      return { bg: '#3498db', hover: '#2980b9', text: '#fff' };
  }
};

const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: background-color 0.2s ease;
  text-align: center;
  
  background-color: ${props => 
    props.disabled 
      ? '#cccccc' 
      : getButtonColor(props.variant).bg
  };
  
  color: ${props => 
    props.disabled 
      ? '#666666' 
      : getButtonColor(props.variant).text
  };
  
  &:hover {
    background-color: ${props => 
      props.disabled 
        ? '#cccccc' 
        : getButtonColor(props.variant).hover
    };
  }
  
  @media (min-width: 768px) {
    font-size: 18px;
    padding: 12px 24px;
  }
`;

export default Button;