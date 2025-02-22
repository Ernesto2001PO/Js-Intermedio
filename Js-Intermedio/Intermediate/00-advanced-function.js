// Funciones avanzadas

// Ciudadanos de primera clase

const greet = function (name) {
  console.log(`¡Hola, ${name}!`);
};

greet("Ernesto");

function processGreeting(greetFunction, name) {
  greetFunction(name);
}

processGreeting(greet, "Ernesto");

function returnGreeting() {
  return greet();
}

// Arrow functions avanzadas

//- Retorno implicito
const multiply = (a, b) => a * b;
console.log(multiply(2, 4));

// -this lexico

const name = "luca";

const handler = {
  name: "Brais",
  greeting: function () {
    console.log(`Hola, ${this.name}`);
  },
  arrowGreeting: () => {
    console.log(`Hola, ${this.name}`);
  },
};

handler.greeting();
handler.arrowGreeting();

//  IIFE (Expresion de funcion invocada inmediatamente)

(function () {
  console.log("IFFE CLASICO");
})();

(() => {
  console.log("IFFE arrow CLASICO");
})();

// Parametros Rest (...)

function sum(...numbers) {
  let result = 0;

  for (let number of numbers) {
    result += number;
  }
  return result;
}

console.log(sum(1, 2, 3, 4, 5));

// Operador Spread(...)

const numbers = [1, 2, 3];

function sumWithSpread(a, b, c) {
  return a + b + c;
}

console.log(sumWithSpread(1, 2, 3)); // Sin spread

console.log(sumWithSpread(...numbers));

//Clausuras se encapsulan datos

// Patron de diseno SINGLETON

function createCouter() {
  let counter = 0;
  return function () {
    counter++;
    console.log(`Contador:  ${counter}`);
  };
}

const counter = createCouter();
counter();
counter();
counter();

const counter2 = createCouter();
counter2();

//RECURSIVIDAD
//5*4*3*2*1

function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5));

// Funciones parciales

function curry(a) {
  return function (b) {
    return function (c) {
      return sum(a, b, c);
    };
  };
}

//  Callbacks

function processData(data,callback){
  const result = (sum(...data))
  callback(result)

}

function processResult(result){
  console.log(result)
}
function processResult2(result2){
  console.log(`Mi resultado es: ${result2}`)
}

processData([1,2,3],processResult)
processData([1,2,3],processResult2)



