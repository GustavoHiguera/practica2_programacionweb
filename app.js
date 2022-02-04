/*function greet() {
    console.log(`Hello`);

}
*/

let greet = () => console.log(`Hola`);
//refactor de greet versión ES6, usando una arrow function.

function logGreeting(fn) {
    fn();
}
logGreeting(greet);


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


