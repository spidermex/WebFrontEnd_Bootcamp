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

  // Renderiza una palabra como una fila de tiles
  const renderPalabraTiles = (palabra, longitud) => {
    if (palabra) {
      // Si existe la palabra, mostramos cada letra en un tile
      return (
        <a href={`https://dle.rae.es/${palabra}`} target="_blank" rel="noopener noreferrer">
        <div className="word-row">          
          {palabra.split('').map((letra, i) => (
            <div key={`letra-${i}`} className="word-tile-filled">
              {letra.toUpperCase()}
            </div>
          ))}
          
        </div>
        </a>
      );
    } else {
      // Si no existe, mostramos tiles vacíos
      return (
        <div className="word-row">
          {Array(longitud).fill(null).map((_, i) => (
            <div key={`empty-${i}`} className="word-tile"></div>
          ))}
        </div>
      );
    }
  };

  // Renderizamos los grupos de casillas por longitud
  return (
    <div className="found-words-container">
      <h2>Palabras Encontradas</h2>
      
      {/* Ordenamos las longitudes de mayor a menor para mostrar primero las palabras más largas */}
      {Object.keys(casillasPorLongitud)
        .map(Number)
        .sort((a, b) => b - a)
        .map(longitud => (
          <div key={`grupo-${longitud}`} className="length-group">
            <div className="length-title">
              {longitud} letras
            </div>
            <div className="words-grid">
              {casillasPorLongitud[longitud].map((casilla, idx) => (
                <div 
                  key={`casilla-${longitud}-${idx}`}
                  className={`word-container ${casilla.esBingo ? 'bingo' : ''} 
                    ${casilla.palabra ? 'found' : ''} 
                    ${casilla.noEncontrada ? 'not-found' : ''}`}
                >
                  {renderPalabraTiles(casilla.palabra, casilla.longitud)}
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