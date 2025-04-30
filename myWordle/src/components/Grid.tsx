interface GridProps {
  guesses: string[]
  currentGuess: string
  solution: string
}

export const Grid = ({ guesses, currentGuess, solution }: GridProps) => {
  const rows = 6
  const cols = 5

  const getCellState = (guess: string, position: number) => {
    const letter = guess[position]
    if (!letter) return 'empty'
    
    if (letter === solution[position]) {
      return 'correct'
    }
    
    if (solution.includes(letter)) {
      // Contar ocurrencias de la letra en la solución
      const solutionOccurrences = [...solution].filter(l => l === letter).length
      const guessOccurrences = [...guess.slice(0, position + 1)]
        .filter((l, i) => l === letter && guess[i] !== solution[i]).length
      
      if (guessOccurrences <= solutionOccurrences) {
        return 'present'
      }
    }
    
    return 'absent'
  }

  const renderCell = (row: number, col: number) => {
    const guess = row < guesses.length ? guesses[row] : row === guesses.length ? currentGuess : ''
    const letter = guess[col] || ''
    const cellState = row < guesses.length ? getCellState(guess, col) : !letter ? 'empty' : 'filled'

    return (
      <div key={`${row}-${col}`} className={`cell ${cellState}`}>
        {letter}
      </div>
    )
  }

  return (
    <div className="grid">
      {Array.from({ length: rows }, (_, row) => (
        <div key={row} className="row">
          {Array.from({ length: cols }, (_, col) => renderCell(row, col))}
        </div>
      ))}
    </div>
  )
}