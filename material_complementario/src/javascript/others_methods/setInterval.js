/*
    El método setInterval(), llama a una función o ejecuta un fragmento
    de código de forma reiterada, con un retardo de tiempo fijo entre
    cada llamada.

    El método clearInterval(), cancela una acción reiterativa que se
    inició mediante una llamada a setInterval().

    Fuente: https://developer.mozilla.org/es/docs/Web/API/setInterval
    */

let contadorDeSegundos = 0;

const cronometro = setInterval(() => {
    contadorDeSegundos++;
    console.log(contadorDeSegundos);

    if (contadorDeSegundos === 3) {
        clearInterval(cronometro); // Detiene el interval a los 3 seg.
    }
}, 1000, contadorDeSegundos);