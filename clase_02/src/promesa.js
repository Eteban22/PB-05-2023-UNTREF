function obtenerUnNumeroAleatorioParEntre1y10() {
    console.log("Procesando...");

    return new Promise((resolve, reject) => {
        const numeroAleatorioEntre1y10 = Math.floor(Math.random() * 10);

        setTimeout(() => {
            if (numeroAleatorioEntre1y10 % 2 === 0) {
                resolve(numeroAleatorioEntre1y10);
            } else {
                // Es un buena práctica manejar los errores con Error()
                reject(new Error(`Error al obtener el número aleatorio. ${numeroAleatorioEntre1y10}`));
            }
        }, 1000);
    });
}

obtenerUnNumeroAleatorioParEntre1y10()
    .then((result) => console.log(result))
    .catch((error) => console.log(error.message))
    .finally(() => console.log("Proceso terminado"));

// El siguiente consolo.log está mal definido. Esto imprimiría
// Promise { <pending> } y no nos arrojaría un error.
// console.log(obtenerDatos());