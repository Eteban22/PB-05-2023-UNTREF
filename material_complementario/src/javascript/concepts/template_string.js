/*
    Template literal es una cadena literal que habilita el uso de expresiones
    incrustadas. Con ella, es posible utilizar cadenas de caracteres de más de
    una línea, y funcionalidades de interpolación de cadenas de caracteres.
    Fuente: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals
*/

let a = 8;
let b = 3;

// a). Uso de Template Literals
let resultadoDeSumar = `El resultado de sumar ${a} más ${b} es ${a + b}`;
let resultadoDeRestar = `El resultado de restar ${a} menos ${b} es ${a - b}`;

// b). Se imprime por pantalla por medio de console.log, el resultado de
// los template literals.
console.log(resultadoDeSumar);
console.log(resultadoDeRestar);