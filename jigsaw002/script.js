// Variables globales
var audio = new Audio('./sounds/connect.wav');
let imagen = new Image();
let factorX = 1;
let factorY = 1;
imagen.src = './images/cat1.jpg';  // Imagen por defecto

// Configuración por defecto
let config = {
    bgColor: '#1a1717',
    gridSize: 12,
    pieceSize: 40,
    anchoBoard:500,
    altoBoard:550
};

// Lista de imágenes disponibles
const availableImages = [];

// Función para obtener el nombre amigable de la imagen
function getImageName(path) {
    // Remover la ruta y la extensión, convertir guiones/underscores a espacios
    let name = path.split('/').pop().split('.')[0];
    name = name.replace(/[-_]/g, ' ');
    // Capitalizar primera letra de cada palabra
    return name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Llenar la galería con las imágenes disponibles
function loadImageGallery(gallery) {
    gallery.innerHTML = ''; // Limpiar galería
    availableImages.forEach(img => {
        const imgContainer = document.createElement('div');
        imgContainer.className = 'image-option';
        
        const imgElement = document.createElement('img');
        imgElement.src = img.path;
        imgElement.alt = img.name;
        
        imgContainer.appendChild(imgElement);
        gallery.appendChild(imgContainer);

        // Agregar evento click
        imgContainer.onclick = () => {
            imagen = new Image();
            imagen.src = img.path;
            imagen.onload = () => {
                // Calcular el factor de escala basado en el tamaño de la imagen
                if (imagen.width > imagen.height) {
                    factorX = 1;
                    factorY = imagen.width / imagen.height;
                } else if (imagen.height > imagen.width) {
                    factorY = 1;
                    factorX = imagen.height / imagen.width;
                } else {
                    factorX = 1;
                    factorY = 1;
                }
                // Limpiar el estado anterior
                localStorage.removeItem('puzzleState');
                localStorage.removeItem('originalPositions');
                initializePuzzle();
                document.getElementById('imageModal').style.display = 'none';
            };
        };
    });
}

// Función para cargar la lista de imágenes disponibles
async function loadAvailableImages(gallery) {
    // Lista estática de imágenes disponibles
    const defaultImages = [
        'arte001.jpg',
        'arte002.jpg', 
        'arte003.jpg',
        'arte004.jpg',
        'arte005.jpg',
        'arte006.jpg',
        'arte007.jpg',
        'arte008.jpg',
        'arte009.jpg',
        'arte010.jpg',
        'casa1.jpg',
        'cat1.jpg',
        'cats002.jpg',
        'cats003.jpg',
        'cats004.jpg',
        'cats005.jpg',
        'cats006.jpg',
        'cats007.jpg',
        'cats008.jpg',
        'cats009.jpg',
        'cats010.jpg',
        'ciudad001.jpg',
        'ciudad002.jpg',
        'ciudad003.jpg',
        'ciudad004.jpg',
        'ciudad005.jpg',
        'ciudad006.jpg',
        'ciudad007.jpg',
        'ciudad008.jpg',
        'ciudad009.jpg',
        'ciudad010.jpg',
        'dali.jpg',
        'libros002.jpg',
        'otros001.jpg',
        'otros002.jpg',
        'otros003.jpg',
        'otros004.jpg',
        'otros005.jpg',
        'otros006.jpg',
        'otros007.jpg',
        'otros008.jpg',
        'otros009.jpg',
        'otros010.jpg',
        'paisaje001.jpg',
        'paisaje002.jpg',
        'paisaje003.jpg',
        'paisaje004.jpg',
        'paisaje005.jpg',
        'paisaje006.jpg',
        'paisaje007.jpg',
        'paisaje008.jpg',
        'paisaje009.jpg',
        'paisaje010.jpg',
    ];

    // Limpiar la lista actual
    availableImages.length = 0;
        
    // Agregar cada imagen a la lista
    defaultImages.forEach(img => {
        const path = './images/' + img;
        availableImages.push({
            name: getImageName(path),
            path: path
        });
    });
        
    // Ordenar alfabéticamente
    availableImages.sort((a, b) => a.name.localeCompare(b.name));
    
    // Actualizar la galería
    loadImageGallery(gallery);
}

// Inicializar el puzzle cuando la imagen se cargue
imagen.onload = initializePuzzle;

// Mover toda la inicialización del DOM aquí
document.addEventListener('DOMContentLoaded', () => {
    // Obtener referencias DOM
    const modal = document.getElementById('imageModal');
    const previewModal = document.getElementById('previewModal');
    const configModal = document.getElementById('configModal');
    const closeBtns = document.getElementsByClassName('close');
    const gallery = document.getElementById('imageGallery');
    const previewImage = document.getElementById('previewImage');

    // Cargar configuración guardada
    const savedConfig = localStorage.getItem('puzzleConfig');
    if (savedConfig) {
        config = { ...config, ...JSON.parse(savedConfig) };
        document.getElementById('my-tablero').style.backgroundColor = config.bgColor;
    }

    // Configurar eventos de los modales
    Array.from(closeBtns).forEach(btn => {
        btn.onclick = function() {
            modal.style.display = 'none';
            previewModal.style.display = 'none';
            configModal.style.display = 'none';
        }
    });

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
        if (event.target === previewModal) {
            previewModal.style.display = 'none';
        }
        if (event.target === configModal) {
            configModal.style.display = 'none';
        }
    };

    // Eventos de los botones
    document.getElementById('loadImage').onclick = () => {
        modal.style.display = 'block';
    };

    document.getElementById('viewImage').onclick = () => {
        previewImage.src = imagen.src;
        previewModal.style.display = 'block';
    };

    document.getElementById('config').onclick = () => {
        document.getElementById('bgColor').value = config.bgColor;
        document.getElementById('gridSize').value = config.gridSize;
        document.getElementById('pieceSize').value = config.pieceSize;
        document.getElementById('anchoBoard').value = config.anchoBoard;
        document.getElementById('altoBoard').value = config.altoBoard;
        configModal.style.display = 'block';
    };

    // Manejar guardado de configuración
    document.getElementById('saveConfig').onclick = () => {
        // Obtener nuevos valores
        const newConfig = {
            bgColor: document.getElementById('bgColor').value,
            gridSize: parseInt(document.getElementById('gridSize').value),
            pieceSize: parseInt(document.getElementById('pieceSize').value),
            anchoBoard: parseInt(document.getElementById('anchoBoard').value),
            altoBoard: parseInt(document.getElementById('altoBoard').value)
        };

        // Guardar configuración
        config = newConfig;
        localStorage.setItem('puzzleConfig', JSON.stringify(config));

        // Aplicar cambios
        document.getElementById('my-tablero').style.backgroundColor = config.bgColor;
        
        // Reiniciar puzzle con nueva configuración
        localStorage.removeItem('puzzleState');
        localStorage.removeItem('originalPositions');
        initializePuzzle();
        
        // Cerrar modal
        configModal.style.display = 'none';
    };

    // Cargar imágenes
    loadAvailableImages(gallery);
});

