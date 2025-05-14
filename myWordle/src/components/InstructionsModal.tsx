import { useState } from 'react'
import '../styles/InstructionsModal.css'
import helpIcon from '../images/help_gray.svg';


type InstructionsModalProps = { idioma: string };

export const InstructionsModal: React.FC<InstructionsModalProps> = ({ idioma='esp' }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button className="instructions-button" onClick={() => setIsOpen(true)}>
        <img src={helpIcon} alt="help button" />
      </button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={() => setIsOpen(false)}>
              ×
            </button>
            <div className="instructions">
              <h2>{idioma==='esp' ? `Cómo jugar Wordle` : `How to play Wordle`}</h2>
              
              <section>
                <h3>{idioma==='esp' ? `1. Objetivo del juego` : `1. Game Objective`}</h3>
                {idioma==='esp' ? <p>Adivinar la <strong>palabra oculta de cinco letras</strong> en un máximo de <strong>seis intentos</strong>.</p> :
                <p>Guess the <strong>hidden five-letter word</strong> in a maximum of <strong>six attempts</strong>.</p>}
              </section>

              <section>
                <h3>{idioma==='esp' ? `2. Cómo jugar` : `2. How to play`}</h3>
                <ul>
                  {idioma==='esp' ? <>
                  <li>Escribe una <strong>palabra de cinco letras</strong> en el campo de entrada y presiona <strong>"Enter"</strong>.</li>
                  <li>El juego te dará pistas sobre qué tan cerca estás de la respuesta correcta.</li>
                  </> 
                  :
                  <>
                  <li>Type a <strong>five-letter word</strong> in the input field and press <strong>"Enter"</strong>.</li>
                  <li>The game will give you hints on how close you are to the correct answer.</li>
                  </>}
                </ul>
              </section>

              <section>
                <h3>{idioma==='esp' ? `3. Interpretación de los colores` : `3. Color Interpretation`}</h3>
                <ul>
                  {idioma==='esp' ? <>
                  <li><span className="color-box green"></span> <strong>Verde:</strong> La letra está en la palabra y en la posición correcta.</li>
                  <li><span className="color-box yellow"></span> <strong>Amarillo:</strong> La letra está en la palabra, pero en la posición incorrecta.</li>
                  <li><span className="color-box gray"></span> <strong>Gris:</strong> La letra no está en la palabra.</li>
                  </>
                  :
                  <>
                  <li><span className="color-box green"></span> <strong>Green:</strong> The letter is in the word and in the correct position.</li>
                  <li><span className="color-box yellow"></span> <strong>Yellow:</strong> The letter is in the word, but in the wrong position.</li>
                  <li><span className="color-box gray"></span> <strong>Gray:</strong> The letter is not in the word.</li>
                  </>}
                </ul>
              </section>

              <section>
                <h3>{idioma==='esp' ? `4. Estrategia para ganar` : `4. Strategy to win`}</h3>
                <ul>
                  {idioma==='esp' ? <>
                  <li>Usa palabras iniciales que contengan <strong>vocales</strong> y <strong>consonantes comunes</strong>.</li>
                  <li>Observa las pistas de colores para mejorar tu siguiente intento.</li>
                  <li>Deduce la palabra <strong>antes de llegar al sexto intento</strong>.</li>
                  <li>Nota: En algunas ocasiones alguna letra <strong>puede usarse mas de una vez</strong>.</li>
                  </>
                  :
                  <>
                  <li>Use initial words that contain <strong>vowels</strong> and <strong>common consonants</strong>.</li>
                  <li>Observe the color hints to improve your next attempt.</li>
                  <li>Deduce the word <strong>before reaching the sixth attempt</strong>.</li>
                  <li>Note: Sometimes a letter <strong>can be used more than once</strong>.</li>
                  </>}
                </ul>
              </section>

              <section>
                <h3>{idioma==='esp' ? `5. Final del juego` : `5. Game End`}</h3>
                <ul>
                  {idioma==='esp' ? <>
                  <li>Si adivinas la palabra en seis intentos o menos, ¡ganaste! 🎉</li>
                  <li>Si no lo logras, el juego te mostrará la palabra correcta.</li>
                  </>
                  :
                  <>
                  <li>If you guess the word in six attempts or less, you win! 🎉</li>
                  <li>If you don't succeed, the game will show you the correct word.</li>
                  </>}
                </ul>
              </section>
            </div>
          </div>
        </div>
      )}
    </>
  )
}