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

console.log(demoTextoA, demoTextoB, demoBooleano);  // Imprime Hola "" false
console.log(demoNumeroA, demoNumeroB, demoNumeroC, demoNumeroD, demoNumeroE); // Imprime 10 0 300 NaN 500