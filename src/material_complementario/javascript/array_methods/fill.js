/*
    El método fill() cambia todos los elementos en un arreglo por un
    valor estático, desde el índice start (por defecto 0) hasta el
    índice end (por defecto array.length). Devuelve el arreglo modificado.
    Fuente: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
*/

const numerosA = [10, 20, 30, 40, 50];
const numerosReemplazadosCon100 = numerosA.fill(100, 2);

console.log("EJEMPLO N°1: Uso de fill");
console.log(numerosReemplazadosCon100);

const numerosB = [10, 20, 30, 40, 50];
const numerosReemplazadosCon500 = numerosB.fill(500, 1, 3);

console.log("EJEMPLO N°2: Uso de fill");
console.log(numerosReemplazadosCon500);