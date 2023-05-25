/*
    Una función de callback es una función que se pasa a otra función como
    un argumento, que luego se invoca dentro de la función externa para
    completar algún tipo de rutina o acción.
    Fuente: https://developer.mozilla.org/es/docs/Glossary/Callback_function
*/

function incrementarEn2(numero) {
    return numero + 2;
}

function incrementarNumeros(array, callback) {
    for (let i = 0; i < array.length; i++) {
        array[i] = callback(array[i]);
    }

    return array;
}

console.log("\nEJEMPLO: Uso de callback");
console.log(incrementarNumeros([10, 20, 30], incrementarEn2));