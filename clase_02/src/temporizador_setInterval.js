let contadorDeSegundos = 0;

const cronometro = setInterval(() => {
    contadorDeSegundos++;
    console.log(contadorDeSegundos);

    if (contadorDeSegundos === 3) {
        clearInterval(cronometro); // Detiene el interval a los 3 seg.
    }
}, 1000, contadorDeSegundos);