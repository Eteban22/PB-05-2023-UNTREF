/*
    El método slice() extrae una sección de una cadena y devuelve
    una cadena nueva.
    Fuente: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/slice
*/

const textoA = "La programación Backend es lo más";

// Crea un nuevo texto y le agrega los caracteres del texto original
// a partir del índice 3.
const textoB = textoA.slice(3);     // Imprime "programación Backend es lo más"

// Crea un nuevo texto y le agrega los caracteres del texto original
// a partir del índice 3 hasta el índice 15.
const textoC = textoA.slice(3, 15); // Imprime "programación"

console.log("\nEJEMPLO: Uso de slice");
console.log(textoB);
console.log(textoC);