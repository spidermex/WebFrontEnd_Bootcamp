import { useState, useEffect, useRef } from 'react'
import './App.css'
import utilsFunciones from './utils/funciones.js'
import FoundWordsArea from './components/FoundWordsArea'
import LetterTiles from './components/LetterTiles/LetterTiles'
import TimerDisplay from './components/TimerDisplay/TimerDisplay'
import ScoreDisplay from './components/ScoreDisplay/ScoreDisplay'
import WordInput from './components/WordInput/WordInput'
import UserMessage from './components/GameControls/UserMessage'
import GameButton from './components/GameButton/GameButton'
import ActionButtons from './components/GameButton/ActionButtons'

function App() {
  // Game state
  const [palabraBase, setPalabraBase] = useState('');
  const [letrasActuales, setLetrasActuales] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Word related states
  const [todasLasPalabrasPosibles, setTodasLasPalabrasPosibles] = useState([]);
  const [palabrasEncontradas, setPalabrasEncontradas] = useState(new Set());
  const [casillasParaMostrar, setCasillasParaMostrar] = useState([]);

  // User input states
  const [entradaUsuario, setEntradaUsuario] = useState('');
  const [mensajeUsuario, setMensajeUsuario] = useState('');
  const [tipoMensaje, setTipoMensaje] = useState('info');

  // Game progress states
  const [tiempoRestante, setTiempoRestante] = useState(120); // 2 minutes
  const [estadoJuego, setEstadoJuego] = useState('cargando');
  const [puntuacion, setPuntuacion] = useState(0);
  const [puntuacionAnterior, setPuntuacionAnterior] = useState(0);

  // Nuevo estado para rastrear los índices de letras seleccionadas
  const [indicesSeleccionados, setIndicesSeleccionados] = useState([]);

  // Timer reference
  const timerIdRef = useRef(null);

  // Function to calculate points based on word length
  const calcularPuntos = (palabra) => {
    const esBingo = palabra === palabraBase;
    const longitud = palabra.length;

    let puntos;
    switch (longitud) {
      case 3: puntos = 100; break;
      case 4: puntos = 400; break;
      case 5: puntos = 800; break;
      case 6: puntos = 1400; break;
      case 7: puntos = 1800; break;
      default: puntos = 2200; // 8+ letters
    }

    // Bonus for the bingo word
    if (esBingo) {
      puntos = 2500;
    }

    return puntos;
  };

  // Fisher-Yates shuffle algorithm
  const shuffle = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // Start the timer
  const iniciarTimer = () => {
    if (timerIdRef.current) clearInterval(timerIdRef.current);

    timerIdRef.current = setInterval(() => {
      setTiempoRestante(prev => prev - 1);
    }, 1000);
  };

  // End the round (win or lose)
  const finalizarRonda = (forzarVictoria = false) => {
    if (timerIdRef.current) {
      clearInterval(timerIdRef.current);
      timerIdRef.current = null;
    }

    // Verificar si el jugador ha encontrado al menos una palabra bingo
    const haEncontradoPalabraBingo = Array.from(palabrasEncontradas).some(palabra =>
      palabra.length === palabraBase.length
    );

    // Determinar si ganó (por encontrar al menos una palabra bingo o por forzar victoria)
    const gano = forzarVictoria || haEncontradoPalabraBingo;

    setEstadoJuego(gano ? 'ganado' : 'perdido');

    // Mensaje según el resultado
    if (gano) {
      setMensajeUsuario(`¡Felicidades! Has encontrado ${haEncontradoPalabraBingo ? 'una palabra bingo' : 'la palabra bingo principal'}.`);
      setTipoMensaje('success');
    } else {
      setMensajeUsuario(`¡Tiempo agotado! No encontraste ninguna palabra bingo. La palabra base era "${palabraBase}".`);
      setTipoMensaje('error');
    }

    mostrarPalabrasNoEncontradas();
  };

  // Show unmatched words when game ends
  const mostrarPalabrasNoEncontradas = () => {
    const nuevasCasillas = [...casillasParaMostrar];

    for (let i = 0; i < nuevasCasillas.length; i++) {
      const casilla = nuevasCasillas[i];

      if (casilla.palabra === null) {
        if (casilla.esBingo) {
          nuevasCasillas[i] = { ...casilla, palabra: palabraBase, noEncontrada: true };
        } else {
          const palabraCandidato = todasLasPalabrasPosibles.find(p =>
            p.length === casilla.longitud &&
            !palabrasEncontradas.has(p) &&
            p !== palabraBase &&
            !nuevasCasillas.some(c => c.palabra === p)
          );

          if (palabraCandidato) {
            nuevasCasillas[i] = { ...casilla, palabra: palabraCandidato, noEncontrada: true };
          }
        }
      }
    }

    setCasillasParaMostrar(nuevasCasillas);
  };

  // Start a new round
  const iniciarNuevaRonda = async () => {
    if (timerIdRef.current) {
      clearInterval(timerIdRef.current);
      timerIdRef.current = null;
    }

    setIsLoading(true);
    setEstadoJuego('cargando');

    try {
      // Get a random word from the dictionary
      const palabra = await utilsFunciones.obtenerPalabraAleatoria('./src/diccionarios/palabras_Base.txt');
      setPalabraBase(palabra);

      // Shuffle the letters
      const letrasDesordenadas = shuffle(palabra.split(''));
      setLetrasActuales(letrasDesordenadas);

      // Find all possible words with these letters
      const letrasDisponiblesStr = letrasDesordenadas.join('');
      const longitudMinima = 3;
      const rutaDiccionariosPattern = './src/diccionarios/palabras_{}.txt';

      const palabrasValidas = await utilsFunciones.encontrarPalabrasValidas(
        letrasDisponiblesStr,
        longitudMinima,
        rutaDiccionariosPattern
      );

      // Convert the Set to Array for easier handling
      const palabrasValidasArray = Array.from(palabrasValidas);
      setTodasLasPalabrasPosibles(palabrasValidasArray);

      // Reset found words
      setPalabrasEncontradas(new Set());

      // Reset score
      setPuntuacionAnterior(puntuacion);
      setPuntuacion(0);

      // Reset user input and selected indices
      setEntradaUsuario('');
      setIndicesSeleccionados([]);

      // Generate slots to display
      generarCasillasParaMostrar(palabrasValidasArray, palabra);

      // Reset user message
      setMensajeUsuario('');

      // Reset the time
      setTiempoRestante(120);

      // Set game state to playing
      setEstadoJuego('jugando');

      // Start the timer
      iniciarTimer();

      // Clear errors and finish loading
      setError(null);
    } catch (err) {
      setError(`Error al cargar la palabra: ${err.message}`);
      console.error('Error en iniciarNuevaRonda:', err);
      setEstadoJuego('error');
    } finally {
      setIsLoading(false);
    }
  };

  // Generate display slots based on possible words
  const generarCasillasParaMostrar = (palabrasValidasArray, palabraBase) => {
    // Definir la estructura de casillas según la longitud de la palabra base
    const longitudPalabraBase = palabraBase.length;

    // Configuración de casillas según la longitud de la palabra base
    let distribucionCasillas = {};

    if (longitudPalabraBase === 7) {
      distribucionCasillas = {
        7: 3, // 3 casillas para palabras de 7 letras
        6: 3, // 3 casillas para palabras de 6 letras
        5: 6, // 6 casillas para palabras de 5 letras
        4: 9, // 9 casillas para palabras de 4 letras
        3: 9  // 9 casillas para palabras de 3 letras
      };
    } else if (longitudPalabraBase === 6) {
      distribucionCasillas = {
        6: 4, // 4 casillas para palabras de 6 letras
        5: 6, // 6 casillas para palabras de 5 letras
        4: 10, // 10 casillas para palabras de 4 letras
        3: 10  // 10 casillas para palabras de 3 letras
      };
    } else {
      // Configuración por defecto para otras longitudes
      // (podríamos agregar más casos específicos si se necesitan)
      distribucionCasillas = {
        [longitudPalabraBase]: 3,
        [longitudPalabraBase - 1]: 4,
        [longitudPalabraBase - 2]: 6,
        [longitudPalabraBase - 3]: 9,
        [longitudPalabraBase - 4]: 9
      };
    }

    // Agrupar palabras por longitud
    const palabrasPorLongitud = {};

    // Agrupar todas las palabras por longitud (incluyendo la palabra base)
    palabrasValidasArray.forEach(palabra => {
      const longitud = palabra.length;
      if (!palabrasPorLongitud[longitud]) {
        palabrasPorLongitud[longitud] = [];
      }
      palabrasPorLongitud[longitud].push(palabra);
    });

    // Ordenar las longitudes de mayor a menor
    const longitudes = Object.keys(palabrasPorLongitud)
      .map(Number)
      .sort((a, b) => b - a);

    // Array para almacenar las casillas a mostrar
    const nuevasCasillas = [];

    // Asegurarnos de tener una casilla para la palabra bingo (palabra base)
    nuevasCasillas.push({
      longitud: longitudPalabraBase,
      palabra: null,
      esBingo: true
    });

    // Casillas que aún faltan por asignar (restaremos la del bingo de la palabra base)
    let casillasNoAsignadas = {};

    // Inicializamos el contador de casillas no asignadas por longitud
    for (const longitud of longitudes) {
      if (distribucionCasillas[longitud]) {
        // Si es la longitud de la palabra base, restamos 1 para la casilla bingo
        const ajuste = longitud === longitudPalabraBase ? 1 : 0;
        casillasNoAsignadas[longitud] = Math.max(0, distribucionCasillas[longitud] - ajuste);
      } else {
        // Para longitudes que no están en la distribución, no asignamos casillas
        casillasNoAsignadas[longitud] = 0;
      }
    }

    // Primero asignamos casillas según la distribución ideal
    for (const longitud of longitudes) {
      // Obtenemos las palabras para esta longitud
      const palabras = palabrasPorLongitud[longitud] || [];

      // Cantidad de casillas que debemos mostrar para esta longitud
      const casillasNecesarias = casillasNoAsignadas[longitud];

      // Cantidad de palabras disponibles (exceptuando la palabra base para su longitud)
      const palabrasDisponibles = longitud === longitudPalabraBase
        ? palabras.filter(p => p !== palabraBase).length
        : palabras.length;

      // Casillas que podemos mostrar (el mínimo entre las necesarias y disponibles)
      const casillasAMostrar = Math.min(casillasNecesarias, palabrasDisponibles);

      // Crear casillas para esta longitud
      for (let i = 0; i < casillasAMostrar; i++) {
        nuevasCasillas.push({
          longitud,
          palabra: null,
          esBingo: false
        });
      }

      // Actualizar casillas no asignadas
      casillasNoAsignadas[longitud] -= casillasAMostrar;
    }

    // Distribuir las casillas no asignadas a otras longitudes (de mayor a menor)
    let casillasExtra = Object.values(casillasNoAsignadas).reduce((acc, val) => acc + val, 0);

    if (casillasExtra > 0) {
      // Recorrer las longitudes de mayor a menor
      for (const longitud of longitudes) {
        if (casillasExtra <= 0) break;

        // Obtenemos las palabras para esta longitud que aún no están asignadas
        const palabrasAsignadas = nuevasCasillas.filter(c => c.longitud === longitud && !c.esBingo).length;
        const palabras = palabrasPorLongitud[longitud] || [];

        // Calculamos palabras disponibles no asignadas
        const palabrasDisponiblesNoAsignadas = longitud === longitudPalabraBase
          ? palabras.filter(p => p !== palabraBase).length - palabrasAsignadas
          : palabras.length - palabrasAsignadas;

        // Casillas extra que podemos asignar a esta longitud
        const casillasExtraParaLongitud = Math.min(casillasExtra, palabrasDisponiblesNoAsignadas);

        // Crear casillas extra para esta longitud
        for (let i = 0; i < casillasExtraParaLongitud; i++) {
          nuevasCasillas.push({
            longitud,
            palabra: null,
            esBingo: false
          });
          casillasExtra--;
        }
      }
    }

    // Actualizar el estado con las nuevas casillas
    setCasillasParaMostrar(nuevasCasillas);
  };

  // Mix the current letters
  const mezclarLetras = () => {
    // Al mezclar las letras, también reseteamos la entrada y los índices seleccionados
    setEntradaUsuario('');
    setIndicesSeleccionados([]);
    setLetrasActuales(shuffle([...letrasActuales]));
  };

  // Handle input change - Actual keyboard input 
  const handleInputChange = (e) => {
    const nuevoValor = e.target.value.toLowerCase();

    // Actualizamos el valor de la entrada
    setEntradaUsuario(nuevoValor);

    // Al usar el teclado, debemos sincronizar los índices seleccionados
    // Como podrían borrar o escribir cualquier cosa, lo mejor es reiniciarlos
    // y luego intentar seleccionar las letras que coinciden con el input
    setIndicesSeleccionados([]);

    // Solo intentamos hacer coincidir las letras si el usuario está agregando caracteres, no eliminando
    if (nuevoValor.length > entradaUsuario.length) {
      // Obtenemos la última letra ingresada
      const ultimaLetra = nuevoValor[nuevoValor.length - 1];

      // Buscamos un índice disponible (no usado) que coincida con esta letra
      const letrasDisponibles = [...letrasActuales];
      const indiceLetrasActuales = [];

      // Primero tratamos de construir el input completo con las letras disponibles
      let inputRestante = nuevoValor;
      let indicesUsados = [];

      // Para cada caracter en el input, buscamos una letra disponible
      for (const char of nuevoValor) {
        const indiceLetra = letrasDisponibles.findIndex((letra, idx) => {
          // La letra coincide y no ha sido usada ya
          return letra === char && !indicesUsados.includes(idx);
        });

        if (indiceLetra !== -1) {
          indicesUsados.push(indiceLetra);
        }
      }

      // Si pudimos encontrar índices para todas las letras del input,
      // actualizamos los índices seleccionados
      if (indicesUsados.length === nuevoValor.length) {
        setIndicesSeleccionados(indicesUsados);
      }
    }
  };

  // Nueva función para manejar clics en las letras
  const handleLetterClick = (letra, index) => {
    // Añadir la letra a la entrada del usuario
    setEntradaUsuario(prev => prev + letra);

    // Añadir el índice a la lista de seleccionados
    setIndicesSeleccionados(prev => [...prev, index]);

    // Verificar si ya se seleccionaron todas las letras
    if (indicesSeleccionados.length + 1 === letrasActuales.length) {
      // Si es así, verificamos la palabra automáticamente después de un breve delay
      // para que el usuario pueda ver la última letra que seleccionó
      setTimeout(() => {
        handleSubmit();
      }, 300);
    }
  };

  // Check if a word is valid
  const esPalabraValida = (palabra) => {
    return todasLasPalabrasPosibles.includes(palabra);
  };

  // Handle word submission
  const handleSubmit = () => {
    if (estadoJuego !== 'jugando') return;

    const palabra = entradaUsuario.trim().toLowerCase();

    // Si no hay palabra, no hacemos nada
    if (!palabra) return;

    // Clear the input and selected indices
    setEntradaUsuario('');
    setIndicesSeleccionados([]);

    // Validations
    if (palabra.length < 3) {
      setMensajeUsuario("Mínimo 3 letras.");
      setTipoMensaje('error');
      return;
    }

    if (palabrasEncontradas.has(palabra)) {
      setMensajeUsuario("¡Ya encontraste esta palabra!");
      setTipoMensaje('error');
      return;
    }

    if (esPalabraValida(palabra)) {
      // Determinar si es una palabra bingo (misma longitud que la palabra base)
      const esPalabraBingo = palabra.length === palabraBase.length;

      // Calculate points for this word
      const puntos = calcularPuntos(palabra);

      // Update score
      setPuntuacionAnterior(puntuacion);
      setPuntuacion(prevPuntuacion => prevPuntuacion + puntos);

      // Show message with earned points and bingo status if applicable
      if (esPalabraBingo) {
        setMensajeUsuario(`¡Palabra BINGO encontrada! +${puntos} puntos`);
      } else {
        setMensajeUsuario(`¡Palabra válida! +${puntos} puntos`);
      }
      setTipoMensaje('success');

      // Update found words
      setPalabrasEncontradas(prev => new Set([...prev, palabra]));

      // Update slots to display
      actualizarCasillasConPalabra(palabra, esPalabraBingo);

      // El juego continúa hasta que se acabe el tiempo
    } else {
      // The word is not valid
      setMensajeUsuario("Palabra inválida. Intenta con otra.");
      setTipoMensaje('error');
    }
  };

  // Update slots when a word is found
  const actualizarCasillasConPalabra = (palabra, esPalabraBingo = false) => {
    // Determinar si es la palabra base específica
    const esPalabraBase = palabra === palabraBase;

    const nuevasCasillas = [...casillasParaMostrar];

    // Si es una palabra bingo pero no es la palabra base específica,
    // buscamos una casilla no-bingo de la longitud correcta
    if (esPalabraBingo && !esPalabraBase) {
      // Para palabras bingo (misma longitud que la base) que no son la palabra base específica
      const indiceCasilla = nuevasCasillas.findIndex(casilla =>
        casilla.longitud === palabra.length &&
        casilla.palabra === null &&
        !casilla.esBingo // Asegurarse de que no sea la casilla del bingo principal
      );

      if (indiceCasilla !== -1) {
        nuevasCasillas[indiceCasilla] = {
          ...nuevasCasillas[indiceCasilla],
          palabra,
          esBingo: true // Marcamos esta casilla como bingo también
        };

        setCasillasParaMostrar(nuevasCasillas);
        return;
      }
    }

    // Para la palabra base o palabras que no son bingo
    const indiceCasilla = nuevasCasillas.findIndex(casilla =>
      casilla.longitud === palabra.length &&
      casilla.palabra === null &&
      (esPalabraBase ? casilla.esBingo : !casilla.esBingo)
    );

    if (indiceCasilla !== -1) {
      nuevasCasillas[indiceCasilla] = {
        ...nuevasCasillas[indiceCasilla],
        palabra,
        // Si es una palabra bingo, asegurarnos de marcarla como tal
        esBingo: esPalabraBase || esPalabraBingo
      };

      setCasillasParaMostrar(nuevasCasillas);
    }
  };

  // Initialize the game when the component mounts
  useEffect(() => {
    iniciarNuevaRonda();

    return () => {
      if (timerIdRef.current) {
        clearInterval(timerIdRef.current);
        timerIdRef.current = null;
      }
    };
  }, []);

  // Control the remaining time
  useEffect(() => {
    if (tiempoRestante === 0 && estadoJuego === 'jugando') {
      finalizarRonda(false);
    }
  }, [tiempoRestante, estadoJuego]);

  return (
    <div className="app-container">
      <h1 className="app-title">Text Twist Español</h1>

      {isLoading && <p className="loading-indicator">Cargando...</p>}

      {error && <div className="error-message">{error}</div>}

      {!isLoading && !error && (
        <div className="game-area">
          {/* Game header with timer and score */}
          <div className="game-stats">
            <TimerDisplay seconds={tiempoRestante} />
            <ScoreDisplay score={puntuacion} previousScore={puntuacionAnterior} />
          </div>
          {/* Found words area */}
          <FoundWordsArea
            casillas={casillasParaMostrar}
            palabrasEncontradas={palabrasEncontradas}
          />
          {/* Letter tiles */}
          <LetterTiles
            letters={letrasActuales}
            onLetterClick={handleLetterClick}
            selectedIndices={indicesSeleccionados}
            disabled={estadoJuego !== 'jugando'}
          />

          {/* Word input form */}
          <WordInput
            value={entradaUsuario}
            onChange={handleInputChange}
            onSubmit={handleSubmit}
            placeholder="Escribe o haz clic en las letras para formar palabras..."
            disabled={estadoJuego !== 'jugando'}
          />
          <div className="controls">
            <GameButton
              onClick={mezclarLetras}
              disabled={estadoJuego !== 'jugando'}
              type="secondary"
            >
              Mezclar
            </GameButton>
          </div>
          {/* User feedback message */}
          <UserMessage
            message={mensajeUsuario}
            type={tipoMensaje}
          />



          {/* Play again button */}
          {(estadoJuego === 'ganado' || estadoJuego === 'perdido') && (
            <ActionButtons>
              <GameButton
                onClick={iniciarNuevaRonda}
                type="primary"
                highlight={true}
              >
                Jugar de Nuevo
              </GameButton>
            </ActionButtons>
          )}
        </div>
      )}
    </div>
  )
}

export default App
