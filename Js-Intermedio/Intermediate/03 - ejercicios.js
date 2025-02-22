
// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección

let miArray = ["Ernesto","Natalia","Sofia","Lucia","Pedro"].filter(element => !element.endsWith('a'));
console.log(miArray)

let arrayReduce = miArray.reduce((resultado,actual) =>{
    return resultado + actual + "s";
},);

console.log(arrayReduce)



let myMap = new Map([
    ['name','ernesto'],
    ['age', 37]
])


let cambioAMap = new Map(miArray.map((valor,indice)=>[indice,valor]))

console.log(cambioAMap)



// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares


let array = [2,3,4,5,6,7]

let cubos = array.map(element => element**3);

let paresCubos = cubos.filter(element => element%2===0);

console.log(paresCubos)





// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección



// 4. Ordena un array de números de mayor a menor

// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos

// 6. Itera los resultados del ejercicio anterior

// 7. Crea un mapa que almacene información se usuarios (nombre, edad y email) e itera los datos

// 8. Dado el mapa anterior, crea un array con los nombres

// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set

// 10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave el email de cada usuario y como valor todos los datos del usuario