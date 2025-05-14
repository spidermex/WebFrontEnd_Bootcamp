import { useState } from 'react'
import './InstructionsModal.css'
import HelpImage from "../../images/help.svg"
import mezclarIcon from '../../images/mezclar.svg'
import enviarIcon from '../../images/enviar.svg'
import repetirIcon from '../../images/restart.svg'
import siguienteIcon from '../../images/fast_forward.svg'

export const InstructionsModal = ({idioma='esp'}) => {
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
              <h2>
                {idioma=== 'esp' ? `Cómo jugar Gira Palabras` : `How to play Twist Words`}
              </h2>
              
              <section>
                <h3>{idioma=== 'esp' ? `1. Objetivo del juego` : `1. Game Objective`}</h3>
                <p> <strong>{idioma=== 'esp' ? `¡Forma Palabras!` : `Form Words!`}</strong></p>
              </section>

              <section>
                <h3>{idioma=== 'esp' ? `2. Cómo jugar` : `2. How to play`}</h3>
                <ul>
                  {idioma=== 'esp' ?
                  <li>Usa las letras desordenadas que te damos. <strong>Las palabras deben tener 3 letras o más.</strong> </li>
                  :
                  <li>Use the jumbled letters we give you. <strong>The words must have 3 letters or more.</strong> </li>
                  }
                </ul>
              </section>

              <section>
                <h3>{idioma=== 'esp' ? `3. Encuentra la Palabra Clave` : `3. Find the Key Word`}</h3>
                <ul>
                  {idioma=== 'esp' ?
                  <li>Intenta hallar la palabra que usa  <strong>TODAS</strong> las letras. <strong>¡Es necesaria para avanzar!</strong></li>
                  :
                  <li>Try to find the word that uses <strong>ALL</strong> the letters. <strong>It is necessary to advance!</strong></li>
                  }
                </ul>
              </section>

              <section>
                <h3>{idioma=== 'esp' ? `4. Introduce Palabras` : `4. Enter Words`}</h3>
                <ul>
                  {idioma=== 'esp' ?
                  <li>Haz clic en las letras o escríbelas. Pulsa <img src={enviarIcon}></img><strong>Enter  o "Enviar"</strong> para validarlas.</li>
                  :
                  <li>Click on the letters or type them. Press <img src={enviarIcon}></img><strong>Enter or "Send"</strong> to validate them.</li>
                  }
                </ul>
              </section>

              <section>
                <h3>{idioma=== 'esp' ? `5. ¿Atascado?` : `5. Stuck?`}</h3>
                <ul>
                  {idioma=== 'esp' ?
                  <>
                  <li>Usa el botón <img src={mezclarIcon}></img><strong>"Mezclar"</strong> para girar las letras y ver nuevas combinaciones.</li>
                  <li>Usa el botón <img src={repetirIcon}></img><strong>"Repetir"</strong> para usar la ultima palabra.</li>
                  <li>Usa el botón <img src={siguienteIcon}></img><strong>"Me Rindo"</strong> para terminar la partida y pasar a la siguiente.</li>
                  </>
                  :
                  <>
                  <li>Use the <img src={mezclarIcon}></img><strong>"Mix"</strong> button to rotate the letters and see new combinations.</li>
                  <li>Use the <img src={repetirIcon}></img><strong>"Repeat"</strong> button to use the last word.</li>
                  <li>Use the <img src={siguienteIcon}></img><strong>"I Give Up"</strong> button to end the game and move on to the next one.</li>  
                  </>
                  } 
                </ul>
              </section>

              <section>
                <h3>{idioma=== 'esp' ? `6. ¡Cuidado con el Tiempo!` : `6. Watch out for the Time!`}</h3>
                <ul>
                  {idioma=== 'esp' ?
                  <li>Tienes un límite de tiempo para encontrar <strong>la palabra clave</strong> y pasar de ronda.</li>
                  :
                  <li>You have a time limit to find <strong>the key word</strong> and move on to the next round.</li>
                  }
                </ul>
              </section>
            </div>
          </div>
        </div>
      )}
    </>
  )
}