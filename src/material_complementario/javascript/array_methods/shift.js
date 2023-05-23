/*
    El método shift() elimina el primer elemento del array y lo retorna. Este
    método modifica la longitud del array.
    Fuente: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
*/

const numeros = [10, 50, 30, 5, 20];
console.log(numeros);

let elementoEliminado = numeros.shift();

console.log("\nEJEMPLO: Uso de shift");
console.log(`El valor del elemento eliminado es ${elementoEliminado}`);
console.log(numeros);