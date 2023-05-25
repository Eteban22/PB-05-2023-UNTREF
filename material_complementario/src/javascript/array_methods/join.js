/*
    El método join() une todos los elementos de una matriz (un
    objeto similar a una matriz) en una cadena y devuelve esta
    cadena.
    Fuente: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/join
*/

const palabras = ["La", "programación", "Backend", "es", "lo", "más"];

console.log("EJEMPLO: Uso de join");
const texto = palabras.join(" ");
console.log(texto);   // Imprime "La programación Backend es lo más"