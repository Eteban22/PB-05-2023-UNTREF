function incrementarEn2(numero) {
    return numero + 2;
}

function incrementarNumeros(array, callback) {
    for (let i = 0; i < array.length; i++) {
        array[i] = callback(array[i]);
    }

    return array;
}

console.log(incrementarNumeros([10, 20, 30], incrementarEn2));