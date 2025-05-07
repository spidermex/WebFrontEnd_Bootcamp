import { useState, useEffect, useRef, useContext } from 'react'
import './App.css'
import utilsFunciones from './utils/funciones.js'
import FoundWordsArea from './components/FoundWordsArea/FoundWordsArea'
import LetterTiles from './components/LetterTiles/LetterTiles'
import TimerDisplay from './components/TimerDisplay/TimerDisplay'
import ScoreDisplay from './components/ScoreDisplay/ScoreDisplay'
import WordInput from './components/WordInput/WordInput'
import UserMessage from './components/GameControls/UserMessage'
import GameButton from './components/GameButton/GameButton'
import ActionButtons from './components/GameButton/ActionButtons'
import Keyboard from './components/Keyboard/Keyboard'
import {SettingsModal} from './components/settings/SettingsModal.jsx'
import { InstructionsModal } from './components/InstructionsModal/InstructionsModal.jsx'
import soundService from './utils/soundService.js'
import logo from './images/giraPalabras-logo2a.png'
import SplashScreen from './components/splashScreen/SplashScreen.jsx'
import mezclarIcon from './images/mezclar.svg'
import enviarIcon from './images/enviar.svg'
import repetirIcon from './images/restart.svg'
import siguienteIcon from './images/fast_forward.svg'
import { GameSettingsContext } from './context/GameSettingsContext'
import ReactConfetti from "react-confetti"



