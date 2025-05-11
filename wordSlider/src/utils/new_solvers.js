

/**
 * Carga el diccionario de palabras de una longitud específica
 * @param {number} wordLength - Longitud de las palabras del diccionario
 * @returns {Promise<Set<string>>} - Set con las palabras del diccionario
 */
async function loadDictionary(wordLength) {
  try {
    // Importar dinámicamente el archivo del diccionario
    const dictionary = await import(`../data/palabras_${wordLength}.js`);
    return dictionary.default;
  } catch (error) {
    console.error(`Error al cargar el diccionario de ${wordLength} letras:`, error);
    return new Set(); // Devolver un Set vacío en caso de error
  }
}

/**
 * Carga los tableros de un tamaño específico
 * @param {number} boardSize - Tamaño del tablero (p.ej. 5 para tableros 5x5)
 * @returns {Promise<Array>} - Array con los objetos de tablero
 */
async function loadBoards(boardSize) {
  try {
    // Importar dinámicamente el archivo de tableros
    const boards = await import(`../data/boards${boardSize}.js`);
    return boards.default;
  } catch (error) {
    console.error(`Error al cargar los tableros de tamaño ${boardSize}:`, error);
    return []; // Devolver un array vacío en caso de error
  }
}

/**
 * Obtiene un tablero aleatorio de un tamaño específico
 * @param {number} boardSize - Tamaño del tablero
 * @returns {Promise<Object|null>} - Un objeto de tablero aleatorio o null si no hay tableros disponibles
 */
async function getRandomBoard(boardSize) {
  try {
    const boards = await loadBoards(boardSize);
    
    if (!boards || boards.length === 0) {
      console.warn(`No hay tableros disponibles para el tamaño ${boardSize}`);
      return null;
    }
    
    // Seleccionar un tablero aleatorio
    const randomIndex = Math.floor(Math.random() * boards.length);
    return boards[randomIndex];
  } catch (error) {
    console.error("Error al obtener un tablero aleatorio:", error);
    return null;
  }
}

function scoreBoard(board, dictionary) {
    const rows = board.length;
    const cols = board.length; // Asumiendo tablero cuadrado
    const foundWords = new Set();
    
    // Verificar filas
    for (let r = 0; r < rows; r++) {
        // Palabra de izquierda a derecha
        const word = board[r].join('');
        if (dictionary.has(word)) foundWords.add(word);
        
        // Palabra de derecha a izquierda
        const reverseWord = [...board[r]].reverse().join('');
        if (dictionary.has(reverseWord)) foundWords.add(reverseWord);
    }
    
    // Verificar columnas
    for (let c = 0; c < cols; c++) {
        // Construir palabra de columna (arriba a abajo)
        let colWord = '';
        for (let r = 0; r < rows; r++) {
            colWord += board[r][c];
        }
        
        if (dictionary.has(colWord)) foundWords.add(colWord);
        
        // Palabra de abajo a arriba
        const reverseColWord = [...colWord].reverse().join('');
        if (dictionary.has(reverseColWord)) foundWords.add(reverseColWord);
    }
    
    return { score: foundWords.size, words: foundWords };
}


/**
 * Aplica un movimiento de rotación a un tablero
 * @param {Array<Array<string>>} board - Tablero actual
 * @param {Object} move - Movimiento a aplicar {type, index, steps}
 * @returns {Array<Array<string>>} - Nuevo tablero con el movimiento aplicado
 */
function applyMove(board, move) {
    const size = board.length; // Obtener tamaño del tablero directamente
    const { type, index, steps } = move;
    const newBoard = board.map(row => [...row]);
    
    if (type === 'row') {
        // Rotar fila
        const row = [...newBoard[index]];
        for (let i = 0; i < size; i++) {
            const newPos = (i + steps + size) % size;
            newBoard[index][newPos] = board[index][i];
        }
    } else {
        // Rotar columna
        const col = [];
        for (let i = 0; i < size; i++) {
            col.push(board[i][index]);
        }
        
        for (let i = 0; i < size; i++) {
            const newPos = (i + steps + size) % size;
            newBoard[newPos][index] = col[i];
        }
    }
    
    return newBoard;
}

