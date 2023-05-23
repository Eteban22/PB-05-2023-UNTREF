/*
    El operador nullish coalescing ?? es un operador lógico que devuelve
    su operando del lado derecho cuando su operando del lado izquierdo
    es nulo o indefinido y, de lo contrario, devuelve su operando del
    lado izquierdo.
    Fuente: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing
*/

let textoA = "Hola";
let textoB = "";
let booleano = false;
let numeroA = 10;
let numeroB = 0;
let numeroC = null;
let numeroD = 2 * 'a';
let numeroE;

// Se asigna un valor por defecto cuando la variable sea null o undefined
let demoTextoA = textoA ?? 100;
let demoTextoB = textoB ?? 100;
let demoBooleano = booleano ?? 100;
let demoNumeroA = numeroA ?? 100;
let demoNumeroB = numeroB ?? 200;
let demoNumeroC = numeroC ?? 300;
let demoNumeroD = numeroD ?? 400;
let demoNumeroE = numeroE ?? 500;

console.log("\nEJEMPLO N°1: Uso de nullish coalescing ??");
console.log(demoTextoA, demoTextoB, demoBooleano);
console.log(demoNumeroA, demoNumeroB, demoNumeroC, demoNumeroD, demoNumeroE);

/*
    Existe un forma similar de hacer esto empleando el operador || pero
    podría generar un resultado falsey.

    Un valor falsey (a veces escrito falsey) es un valor que se considera
    falso cuando se encuentra en un contexto booleano.
    Fuente: https://developer.mozilla.org/en-US/docs/Glossary/Falsy
*/

// Se asigna un valor por defecto cuando la variable sea null o undefined
let demo2TextoA = textoA || 100;
let demo2TextoB = textoB || 100;
let demo2Booleano = booleano || 100;
let demo2NumeroA = numeroA || 100;
let demo2NumeroB = numeroB || 200;
let demo2NumeroC = numeroC || 300;
let demo2NumeroD = numeroD || 400;
let demo2NumeroE = numeroE || 500;

console.log("\nEJEMPLO N°2: Uso de ||");
console.log(demo2TextoA, demo2TextoB, demo2Booleano);
console.log(demo2NumeroA, demo2NumeroB, demo2NumeroC, demo2NumeroD, demo2NumeroE);