function App() {
  // Acceder al contexto de configuración del juego
  const { gameTime, isPaused } = useContext(GameSettingsContext);

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
  const [entradaAnterior, setEntradaAnterior] = useState('');
  const [mensajeUsuario, setMensajeUsuario] = useState('');
  const [tipoMensaje, setTipoMensaje] = useState('info');
  const [duracionMensaje, setDuracionMensaje] = useState(2000); // Duración en milisegundos
  const [tieneFoco, setTieneFoco] = useState(true); // Nuevo estado para rastrear si el juego tiene foco

  // Game progress states
  const [tiempoRestante, setTiempoRestante] = useState(gameTime); // Usa el tiempo configurado
  const [estadoJuego, setEstadoJuego] = useState('cargando');
  const [puntuacion, setPuntuacion] = useState(0);
  const [puntuacionAnterior, setPuntuacionAnterior] = useState(0);

  // Nuevo estado para rastrear los índices de letras seleccionadas
  const [indicesSeleccionados, setIndicesSeleccionados] = useState([]);
  const [indicesAnterior, setIndicesAnterior] = useState([]);
  const [showSplash, setShowSplash] = useState(true);

  // Función para ocultar el splash screen
  const hideSplash = () => {
    setShowSplash(false);
    iniciarNuevaRonda();
  };

  // Timer reference
  const timerIdRef = useRef(null);
  // Referencia para el componente de entrada de palabras
  const wordInputRef = useRef(null);

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
      // Solo decrementar el tiempo si el juego no está pausado
      if (!isPaused) {
        setTiempoRestante(prev => prev - 1);
      }
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
      soundService.playGameWin();
      mostrarMensaje(`¡Felicidades! Has encontrado ${haEncontradoPalabraBingo ? 'una palabra bingo' : 'la palabra bingo principal'}.`, 'success', 3000);
    } else {
      soundService.playGameOver();
      mostrarMensaje(`¡Tiempo agotado! No encontraste ninguna palabra bingo. La palabra base era "${palabraBase}".`, 'error', 3000);
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
      const palabra = await utilsFunciones.obtenerPalabraAleatoria('./diccionarios/palabras_Base.txt');
      setPalabraBase(palabra);

      // Shuffle the letters
      const letrasDesordenadas = shuffle(palabra.split(''));
      setLetrasActuales(letrasDesordenadas);

      // Find all possible words with these letters
      const letrasDisponiblesStr = letrasDesordenadas.join('');
      const longitudMinima = 3;
      const rutaDiccionariosPattern = './diccionarios/palabras_{}.txt';

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

      // Reset the time using the configured game time
      setTiempoRestante(gameTime);

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

    // Asegurarse de que el componente WordInput mantenga el foco después de mezclar
    if (wordInputRef.current) {
      wordInputRef.current.focus();
    }
  };

  // Handle input change - Keyboard input 
  const handleInputChange = (e) => {
    if (estadoJuego !== 'jugando') return;

    const nuevoValor = e.target.value.toLowerCase();

    // Limitamos la entrada a la cantidad de letras de la palabra base
    if (nuevoValor.length > palabraBase.length) return;

    // Actualizamos el valor de la entrada
    setEntradaUsuario(nuevoValor);

    // Al usar el teclado, debemos sincronizar los índices seleccionados
    setIndicesSeleccionados([]);

    // Intentamos hacer coincidir cada letra ingresada con las letras disponibles
    const letrasDisponibles = [...letrasActuales];
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
  };

  // Función para manejar clics en las letras
  const handleLetterClick = (letra, index) => {
    if (estadoJuego !== 'jugando') return;

    // Si la letra ya está seleccionada, no hacemos nada
    if (indicesSeleccionados.includes(index)) return;

    // Añadir la letra a la entrada del usuario
    setEntradaUsuario(prev => prev + letra);

    // Añadir el índice a la lista de seleccionados
    setIndicesSeleccionados(prev => [...prev, index]);

    // Verificar si ya se seleccionaron todas las letras
    if (indicesSeleccionados.length === letrasActuales.length) {
      // Si es así, verificamos la palabra automáticamente después de un breve delay
      // para que el usuario pueda ver la última letra que seleccionó
      setTimeout(() => {
        handleSubmit();
      }, 300);
    }

    // Mantener el foco en el componente de entrada
    if (wordInputRef.current) {
      wordInputRef.current.focus();
    }
  };

  // Función para manejar las teclas presionadas en el teclado virtual
  const handleKeyPress = (key) => {
    if (estadoJuego !== 'jugando') return;

    if (key === 'ENTER') {
      handleSubmit();
      return;
    }

    if (key === '⌫') {
      // Eliminar la última letra y su índice seleccionado
      if (entradaUsuario.length > 0) {
        setEntradaUsuario(prev => prev.slice(0, -1));
        setIndicesSeleccionados(prev => prev.slice(0, -1));
      }
      return;
    }

    // Para letras normales
    const lowerKey = key.toLowerCase();

    // Limitar a la longitud máxima
    if (entradaUsuario.length >= palabraBase.length) return;

    // Verificar si la letra está disponible (no usada previamente)
    const letrasDisponibles = [...letrasActuales];
    const letrasUsadas = [...indicesSeleccionados].map(idx => letrasActuales[idx]);

    // Contar cuántas veces aparece cada letra en las letras disponibles
    const letrasConteo = {};
    letrasDisponibles.forEach(letra => {
      letrasConteo[letra] = (letrasConteo[letra] || 0) + 1;
    });

    // Contar cuántas veces se ha usado cada letra
    const letrasUsadasConteo = {};
    letrasUsadas.forEach(letra => {
      letrasUsadasConteo[letra] = (letrasUsadasConteo[letra] || 0) + 1;
    });

    // Verificar si aún podemos usar esta letra
    if ((letrasConteo[lowerKey] || 0) > (letrasUsadasConteo[lowerKey] || 0)) {
      // Encontrar el índice de la letra no usada
      const indiceLetra = letrasDisponibles.findIndex((letra, idx) =>
        letra === lowerKey && !indicesSeleccionados.includes(idx)
      );

      if (indiceLetra !== -1) {
        setEntradaUsuario(prev => prev + lowerKey);
        setIndicesSeleccionados(prev => [...prev, indiceLetra]);
      }
    }

    // Mantener el foco en el componente de entrada
    if (wordInputRef.current) {
      wordInputRef.current.focus();
    }
  };

  // Check if a word is valid
  const esPalabraValida = (palabra) => {
    return todasLasPalabrasPosibles.includes(palabra);
  };

  // Asegurémonos de que los mensajes se limpien después de mostrarse
  const mostrarMensaje = (mensaje, tipo, tiempo=2000) => {
    setMensajeUsuario(mensaje);
    setTipoMensaje(tipo);
    setDuracionMensaje(tiempo); // Duración en milisegundos

    // Opcional: limpiar el mensaje después de un tiempo para futuros mensajes
    // setTimeout(() => {
    //   setMensajeUsuario('');
    // }, 3500);
  };

