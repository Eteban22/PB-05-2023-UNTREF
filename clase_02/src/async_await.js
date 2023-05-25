function obtenerUnNumeroAleatorioParEntre1y10ConDemora() {
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

async function obtenerUnNumeroAleatorioParEntre1y10() {
    console.log("Procesando...");

    // Se recomienda el uso de try-catch para controlar un posible error
    try {
        let datos = await obtenerUnNumeroAleatorioParEntre1y10ConDemora();
        return datos;
    } catch (error) {
        return error.message;
    }
}

const imprimirDatos = async () => console.log(await obtenerUnNumeroAleatorioParEntre1y10());

imprimirDatos();

// El siguiente consolo.log está mal definido. Esto imprimiría
// Promise { <pending> } y no nos arrojaría un error.
// console.log(obtenerUnNumeroAleatorioParEntre1y10());
