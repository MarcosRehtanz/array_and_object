const filtrarUsuarios = require('./index.js');

describe('Filtrar por usuarios', () => {
    test('Filtrar objetos con propiedad "activo"', () => {
        const usuarios = [
            { nombre: "Juan", activo: true },
            { nombre: "Ana", activo: false },
            { nombre: "Pedro", activo: true }
        ];

        const resultado = filtrarUsuarios(usuarios);
        expect(resultado).toEqual([
            { nombre: "Juan", activo: true },
            { nombre: "Pedro", activo: true }
        ]);
    });

    test('Filtrar objetos con propiedad "activo"', () => {
        const usuarios = [
            { nombre: "Juan", activo: true },
            { nombre: "Ana", activo: false },
            { nombre: "Pedro", activo: true }
        ];

        const resultado = filtrarUsuarios(usuarios);
        expect(resultado).toEqual([
            { nombre: "Juan", activo: true },
            { nombre: "Pedro", activo: true }
        ]);
    });

    test('Filtrar objetos sin coincidencias', () => {
        const usuarios = [
            { nombre: "Juan", activo: false },
            { nombre: "Ana", activo: false },
            { nombre: "Pedro", activo: false }
        ];

        const resultado = filtrarUsuarios(usuarios);
        expect(resultado).toEqual([]);
    });
});
