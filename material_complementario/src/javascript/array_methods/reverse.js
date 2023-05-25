/*
    El método reverse() invierte el orden de los elementos de un array in place.
    El primer elemento pasa a ser el último y el último pasa a ser el primero.
    Fuente: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
*/

const numeros = [10, 50, 30, 5, 20];
console.log(numeros);

numeros.reverse();

console.log("\nEJEMPLO: Uso de reverse");
console.log(numeros);