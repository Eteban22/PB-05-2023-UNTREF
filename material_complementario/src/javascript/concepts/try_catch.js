/*
    La declaración try...catch señala un bloque de instrucciones a
    intentar (try), y especifica una respuesta si se produce una
    excepción (catch).
    Fuente: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/try...catch
*/

let dividiendo = 10;
let divisor = 0;

try {
    // funcionInexistente(); // Descomentar para probar

    if (divisor !== 0) {
        console.log(dividiendo / divisor);
    } else {
        // Lanza el error
        throw new Error("No se puede dividir por cero");
    }
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Este bloque siempre se ejecuta.");
}