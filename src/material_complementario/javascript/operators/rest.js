/*
    El operador rest nos permiten representar un número indefinido de
    argumentos como un array.
    Fuente: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/rest_parameters
*/

// EJEMPLO N°1: Uso de rest como parámetro
// a). Se declara una función que permite multiples parámetros de
// cantidad dinámica.
function sumar(...rest) {
    let sumatoria = 0;

    for (let i = 0; i < rest.length; i++) {
        sumatoria += rest[i];
    }

    return sumatoria;
}

// b). Se imprime por pantalla por medio de console.log, el resultado
// de cada variable.
console.log("EJEMPLO N°1: Uso de rest como parámetro dinámico");
console.log(sumar(15, 25));
console.log(sumar(100, 200, 300, 50));

// EJEMPLO N°2: Uso de rest con destructuring
const numeros = [10, 20, 30, 40, 50];

// a). Se declaran las variables y asignan los valores que son extraidos
// del array. Se debe tener en cuenta, el orden de las variables
// y el orden de elementos. La extracción arranca por el indice 0.
// ...rest representa al resto de elementos (no referenciados) del array.
let [numero10, numero20, ...rest] = numeros;

// b). Se imprime por pantalla por medio de console.log, el resultado
// de cada variable.
console.log("EJEMPLO N°2: Uso de rest con destructuring");
console.log(numero10);
console.log(numero20);
console.log(rest);