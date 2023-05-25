/*
    El método filter() crea un nuevo array con todos los elementos que cumplan
    la condición implementada por la función dada.
    Fuente: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
*/

const numeros = [11, 20, 32, 15, 8, 9, 24];
const numerosPares = numeros.filter((valor) => valor % 2 === 0);

console.log("EJEMPLO 1: Uso de filter");
console.log(numerosPares);