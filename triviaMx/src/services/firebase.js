import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get, child } from 'firebase/database';
import { firebaseConfig } from '../utils/config';

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

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
    
    // Obtener el contador para saber cuántas preguntas hay en esta categoría
    const countersRef = ref(database, 'counters');
    const countersSnapshot = await get(countersRef);
    const counters = countersSnapshot.val();
    
    if (!counters || !counters[categoryName]) {
      throw new Error('No se encontraron contadores para esta categoría');
    }
    
    // Generar un índice aleatorio basado en el contador
    const maxIndex = counters[categoryName];
    const randomIndex = Math.floor(Math.random() * maxIndex) + 1;
    
    // Obtener la pregunta aleatoria
    const questionRef = ref(database, `${categoryName}/${randomIndex}`);
    const questionSnapshot = await get(questionRef);
    const question = questionSnapshot.val();
    
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

export default {
  getRandomQuestion
};