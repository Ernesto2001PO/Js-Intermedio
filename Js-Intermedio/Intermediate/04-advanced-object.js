// Objetos avanzados


// - Prototipos y de herencia


// Prototipos 


let person = {

    name:"Brais ",
    age:"23 "
}

console.log(person.__proto__)


person.sayName = function () {
    console.log(`Hola soy ${person.name}` )
}

person.sayName()

console.log("----------------------------------")
// Herencia  

let programmer  = Object.create(person)

programmer.language = "Javascript"
programmer.name = "Ernesto "

console.log(programmer.name)
console.log(programmer.language)
programmer.sayName()

// Metodos estaticos y de instancias 

function Person(name,age){
    this.name = name
    this.age = age
}

Person.prototype

let new_person  = new Person("Luca",19)

// assign

let person_core = {name:"Juan"}
let full_person = {age: 14,alias : "Juancho"}


let fullPerson = Object.assign(person_core,full_person)
console.log(fullPerson)

//keys , values , entries 

console.log(Object.keys(fullPerson))
console.log(Object.values(fullPerson))
console.log(Object.entries(fullPerson))