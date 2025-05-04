import { useState, useEffect } from 'react'
import './styles/App.css'
import { Grid } from './components/Grid'
import { Keyboard } from './components/Keyboard'
import { checkGuess, getRandomWord } from './utils/game'
import ReactConfetti from "react-confetti"
import { InstructionsModal } from './components/InstructionsModal'
import SoundToggle from './components/SoundToggle'
import soundService from './services/soundService'


function App() {
  const [solution, setSolution] = useState('')
  const [guesses, setGuesses] = useState<string[]>([])
  const [currentGuess, setCurrentGuess] = useState('')
  const [gameState, setGameState] = useState<'playing' | 'won' | 'lost'>('playing')
  const [usedLetters, setUsedLetters] = useState<Record<string, 'correct' | 'present' | 'absent'>>({})

  const resetGame = () => {
    setSolution(getRandomWord())
    setGuesses([])
    setCurrentGuess('')
    setGameState('playing')
    setUsedLetters({})
  }

  useEffect(() => {
    setSolution(getRandomWord())
  }, [])

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



  return (
    <div className="game-container">
      <header>
        <div className="header-content">
          <h1> My Wordle</h1>
          <InstructionsModal />
          <SoundToggle />
        </div>
        {gameState === 'won' && (          
          <div className="message success"> 
            <ReactConfetti /> 
            <p>¡Felicidades! Has ganado.</p>            
          </div> )}
          {gameState === 'lost' && (
          <div className="message fail">
            <p>La palabra era: {solution}</p>
          </div> )}
          {(gameState === 'won' || gameState=== 'lost') && <button className="new-game-button" onClick={resetGame}>
              Nueva Partida
            </button>}        
      </header>
      <main>
        <Grid guesses={guesses} currentGuess={currentGuess} solution={solution} />
        <Keyboard onKeyPress={onKeyPress} usedLetters={usedLetters} />    
      </main>
    </div>
  )
}

export default App
