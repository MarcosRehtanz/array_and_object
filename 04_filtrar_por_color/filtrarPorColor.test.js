const filtrarPorColorFavorito = require('./index.js');

describe('Filtrar por color favorito', () => {

    test('Filtrar usuarios por color favorito', () => {
        const usuarios = [
            { nombre: "Juan", colorFavorito: "azul" },
            { nombre: "Ana", colorFavorito: "rojo" },
            { nombre: "Pedro", colorFavorito: "azul" }
        ];

        const resultado = filtrarPorColorFavorito(usuarios, "azul");
        expect(resultado).toEqual([
            { nombre: "Juan", colorFavorito: "azul" },
            { nombre: "Pedro", colorFavorito: "azul" }
        ]);
    });

    test('Filtrar usuarios con color favorito no encontrado', () => {
        const usuarios = [
            { nombre: "Juan", colorFavorito: "azul" },
            { nombre: "Ana", colorFavorito: "rojo" }
        ];

        const resultado = filtrarPorColorFavorito(usuarios, "verde");
        expect(resultado).toEqual([]);
    });

    test('Filtrar usuarios con arreglo vacío', () => {
        const usuarios = [];

        const resultado = filtrarPorColorFavorito(usuarios, "azul");
        expect(resultado).toEqual([]);
    });
});
