import { useState, useEffect } from 'react'
import './styles/App.css'
import { Grid } from './components/Grid'
import { Keyboard } from './components/Keyboard'
import { checkGuess, getRandomWord } from './utils/game'
import ReactConfetti from "react-confetti"
import { InstructionsModal } from './components/InstructionsModal'
import Settings from './components/Settings'
import soundService from './services/soundService'
import SplashScreen from './components/SplashScreen'

function App() {
  // Leer idioma de localStorage o null si no existe
  const getInitialIdioma = () => localStorage.getItem('idiomaWordle') || null;
  const [idioma, setIdiomaState] = useState<string | null>(getInitialIdioma());
  const [showLanguageModal, setShowLanguageModal] = useState(idioma === null);

  const [showSplash, setShowSplash] = useState(true);
  const [solution, setSolution] = useState('')
  const [guesses, setGuesses] = useState<string[]>([])
  const [currentGuess, setCurrentGuess] = useState('')
  const [gameState, setGameState] = useState<'playing' | 'won' | 'lost'>('playing')
  const [usedLetters, setUsedLetters] = useState<Record<string, 'correct' | 'present' | 'absent'>>({})

  // Función para ocultar el splash screen
  const hideSplash = () => {
    setShowSplash(false);
  };

  const resetGame = () => {
    setSolution(getRandomWord(idioma || 'esp'))
    setGuesses([])
    setCurrentGuess('')
    setGameState('playing')
    setUsedLetters({})
  }

  // Cuando el usuario selecciona idioma, guardar en localStorage y cerrar modal
  const setIdioma = (lang: string) => {
    localStorage.setItem('idiomaWordle', lang);
    setIdiomaState(lang);
    setShowLanguageModal(false);
  };

  useEffect(() => {
    if (idioma) {
      setSolution(getRandomWord(idioma))
      setGuesses([])
      setCurrentGuess('')
      setGameState('playing')
      setUsedLetters({})
    }
  }, [idioma])

  const updateUsedLetters = (guess: string, results: string[]) => {
    const newUsedLetters = { ...usedLetters }
    guess.split('').forEach((letter, i) => {
      const currentState = newUsedLetters[letter]
      const newState = results[i]
      if (newState === 'correct' ||
        (newState === 'present' && currentState !== 'correct') ||
        (newState === 'absent' && !currentState)) {
        newUsedLetters[letter] = newState as 'correct' | 'present' | 'absent'
      }
    })
    setUsedLetters(newUsedLetters)
  }

  const onEnter = () => {
    if (currentGuess.length !== 5) return

    soundService.playclickEnter()

    const guess = currentGuess.toUpperCase()
    const results = checkGuess(guess, solution)
    updateUsedLetters(guess, results)

    setGuesses([...guesses, guess])
    setCurrentGuess('')

    if (guess === solution) {
      setGameState('won')
      soundService.playGameWin()
    } else if (guesses.length === 5) {
      setGameState('lost')
      soundService.playGameOver()
    }
  }

  const onDelete = () => {
    setCurrentGuess(prev => prev.slice(0, -1))
  }

  const onChar = (char: string) => {
    if (currentGuess.length < 5 && gameState === 'playing') {
      setCurrentGuess(prev => prev + char)
    }
  }

  const onKeyPress = (key: string) => {
    if (gameState !== 'playing') return

    if (key === 'ENTER') {
      onEnter()
    } else if (key === '⌫') {
      onDelete()
    } else {
      onChar(key)
    }
  }

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (gameState !== 'playing') return

      if (e.key === 'Enter') {
        if (currentGuess.length !== 5) return
        soundService.playclickEnter()

        const guess = currentGuess.toUpperCase()
        const results = checkGuess(guess, solution)
        updateUsedLetters(guess, results)

        setGuesses(prev => [...prev, guess])
        setCurrentGuess('')

        if (guess === solution) {
          setGameState('won')
          soundService.playGameWin()
        } else if (guesses.length === 5) {
          setGameState('lost')
          soundService.playGameOver()
        }
      } else if (e.key === 'Backspace') {
        setCurrentGuess(prev => prev.slice(0, -1))
      } else if (/^[a-zA-ZñÑ]$/.test(e.key)) {
        if (currentGuess.length < 5) {
          setCurrentGuess(prev => prev + e.key.toUpperCase())
        }
      }
    }
    window.addEventListener('keydown', handleKeydown)
    return () => window.removeEventListener('keydown', handleKeydown)
  }, [currentGuess, gameState, solution, guesses.length, updateUsedLetters])

  // Renderizar modal de selección de idioma si no hay idioma guardado
  if (showLanguageModal) {
    return (
      <div className="settings-modal-overlay">
        <div className="settings-modal">
          <h2>Idioma / Language</h2>
          <div className="settings-group">
            <button onClick={() => setIdioma('esp')}>Español</button>
            <button onClick={() => setIdioma('eng')}>English</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {showSplash ? (<SplashScreen onComplete={hideSplash} idioma={idioma || 'esp'} />) :
        (
          <div className="game-container">
            <header>
              <div className="header-content">
                <h1> My Wordle</h1>
                <div className="header-buttons">
                  <InstructionsModal idioma={idioma || 'esp'} />
                  <Settings idioma={idioma || 'esp'} setIdioma={setIdioma} />
                </div>
              </div>
              {gameState === 'won' && (
                <div className="message success">
                  <ReactConfetti />
                  <p>{idioma === 'esp' ? `¡Felicidades! Has ganado.` : `Congratulations! You won.`}</p>
                </div>)}
              {gameState === 'lost' && (
                <div className="message fail">
                  <p>{idioma === 'esp' ? `La palabra era:` : `The word was:`} <strong>{solution}</strong></p>
                </div>)}
              {(gameState === 'won' || gameState === 'lost') && <button className="new-game-button" onClick={resetGame}>
                {idioma === 'esp' ? `Nueva Partida` : `New Game`}
              </button>}
            </header>
            <main>
              <Grid guesses={guesses} currentGuess={currentGuess} solution={solution} />
              <Keyboard onKeyPress={onKeyPress} usedLetters={usedLetters} />
            </main>
          </div>
        )}
    </>
  )
}
export default App
