/*
    El método splice() cambia el contenido de un array eliminando elementos
    existentes y/o agregando nuevos elementos.
    Fuente: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
*/

const letras = ["A", "B", "C", "D", "E"];
console.log(letras);

// En el mismo array, agrega un nuevo elemento en el índice 2
letras.splice(2, 0, "Hola");
console.log("\nEJEMPLO N°1: Uso de splice");
console.log(letras);    // Imprime ['A', 'B', 'Hola', 'C', 'D', 'E']

// En el mismo array, elimina el elemento del índice 3
letras.splice(3, 1);
console.log("\nEJEMPLO N°2: Uso de splice");
console.log(letras);    // Imprime ['A', 'B', 'Hola', 'D', 'E']
