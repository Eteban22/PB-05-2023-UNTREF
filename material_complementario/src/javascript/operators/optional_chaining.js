/*
    El operador Optional Chaining ?. permite leer el valor de
    una propiedad ubicada dentro de una cadena de objetos conectados
    sin tener que validar expresamente que cada referencia en la cadena
    sea válida.
    Fuente: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
*/

// Declaración e instanciación o creación de un objeto persona.
const persona = {
    nombre: "Juan",
    numerosPreferidos: {
        a: 7,
        b: 10
    }
};

console.log(persona.numerosPreferidos?.a);  // Imprime 7

console.log(persona.coloresPreferidos?.c);  // Imprime undefined

// TypeError: Cannot read properties of undefined.
// console.log(persona.coloresPreferidos.c);  // Descomentar para probar