import { useState } from 'react'
import './InstructionsModal.css'
import HelpImage from "../../images/help.svg"
import mezclarIcon from '../../images/mezclar.svg'
import enviarIcon from '../../images/enviar.svg'
import repetirIcon from '../../images/restart.svg'
import siguienteIcon from '../../images/fast_forward.svg'

export const InstructionsModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button className="instructions-button" onClick={() => setIsOpen(true)}>
        <img src={HelpImage} ></img>
      </button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={() => setIsOpen(false)}>
              ×
            </button>
            <div className="instructions">
              <h2>Cómo jugar Giro de Palabras</h2>
              
              <section>
                <h3>1. Objetivo del juego</h3>
                <p> <strong>¡Forma Palabras!</strong></p>
              </section>

              <section>
                <h3>2. Cómo jugar</h3>
                <ul>
                  <li>Usa las letras desordenadas que te damos. <strong>Las palabras deben tener 3 letras o más.</strong> </li>
                </ul>
              </section>

              <section>
                <h3>3. Encuentra la Palabra Clave</h3>
                <ul>
                  <li>Intenta hallar la palabra que usa  <strong>TODAS</strong> las letras. <strong>¡Es necesaria para avanzar!</strong></li>
                </ul>
              </section>

              <section>
                <h3>4. Introduce Palabras</h3>
                <ul>
                  <li>Haz clic en las letras o escríbelas. Pulsa <img src={enviarIcon}></img><strong>Enter  o "Enviar"</strong> para validarlas.</li>

                </ul>
              </section>

              <section>
                <h3>5. ¿Atascado?</h3>
                <ul>
                  <li>Usa el botón <img src={mezclarIcon}></img><strong>"Mezclar"</strong> para girar las letras y ver nuevas combinaciones.</li>
                  <li>Usa el botón <img src={repetirIcon}></img><strong>"Repetir"</strong> para usar la ultima palabra.</li>
                  <li>Usa el botón <img src={siguienteIcon}></img><strong>"Me Rindo"</strong> para terminar la partida y pasar a la siguiente.</li>
                </ul>
              </section>

              <section>
                <h3>6. ¡Cuidado con el Tiempo!</h3>
                <ul>
                  <li>Tienes un límite de tiempo para encontrar <strong>la palabra clave</strong> y pasar de ronda.</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      )}
    </>
  )
}