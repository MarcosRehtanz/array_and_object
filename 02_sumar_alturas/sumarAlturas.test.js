const sumarAlturas = require('./index.js');

describe('Sumar altura', () => {
    test('Sumar alturas de usuarios', () => {
        const usuarios = [
            { nombre: "Juan", altura: 180 },
            { nombre: "Ana", altura: 165 },
            { nombre: "Pedro", altura: 175 }
        ];

        const resultado = sumarAlturas(usuarios);
        expect(resultado).toBe(520);
    });

    test('Sumar alturas con arreglo vacío', () => {
        const usuarios = [];

        const resultado = sumarAlturas(usuarios);
        expect(resultado).toBe(0);
    });

    test('Sumar alturas con un solo usuario', () => {
        const usuarios = [
            { nombre: "Juan", altura: 180 }
        ];

        const resultado = sumarAlturas(usuarios);
        expect(resultado).toBe(180);
    });
});
