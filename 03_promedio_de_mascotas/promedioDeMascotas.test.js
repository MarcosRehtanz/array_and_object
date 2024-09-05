const promedioMascotas = require('./index.js');

describe('Promedio de mascotas', () => {

    test('Calcular promedio de mascotas', () => {
        const usuarios = [
            { nombre: "Juan", mascotas: 2 },
            { nombre: "Ana", mascotas: 3 },
            { nombre: "Pedro", mascotas: 5 }
        ];

        const resultado = promedioMascotas(usuarios);
        expect(resultado).toBeCloseTo(3.33, 2); // Usamos toBeCloseTo para verificar decimales
    });

    test('Calcular promedio con arreglo vacío', () => {
        const usuarios = [];

        const resultado = promedioMascotas(usuarios);
        expect(resultado).toBe(0);
    });

    test('Calcular promedio con un solo usuario', () => {
        const usuarios = [
            { nombre: "Juan", mascotas: 4 }
        ];

        const resultado = promedioMascotas(usuarios);
        expect(resultado).toBe(4);
    });
});
