import { WORDS } from './palabras'

export const getRandomWord = () => {
  return WORDS[Math.floor(Math.random() * WORDS.length)]
}

export const checkGuess = (guess: string, solution: string) => {
  const result = new Array(5).fill('absent')
  const solutionArray = [...solution]
  const guessArray = [...guess]

  // Primero encontrar las letras correctas
  guessArray.forEach((letter, i) => {
    if (letter === solutionArray[i]) {
      result[i] = 'correct'
      solutionArray[i] = '#' // Marcar como usado
    }
  })

  // Luego encontrar las letras presentes
  guessArray.forEach((letter, i) => {
    if (result[i] !== 'correct') {
      const index = solutionArray.indexOf(letter)
      if (index !== -1) {
        result[i] = 'present'
        solutionArray[index] = '#' // Marcar como usado
      }
    }
  })

  return result
}