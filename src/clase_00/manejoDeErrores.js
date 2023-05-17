let dividiendo = 10;
let divisor = 0;

try {
    // funcionInexistente(); // Descomentar para probar

    if (divisor !== 0) {
        console.log(dividiendo / divisor);
    } else {
        throw new Error("No se puede dividir por cero");
    }
} catch (error) {
    console.error(error.message);
} finally {
    let numeroA = 5;
    let numeroB = 3;
    let resultado = numeroA + numeroB;
    console.log(`Este bloque siempre se ejecuta. La suma de ${numeroA} y ${numeroB} es ${resultado}`);
}