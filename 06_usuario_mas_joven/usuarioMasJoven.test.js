const encontrarUsuarioMasJoven = require('./index.js');

describe('Usuario mas joven', () => {
test('Encontrar el usuario más joven del arreglo', () => {
    const usuarios = [
        { nombre: "Juan", edad: 25 },
        { nombre: "Ana", edad: 20 },
        { nombre: "Pedro", edad: 30 },
        { nombre: "Maria", edad: 15 }
    ];
    
    const resultado = encontrarUsuarioMasJoven(usuarios);
    expect(resultado).toEqual({ nombre: "Maria", edad: 15 }); // Maria es la más joven
});

test('Encontrar el usuario más joven con arreglo vacío', () => {
    const usuarios = [];
    
    const resultado = encontrarUsuarioMasJoven(usuarios);
    expect(resultado).toBe(null); // Debe retornar null
});

test('Encontrar el usuario más joven con un solo usuario', () => {
    const usuarios = [
        { nombre: "Juan", edad: 25 }
    ];
    
    const resultado = encontrarUsuarioMasJoven(usuarios);
    expect(resultado).toEqual({ nombre: "Juan", edad: 25 }); // Solo hay un usuario
});
});
