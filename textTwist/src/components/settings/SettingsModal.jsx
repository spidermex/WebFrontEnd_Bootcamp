import { useState, useContext, useEffect } from 'react'
import './SettingsModal.css'
import soundService from '../../utils/soundService';
import soundOnIcon from '../../images/sound-on.svg';
import soundOffIcon from '../../images/sound-off.svg';
import SoundToggle from "../SoundToggle/SoundToggle"
import settingsImage from "../../images/settings-white.svg"
import { GameSettingsContext } from "../../context/GameSettingsContext"

export const SettingsModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { gameTime, setGameTime, soundEnabled, setSoundEnabled, isPaused, setIsPaused, idioma, setIdioma } = useContext(GameSettingsContext)

  // Opciones de tiempo en segundos
  const timeOptions = [60, 120, 180, 240, 300]

  const handleTimeChange = (e) => {
    const newTime = parseInt(e.target.value, 10)
    setGameTime(newTime)
  }

  const handleIdiomaChange = (e) => {
    const newIdioma = e.target.value
    setIdioma(newIdioma)
  }
  
  const toggleSound = () => {
    const newState = soundService.toggleSound(soundEnabled);
    setSoundEnabled(newState);
  };

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
              <h2>
                {idioma=== 'esp' ? `Configuración del Juego` : `Game Settings`}
                </h2>

              <section>
                <div className="settings">
                  <p>
                    {idioma=== 'esp' ? `Idioma:` : 'Language:'}
                  </p>
                  <div className="time-selector">
                    <select
                      value={idioma}
                      onChange={handleIdiomaChange}
                      className="time-dropdown"
                    >
                      <option key={'esp'} value="esp">Español</option>
                      <option key={'eng'} value="eng">English</option>
                    </select>
                  </div>
                </div>

                {/* <p>Sonido on/off: <span><SoundToggle /></span></p> */}

                <p>{idioma=== 'esp' ? `Sonido on/off:` : `Sound on/off`}  </p>

                <button
                      className="soundButton"
                      onClick={toggleSound}
                      aria-pressed={soundEnabled}
                      type="button"
                    >
                      {soundEnabled ? (
                        <span role="img" aria-label="Sound enabled">
                          <img src={soundOnIcon} alt="" />
                        </span>
                      ) : (
                        <span role="img" aria-label="Sound disabled">
                          <img src={soundOffIcon} alt="" />
                        </span>
                      )}
                    </button>

                <div className="settings">
                  <p>
                    {idioma=== 'esp' ? `Tiempo de juego:` : `Game time:`}
                  </p>
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