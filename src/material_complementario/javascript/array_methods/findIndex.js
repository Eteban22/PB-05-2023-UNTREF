/*
    El método findIndex() devuelve el índice del primer elemento de
    un array que cumpla con la concición de la función callback. En
    el caso contrario, devuelve -1.
    Fuente: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex

    Dato extra: Este método diferencia entre minúsculas y mayúsculas.
    Es sumamente útil en los arrays de objetos.
*/

const coches = [
    { id: 1, marca: "Ford", modelo: "Fiesta" },
    { id: 2, marca: "Chevrolet", modelo: "S10" },
    { id: 3, marca: "Fiat", modelo: "Palio" }
];

console.log("\nEJEMPLO N°1: Uso de findIndex con objetos");
let indiceDeUnObjetoBuscado = coches.findIndex((elemento) => elemento.marca === "Fiat");
console.log(indiceDeUnObjetoBuscado);   // Imprime 2 (es el índice)

const numeros = [10, 20, 30, 40, 50];

console.log("\nEJEMPLO N°2: Uso de indexOf con primitivos");
let indiceDeUnValorBuscado = numeros.findIndex((elemento) => elemento === 40);
console.log(indiceDeUnValorBuscado);   // Imprime 3 (significa que lo encontro)