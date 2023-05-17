/*
    Funciones más frecuentes de la clase Math:

    Math.abs(x)         Devuelve el valor absoluto de x.
    Math.sqrt(x)        Devuelve la raíz cúbica de x.
    Math.ceil(x)        Devuelve x, redondeado hacia arriba al entero más cercano.
    Math.E              Devuelve el número de Euler (aprox. 2,718).
    Math.floor(x)       Devuelve x, redondeado hacia abajo al entero más cercano.
    Math.max(x1,x2,...) Devuelve el número con el valor más alto.
    Math.min(x1,x2,...) Devuelve el número con el valor más bajo.
    Math.PI             Devuelve PI (aprox. 3,14).
    Math.pow(x, y)      Devuelve el valor de x elevado a y.
    Math.random()       Devuelve un número aleatorio.
    Math.round(x)       Redondea x al entero más cercano.
    Math.sign(x)        Devuelve el signo de un número (comprueba si es positivo, negativo o cero).
    Math.sqrt(x)        Devuelve la raíz cuadrada de x.
    Math.trunc(x)       Devuelve la parte entera de un número x.
*/

console.log(Math.abs(-15)); // 15
console.log(Math.sqrt(9)); // 3
console.log(Math.ceil(12.50)); // 13
console.log(Math.E); // 2.718281828459045
console.log(Math.floor(12.50)); // 12
console.log(Math.max(10, 17, 6)); // 17
console.log(Math.min(10, 17, 6)); // 6
console.log(Math.PI); // 3.141592653589793
console.log(Math.floor(Math.random() * 5) + 1); // Números aleatorios entre 0 y 5
console.log(Math.round(9.77)); // 10
console.log(Math.sign(7)); // 1 es positivo, -1 es negativo, 0 es cero
console.log(Math.sqrt(3)); // 1.7320508075688772
console.log(Math.trunc(187.557)); //187
//console.log(Math.pow(2, 3)); // 8