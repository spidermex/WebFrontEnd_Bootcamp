import { useState, useContext, useEffect } from 'react'
import './SettingsModal.css'
import SoundToggle from "../SoundToggle/SoundToggle"
import settingsImage from "../../images/settings-white.svg"
import { GameSettingsContext } from "../../context/GameSettingsContext"

export const SettingsModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { gameTime, setGameTime, isPaused, setIsPaused } = useContext(GameSettingsContext)

  // Opciones de tiempo en segundos
  const timeOptions = [60, 120, 180, 240, 300]

  const handleTimeChange = (e) => {
    const newTime = parseInt(e.target.value, 10)
    setGameTime(newTime)
  }

  // Efecto para controlar la pausa cuando se abre/cierra el modal
  useEffect(() => {
    if (isOpen) {
      // Pausar el juego cuando se abre el modal
      setIsPaused(true);
    } else {
      // Reanudar el juego cuando se cierra el modal
      setIsPaused(false);
    }

    // Asegurar que se reanude el juego si el componente se desmonta
    return () => {
      setIsPaused(false);
    };
  }, [isOpen, setIsPaused]);

  // Manejar la apertura del modal
  const handleOpenModal = () => {
    setIsOpen(true);
  };

  // Manejar el cierre del modal
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button className="settings-button" onClick={handleOpenModal}>
        <img className="settings-img" src={settingsImage} alt="Configuración" />
      </button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={handleCloseModal}>
              ×
            </button>
            <div className="settings">
              <h2></h2>
              <h2>Configuración del Juego</h2>

              <section>
                <p>Sonido on/off: <span><SoundToggle /></span></p>

                <div className="settings">
                  <p>Tiempo de juego:</p>
                  <div className="time-selector">
                    <select
                      value={gameTime}
                      onChange={handleTimeChange}
                      className="time-dropdown"
                    >
                      {timeOptions.map(seconds => (
                        <option key={seconds} value={seconds}>
                          {Math.floor(seconds / 60)}:{(seconds % 60).toString().padStart(2, '0')} minutos
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </>
  )
}