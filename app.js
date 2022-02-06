/*function greet() {
    console.log(`Hello`);

}
*/

let greet = () => console.log(`Hola`);
//refactor de greet versión ES6, usando una arrow function.

/*
function logGreeting(fn) {
    fn();
}
logGreeting(greet);`
*/ //Versión inicial de logGreeting, sin las ventajas de ES6.

let logGreeting = (fn) => fn();
logGreeting(greet);
//refactor de logGreeting, con una función flecha y de acuerdo a
//las especificaciones de ES6.

/*
let greetMe = function () {
    console.log('Hello from the function expression');
}
greetMe();
*/ //Versión inicial de la función greetMe sin las ventajas de ES6.

let greetMe = () => console.log(`Hello from the function expression`);
greetMe();
//refactor de greetMe, con una función flecha, con backticks en lugar de
//las comillas simples y sin curly braces porque solo es una línea de código.

let x=2;

console.log('Hola' + x + 'veces');
//Sin usar backticks.

console.log(`Hola ${x} veces
multilinea`);
//Usando backticks, llamando la función con el signo de pesos '$'
//Además, es multilinea y es más eficiente.

let cuadrado = (x) => x * x;

console.log(`${cuadrado(10)}`);


logGreeting(function(){console.log(`Hola`)});
//Versión 1.

logGreeting( () => {console.log(`Hola`);})
//Versión 2, en ES6.




