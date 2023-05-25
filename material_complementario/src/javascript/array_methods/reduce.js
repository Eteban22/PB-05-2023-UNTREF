/*
    El método reduce() ejecuta una función reductora sobre cada
    elemento de un array, devolviendo como resultado un único valor.
    Fuente: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
*/

const numeros = [1, 2, 8, 4, 5, 15];
const valorInicial = 100;
const sumatoria = numeros.reduce((acumulador, valor) => acumulador + valor, valorInicial);

console.log("EJEMPLO 1: Uso de reduce");
console.log(sumatoria);

const sumatoriaDeValoresPares = numeros.reduce((acumulador, valor) => {
    if (valor % 2 === 0) {
        return acumulador + valor;
    }

    return acumulador;
}, valorInicial);

console.log("EJEMPLO 2: Uso de reduce con condicional");
console.log(sumatoriaDeValoresPares);