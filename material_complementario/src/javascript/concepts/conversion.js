/*
    En programación es posible transformar el tipo de dato de una
    variable u objeto en otro diferente al original con el que fue
    declarado. Este proceso se denomina "conversión".
*/

let numeroDecimalAEntero = Number.parseInt(15.77);
console.log("\nEJEMPLO N°1: Convertir de Number decimal a Number entero");
console.log(numeroDecimalAEntero, typeof numeroDecimalAEntero); // 15 number

let numeroStringAEntero1 = Number.parseInt("10.00");
console.log("\nEJEMPLO N°2: Convertir de String a Number entero");
console.log(numeroStringAEntero1, typeof numeroStringAEntero1); // 10 number

let numeroEnteroADecimal = Number.parseFloat(17);
console.log("\nEJEMPLO N°3: Convertir de Number entero a Number decimal");
console.log(numeroEnteroADecimal, typeof numeroEnteroADecimal); // 17 number

let numeroStringADecimal = Number.parseFloat("18.33");
console.log("\nEJEMPLO N°4: Convertir de String a Number decimal");
console.log(numeroStringADecimal, typeof numeroStringADecimal); // 18.33 number

let valorNumerico = 1578;
let numeroEnteroAString = valorNumerico.toString();
console.log("\nEJEMPLO N°5: Convertir de Number a String");
console.log(numeroEnteroAString, typeof numeroEnteroAString);   // 1578 string

let valorBooleano = true;
let booleanAString = valorBooleano.toString();
console.log("\nEJEMPLO N°6: Convertir de Boolean a String");
console.log(booleanAString, typeof booleanAString);             // true string

let fechaString = "2023-05-20";
let stringADate = new Date(fechaString);
console.log("\nEJEMPLO N°7: Convertir de fecha String a Date");
console.log(stringADate, typeof stringADate);                   // 2023-05-20T00:00:00.000Z object

let fechaDate = new Date(2023, 5, 15, 20, 30, 0);
let dateAFechaHoraString = fechaDate.toLocaleString();
let dateAFechaString = fechaDate.toLocaleDateString();
let dateAHoraString = fechaDate.toLocaleTimeString();
let dateADiaString = fechaDate.toLocaleDateString("es-ES", { weekday: 'long' });
console.log("\nEJEMPLO N°8: Convertir de Date a String");
console.log(dateAFechaHoraString, typeof dateAFechaHoraString); // 15/6/2023, 20:30:00 string
console.log(dateAFechaString, typeof dateAFechaString);         // 15/6/2023 string
console.log(dateAHoraString, typeof dateAHoraString);           // 20:30:00 string
console.log(dateADiaString, typeof dateADiaString);             // jueves string