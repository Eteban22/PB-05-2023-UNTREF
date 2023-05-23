/*
    El método map() crea un nuevo array con los resultados de la llamada a la función
    indicada aplicados a cada uno de sus elementos.
    Fuente: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map
*/

const numeros = [11, 20, 32, 15, 8, 9, 24];
const numerosTriplicados = numeros.map((valor) => valor * 3);

console.log("EJEMPLO: Uso de map");
console.log(numerosTriplicados);