/*
    El método unshift() agrega uno o más elementos al inicio del array, y
    devuelve la nueva longitud del array.
    Fuente: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
*/

const numeros = [10, 50, 30, 5, 20];
console.log(numeros);

numeros.unshift(75);

console.log("\nEJEMPLO: Uso de unshift");
console.log(numeros);