/**
 * Encuentra la secuencia óptima de movimientos para descubrir una nueva palabra
 * @param {Array<Array<string>>} initialBoard - Estado inicial del tablero
 * @param {Set<string>} foundWords - Palabras ya encontradas
 * @param {Set<string>} dictionary - Diccionario de palabras válidas
 * @param {number} minMoves - Número mínimo de movimientos requeridos
 * @param {number} maxMoves - Número máximo de movimientos permitidos
 * @return {Object} - Resultado con movimientos y nueva palabra, o indicación de que no hay solución
 */
function findNextWordPath(initialBoard, foundWords, dictionary, minMoves, maxMoves) {
    const size = initialBoard.length;
        
    // Función para generar todos los posibles movimientos
    function generateMoves() {
        const moves = [];
        
        // Rotaciones de filas
        for (let row = 0; row < size; row++) {
            for (let steps = 1; steps < size; steps++) {
                moves.push({ type: 'row', index: row, steps });
            }
        }
        
        // Rotaciones de columnas
        for (let col = 0; col < size; col++) {
            for (let steps = 1; steps < size; steps++) {
                moves.push({ type: 'col', index: col, steps });
            }
        }
        
        return moves;
    }
    
    // Función para convertir un tablero en una cadena única (para usar como clave)
    function boardToString(board) {
        return board.map(row => row.join('')).join('|');
    }
    
    // Búsqueda en anchura (BFS) para encontrar la solución
    const queue = [{
        board: initialBoard,
        moves: [],
        depth: 0
    }];
    
    // Conjunto para rastrear estados ya visitados
    const visited = new Set();
    visited.add(boardToString(initialBoard));
    
    while (queue.length > 0) {
        const { board, moves, depth } = queue.shift();
        
        // Si hemos alcanzado el mínimo de movimientos, verificar si hay nuevas palabras
        if (depth >= minMoves) {
            const { words } = scoreBoard(board, dictionary);
            
            // Buscar una palabra que no esté en la lista de palabras ya encontradas
            for (const word of words) {
                if (!foundWords.has(word)) {
                    return {
                        success: true,
                        moves: moves,
                        newWord: word,
                        boardAfterMoves: board
                    };
                }
            }
        }
        
        // Si aún no hemos alcanzado el límite máximo de movimientos, explorar más
        if (depth < maxMoves) {
            const possibleMoves = generateMoves();
            
            for (const move of possibleMoves) {
                const nextBoard = applyMove(board, move);
                const boardKey = boardToString(nextBoard);
                
                // Evitar estados repetidos
                if (!visited.has(boardKey)) {
                    visited.add(boardKey);
                    queue.push({
                        board: nextBoard,
                        moves: [...moves, move],
                        depth: depth + 1
                    });
                }
            }
        }
    }
    
    // Si llegamos aquí, hemos explorado todas las posibilidades y no encontramos solución
    return {
        success: false,
        message: "No se encontraron nuevas palabras en el rango de movimientos especificado"
    };
}


/**
 * Evalúa si un tablero puede generar al menos un número mínimo de palabras en un límite de movimientos
 * @param {Array<Array<string>>} initialBoard - Estado inicial del tablero
 * @param {Set<string>} dictionary - Diccionario de palabras válidas
 * @param {number} minWords - Mínimo número de palabras requeridas
 * @param {number} maxMoves - Máximo número de movimientos permitidos
 * @return {Object} - Resultado de la evaluación
 */
