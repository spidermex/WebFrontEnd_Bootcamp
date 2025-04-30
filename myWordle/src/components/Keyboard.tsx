interface KeyboardProps {
  onKeyPress: (key: string) => void
  usedLetters: Record<string, 'correct' | 'present' | 'absent' | undefined>
}

export const Keyboard = ({ onKeyPress, usedLetters }: KeyboardProps) => {
  const rows = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ'],
    ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '⌫']
  ]

  return (
    <div className="keyboard">
      {rows.map((row, i) => (
        <div key={i} className="keyboard-row">
          {row.map((key) => {
            const state = usedLetters[key]
            return (
              <button
                key={key}
                className={`key ${state || ''}`}
                onClick={() => onKeyPress(key)}
              >
                {key}
              </button>
            )
          })}
        </div>
      ))}
    </div>
  )
}