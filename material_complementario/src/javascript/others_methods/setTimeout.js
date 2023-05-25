/*
    El método global setTimeout() establece un temporizador que ejecuta
    una función o una pieza de código específica una vez que expira el
    temporizador.
    Fuente: https://developer.mozilla.org/es/docs/Web/API/setTimeout
*/

console.log("Esperando 2 segundos...");

const mensaje = "Espera terminada";

setTimeout(() => {
    console.log(mensaje);
}, 2000, mensaje);