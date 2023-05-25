/*
    El destructuring es la desestructuración es una expresión de JavaScript
    que permite desempacar valores de arreglos o propiedades de objetos en
    distintas variables.
    Fuente: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
*/

// EJEMPLO N°1: Uso con variables
let numeroA;
let numeroB;

// a). Asigna un valor a cada variable en relación al orden establecido
[numeroA, numeroB] = [3, 6];

// b). Se imprime por pantalla por medio de console.log, el resultado
// de cada variable.
console.log("EJEMPLO N°1: Uso con variables");
console.log(numeroA);
console.log(numeroB);

// EJEMPLO N°2: Uso con Arrays
const numeros = [10, 20, 30, 40, 50];

// a). Declara las variable y les asigna los valores que son extraidos
// del array. Se debe tener en cuenta, el orden de las variables
// y el orden de elementos. La extracción arranca por el indice 0.
let [numero10, numero20, numero30] = numeros;

// b). Se imprime por pantalla por medio de console.log, el resultado
// de cada variable.
console.log("EJEMPLO N°2: Uso con Arrays");
console.log(numero10);
console.log(numero20);
console.log(numero30);

// EJEMPLO N°3: Uso con Objects
const persona = {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 21,
    esMayorDeEdad: true
};

// a). Declara las variable y les asigna los valores que son extraidos
// del objeto. Se debe tener en cuenta, el orden de las variables
// y los nombres de las propiedades.
let { nombre, esMayorDeEdad } = persona;

// b). Se imprime por pantalla por medio de console.log, el resultado
// de cada variable.
console.log("EJEMPLO N°3: Uso con Objects");
console.log(nombre);
console.log(esMayorDeEdad);