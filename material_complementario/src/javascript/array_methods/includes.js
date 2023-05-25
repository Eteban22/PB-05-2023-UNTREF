/*
    El método includes() determina si una matriz incluye un determinado elemento,
    devuelve true o false según corresponda.
    Fuente: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

    Dato extra: Este método diferencia entre minúsculas y mayúsculas.
*/

const numeros = [10, 20, 30, 40, 50];

console.log("EJEMPLO: Uso de includes");
let numerosIncluyeEsteValor = numeros.includes(30);
console.log(numerosIncluyeEsteValor);   // Imprime true (significa que lo incluye)