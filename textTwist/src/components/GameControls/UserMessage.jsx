import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './UserMessage.module.css';

const UserMessage = ({ message, type, duration = 3000 }) => {
  const [visible, setVisible] = useState(false);
  const [activeMessage, setActiveMessage] = useState('');
  const [activeType, setActiveType] = useState('');

  useEffect(() => {
    // Si hay un nuevo mensaje, lo mostramos
    if (message) {
      // Guardamos el mensaje y tipo actuales
      setActiveMessage(message);
      setActiveType(type);
      // Hacemos visible el toast
      setVisible(true);
      
      // Configuramos un timer para ocultarlo después de la duración especificada
      const timer = setTimeout(() => {
        setVisible(false);
      }, duration);
      
      // Limpiamos el timer si el componente se desmonta
      return () => clearTimeout(timer);
    }
  }, [message, type, duration]);

  // Si no hay mensaje o no debe ser visible, no renderizamos nada
  if (!activeMessage || !visible) return null;
  
  return (
    <div className={`${styles.toastArea} ${visible ? styles.visible : ''}`}>
      <div className={`${styles.toastContainer} ${styles[activeType]}`}>
        {activeMessage}
      </div>
    </div>
  );
};

UserMessage.propTypes = {
  message: PropTypes.string,
  type: PropTypes.oneOf(['success', 'error', 'info']),
  duration: PropTypes.number
};

UserMessage.defaultProps = {
  message: '',
  type: 'info',
  duration: 3000
};

export default UserMessage;