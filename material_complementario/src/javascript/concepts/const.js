// Tipos de datos:
const VALOR_NUMBER_ENTERO = 10;
const VALOR_NUMBER_DECIMAL = 5.75;
const VALOR_STRING = "Letras, numeros 123 y símbolos @#&";
const VALOR_BOOLEAN = true;

console.log("\nEJEMPLO N°1: Constantes Inmutables");
console.log(VALOR_NUMBER_ENTERO);
console.log(VALOR_NUMBER_DECIMAL);
console.log(VALOR_STRING);
console.log(VALOR_BOOLEAN);

// Las constantes no se pueden modificar en "tiempo de ejecución"
// VALOR_NUMBER_ENTERO = 15; // Descomentar para probar
// VALOR_STRING = "Chau País"; // Descomentar para probar

// Al intentar modificar el valor de una constante nos dará un error
// en tiempo de ejecución: TypeError: Assignment to constant variable.

// Cabe aclarar que, generalmente las funciones expresadas, objetos y
// arrays, se declaran con const con el fín de asegurar su declaración.
// En el caso de los objetos y arrays, se permite la modificación de
// sus miembros y/o elementos.

const numeros = [10, 20, 30];
numeros.shift();    // Quita el primer elemento
numeros.push(100);  // Agrega un elemento al final del array

const persona = {
    nombre: "Juan",
    apellido: "Molina",
    edad: 21
};
persona.nombre = "Lorena";

console.log("\nEJEMPLO N°2: Constantes Mutables");
console.log(numeros);
console.log(persona);