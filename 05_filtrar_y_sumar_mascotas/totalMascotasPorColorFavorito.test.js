const totalMascotasPorColorFavorito = require('./index.js');

describe('Filtrar y sumar mascotas', () => {

    test('Calcular total de mascotas de usuarios filtrados por color favorito', () => {
        const usuarios = [
            { nombre: "Juan", colorFavorito: "azul", mascotas: 2 },
            { nombre: "Ana", colorFavorito: "rojo", mascotas: 3 },
            { nombre: "Pedro", colorFavorito: "azul", mascotas: 5 }
        ];

        const resultado = totalMascotasPorColorFavorito(usuarios, "azul");
        expect(resultado).toBe(7); // Suma de 2 y 5
    });

    test('Calcular total con color favorito no encontrado', () => {
        const usuarios = [
            { nombre: "Juan", colorFavorito: "azul", mascotas: 2 },
            { nombre: "Ana", colorFavorito: "rojo", mascotas: 3 }
        ];

        const resultado = totalMascotasPorColorFavorito(usuarios, "verde");
        expect(resultado).toBe(0);
    });

    test('Calcular total con arreglo vacío', () => {
        const usuarios = [];

        const resultado = totalMascotasPorColorFavorito(usuarios, "azul");
        expect(resultado).toBe(0);
    });
});
