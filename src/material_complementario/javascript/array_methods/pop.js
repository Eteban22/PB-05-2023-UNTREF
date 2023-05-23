/*
    El método pop() elimina el último elemento de un array y lo devuelve. Este
    método cambia la longitud del array.
    Fuente: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
*/

const numeros = [10, 50, 30, 5, 20];
console.log(numeros);

let elementoEliminado = numeros.pop();

console.log("\nEJEMPLO: Uso de pop");
console.log(`El valor del elemento eliminado es ${elementoEliminado}`);
console.log(numeros);