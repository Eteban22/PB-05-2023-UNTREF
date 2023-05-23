/*
    El scope. Es el contexto actual de ejecución, es decir, es el
    contexto en el que los valores y las expresiones son "visibles"
    o pueden ser referenciados. Si una variable u otra expresión
    no está "en el scope actual", entonces no está disponible para
    su uso.

    Los scope también se pueden superponer en una jerarquía, de modo
    que los scope secundarios tengan acceso a los ámbitos primarios,
    pero no al revés.
*/

let a = 10;

// Scope en una estructura condicional, también, aplica para un
// switch, while, for, entre otros:
if (a > 5) {
    let b = 5;
    a += b;
}

console.log("\nEJEMPLO N°1: Scope en una estructura condicional");
console.log(a); // Imprime 15

// La variable "b" tiene un scope local y es por eso que
// no se reconoce en un scope más global(Descomentar para probar).
// console.log(b); // ReferenceError: b is not defined

// Scope en una función:
function sumar(numeroA, numeroB) {
    let resultado = numeroA + numeroB;
    return resultado;
}

console.log("\nEJEMPLO N°2: Scope en una función");
console.log(sumar(3, 2)); // Imprime 5

// La variable "resultado" tiene un scope local y es por eso que
// no se reconoce en un scope más global(Descomentar para probar).
// console.log(resultado); // ReferenceError: resultado is not defined