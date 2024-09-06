/**
 * Función: encontrarUsuarioMasJoven
 * 
 * Esta función encuentra y retorna el usuario más joven del arreglo proporcionado.
 * 
 * @param {Array} arr - Arreglo de objetos que representan usuarios.
 * @returns {Object|null} - Objeto del usuario más joven o null si el arreglo está vacío.
 */
function encontrarUsuarioMasJoven(arr) {
    if (arr.length === 0) {
        return null; // Retorna null si el arreglo está vacío
    }
    
    return arr.reduce((usuarioJoven, usuarioActual) => {
        return (usuarioActual.edad < usuarioJoven.edad) ? usuarioActual : usuarioJoven;
    });
}

// Exportar la función para pruebas
module.exports = encontrarUsuarioMasJoven;
