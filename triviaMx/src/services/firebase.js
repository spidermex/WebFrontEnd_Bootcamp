import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';
import { firebaseConfig } from '../utils/config';

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Caché de preguntas por categoría
const questionCache = {};
// Registro de preguntas ya mostradas por sesión (por categoría)
const usedQuestions = {};

/**
 * Obtiene una pregunta aleatoria de la categoría especificada
 * @param {number} category - Número de categoría (1-6)
 * @returns {Promise} Promesa que resuelve con la pregunta
 */
export const getRandomQuestion = async (category) => {
  try {
    // Mapeo de la categoría al nombre de la tabla
    const categoryMap = {
      1: 'culturaGeneral',
      2: 'deportes',
      3: 'geografiaHistoria',
      4: 'cienciaTecnologia',
      5: 'cineMusicaTV',
      6: 'arteLiteratura'
    };
    
    const categoryName = categoryMap[category];
    
    if (!categoryName) {
      throw new Error('Categoría inválida');
    }

    // Inicializar arrays de seguimiento para esta categoría si no existen
    if (!usedQuestions[categoryName]) {
      usedQuestions[categoryName] = [];
    }
    
    // Cargar todas las preguntas de la categoría si aún no están en caché
    if (!questionCache[categoryName]) {
      // Obtenemos todas las preguntas de la categoría en una sola consulta
      const categoryRef = ref(database, categoryName);
      const snapshot = await get(categoryRef);
      
      if (!snapshot.exists()) {
        throw new Error(`No hay preguntas disponibles para la categoría ${categoryName}`);
      }
      
      // Guardar las preguntas en caché
      questionCache[categoryName] = snapshot.val();
    }
    
    const questions = questionCache[categoryName];
    const totalQuestions = questions.length;
    
    if (usedQuestions[categoryName].length >= totalQuestions) {
      // Si ya se usaron todas las preguntas, reiniciar el registro
      usedQuestions[categoryName] = [];
      console.log(`Todas las preguntas de ${categoryName} han sido mostradas. Reiniciando ciclo.`);
    }
    
    // Buscar una pregunta que no se haya usado todavía
    let randomIndex;
    let attempts = 0;
    const maxAttempts = totalQuestions * 2; // Evitar bucle infinito
    
    do {
      randomIndex = Math.floor(Math.random() * totalQuestions);
      attempts++;
      
      // Salir si hemos intentado demasiadas veces
      if (attempts > maxAttempts) {
        // Reiniciar el registro y elegir cualquiera
        usedQuestions[categoryName] = [];
        break;
      }
    } while (usedQuestions[categoryName].includes(randomIndex));
    
    // Marcar la pregunta como usada
    usedQuestions[categoryName].push(randomIndex);
    
    const question = questions[randomIndex];
    
    if (!question) {
      throw new Error('No se encontró la pregunta');
    }
    
    return {
      ...question,
      category: categoryName
    };
  } catch (error) {
    console.error('Error al obtener pregunta:', error);
    throw error;
  }
};

/**
 * Reinicia el historial de preguntas utilizadas
 * @param {number|null} category - Categoría específica o null para todas
 */
export const resetUsedQuestions = (category = null) => {
  if (category) {
    const categoryMap = {
      1: 'culturaGeneral',
      2: 'deportes',
      3: 'geografiaHistoria',
      4: 'cienciaTecnologia',
      5: 'cineMusicaTV',
      6: 'arteLiteratura'
    };
    
    const categoryName = categoryMap[category];
    if (categoryName) {
      usedQuestions[categoryName] = [];
    }
  } else {
    // Reiniciar todas las categorías
    Object.keys(usedQuestions).forEach(key => {
      usedQuestions[key] = [];
    });
  }
};

export default {
  getRandomQuestion,
  resetUsedQuestions
};