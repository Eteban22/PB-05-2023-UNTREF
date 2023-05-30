const http = require("http");

const PORT = 3000;
const HOST = "localhost";

const coches = [
    { id: 1, marca: "Ford", modelo: "Fiesta", anio: 2020 },
    { id: 2, marca: "Chevrolet", modelo: "S10", anio: 2013 },
    { id: 3, marca: "Fiat", modelo: "Palio", anio: 2022 }
];

const server = http.createServer((request, response) => {
    const url = new URL(request.url, `http://${request.headers.host}`);

    if (url.pathname === "/ejemplo/text") {
        response.writeHead(200, { "Content-Type": "text/plain; charset=utf8" });
        response.end("Bienvenidos. Esto es una demostración");
    } else if (url.pathname === "/ejemplo/html") {
        response.writeHead(200, { "Content-Type": "text/html; charset=utf8" });
        response.end("<div><h1>Bienvenidos</h1><p>Esto es una demostración</p></div>");
    } else if (url.pathname === "/ejemplo/json") {
        response.writeHead(200, { "Content-Type": "application/json" });
        response.end(JSON.stringify(coches, null, "\t"));
    } else {
        response.writeHead(404, { "Content-Type": "text/html; charset=utf8" });
        response.end(`<h1>${http.STATUS_CODES[404]}</h1><p>Probando el módulo HTTP</p>`);
    }
});

server.on('request', (request) => {
    if (request.url === "/ejemplo/evento") {
        console.log(request.url);
    }
});

server.listen(PORT, HOST, () => console.log(`run en http://${HOST}:${PORT}/ejemplo`));