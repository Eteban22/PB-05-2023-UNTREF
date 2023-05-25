/*
    El método indexOf() retorna el primer índice en el que se puede
    encontrar un elemento dado en el array, ó retorna -1 si el elemento
    no esta presente.
    Fuente: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

    Dato extra: Este método diferencia entre minúsculas y mayúsculas.
*/

const numeros = [10, 20, 30, 40, 50];

console.log("\nEJEMPLO N°1: Uso de indexOf");
let indiceDeUnValorBuscadoA = numeros.indexOf(30);
console.log(indiceDeUnValorBuscadoA);   // Imprime 2 (significa que lo encontro)

console.log("\nEJEMPLO N°2: Uso de indexOf");
let indiceDeUnValorBuscadoB = numeros.indexOf(100);
console.log(indiceDeUnValorBuscadoB);   // Imprime -1 (significa que no lo encontro)
