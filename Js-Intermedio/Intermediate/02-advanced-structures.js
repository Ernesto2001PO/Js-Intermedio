// Estructuras avanzadas

//Arrays avanzadas

// Metodos Funcionales

// for Each

let numbers = [1, 2, 3, 4, 5];

numbers.forEach((element) => console.log(element));

// map aplica una funcion para modificar cada uno de los elementos

let doubled = numbers.map((element) => element * 2);
console.log(doubled);

// filter crea un nuevo array segun la condicion que nosotros le apliquemos

let pares = numbers.filter((element) => element % 2 === 0);
console.log(pares)


// reduce te da el resultado previo y el actual a un unico valor 

let suma = numbers.reduce((result, current)=> result + current, 0)
console.log(suma)


//flat 

let nestedArray = [1,[2,[3,[4]]]]
nestedArray.flat()


//flat Map

let phrases= ['Hola mundo' , 'Adios mundo']
let adios = phrases.flatMap(phrase => phrase.split(' '))
console.log(adios)

// Ordenacion 
// let words_unsorted = ['b','a','c','e','d']
let unsorted =[3,4,1,6,10]
let sorted = unsorted.sort((a,b)=> a-b)
console.log(sorted)


// reverse 
console.log(sorted.reverse())

// -Busquedas

// includes

console.log(sorted.includes(4))

// find 
let par = sorted.find(element => element%2===0)
console.log(par)


// findIndex
sorted = [3,7,11]
let firstEvenIndex = sorted.findIndex(element => element%2===0)

console.log(firstEvenIndex) // saca -1 si no encuentra el indice real 


// Sets avanzados 

// -Operaciones

// Eliminar duplicados 

const numbersArray = [1,2,3,4,5,6,6]

const numerSet  = [...new Set(numbersArray)]
console.log(numerSet)


// Union 

const setA = new Set([1,2,3])
const setB = new Set([2,3,4,5])


const union = new Set([...setA , ...setB])
console.log(union)

// Interseccion 

const interseccion =  new Set([...setA].filter(element => setB.has(element)))
console.log(interseccion)

// Diferencia 

const diferencia = new Set([...setA].filter(element => !setB.has(element)))

// Iteracion

// forEach SOLO PARA ARRAYS 

//setA.forEach()


// Maps Avanzados 

let myMap = new Map([
    ['name','ernesto'],
    ['age', 37]
])

console.log(myMap)

myMap.forEach((value, key )=> console.log(`${key} : ${value}`))

// Conversion 

// Mapa a Array

const arrayFromMap = Array.from(myMap)

console.log(arrayFromMap)

// Mapa a Objeto

const objectFromMap = Object.fromEntries(myMap)
console.log(objectFromMap)

// Objeto a Mapa

const mapFromObject = new Map(Object.entries(objectFromMap))
console.log(mapFromObject)
