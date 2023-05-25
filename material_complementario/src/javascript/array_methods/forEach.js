/*
    El método forEach() ejecuta la función indicada una vez por
    cada elemento del array.
    Fuente: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

    Cabe mencionar que no es posible detener un bucle forEach()
    de forma anticipada utilizando una sentencia break o continue.
    Esto se debe a que la función forEach() está diseñada para
    ejecutar una función de devolución de llamada para cada
    elemento en un array y no tiene una forma integrada de detener
    la iteración. Sin embargo, se puede lograr un comportamiento
    similar, arrojando una excepción dentro del forEach() y que
    además, este último debe estar dentro de un bloque try/catch.
*/

const numeros = [10, 20, 30, 15];

console.log("EJEMPLO 1: Uso de forEach");
numeros.forEach((valor, indice) => {
    console.log(`Valor: ${valor} - Indice: ${indice}`);
});

console.log("EJEMPLO 2: Uso de forEach con escape");
try {
    numeros.forEach((valor, indice) => {
        if (valor < 25) {
            console.log(`Valor: ${valor} - Indice: ${indice}`);
        } else {
            throw new Error("El número es mayor a 25");
        }
    });
} catch (error) { /* empty */ }