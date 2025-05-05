import React, { useEffect, useRef, forwardRef, useImperativeHandle, useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from './WordInput.module.css';

const WordInput = forwardRef(({ value, onChange, onSubmit, disabled, maxLength = 7 }, ref) => {
  const containerRef = useRef(null);
  
  // Exponemos el método focus a través de la ref
  useImperativeHandle(ref, () => ({
    focus: () => {
      if (containerRef.current && !disabled) {
        containerRef.current.focus();
      }
    }
  }));
  
  // Función para manejar eventos de teclado con useCallback
  const handleKeyDown = useCallback((e) => {
    if (disabled) return;
    
    // Manejo de tecla Enter para enviar la palabra
    if (e.key === 'Enter' && value.length > 0) {
      e.preventDefault();
      onSubmit();
      return;
    }
    
    // Manejo de tecla Backspace/Delete para borrar la última letra
    if (e.key === 'Backspace' || e.key === 'Delete') {
      const syntheticEvent = {
        target: { value: value.slice(0, -1) }
      };
      onChange(syntheticEvent);
      return;
    }
    
    // Manejo de letras (solo permitimos letras a-z)
    if (/^[a-zA-Z]$/.test(e.key) && value.length < maxLength) {
      const syntheticEvent = {
        target: { value: value + e.key.toLowerCase() }
      };
      onChange(syntheticEvent);
    }
  }, [disabled, value, maxLength, onChange, onSubmit]);
  
  // Efecto para agregar y eliminar el listener de teclado
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    
    // Asegurar que el componente tenga foco inicial
    if (containerRef.current && !disabled) {
      containerRef.current.focus();
    }
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown, disabled]);

  // Dar foco al contenedor cuando se hace clic en él
  const handleContainerClick = () => {
    if (!disabled && containerRef.current) {
      containerRef.current.focus();
    }
  };

  // Crear un array con la cantidad adecuada de elementos para las ranuras
  const slots = Array(maxLength).fill(null);

  return (
    <div className={styles.wordInputWrapper}>
      {/* Contenedor de ranuras para las letras */}
      <div 
        ref={containerRef}
        className={`${styles.inputSlotsContainer}`}
        onClick={handleContainerClick}
        tabIndex={disabled ? -1 : 0} // Hace que el div pueda recibir foco
      >
        {slots.map((_, index) => (
          <div 
            key={`slot-${index}`} 
            className={`${styles.inputSlot} ${index === value.length && !disabled ? styles.activeSlot : ''}`}
          >
            {value[index] ? value[index].toUpperCase() : ''}
          </div>
        ))}
        
        {/* Indicador de teclado activo */}
        {!disabled && (
          <div className={styles.keyboardIndicator}>
            <span className={styles.keyboardHint}>Teclado activo</span>
          </div>
        )}
      </div>
    </div>
  );
});

WordInput.displayName = 'WordInput';

WordInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  maxLength: PropTypes.number
};

WordInput.defaultProps = {
  disabled: false,
  maxLength: 7
};

export default WordInput;