// Handle repeat last word
  const repetirUltimaPalabra = () => {
    if (estadoJuego !== 'jugando') return;
    if (entradaAnterior) {
      setEntradaUsuario(entradaAnterior);
      setIndicesSeleccionados(indicesAnterior);
      setIndicesAnterior([]);
      setEntradaAnterior('');
      mostrarMensaje(`Repetiste la palabra: ${entradaAnterior}`, 'info', 3000);
    } else {  
      mostrarMensaje("No hay palabra anterior para repetir.", 'error');
    }
  };

  // Handle word submission
  const handleSubmit = () => {
    if (estadoJuego !== 'jugando') return;

    const palabra = entradaUsuario.trim().toLowerCase();

    // Si no hay palabra, no hacemos nada
    if (!palabra) return;

    // Clear the input and selected indices
    setEntradaAnterior(entradaUsuario);
    setIndicesAnterior(indicesSeleccionados);
    setEntradaUsuario('');
    setIndicesSeleccionados([]);

    // Validations
    if (palabra.length < 3) {
      mostrarMensaje("Mínimo 3 letras.", 'error');
      return;
    }

    if (palabrasEncontradas.has(palabra)) {
      mostrarMensaje("¡Ya encontraste esta palabra!", 'error');
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
        soundService.playGameWin();
        mostrarMensaje(`¡Palabra BINGO encontrada! +${puntos} puntos`, 'success', 3000);
      } else {
        mostrarMensaje(`¡Palabra válida! +${puntos} puntos`, 'success');
        soundService.playCorrectAnswer();
      }

      // Update found words
      setPalabrasEncontradas(prev => new Set([...prev, palabra]));

      // Update slots to display
      actualizarCasillasConPalabra(palabra, esPalabraBingo);

      // El juego continúa hasta que se acabe el tiempo
    } else {
      // The word is not valid
      mostrarMensaje("Palabra inválida. Intenta con otra.", 'error');
      soundService.playWrongAnswer();
    }

    // Mantener el foco en el componente de entrada
    if (wordInputRef.current) {
      wordInputRef.current.focus();
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

  // Efecto para gestionar el foco de la aplicación
  useEffect(() => {
    const handleFocus = () => setTieneFoco(true);
    const handleBlur = () => setTieneFoco(false);

    window.addEventListener('focus', handleFocus);
    window.addEventListener('blur', handleBlur);

    // Inicialmente dar foco al componente de entrada cuando el juego comienza
    if (wordInputRef.current && estadoJuego === 'jugando') {
      wordInputRef.current.focus();
    }

    return () => {
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('blur', handleBlur);
    };
  }, [estadoJuego]);

  // Efecto para actualizar tiempoRestante cuando cambie gameTime
  useEffect(() => {
    if (estadoJuego === 'jugando') {
      setTiempoRestante(gameTime);
      
      // Reiniciar timer con nuevo tiempo
      if (timerIdRef.current) {
        clearInterval(timerIdRef.current);
        iniciarTimer();
      }
    }
  }, [gameTime, estadoJuego]);

  // Efecto para controlar el timer cuando el estado de pausa cambia
  useEffect(() => {
    if (estadoJuego === 'jugando') {
      // Si está pausado, limpiamos el timer actual
      if (isPaused) {
        if (timerIdRef.current) {
          clearInterval(timerIdRef.current);
          timerIdRef.current = null;
        }
      } else {
        // Si se reanuda, iniciamos el timer de nuevo
        if (!timerIdRef.current) {
          iniciarTimer();
        }
      }
    }
  }, [isPaused, estadoJuego]);

  // Control the remaining time
  useEffect(() => {
    if (tiempoRestante === 0 && estadoJuego === 'jugando') {
      finalizarRonda(false);
    }

    if(tiempoRestante === 10 && estadoJuego === 'jugando' && !isPaused) {
      mostrarMensaje("¡Últimos 10 segundos!", 'info', 2000);
    }

    if(tiempoRestante <= 10 && estadoJuego === 'jugando' && !isPaused && tiempoRestante > 0) {
      soundService.playCriticalTime();
    }else {
      soundService.stopCriticalTime();
    }
  }, [tiempoRestante, estadoJuego]);

  return (<>
    {showSplash ? (
      <SplashScreen onComplete={hideSplash} />
    ) : (
    <div className="app-container">
      {/* Header with title and sound toggle */}
      <div className="app-header">
        <img className="logo"  src={logo}></img>
        <h1 className="app-title">Gira Palabras </h1>
        <div className="header-controls">
          <InstructionsModal />
          <SettingsModal />
        </div>
      </div>
      {isLoading && <p className="loading-indicator">Cargando...</p>}

      {error && <div className="error-message">{error}</div>}

      {!isLoading && !error && (
        <div
          className="game-area"
          onClick={() => {
            // Asegurar que al hacer clic en cualquier parte del juego, 
            // el componente WordInput reciba el foco
            if (wordInputRef.current && estadoJuego === 'jugando') {
              wordInputRef.current.focus();
            }
          }}
        >
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
          <WordInput
            ref={wordInputRef}
            value={entradaUsuario}
            onChange={handleInputChange}
            onSubmit={handleSubmit}
            onMixLetters={mezclarLetras}
            disabled={estadoJuego !== 'jugando'}
            maxLength={palabraBase.length}
            baseLetters={letrasActuales.join('')}
          />

          {/* Agregar el teclado virtual aquí */}
          <Keyboard
            onKeyPress={handleKeyPress}
            availableLetters={letrasActuales.join('')}
          />

          {/* Play again button */}
          {(estadoJuego === 'ganado' || estadoJuego === 'perdido') ?
            (<>
              {(estadoJuego === 'ganado' && <ReactConfetti />)}
              <ActionButtons>
                <GameButton
                  onClick={iniciarNuevaRonda}
                  type="primary"
                  highlight={true}
                >
                  Jugar de Nuevo
                </GameButton>
              </ActionButtons>
            </>
            )
            :
            <>
              <div className="controls">
                <GameButton
                  onClick={mezclarLetras}
                  disabled={estadoJuego !== 'jugando'}
                  type="secondary"
                >
                  <img src={mezclarIcon}></img>
                </GameButton>
                <GameButton
                  onClick={handleSubmit}
                  type="highlight"
                  disabled={estadoJuego !== 'jugando' || entradaUsuario.length === 0}
                >
                  <img src={enviarIcon}></img>
                </GameButton>
                <GameButton
                  onClick={repetirUltimaPalabra}
                  type="secondary"
                  disabled={estadoJuego !== 'jugando' || entradaAnterior.length === 0}
                >
                  <img src={repetirIcon}></img>
                </GameButton>
                <GameButton
                  onClick={()=>finalizarRonda(false)}
                  type="secondary"
                  disabled={estadoJuego !== 'jugando'}
                >
                  <img src={siguienteIcon}></img>
                </GameButton>
              </div>
            </>}
          {/* User feedback message */}
          <UserMessage
            message={mensajeUsuario}
            type={tipoMensaje}
            duration={duracionMensaje} // default 2 segundos de duración
          />
        </div>
      )}
    </div>)}
  </>
  )
}

export default App
