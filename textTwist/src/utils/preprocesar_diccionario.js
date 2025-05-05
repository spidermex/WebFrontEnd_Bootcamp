const fs = require('fs');
const path = require('path');

try {
    // Verificar que se proporcionaron los argumentos necesarios
    const rutaMaestro = process.argv[2];
    const rutaSalida = process.argv[3];

    if (!rutaMaestro || !rutaSalida) {
        console.error('Uso: node preprocesar_diccionario.js <ruta_diccionario_maestro> <directorio_salida>');
        process.exit(1);
    }

    // Asegurarse de que el directorio de salida exista
    fs.mkdirSync(rutaSalida, { recursive: true });

    // Leer el contenido del archivo maestro
    const contenido = fs.readFileSync(rutaMaestro, 'utf8');

    // Dividir el contenido en un array de palabras
    const lineas = contenido.split('\n');

    // Objeto para almacenar las palabras por longitud
    const almacenamiento = {};

    // Procesar cada línea
    for (const linea of lineas) {
        const palabra = linea.trim().toLowerCase();

        // Verificar que la palabra no esté vacía y solo contenga letras (incluyendo ñ y vocales acentuadas)
        if (palabra && /^[a-zñáéíóú]+$/.test(palabra)) {
            const longitud = palabra.length;

            // Crear el array para la longitud si no existe
            if (!almacenamiento[longitud]) {
                almacenamiento[longitud] = [];
            }

            // Añadir la palabra al array correspondiente
            almacenamiento[longitud].push(palabra);
        }
    }

    // Escribir las palabras en archivos separados por longitud
    for (const [longitud, palabras] of Object.entries(almacenamiento)) {
        const rutaArchivoSalida = path.join(rutaSalida, `palabras_${longitud}.txt`);
        const contenidoArchivo = palabras.join('\n');

        fs.writeFileSync(rutaArchivoSalida, contenidoArchivo);
        console.log(`Archivo creado: ${rutaArchivoSalida} (${palabras.length} palabras)`);
    }

    console.log('Procesamiento completado con éxito.');
} catch (error) {
    console.error('Ocurrió un error:', error.message);
    process.exit(1);
}