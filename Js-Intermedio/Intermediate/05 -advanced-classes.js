// Clases avanzadas

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hola soy ${this.name}`);
  }
}

const person = new Person("Ernesto", 23);
//  person.greet()

person.sayName = function () {
  console.log(`Hola soy ${person.name}`);
};
person.sayName();

// abstractas

class Animal {
  constructor(name) {
    if (new.target === Animal) {
      throw new Error("No se puede instanciar una clases abstracta");
    }
    this.name = name;
  }

  makeSound() {
    throw new Error("Este metodo tiene que ser implementado por la subclase");
  }
}

// Polimorfismo  .Es una capacidad de las clases derivadas , se puede implementar metoidos con el mismo nombre pero con compartamientos diferentes

class Cat extends Animal {
  makeSound() {
    console.log("MIAU");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("GUAU");
  }
}

const cat = new Cat("Chulin");
console.log(cat);
cat.makeSound();

const dog = new Dog("Firulais");
console.log(dog);

// - Mixins . Se puede compartir
const FlyMixin = {
  fly() {
    console.log("Vuelaaaaaaaa");
  },
};

class Bird extends Animal {
  fly() {
    console.log("Esta volando");
  }
}

class Dragon extends Animal {}

Object.assign(Bird.prototype, FlyMixin);

const bird = new Bird("Piolin");

console.log(bird.name);

const dragon = new Dragon("Draaagoon");
console.log(dragon.name);

// Patron Singleton

class Sesion {
  constructor(name) {
    if (Sesion.instance) {
      return Sesion.instance;
    }
    this.name = name;
    Sesion.instance = this;
  }
}

const sesion1 = new Sesion("Ernesto12");
const sesion2 = new Sesion();
console.log(sesion1);
console.log(sesion2);


// Symbol si se crea quiere decir que es unica

const ID = Symbol("id")

class User{
    constructor(name){
        this.name = name
        this[ID] = Math.random()
    }
}

const user = new User("Ernesto")
console.log(user.name)
console.log(user.ID)




