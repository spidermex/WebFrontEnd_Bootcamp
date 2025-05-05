import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './FoundWordsArea.css';

/**
 * Componente para mostrar las palabras encontradas y las casillas vacías
 */
const FoundWordsArea = ({ casillas, palabrasEncontradas }) => {
  // Agrupamos las casillas por longitud
  const [casillasPorLongitud, setCasillasPorLongitud] = useState({});
  
  // Actualizamos la agrupación cuando cambian las casillas
  useEffect(() => {
    const grupos = {};
    casillas.forEach(casilla => {
      const longitud = casilla.longitud;
      if (!grupos[longitud]) {
        grupos[longitud] = [];
      }
      grupos[longitud].push(casilla);
    });
    setCasillasPorLongitud(grupos);
  }, [casillas]);

  // Renderizamos los grupos de casillas por longitud
  return (
    <div className="found-words-area">
      <h2>Palabras Encontradas</h2>
      
      {/* Ordenamos las longitudes de mayor a menor para mostrar primero las palabras más largas */}
      {Object.keys(casillasPorLongitud)
        .map(Number)
        .sort((a, b) => b - a)
        .map(longitud => (
          <div key={`grupo-${longitud}`} className="palabra-grupo">
            <h3>Palabras de {longitud} letras</h3>
            <div className="palabra-contenedor">
              {casillasPorLongitud[longitud].map((casilla, idx) => (
                <div 
                  key={`casilla-${longitud}-${idx}`}
                  className={`palabra-casilla ${casilla.esBingo ? 'bingo' : ''} 
                    ${casilla.palabra ? 'encontrada' : ''} 
                    ${casilla.noEncontrada ? 'noEncontrada' : ''}`}
                >
                  {casilla.palabra ? (
                    // Si ya se encontró la palabra, la mostramos
                    <span className="palabra-texto">{casilla.palabra}</span>
                  ) : (
                    // Si no, mostramos guiones bajos
                    <span className="palabra-guiones">
                      {Array(casilla.longitud).fill('_').join(' ')}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

FoundWordsArea.propTypes = {
  casillas: PropTypes.arrayOf(
    PropTypes.shape({
      longitud: PropTypes.number.isRequired,
      palabra: PropTypes.string,
      esBingo: PropTypes.bool,
      noEncontrada: PropTypes.bool
    })
  ).isRequired,
  palabrasEncontradas: PropTypes.instanceOf(Set).isRequired
};

export default FoundWordsArea;