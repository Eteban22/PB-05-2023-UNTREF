/*
    El operador spread nos permite copiar rápidamente todo o parte de un
    array u objeto existente en otra array u objeto.
    Fuente: https://www.w3schools.com/react/react_es6_spread.asp
*/

// EJEMPLO N°1: Uso con Arrays
const numerosEnteros = [1, 2, 3];
const numerosDecimales = [0.5, 2.5];

// a). Se combina en un solo array los valores de los arrays "numerosEnteros",
// "numerosDecimales" y un valor literal.
const numeros = [...numerosEnteros, ...numerosDecimales, 10];

// Nota: Esto último, también, se podría hacer con la instrucción "concat":
// const numeros = numerosEnteros.concat(numerosDecimales, 10);
// Más info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

// b). Se imprime por pantalla por medio de console.log, el resultado del
// nuevo array "numeros".
console.log("EJEMPLO N°1: Uso con Arrays");
console.log(numeros);

// EJEMPLO N°2: Uso con objects
const usuario = {
    nombre: "Pablo",
    contrasenia: "123456"
};

const direccion = {
    calle: "Av. Siempre Viva",
    numero: "200"
};

// a). Se combina en un solo objeto las propiedades de los objetos "usuario",
// "direccion" y una nueva propiedad literal.
const persona = { ...usuario, ...direccion, pais: "Argentina" };

// Nota: Esto último, también, se podría hacer con la instrucción Object.assign:
// const persona = Object.assign(usuario, direccion, {pais: "Argentina"});
// Más info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

// b). Se imprime por pantalla por medio de console.log, el resultado del
// nuevo objeto "persona".
console.log("EJEMPLO N°2: Uso con objects");
console.log(persona);