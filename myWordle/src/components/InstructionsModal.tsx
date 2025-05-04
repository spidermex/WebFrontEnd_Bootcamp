import { useState } from 'react'
import '../styles/InstructionsModal.css'

export const InstructionsModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button className="instructions-button" onClick={() => setIsOpen(true)}>
        Cómo Jugar
      </button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={() => setIsOpen(false)}>
              ×
            </button>
            <div className="instructions">
              <h2>Cómo jugar Wordle</h2>
              
              <section>
                <h3>1. Objetivo del juego</h3>
                <p>Adivinar la <strong>palabra oculta de cinco letras</strong> en un máximo de <strong>seis intentos</strong>.</p>
              </section>

              <section>
                <h3>2. Cómo jugar</h3>
                <ul>
                  <li>Escribe una <strong>palabra de cinco letras</strong> en el campo de entrada y presiona <strong>"Enter"</strong>.</li>
                  <li>El juego te dará pistas sobre qué tan cerca estás de la respuesta correcta.</li>
                </ul>
              </section>

              <section>
                <h3>3. Interpretación de los colores</h3>
                <ul>
                  <li><span className="color-box green"></span> <strong>Verde:</strong> La letra está en la palabra y en la posición correcta.</li>
                  <li><span className="color-box yellow"></span> <strong>Amarillo:</strong> La letra está en la palabra, pero en la posición incorrecta.</li>
                  <li><span className="color-box gray"></span> <strong>Gris:</strong> La letra no está en la palabra.</li>
                </ul>
              </section>

              <section>
                <h3>4. Estrategia para ganar</h3>
                <ul>
                  <li>Usa palabras iniciales que contengan <strong>vocales</strong> y <strong>consonantes comunes</strong>.</li>
                  <li>Observa las pistas de colores para mejorar tu siguiente intento.</li>
                  <li>Deduce la palabra <strong>antes de llegar al sexto intento</strong>.</li>
                  <li>Nota: En algunas ocasiones alguna letra <strong>puede usarse mas de una vez</strong>.</li>
                </ul>
              </section>

              <section>
                <h3>5. Final del juego</h3>
                <ul>
                  <li>Si adivinas la palabra en seis intentos o menos, ¡ganaste! 🎉</li>
                  <li>Si no lo logras, el juego te mostrará la palabra correcta.</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      )}
    </>
  )
}