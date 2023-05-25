/*
    El método concat() se usa para unir dos o más arrays. Este método no cambia
    los arrays existentes, sino que devuelve un nuevo array.
    Fuente: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
*/

const numerosA = [10, 50, 30];
const numerosB = [500, 100, 200];
console.log(numerosA);
console.log(numerosB);

const numerosConcatenados = numerosA.concat(numerosB);

console.log("\nEJEMPLO: Uso de concat");
console.log(numerosConcatenados);