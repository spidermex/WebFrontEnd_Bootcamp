/**
 * Calcula el mapa de frecuencias de letras en una palabra
 * @param {string} palabra - La palabra a analizar
 * @returns {Map<string, number>} Mapa con las frecuencias de cada letra
 */
function contarLetras(palabra) {
    const contador = new Map();
    for (const letra of palabra) {
        contador.set(letra, (contador.get(letra) || 0) + 1);
    }
    return contador;
}

/**
 * Determina si una palabra se puede formar con las letras disponibles
 * @param {string} palabra - La palabra que se intenta formar
 * @param {Map<string, number>} contadorLetrasDisponibles - Mapa de letras disponibles y sus frecuencias
 * @returns {boolean} true si la palabra se puede formar, false en caso contrario
 */
function sePuedeFormar(palabra, contadorLetrasDisponibles) {
    // Obtener el mapa de frecuencias de la palabra
    const contadorPalabra = contarLetras(palabra);
    
    // Verificar cada letra necesaria
    for (const [letra, cuenta] of contadorPalabra) {
        // Si la letra no existe en las disponibles o su frecuencia es insuficiente
        if (!contadorLetrasDisponibles.has(letra) || 
            contadorLetrasDisponibles.get(letra) < cuenta) {
            return false;
        }
    }
    return true;
}

/**
 * Encuentra todas las palabras válidas que se pueden formar con las letras disponibles
 * @param {string} letrasDisponibles - String con las letras disponibles
 * @param {number} longitudMinima - Longitud mínima de las palabras a buscar
 * @param {string} rutaDiccionariosPattern - Patrón de ruta a los archivos de diccionario (con {} como placeholder)
 * @returns {Promise<Set<string>>} Promesa que resuelve al conjunto de palabras válidas encontradas
 */
async function encontrarPalabrasValidas(letrasDisponibles, longitudMinima, rutaDiccionariosPattern) {
    // Calcular el mapa de frecuencias de las letras disponibles
    const contadorLetrasDisponibles = contarLetras(letrasDisponibles);
    
    // Determinar la longitud máxima posible
    const longitudMaxima = letrasDisponibles.length;
    
    // Conjunto para almacenar las palabras válidas encontradas
    const palabrasValidas = new Set();
    
    // Iterar por cada longitud posible
    for (let k = longitudMinima; k <= longitudMaxima; k++) {
        // Construir la ruta al archivo de diccionario para la longitud actual
        const rutaArchivo = rutaDiccionariosPattern.replace('{}', k);
        
        try {
            // Intentar cargar el archivo
            const response = await fetch(rutaArchivo);
            
            if (!response.ok) {
                // Si el archivo no existe (404) o hay otro error, continuar con la siguiente longitud
                continue;
            }
            
            // Leer el contenido del archivo
            const contenido = await response.text();
            
            // Procesar cada palabra del archivo
            const palabras = contenido.split('\n');
            
            for (const palabraSucia of palabras) {
                const palabra = palabraSucia.trim().toLowerCase();
                
                // Verificar que la palabra no esté vacía
                if (palabra && sePuedeFormar(palabra, contadorLetrasDisponibles)) {
                    palabrasValidas.add(palabra);
                }
            }
        } catch (error) {
            console.warn(`Error al cargar diccionario de longitud ${k}:`, error);
            continue;
        }
    }
    
    return palabrasValidas;
}

/**
 * Obtiene una palabra aleatoria de un archivo de diccionario
 * @param {string} rutaArchivo - Ruta al archivo de diccionario
 * @returns {Promise<string>} Promesa que resuelve a una palabra aleatoria del diccionario
 */
async function obtenerPalabraAleatoria(rutaArchivo) {
    try {
        // Cargar el archivo
        const response = await fetch(rutaArchivo);
        
        if (!response.ok) {
            throw new Error(`Error al cargar el archivo: ${response.status}`);
        }
        
        // Leer el contenido del archivo
        const contenido = await response.text();
        
        // Dividir el contenido en un array de palabras
        const palabras = contenido.split('\n')
            .map(palabra => palabra.trim())
            .filter(palabra => palabra.length > 0); // Eliminar líneas vacías
        
        if (palabras.length === 0) {
            throw new Error('El archivo de diccionario está vacío');
        }
        
        // Seleccionar una palabra aleatoria
        const indiceAleatorio = Math.floor(Math.random() * palabras.length);
        return palabras[indiceAleatorio].toLowerCase();
        
    } catch (error) {
        console.error('Error al obtener palabra aleatoria:', error);
        throw error;
    }
}


// Actualizar las exportaciones
export default {
    contarLetras,
    sePuedeFormar,
    encontrarPalabrasValidas,
    obtenerPalabraAleatoria,
};