function evaluateWordPotential(initialBoard, dictionary, minWords, maxMoves) {
    const size = initialBoard.length;
    const allFoundWords = new Set();
    
    // Primero añadimos las palabras ya visibles en el estado inicial
    const { words: initialWords } = scoreBoard(initialBoard, dictionary);
    initialWords.forEach(word => allFoundWords.add(word));
    
    // Si ya tenemos suficientes palabras, terminamos
    if (allFoundWords.size >= minWords) {
        return {
            success: true,
            wordsFound: allFoundWords.size,
            words: Array.from(allFoundWords),
            movesNeeded: 0
        };
    }
    
    // Función para convertir tableros en strings únicos
    function boardToString(board) {
        return board.map(row => row.join('')).join('|');
    }
    
    // BFS para explorar estados
    const queue = [{
        board: initialBoard,
        moves: 0
    }];
    
    const visited = new Set();
    visited.add(boardToString(initialBoard));
    
    // Función para generar movimientos posibles
    function generateMoves() {
        const moves = [];
        // Rotaciones de filas
        for (let row = 0; row < size; row++) {
            for (let steps = 1; steps < size; steps++) {
                moves.push({ type: 'row', index: row, steps });
            }
        }
        // Rotaciones de columnas
        for (let col = 0; col < size; col++) {
            for (let steps = 1; steps < size; steps++) {
                moves.push({ type: 'col', index: col, steps });
            }
        }
        return moves;
    }
    
    // Procesar la cola BFS
    while (queue.length > 0) {
        const { board, moves } = queue.shift();
        
        // Si ya alcanzamos el límite de movimientos, no exploramos más este camino
        if (moves >= maxMoves) continue;
        
        // Probar todos los movimientos posibles desde este estado
        const possibleMoves = generateMoves();
        
        for (const move of possibleMoves) {
            const nextBoard = applyMove(board, move);
            const boardKey = boardToString(nextBoard);
            
            // Evitar estados repetidos
            if (visited.has(boardKey)) continue;
            visited.add(boardKey);
            
            // Evaluar nuevas palabras en este estado
            const { words } = scoreBoard(nextBoard, dictionary);
            let foundNewWord = false;
            
            for (const word of words) {
                if (!allFoundWords.has(word)) {
                    allFoundWords.add(word);
                    foundNewWord = true;
                }
            }
            
            // Verificar si ya alcanzamos el objetivo
            if (allFoundWords.size >= minWords) {
                return {
                    success: true,
                    wordsFound: allFoundWords.size,
                    words: Array.from(allFoundWords),
                    movesNeeded: moves + 1,
                    statesExplored: visited.size
                };
            }
            
            // Continuar explorando este camino
            queue.push({
                board: nextBoard,
                moves: moves + 1
            });
        }
    }
    
    // Si llegamos aquí, exploramos todos los estados posibles sin encontrar suficientes palabras
    return {
        success: false,
        wordsFound: allFoundWords.size,
        words: Array.from(allFoundWords),
        maxMovesExplored: maxMoves,
        statesExplored: visited.size
    };
}

// Ejemplo de uso de las funciones
async function init() {
  try {
    // Cargar el diccionario de palabras de 5 letras
    const dictionary = await loadDictionary(5);
    console.log(`Diccionario cargado con ${dictionary.size} palabras`);

    // Obtener un tablero aleatorio de 5x5
    const randomBoard = await getRandomBoard(5);
    console.log('Tablero aleatorio seleccionado:', randomBoard);

    // Ahora puedes usar estas variables para alimentar tus funciones existentes
    if (randomBoard) {
      console.log("Evaluando potencial del tablero...");
      // Verifica si el tablero tiene la estructura esperada
      console.log("Estructura del tablero:", randomBoard);
      
      if (randomBoard.board && Array.isArray(randomBoard.board)) {
        const result = evaluateWordPotential(randomBoard.board, dictionary, 25, 30);
        console.log("Resultado de la evaluación:", result);
      } else {
        console.error("El tablero no tiene la estructura esperada:", randomBoard);
      }
    } else {
      console.error("No se pudo obtener un tablero aleatorio");
    }
  } catch (error) {
    console.error("Error en la inicialización:", error);
  }
}


init();







// Ejemplo de uso
// const board = [
//     ['C', 'A', 'S', 'A'],
//     ['O', 'S', 'O', 'S'],
//     ['L', 'A', 'T', 'A'],
//     ['P', 'E', 'R', 'A']
// ];

// const dictionary = new Set(['CASA', 'OSO', 'LATA', 'PERA', 'RISA', 'SOL', 'VASO', 'ROSA', 'LOSA', 'POSO']);
// const foundWords = new Set(['CASA', 'OSO', 'LATA', 'PERA']);

// const result = findNextWordPath(board, foundWords, dictionary, 1, 3);
// console.log(result);