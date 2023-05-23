/*
    El método slice() devuelve una copia de una parte del array dentro de un
    nuevo array empezando por inicio hasta fin (fin no incluido). El array
    original no se modificará.
    Fuente: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
*/

const numerosA = [10, 50, 30, 5, 20];
console.log(numerosA);

// Crea un nuevo array y le agrega los elementos del array original
// a partir del índice 2.
const numerosB = numerosA.slice(2);       // Imprime [30, 5, 20]

// Crea un nuevo array y le agrega los elementos del array original
// a partir del indice 1 hasta el índice 3.
const numerosC = numerosA.slice(1, 3);    // Imprime [50, 30]

console.log("\nEJEMPLO: Uso de slice");
console.log(numerosB);
console.log(numerosC);