// Función para inicializar el puzzle
function initializePuzzle() {
    const tablero = new headbreaker.Canvas('my-tablero', {
        width: config.anchoBoard,
        height: config.altoBoard,
        image: imagen,
        outline: new headbreaker.outline.Rounded(),
        preventOffstageDrag: true,
        fixed: true,
        pieceSize: {x:Math.round(config.pieceSize/factorX), y:Math.round(config.pieceSize/factorY)},
        proximity: 15,
        borderFill: 1,
        strokeWidth: 1,
    });

    // Aplicar configuración de fondo
    document.getElementById('my-tablero').style.backgroundColor = config.bgColor;

    // Manejar el cambio del checkbox para el movimiento del canvas
    document.getElementById('fixedCanvas').addEventListener('change', function (e) {
        const stage = tablero['__konvaLayer__'].getStage();
        const layer = tablero['__konvaLayer__'];

        if (!e.target.checked) {
            // Si el checkbox no está marcado, permitir mover el canvas
            stage.draggable(true);
            stage.on('mousedown touchstart', function (e) {
                if (e.target === stage) {
                    stage.draggable(true);
                } else {
                    stage.draggable(false);
                }
            });
        } else {
            // Si el checkbox está marcado, fijar el canvas
            stage.draggable(false);
            stage.off('mousedown touchstart');
        }
    });

    // Ajustar la imagen al tamaño total del puzzle
    tablero.adjustImagesToPuzzleWidth();

    // Crear un mapa de las posiciones originales de las piezas
    const originalPositions = new Map();

    tablero.autogenerate({
        horizontalPiecesCount: config.gridSize,
        verticalPiecesCount: config.gridSize,
        insertsGenerator: headbreaker.generators.random
    });

    // Guardar las posiciones originales antes de mezclar
    tablero.puzzle.pieces.forEach(piece => {
        originalPositions.set(piece.id, {
            x: piece.centralAnchor.x,
            y: piece.centralAnchor.y
        });
    });

    // Añadir requisito de conexión que valida la posición relativa correcta
    tablero.attachConnectionRequirement((pieceOne, pieceTwo) => {
        const posOne = originalPositions.get(pieceOne.id);
        const posTwo = originalPositions.get(pieceTwo.id);

        // Calcular la distancia relativa original entre las piezas
        const originalDx = Math.abs(posTwo.x - posOne.x);
        const originalDy = Math.abs(posTwo.y - posOne.y);

        // Calcular la distancia actual entre las piezas
        const currentDx = Math.abs(pieceTwo.centralAnchor.x - pieceOne.centralAnchor.x);
        const currentDy = Math.abs(pieceTwo.centralAnchor.y - pieceOne.centralAnchor.y);

        // Las piezas deben estar a la misma distancia relativa que en la posición original
        const tolerance = 10;
        return Math.abs(currentDx - originalDx) <= tolerance &&
            Math.abs(currentDy - originalDy) <= tolerance;
    });

    tablero.shuffle(0.7);
    tablero.registerKeyboardGestures();
    tablero.draw();

    // Función para guardar el estado
    function saveState() {
        // Guardar el estado del puzzle
        const puzzleState = tablero.puzzle.export({ compact: true });
        localStorage.setItem('puzzleState', JSON.stringify(puzzleState));

        // Guardar el mapa de posiciones originales
        const positionsMap = {};
        originalPositions.forEach((value, key) => {
            positionsMap[key] = value;
        });
        localStorage.setItem('originalPositions', JSON.stringify(positionsMap));

        console.log('Puzzle state and positions saved automatically');
    }

    // Auto-guardar cuando se suelta una pieza después de moverla
    tablero['__konvaLayer__'].on('dragend', () => {
        saveState();
    });

    function loadState() {
        const savedState = localStorage.getItem('puzzleState');
        const savedPositions = localStorage.getItem('originalPositions');

        if (savedState && savedPositions) {
            // Restaurar el mapa de posiciones originales
            originalPositions.clear();
            const positionsMap = JSON.parse(savedPositions);
            Object.entries(positionsMap).forEach(([key, value]) => {
                originalPositions.set(key, value);
            });
            
            // Cargar el estado del puzzle
            const puzzleState = JSON.parse(savedState);
            tablero.clear();
            tablero.renderPuzzle(headbreaker.Puzzle.import(puzzleState));

            tablero.attachConnectionRequirement((pieceOne, pieceTwo) => {
                const posOne = originalPositions.get(pieceOne.id);
                const posTwo = originalPositions.get(pieceTwo.id);

                const originalDx = Math.abs(posTwo.x - posOne.x);
                const originalDy = Math.abs(posTwo.y - posOne.y);

                const currentDx = Math.abs(pieceTwo.centralAnchor.x - pieceOne.centralAnchor.x);
                const currentDy = Math.abs(pieceTwo.centralAnchor.y - pieceOne.centralAnchor.y);

                const tolerance = 10;
                return Math.abs(currentDx - originalDx) <= tolerance &&
                    Math.abs(currentDy - originalDy) <= tolerance;
            });

            tablero.draw();
        }
    }

    // Función para revolver el puzzle
    function revolver() {
        // Limpiar el estado guardado para evitar conflictos
        localStorage.removeItem('puzzleState');
        localStorage.removeItem('originalPositions');
        
        // Revolver el puzzle
        tablero.shuffle(0.7);
        tablero.redraw(); // Asegurar que se redibuje
        
        // Guardar el nuevo estado
        saveState();
    }

    // Cargar el estado guardado al iniciar
    loadState();

    // Configurar los eventos de los botones
    document.getElementById('revolver').addEventListener('click', revolver);
    document.getElementById('solve').onclick = () => { tablero.solve();};

    // Función para crear un nuevo puzzle
    function newPuzzle() {
        localStorage.removeItem('puzzleState');
        localStorage.removeItem('originalPositions');
        location.reload();
    }

    // Manejar las conexiones de piezas
    tablero.onConnect((piece, figure, target, targetFigure) => {
        const isValidConnection = tablero.puzzle.horizontalRequirement(piece, target) ||
            tablero.puzzle.verticalRequirement(piece, target);

        if (isValidConnection) {
            audio.play();
            figure.shape.stroke('green');
            targetFigure.shape.stroke('green');
            saveState();
        } else {
            figure.shape.stroke('red');
            targetFigure.shape.stroke('red');
        }

        tablero.redraw();

        setTimeout(() => {
            figure.shape.stroke('black');
            targetFigure.shape.stroke('black');
            tablero.redraw();
        }, 200);
    });
}
