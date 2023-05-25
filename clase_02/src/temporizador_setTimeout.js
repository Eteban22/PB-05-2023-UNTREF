console.log("Esperando 2 segundos...");

const mensaje = "Espera terminada";

// eslint-disable-next-line no-unused-vars
const temporizador = setTimeout(() => {
    console.log(mensaje);
}, 2000, mensaje);

//clearTimeout(temporizador); // Detiene el timeOut a los 3 seg.