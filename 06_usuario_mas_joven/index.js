/**
 * Función: encontrarUsuarioMasJoven
 * 
 * Esta función encuentra y retorna el usuario más joven del arreglo proporcionado.
 * 
 * @example
 * const usuarios = [
 *    { nombre: "Juan", edad: 25 },
 *    { nombre: "Ana", edad: 20 },
 *    { nombre: "Pedro", edad: 30 },
 *    { nombre: "Maria", edad: 15 }
 * ];
 * 
 * encontrarUsuarioMasJoven(usuarios, "azul"); 
 * // Debería retornar: { nombre: "Maria", edad: 15 }
 */
function encontrarUsuarioMasJoven(usuarios) {
    // Tu código aquí
    if (usuarios.length === 0) return null;
    return usuarios.reduce((minor, user)=>{
        return user.edad < minor.edad ? user : minor
    }, usuarios[0])
}

// Exportar la función para pruebas
module.exports = encontrarUsuarioMasJoven;
